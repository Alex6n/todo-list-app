import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import AccountMenu from "./menu/AccountMenu";
import Notifications from "./menu/Notifications";
import Help from "./menu/Help";
import { BiMoon } from 'react-icons/bi'; 
 
function SideMenu() {
  const username = 'Alex'//useSelector((state) => state.user.username);

  return (
    <div className="z-40 sticky h-screen p-3 w-16 bg-azure-radiance-950 text-azure-radiance-100">
      {/* User Section */}
      <div className="flex justify-center border-b border-opacity-30 border-azure-radiance-100 pt-5">
        <Listbox className="mt-1 mb-7">
          <div>
            <Listbox.Button className="hover:text-azure-radiance-400 transition" title="Customize your profile">
              <img alt="Profile Image" className="h-10 rounded-xl"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
              <p className="text-center font-bold text-xs">{username}</p>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Listbox.Options>
                <AccountMenu/>
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      {/* Help Section */}
      <div className="mt-10 gap-2 flex flex-col">
        <Notifications />
        <button title="Help" className="p-2 text-2xl hover:text-azure-radiance-400 transition">
          <BiMoon />
        </button>
        <Help/>
      </div>
    </div>
  );
}

export default SideMenu;
