import React, { useReducer } from "react";
import NewTask from "./NewTask";
import TodoItem from "./TodoItem";

export default function TasksList({ tasks }) {
  return (
    <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center  p-4 ">
      <NewTask />
      <div className="flex max-w-screen-lg flex-col items-center">
        {tasks.map((t) => {
          return (
            <TodoItem
              key={t.id}
              name={t.text}
              desc="default desc"
              done={t.done}
            />
          );
        })}
      </div>
    </div>
  );
}
