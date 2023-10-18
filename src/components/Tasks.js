import React from "react";

export default function Tasks() {
  return (
    <div className="p-4 bg-azure-radiance-400 rounded-3xl w-6xl h-xl">
      <div className="grid grid-cols-4 gap-3">
        <img
          className="h-40 justify-self-center"
          src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png"
          alt="Task Icon"
        ></img>
        <div className="col-span-2 grid grid-rows-3">
          <div className="my-9 row-span-2 mb-0 mt-0 whitespace-wrap">
            <p className="font-extrabold text-xl">Task Title</p>
            <p className="font-normal text-base">task description</p>
          </div>
          <p className="font-normal text-sm mt-auto">CreatedOn / ExpectedBy</p>
        </div>
        <div className="grid grid-rows-3">{/* edit- delete - postpone */}</div>
      </div>
    </div>
  );
}
