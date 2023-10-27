import { useSelector } from "react-redux";
import { LuListTodo, LuBellRing, LuHelpCircle } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { CgSearch } from "react-icons/cg";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import AccountMenu from "./AccountMenu";

function SideMenu() {
  const username = 'Alex'//useSelector((state) => state.user.username);

  return (
    <div className="hidden z-50 sticky lg:grid grid-rows-5 h-screen p-3 w-16 bg-azure-radiance-950 text-azure-radiance-100">

      {/* User Section */}
      <div className="border-b section mt-3">
        <div className="flex justify-center">
        <Listbox>
          <div className="fixed mt-1">
            <Listbox.Button className="hover:text-azure-radiance-400 transition" title="Customize your profile">
              <img alt=""
                className="h-10 rounded-xl"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <p className="text-center font-bold text-xs">{username}</p>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options>
                <AccountMenu/>
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        </div>
      </div>

      {/* Todo Section */}
      <div className="border-b section">
        <div className="flex justify-center">
          <button
            title="Tasks"
            className="p-2 text-2xl hover:text-azure-radiance-400 transition"
          >
            <LuListTodo />
          </button>
        </div>
        <div className="flex justify-center">
          <button
            title="Calendar"
            className="p-2 text-2xl hover:text-azure-radiance-400 transition"
          >
            <SlCalender />
          </button>
        </div>
        <div className="flex justify-center">
          <button
            title="Search"
            className="p-2 mb-7 text-2xl hover:text-azure-radiance-400 transition"
          >
            <CgSearch />
          </button>
        </div>
      </div>

      {/* Help Section */}
      <div className="row-span-3 section">
        <div className="flex justify-center">
          <button
            title="Notificatations"
            className="p-2 text-2xl hover:text-azure-radiance-400 transition"
          >
            <LuBellRing />
          </button>
        </div>
        <div className="flex justify-center">
          <button
            title="Help"
            className="p-2 text-2xl hover:text-azure-radiance-400 transition"
          >
            <LuHelpCircle />
          </button>
        </div>
      </div>

    </div>
  );
}

export default SideMenu;
