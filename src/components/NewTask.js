import { Fragment } from 'react';
import { Popover, Transition, Menu } from '@headlessui/react'
import { GrFormAdd } from "react-icons/gr";

export default function NewTask() {
  function menuOpen() {
    document.getElementById("gmDropdown").classList.toggle("hidden");
  }
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
            <Popover.Panel className="absolute left-1/2 mt-2 -translate-x-1/2 transform px-4">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative bg-white p-8">
                  <form>
                    <div class="relative mb-3 grid grid-rows-2">
                      <lable className="h-fit self-end">Title :</lable><input type="text" id="task-name" className='rounded-lg p-2 bg-slate-200'/>
                    </div>
                    <div class="relative mb-3 grid grid-cols-1">
                      <lable>Description :</lable><textarea type="text" id="task-desc"className='rounded-lg p-6 bg-slate-200'/>
                    </div>
                    <div class="relative mb-3">
                      <lable>Expected By :</lable>
                      <input type="date" id="expectedby"></input>
                    </div>
                    <div class="relative mb-3 grid grid-rows-2">
                      <lable className="">Priority :</lable>
                    <div class="grid grid-rows-3">
                    <a href="#" onClick={menuOpen} className="bg-slate-200 rounded-lg p-2">Select Priority...</a>
                      <ul id="gmDropdown" class="hidden row-span-2 bg-slate-200 rounded-lg text-white text-center">
                        <li className="urgent rounded-lg"><a href="#">Urgent</a></li>
                        <li className="strategic rounded-lg"><a href="#">Strategic</a></li>
                        <li className="pressing rounded-lg"><a href="#">Pressing</a></li>
                        <li className='optional rounded-lg'><a href="#">Optional</a></li>
                      </ul>
                    </div>
                    </div>                    
                    <div class="relative mb-3">
                      <lable>Icon :</lable><input type="file" id="myfile" name="myfile"/>
                    </div>
                    <a href='#' className="special-tab w-fit self-center"><GrFormAdd />Create a new task</a>
                  </form>
                </div>
              </div>
            </Popover.Panel>
        </Transition>
    </Popover>
  )
}
