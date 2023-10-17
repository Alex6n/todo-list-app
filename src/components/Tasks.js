import { GrFormAdd } from "react-icons/gr";
import { TbClockHour2 } from "react-icons/tb";
import { BsCalendar4Week } from "react-icons/bs";
import { VscCheckAll } from "react-icons/vsc";
import { GoTrash } from "react-icons/go";
import { MdClearAll } from "react-icons/md";


export default function Tasks() {
  return (
    <div className="bg-gradient-to-tr from-azure-radiance-400 to-azure-radiance-200 h-screen w-full grid grid-rows-3 justify-center">
    
      <div>
        <div className="mt-5 col-span-1 rounded-xl bg-azure-radiance-100 p-1">
          <ul className="flex gap-1 text-sm font-bold">
            <a href="#" className="special-tab"><GrFormAdd />New task</a>
            <a href="#" className="active-tab"><TbClockHour2 className="mr-1"/>Today's tasks</a>
            <a href="#" className="tab"><BsCalendar4Week className="mr-1"/>Next 7 Days</a>
            <a href="#" className="tab"><MdClearAll className="mr-1"/>All</a>
            <a href="#" className="tab"><VscCheckAll className="mr-1" />Completed</a>
            <a href="#" className="tab"><GoTrash className="mr-1"/>Trash</a>
          </ul>
        </div>
      </div>

      <div className="hidden flex flex-col items-center text-center">
        <img className="h-40 mb-1" src="https://cdn3d.iconscout.com/3d/premium/thumb/no-task-8703462-6995807.png" alt="Task Icon"></img>
        <p className="font-bold text-lg text-azure-radiance-900">No tasks for today!</p>
      </div>
      
      <div>
        <div className="flex flex-col items-center">
          <div className="p-5 bg-azure-radiance-400 rounded-3xl flex gap-3">
            <img className="h-40" src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png" alt="Task Icon"></img>
            <div className="grid grid-rows-3">
              <p className="font-extrabold text-xl">Task Title</p>
              <p className="font-normal text-lg whitespace-wrap">
                task description
              </p>
              <p className="font-normal text-sm mt-auto">CreatedOn / ExpectedBy</p>
            </div>
            <div className="grid grid-rows-3">
              {/* edit- delete - postpone */}
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
