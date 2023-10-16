import { useSelector } from "react-redux";
import { LuListTodo, LuBellRing, LuHelpCircle } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { CgSearch } from "react-icons/cg";

function SideMenu() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="w-19  bg-slate-800 h-screen text-white ">
      <div className="p-4">
        {/* User Section */}
        <ul className="border-b pb-5 border-gray-500 mb-7 hover:text-sky-300 transition">
          <li>
          <button title='Customize your profile'>
            <div className="flex items-center justify-center">
              <img
                className="h-10 w-auto rounded-full  items-center"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <p href="#" className="text-center">
              {username}
              </p>
              </button>
          </li>
          
        </ul>
        {/* Todo Section */}
        <ul className="border-b pb-5 border-gray-500 mb-7">
          <li>
            <div className="flex items-center justify-center">
              <button title='Tasks' className="p-2 text-2xl hover:text-sky-300 transition">
                <LuListTodo />
              </button>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-center">
              <button title='Calendar' className="p-2 text-2xl hover:text-sky-300 transition">
                <SlCalender />
              </button>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-center">
              <button title='Search' className="p-2 text-2xl hover:text-sky-300 transition">
                <CgSearch />
              </button>
            </div>
          </li>
        </ul>
        {/* Help Section */}
        <ul className="border-t pt-5 absolute bottom-0 border-gray-500 mb-7">
          <li>
            <div className="flex items-center justify-center">
              <button title='Notificatations' className="p-2 text-2xl hover:text-sky-300 transition">
                <LuBellRing />
              </button>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-center">
              <button title='Help' className="p-2 text-2xl hover:text-sky-300 transition">
                <LuHelpCircle />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;

