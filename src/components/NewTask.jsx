import React from "react";

export default function NewTask() {
  return (
    <div className=" p-2">
      <input
        type="text"
        placeholder="task name"
        className=" input-bordered input-secondary input w-full max-w-xs"
      />
    </div>
  );
}
