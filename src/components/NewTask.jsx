import React, { useState } from "react";

export default function NewTask({ handleAddTask }) {
  const [name, setName] = useState("");
  function addNewTask() {
    console.log(
      `%c${name}`,
      "color:blue; background-color:white; font-size:128px"
    );
    handleAddTask(name);
    setName("");
  }
  return (
    <div className="flex flex-row items-center space-x-4 p-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="task name"
        className=" input-bordered input-secondary input w-full max-w-xs"
      />
      <button
        disabled={name.length ? "" : "disabled"}
        onClick={addNewTask}
        className="btn-primary btn-square btn-md btn "
      >
        add
      </button>
    </div>
  );
}
