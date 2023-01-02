import React from "react";

export default function TodoItem(props) {
  return (
    <div className=" flex max-w-[90vw] flex-row items-center ">
      <input
        type="checkbox"
        className="checkbox-secondary checkbox"
        name=""
        id=""
      />
      <article className="m-2 w-[50ch] rounded-md bg-slate-700 p-3">
        <div className="text- flex flex-row justify-between capitalize">
          <h3
            title={props.name}
            className="max-w-[40ch] overflow-hidden overflow-ellipsis whitespace-nowrap pl-2 text-lg font-semibold"
          >
            {props.name}
          </h3>
          <div className="ml-6 flex space-x-1">
            <button className="btn-square btn-sm btn border-0 bg-transparent hover:bg-gray-600">
              ✏
            </button>
            <button className="btn-square btn-sm btn border-0 bg-transparent hover:bg-red-900 ">
              ❌
            </button>
          </div>
        </div>
        <p className="px-5 text-sm font-semibold">{props.desc}</p>
      </article>
    </div>
  );
}
