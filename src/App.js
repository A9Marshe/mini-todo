import { TasksList } from "./components";
import { useEffect, useReducer, useRef, useState } from "react";
import { TasksContext, ThemeContext } from "./context/TasksContext";
import tasksReducer from "./hooks/TasksReducer";
import "./App.css";

const getSavedTasks = () => {
  const tasks = window.localStorage.getItem("tasks-list");
  const current = JSON.parse(tasks);
  return current || [];
};
const getSavedTheme = () => {
  const localTheme = window.localStorage.getItem("theme-mode");
  const currentTheme = JSON.parse(localTheme);
  return currentTheme || "dark";
};

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, getSavedTasks());
  const headId = useRef(tasks.length);
  const [theme, setTheme] = useState(getSavedTheme());

  useEffect(() => {
    let newTasks = JSON.stringify(tasks);
    window.localStorage.setItem("tasks-list", newTasks);

    return () => {
      console.log(
        "%cupdated tasks, no clean up here (I think/ I hope :D)",
        "backgroud-color: lime"
      );
    };
  }, [tasks]);

  useEffect(() => {
    window.localStorage.setItem("theme-mode", JSON.stringify(theme));

    return () => {
      console.log(`chaged theme to ${theme}!`);
    };
  }, [theme]);

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className="flex h-screen flex-col space-y-2 ">
        <header className=" relative mx-auto flex  w-screen  flex-row p-4 text-center">
          <h2 className="mx-auto">hola </h2>
          <input
            readOnly
            onClick={toggleTheme}
            type="checkbox"
            className="  toggle-primary toggle absolute right-9"
            checked={theme === "light" ? "" : "checked"}
          />
        </header>

        <TasksContext.Provider
          value={{
            tasks,
            headId,
            dispatch,
          }}
        >
          <main className="">
            <TasksList />
          </main>
        </TasksContext.Provider>
        <footer className=" mx-auto  w-full p-4 text-center">
          © 2023 lorem ipusm
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}
