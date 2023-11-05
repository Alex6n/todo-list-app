import { Listbox } from "@headlessui/react";

export default function AccountMenu() {
  return (
    <div className="fixed left-14 top-0 rounded-lg bg-azure-radiance-200 mt-1 text-center shadow-lg ring-1
       ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      <Listbox.Option className="cursor-default select-none py-2 hover:urgent hover:text-white" value="Urgent">
        Profile</Listbox.Option>
      <Listbox.Option className="cursor-default select-none py-2 hover:strategic hover:text-white" value="Strategic">
        Settings</Listbox.Option>
      <Listbox.Option className="cursor-default select-none py-2 hover:pressing hover:text-white" value="Pressing">
        Logout</Listbox.Option>
      </div>
  )
}
