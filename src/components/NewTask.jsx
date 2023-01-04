import React, { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

export default function NewTask() {
  const [name, setName] = useState("");
  const { tasks, headId, dispatch } = useContext(TasksContext);
  function addNewTask() {
    console.log(
      `%c adding task:${name}`,
      "color:lime; background-color:white; font-size:46px"
    );
    headId.current = headId.current + 1;
    dispatch({
      type: "added",
      id: headId.current,
      text: name,
      done: false,
    });
    setName("");
    console.table();
  }
  return (
    <div className="flex flex-row items-center space-x-4 p-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="task name"
        className="input-bordered input-secondary input w-full max-w-xs"
      />
      <button
        disabled={name.length >= 3 ? "" : "disabled"}
        onClick={addNewTask}
        className="btn-primary btn-square btn-md btn "
      >
        add
      </button>
      <div className=" btn-ghost btn-square btn">{tasks.length}</div>
    </div>
  );
}
