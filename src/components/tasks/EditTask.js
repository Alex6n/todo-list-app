import { Listbox, Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { BsCheckLg } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';


export default function EditTask() {
  const [selectedChange, setselectedChange] = useState('...');
  const [selected, setSelected] = useState('Urgent');

  return (
    <Popover>
      <Popover.Button className="card-action edt w-full">
        <FiEdit className="mr-1" /> Edit Task
      </Popover.Button>
  </Popover>
  )
}