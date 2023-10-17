import { useSelector } from "react-redux";
import { LuListTodo, LuBellRing, LuHelpCircle } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { CgSearch } from "react-icons/cg";

function SideMenu() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="h-screen bg-azure-radiance-950 text-center text-sm font-bold text-azure-radiance-100 ">

      <div className="p-3 mt-3 grid grid-rows-3">
        {/* User Section */}
        <ul className="border-b section mt-3 hover:text-azure-radiance-400 transition">
          <button title="Customize your profile">
            <div className="flex justify-center">
              <img
                className="h-11 rounded-xl hover:"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
            </div>
            <p>{username}</p>
          </button>
        </ul>

        {/* Todo Section */}
        <ul className="border-b section">
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
        </ul>

        {/* Help Section */}
        <ul className="section">
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
        </ul>

      </div>
    </div>
  );
}

export default SideMenu;
