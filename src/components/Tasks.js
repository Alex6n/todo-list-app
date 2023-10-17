import { GrFormAdd } from "react-icons/gr";
import { TbClockHour2 } from "react-icons/tb";
import { BsCalendar4Week } from "react-icons/bs";
import { VscCheckAll } from "react-icons/vsc";
import { GoTrash } from "react-icons/go";
import { MdClearAll } from "react-icons/md";


export default function Tasks() {
  return (
    <div className="bg-gradient-to-tr from-azure-radiance-400 to-azure-radiance-200 h-screen w-full grid grid-rows-2 justify-items-center items-center">
      
      <div className="absolute top-7 rounded-xl border bg-azure-radiance-100 p-1">
        <ul className="flex gap-1 text-sm font-bold">
          <a href="#" className="flex items-center rounded-lg px-3 py-2 bg-azure-radiance-200 hover:bg-azure-radiance-300 hover:text-gray-700">
            <GrFormAdd />New task</a>
          <a href="#" className="flex items-center rounded-lg px-3 py-2 shadow bg-white hover:text-gray-700">
            <TbClockHour2 className="mr-1"/>Today's tasks</a>
          <a href="#" className="flex items-center rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow">
            <BsCalendar4Week className="mr-1"/>Next 7 Days</a>
          <a href="#" className="flex items-center rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow">
            <MdClearAll className="mr-1"/>All</a>
          <a href="#" className="flex items-center rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow">
            <VscCheckAll className="mr-1" />Completed</a>
          <a href="#" className="flex items-center rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow">
            <GoTrash className="mr-1"/>Trash</a>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center text-center rounded-xl border bg-azure-radiance-100 px-64 py-96">
        <img className="h-40" src="https://cdn3d.iconscout.com/3d/premium/thumb/no-task-8703462-6995807.png" alt="Task Icon"></img>
        <p className="font-bold text-lg text-azure-radiance-950">No tasks for today!</p>
      </div>
    </div>
  );
}
