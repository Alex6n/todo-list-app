import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { LuBellRing } from "react-icons/lu";

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
                      <div className="relative bg-gradient-to-tr from-azure-radiance-300 to-azure-radiance-400 p-6">
                      </div>
                      <div className="relative overflow-scroll bg-gradient-to-tr from-azure-radiance-300 to-azure-radiance-100 pb-56 max-h-0">
                      </div>
                  </div>
              </Popover.Panel>
          </Transition>
    </Popover>
  )
}
