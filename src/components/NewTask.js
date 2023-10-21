import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
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
          
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                        
                    </div>
                </div>

        <img src="/solutions.jpg" alt="" />
              </Popover.Panel>
              </Transition>
    </Popover>
  )
}
