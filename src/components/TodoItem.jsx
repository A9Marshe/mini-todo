import React, { useRef, useState } from "react";

export default function TodoItem({ task, handleDeleteTask, handleChangeTask }) {
  //original text references the initial task text (or the task before editing)
  const originalText = useRef(task.text);
  //text is the current text task inside input (while editing)
  const [text, setText] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditTask() {
    text.length < 3
      ? alert("task cannot be less than 3 letters \\:")
      : setIsEditing(false);
    originalText.current = () => text;
    handleChangeTask({ ...task, text });
  }
  function undo() {
    console.log(
      `%c${originalText.current}`,
      "background-color:white; color:black; font-size:30px"
    );
    setText(originalText.current);
    console.log("undoing ", text);
    setIsEditing(false);
  }

  return (
    <div
      className={`flex max-w-[90vw] flex-row items-center ${
        task.done && "opacity-90 mix-blend-color-dodge"
      }`}
    >
      <input
        onChange={() => handleChangeTask({ ...task, done: !task.done })}
        type="checkbox"
        className="checkbox-secondary checkbox"
        name="task status"
        id="task-status"
        checked={task.done ? "checked" : ""}
        disabled={isEditing ? "disabled" : ""}
      />
      <article className="m-2 w-[50ch] rounded-md bg-slate-700 p-3">
        <div className="text- flex flex-row items-center justify-between capitalize">
          {isEditing ? (
            <>
              <input
                autoFocus
                title="editing task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                name=""
                id=""
                className="text- input-secondary input max-w-[40ch] overflow-hidden overflow-ellipsis whitespace-nowrap bg-secondary pl-2 text-lg font-semibold"
              />
              <div className="ml-6 flex space-x-1">
                <button
                  onClick={handleEditTask}
                  disabled={task.done ? "disabled" : ""}
                  className="btn-square btn-sm btn border-0 bg-transparent hover:bg-gray-600"
                >
                  ✔
                </button>
                <button
                  onClick={undo}
                  className="btn-square btn-sm btn border-0 bg-transparent hover:bg-slate-600 "
                >
                  🔁
                </button>
              </div>
            </>
          ) : (
            <>
              <h3
                title={text}
                className="max-w-[40ch] overflow-hidden overflow-ellipsis whitespace-nowrap pl-2 text-lg font-semibold"
              >
                {text}
              </h3>
              <div className="ml-6 flex space-x-1">
                <button
                  onClick={() => setIsEditing(true)}
                  disabled={task.done ? "disabled" : ""}
                  className="btn-square btn-sm btn border-0 bg-transparent hover:bg-gray-600"
                >
                  ✏
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="btn-square btn-sm btn border-0 bg-transparent hover:bg-red-900 "
                >
                  ❌
                </button>
              </div>
            </>
          )}
        </div>
      </article>
    </div>
  );
}
