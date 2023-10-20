import { Tab } from '@headlessui/react'
import { GrFormAdd } from "react-icons/gr";
import { TbClockHour2 } from "react-icons/tb";
import { BsCalendar4Week } from "react-icons/bs";
import { VscCheckAll } from "react-icons/vsc";
import { GoTrash } from "react-icons/go";
import { MdClearAll } from "react-icons/md";

export default function Tabs() {
  return (

    <div className="mt-5 rounded-xl bg-azure-radiance-100 p-1 max-w-fit">
      <Tab.List className="flex gap-1 text-sm font-bold">
        <a href="#" className="special-tab"><GrFormAdd />New task</a>
        <Tab className="tab"><TbClockHour2 className="mr-1"/>Today's tasks</Tab>
        <Tab className="tab"><BsCalendar4Week className="mr-1"/>Next 7 Days</Tab>
        <Tab className="tab"><MdClearAll className="mr-1"/>All</Tab>
        <Tab className="tab"><VscCheckAll className="mr-1" />Completed</Tab>
        <Tab className="tab"><GoTrash className="mr-1"/>Trash</Tab>
      </Tab.List>
    </div>

    );
  }