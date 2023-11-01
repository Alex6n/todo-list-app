import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { LuSettings, LuBellRing } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiBellRingingDuotone } from "react-icons/pi";

export default function Notifications() {
  return (
      <Popover className="relative">
          <Popover.Button className="p-2 text-2xl hover:text-azure-radiance-400 transition">
            <LuBellRing />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0 -translate-x-5"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-5">
              <Popover.Panel className="absolute left-14 top-0">
                  <div className="overflow-auto rounded-lg shadow-2xl ring-1 ring-black ring-opacity-10 w-64">
                      <div className="relative flex justify-between font-bold text-azure-radiance-900 bg-gradient-to-tr from-azure-radiance-300 to-azure-radiance-400 py-3 px-4">
                        <p>Notifications</p>
                        <a href='#' className="mt-1 hover:text-azure-radiance-50 transition-colors duration-300"><LuSettings/></a>
                      </div>
                      <div className="relative overflow-scroll bg-gradient-to-tr from-azure-radiance-300 to-azure-radiance-100 h-64">
                        
                        <div className="hidden grid h-64">
                          <div className="flex flex-col justify-center items-center opacity-80 font-bold text-azure-radiance-900">
                              <PiBellRingingDuotone className="text-7xl"/>
                              <p className="text-md">Empty</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col justify-between h-12 hover:bg-azure-radiance-500 bg-azure-radiance-400 m-1 rounded-md">
                          <div className="flex justify-between px-2 py-1 text-azure-radiance-700">
                            <div>
                              <p className="font-bold text-sm">New Notification</p>
                              <p className="text-xs">you just received this..</p>
                            </div>
                            <a href="#" className="mt-3 text-md"><BsThreeDotsVertical/></a>
                          </div>
                        </div>
                        
                        <div className="flex flex-col justify-between h-12 hover:bg-azure-radiance-400 bg-azure-radiance-300 m-1 rounded-md">
                          <div className="flex justify-between px-2 py-1 text-azure-radiance-700">
                            <div>
                              <p className="font-bold text-sm">Read Notification</p>
                              <p className="text-xs">you have read this before..</p>
                            </div>
                            <a href="#" className="mt-3 text-md"><BsThreeDotsVertical/></a>
                          </div>
                        </div>
                      
                      </div>
                  </div>
              </Popover.Panel>
          </Transition>
    </Popover>
  )
}
