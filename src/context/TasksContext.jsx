import { createContext, useContext, useState } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function ContextWrapper() {
  const [tasksCount, setTasksCount] = useState(0);
  const Tasks = useContext(tasksCount);
}
