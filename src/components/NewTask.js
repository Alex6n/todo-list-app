import { Fragment, useState } from 'react';
import { Popover, Transition, Listbox } from '@headlessui/react';
import { GrFormAdd } from "react-icons/gr";
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';


export default function NewTask() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('Urgent');

  const newTaskHandler = () => {
    dispatch(addTask({
      Title: document.getElementById('task-name').value,
      Describtion: document.getElementById('task-desc').value,
      Priority: selected,
      ExpectedBy: document.getElementById('expectedby').value,
      Icon: '../assets/task-template.png',
      CreatedOn: new Date().toISOString().slice(0, 10),
      Completed: false,
      Trash: false,
      User: 'Alex'
    }))
  }
  
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
          <div className="overflow-auto rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5">
            <div className="relative bg-gradient-to-tr from-azure-radiance-400 to-azure-radiance-300 p-7">
              <form>
                <div className="mb-3 grid grid-wrap">
                  <label className="h-fit self-end">Title :</label>
                  <input type="text" id="task-name" className='rounded-lg p-2 bg-azure-radiance-200' required="required" />
                </div>
                <div className="mb-3 grid grid-cols-1">
                  <label>Description :</label>
                  <textarea id="task-desc" rows="4" className='rounded-lg p-1 bg-azure-radiance-200' />
                </div>
                <div className="mb-3">
                  <label>Expected By :</label>
                  <input type="date" id="expectedby" className="bg-sky-50/0" />
                </div>
                <div className="mb-3 flex gap-2">
                  <label className="mt-2">Priority :</label>
                  <div className=''>
                    <Listbox onChange={setSelected} value={selected}>
                      <div className="fixed mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-azure-radiance-200 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate">{selected}</span>
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
                          <Listbox.Options className="relative overflow-auto rounded-lg bg-azure-radiance-200 mt-1 text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <Listbox.Option className="cursor-default select-none py-2 hover:urgent hover:text-white" value="Urgent">Urgent</Listbox.Option>
                            <Listbox.Option className="cursor-default select-none py-2 hover:strategic hover:text-white" value="Strategic">Strategic</Listbox.Option>
                            <Listbox.Option className="cursor-default select-none py-2 hover:pressing hover:text-white" value="Pressing">Pressing</Listbox.Option>
                            <Listbox.Option className="cursor-default select-none py-2 hover:optional hover:text-white" value="Optional">Optional</Listbox.Option> 
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                </div>
                <div className="mb-3 mt-4">
                  <label>Icon :</label>
                  <input type="file" id="myfile" name="myfile" />
                </div>
                <div className="flex flex-col">
                  <a href='#' onClick={newTaskHandler} className="special-tab content-center">
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
