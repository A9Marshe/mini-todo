import { TasksList } from './components';
import { useEffect, useReducer, useRef, useState } from 'react';
import { TasksContext, ThemeContext } from './context/TasksContext';
import tasksReducer from './hooks/TasksReducer';
import './App.css'


//reading from localStorage
let localTasks = JSON.parse(localStorage.getItem('tasks-list'));
localTasks = localTasks === null ? [] : localTasks;
let localTheme = JSON.parse(localStorage.getItem('theme-mode'));
localTheme = localTheme === null ? 'light' : localTheme;
export default function App() {
  const [theme, setTheme] = useState(localTheme);
  const [tasks, dispatch] = useReducer(tasksReducer, localTasks);
  const headId = useRef(Math.max(tasks.map(e => e.id)));
  useEffect(() => {
    localStorage.setItem('tasks-list', JSON.stringify(tasks));
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('theme-mode', JSON.stringify(theme))
  }, [theme])


  function toggleTheme() {
    (theme === "light") ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className='h-screen flex flex-col space-y-2 ' >
        <header className=' w-screen flex flex-row  relative  mx-auto text-center p-4' >
          <h2 className='mx-auto'>hola </h2>
          <input readOnly onClick={toggleTheme} type="checkbox" className="  toggle absolute right-9 toggle-primary" checked={theme === 'light' ? "" : "checked"} />
        </header>

        <TasksContext.Provider value={{
          tasks,
          headId,
          dispatch,
        }}>
          <main className=''>
            <TasksList />
          </main>
        </TasksContext.Provider>
        <footer className=' w-full  mx-auto text-center p-4'>
          © 2023 lorem ipusm
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

const initialTasks = [
  { id: 1, text: 'Philosophers Path', done: true },
  { id: 2, text: 'Visit the temple', done: false },
  { id: 3, text: 'Drink matcha', done: false }
];



