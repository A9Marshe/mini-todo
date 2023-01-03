import NewTask from "./NewTask";
import TodoItem from "./TodoItem";
import tasksReducer from "../hooks/TasksReducer";
import { useReducer, useRef } from "react";

export default function TasksList({ initialTasks }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const nextId = useRef(3);
  // DISPATCH ACITON HANDLERS
  function handleAddTask(text) {
    nextId.current = nextId.current + 1;
    dispatch({
      type: "added",
      id: nextId.current,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }
  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }
  return (
    <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center  p-4 ">
      <NewTask handleAddTask={handleAddTask} />
      <div className=" flex h-1/2 max-w-screen-lg flex-col items-center">
        {tasks.map((t) => {
          return (
            <TodoItem
              key={t.id}
              task={t}
              handleDeleteTask={handleDeleteTask}
              handleChangeTask={handleChangeTask}
            />
          );
        })}
      </div>
    </div>
  );
}
