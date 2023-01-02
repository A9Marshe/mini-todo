import React from "react";
import NewTask from "./NewTask";
import TodoItem from "./TodoItem";

export default function TasksList(tasks) {
  return (
    <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center  p-4 ">
      <NewTask />
      <div className="flex max-w-screen-lg flex-col items-center">
        <TodoItem name="task" desc="desc body" />
        <TodoItem name="task" desc="desc body" />
        <TodoItem name="task" desc="desc body" />
        <TodoItem name="task" desc="desc body" />
      </div>
    </div>
  );
}
