import { Listbox } from "@headlessui/react";

export default function AccountMenu() {
  return (
    <div className="fixed ml-1 left-16 top-8 overflow-hidden rounded-lg text-black font-semibold bg-azure-radiance-200 mt-1 text-center shadow-lg ring-1
       ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      <Listbox.Option className="cursor-default select-none p-2 hover:bg-azure-radiance-950 hover:text-white" value="Urgent">
        Profile</Listbox.Option>
      <Listbox.Option className="cursor-default select-none p-2 hover:bg-azure-radiance-950 hover:text-white" value="Strategic">
        Settings</Listbox.Option>
      <Listbox.Option className="cursor-default select-none p-2 hover:bg-red-950 hover:text-white" value="Pressing">
        Logout</Listbox.Option>
    </div>
  )
}
