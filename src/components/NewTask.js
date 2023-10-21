import { Fragment } from 'react';
import { Popover, Transition, Menu } from '@headlessui/react'
import { GrFormAdd } from "react-icons/gr";

export default function NewTask() {
  return (
    <Popover className="relative">
        <Popover.Button className="special-tab"><GrFormAdd />New task</Popover.Button>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
        >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform px-4">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 w-56">
                <div className="relative bg-white p-7">
                  <form>
                  <div class="relative mb-2">
                      <lable>Title :</lable><input type="text" id="task-name" className='rounded-lg bg-slate-200'/>
                    </div>
                    <div class="relative mb-2">
                      <lable>Description :</lable><textarea type="text" id="task-desc"className='rounded-lg bg-slate-200'></textarea>
                    </div>
                    <div class="relative mb-2">
                      <lable>Expected By :</lable>
                      <input type="date" id="expectedby"></input>
                    </div>
                    <div class="relative mb-2">
                      <lable>Priority :</lable>
                    </div>                    
                    <div class="relative mb-2">
                      <lable>Icon :</lable><input type="file" id="myfile" name="myfile"/>
                    </div>
                    <a href='#' className="special-tab"><GrFormAdd />Create</a>
                  </form>
                </div>
              </div>
            </Popover.Panel>
        </Transition>
    </Popover>
  )
}
