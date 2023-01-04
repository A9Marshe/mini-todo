import NewTask from "./NewTask";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export default function TasksList({ initialTasks }) {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center  p-4 ">
      <NewTask />
      <div className=" flex h-1/2 max-w-screen-lg flex-col items-center">
        {tasks.map((t) => {
          return <TodoItem key={t.id} task={t} />;
        })}
      </div>
    </div>
  );
}
