import { Fragment, useState } from 'react';
import { Popover, Transition, Listbox } from '@headlessui/react';
import { GrFormAdd } from "react-icons/gr";
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'


export default function NewTask() {
  const [selected, setSelected] = useState('Urgent');

  return (
    <Popover className="relative">
      <Popover.Button className="special-tab">
        <GrFormAdd />New task
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 mt-2 -translate-x-1/2 transform">
          <div className="overflow-auto rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative bg-white p-7">
              <form>
                <div className="grid grid-wrap">
                  <label className="h-fit self-end">Title :</label>
                  <input type="text" id="task-name" className='rounded-lg p-2 bg-slate-200' />
                </div>
                <div className="mb-3 grid grid-cols-1">
                  <label>Description :</label>
                  <textarea id="task-desc" className='rounded-lg p-6 bg-slate-200' />
                </div>
                <div className="mb-3">
                  <label>Expected By :</label>
                  <input type="date" id="expectedby" />
                </div>
                <div className="mb-3">
                  <label className="">Priority :</label>
                  <div className=''>
                    <Listbox value={selected}>
                      <div className="fixed mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-slate-200 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate">{selected.name}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="relative overflow-auto rounded-lg bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <Listbox.Option className="relative cursor-default select-none py-2 pl-10 pr-4 hover:urgent hover:text-white" value="Urgent">Urgent</Listbox.Option>
                            <Listbox.Option className="cursor-default select-none py-2 pl-10 pr-4 hover:strategic hover:text-white" value="Strategic">Strategic</Listbox.Option>
                            <Listbox.Option className="cursor-default select-none py-2 pl-10 pr-4 hover:pressing hover:text-white" value="Pressing">Pressing</Listbox.Option>
                            <Listbox.Option className="cursor-default select-none py-2 pl-10 pr-4 hover:optional hover:text-white" value="Optional">Optional</Listbox.Option> 
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                </div>
                <div className="mb-3 mt-10">
                  <label>Icon :</label>
                  <input type="file" id="myfile" name="myfile" />
                </div>
                <div className="flex flex-col">
                  <a href='#' className="special-tab content-center">
                    <GrFormAdd />Create a new task
                  </a>
                </div>

              </form>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
