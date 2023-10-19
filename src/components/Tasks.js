import React from "react";

export default function Tasks() {
  return (
    <div className="max-w-3xl mt-4 p-4 bg-azure-radiance-400 rounded-3xl">

      <div className="grid grid-cols-4 gap-3">

        <div>
          <img
            className="h-40 justify-self-center"
            src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png"
            alt="Task Icon"
          ></img>
        </div>
        
        <div className="col-span-2 grid grid-rows-3 max-w-fit">
          <div className="row-span-2 mt-0 whitespace-wrap">
            <p className="font-extrabold text-xl">Task Title</p>
            <div className="overflow-scroll h-28 w-96">
              <p className="font-normal text-base">Task
                Description</p>
            </div>
          </div>
          <div>
            <p className="font-normal text-sm h-fit">CreatedOn / ExpectedBy</p>
          </div>
        </div>

        <div className="">edit- delete - postpone</div>

      </div>
    </div>
  );
}
