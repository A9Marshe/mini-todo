import React, { useContext, useRef, useState } from "react";
import { TasksContext } from "../context/TasksContext";

export default function TodoItem({ task }) {
  //original text references the initial task text (or the task before editing)
  const originalText = useRef(task.text);
  //text is the current text task inside input (while editing)
  const [text, setText] = useState(task.text);

  //this dispatch is from the TasksReducer, provided by the App component using TasksContext
  const { dispatch } = useContext(TasksContext);

  const [isEditing, setIsEditing] = useState(false);
  /*
  a task can be:
  1: checked/unchecked (done or note) (via handleTaskCheck)
  2: edited (task name changes) (via handleTaskChange)
  2.5: a task can be edit but then the changes are ommitted (via undo)
  3: deleted (task is removed from tasks) (via handleTaskDelete)
  */

  function handleTaskCheck(updatedTask) {
    dispatch({ type: "changed", task: updatedTask });
    console.log(
      `Task Number ${updatedTask.id} is now set to ${updatedTask.done}`
    );
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
    console.log(`Task Number ${taskId} is now deleted `);
  }

  function undo() {
    console.log(
      `%c${originalText.current}`,
      "background-color:white; color:black; font-size:30px"
    );
    setText(originalText.current);
    console.log(`Task Number ${task.id} is now reset to ${text}`);
    setIsEditing(false);
  }

  function handleTaskChange() {
    text.length < 3
      ? alert("task cannot be less than 3 letters \\:")
      : setIsEditing(false);
    originalText.current = text;
    task.text = text;
    dispatch({ type: "changed", task: task });
  }

  return (
    <div
      className={`flex max-w-[90vw] flex-row items-center ${
        task.done && "opacity-90 mix-blend-color-dodge"
      }`}
    >
      <input
        onChange={() => handleTaskCheck({ ...task, done: !task.done })}
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
                  onClick={() => handleTaskChange()}
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
                  onClick={() => {
                    setIsEditing(true);
                    console.log(`you're now editing task with id:${task.id}`);
                  }}
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
