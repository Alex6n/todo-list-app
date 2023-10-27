import { Listbox, Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { BsCheckLg } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';


export default function EditTask() {
  const [selectedChange, setselectedChange] = useState('...');
  const [selected, setSelected] = useState('Urgent');

  return (
    <Popover className="relative">
      <Popover.Button>
        <a href="#" className="card-action edt"><FiEdit className="mr-1" /> Edit Task</a>
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
        <div className="overflow-auto rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5">
          <div className="relative bg-gradient-to-tr from-azure-radiance-400 to-azure-radiance-300 p-7">
            <form>
            <div className="mb-3 flex gap-2">
                <div className=''>
                  <Listbox onChange={setselectedChange} value={selectedChange}>
                      <div className="mt-1">
                      <label>Select A Property :</label>
                        <Listbox.Button className="relative p-2 cursor-default rounded-lg bg-azure-radiance-200 text-center focus:outline-none w-36">
                        <span className="block truncate">{selectedChange}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
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
                        <Listbox.Options className="fixed overflow-auto rounded-lg bg-azure-radiance-200 mt-1 text-center shadow-lg ring-1 ring-black ring-opacity-5 cursor-default w-36">
                          <Listbox.Option className="cursor-default select-none py-2 hover:strategic hover:text-white" value="Title">Title</Listbox.Option>
                          <Listbox.Option className="cursor-default select-none py-2 hover:strategic hover:text-white" value="Description">Description</Listbox.Option>
                          <Listbox.Option className="cursor-default select-none py-2 hover:strategic hover:text-white" value="Expected By">Expected By</Listbox.Option>
                          <Listbox.Option className="cursor-default select-none py-2 hover:strategic hover:text-white" value="Priority">Priority</Listbox.Option>
                          <Listbox.Option className="cursor-default select-none py-2 hover:strategic hover:text-white" value="Icon">Icon</Listbox.Option> 
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className={`mb-3 grid grid-wrap ${selectedChange != 'Title' && 'hidden'}`} >
                <label className="h-fit self-end">Title :</label>
                <input type="text" id="task-name" className='rounded-lg p-2 bg-azure-radiance-200' required="required" />
              </div>
              

              <div className={`mb-3 grid grid-cols-1 ${selectedChange != 'Description' && 'hidden'}`} >
                <label>Description :</label>
                <textarea id="task-desc" rows="4" className='rounded-lg p-1 bg-azure-radiance-200' />
              </div>
              <div className={`mb-3 ${selectedChange != 'Expected By' && 'hidden'}`}>
                <label>Expected By :</label>
                <input type="date" id="expectedby" className="bg-sky-50/0" />
              </div>
              <div className={`mb-3 mt-4 ${selectedChange != 'Icon' && 'hidden'}`}>
                <label>Icon :</label>
                <input type="file" id="myfile" name="myfile" />
              </div>
              <div className="flex flex-col">
                <a href='#' className="special-tab w-fit self-end">
                  <BsCheckLg />
                </a>
              </div>

            </form>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
  )
}