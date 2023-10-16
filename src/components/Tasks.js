export default function Tasks() {
  return (
    
    <div className="bg-gray-300 h-auto w-full flex flex-col items-center">
      <div className="overflow-auto whitespace-nowrap py-5 h-10 flex justify-center rounded-lg mt-3 border border-gray-100 bg-gray-50 p-1">
        <ul className="flex items-center gap-2 text-sm font-medium">
          <li className="flex-1">
            <a
              href="#"
              className="relative flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 shadow hover:bg-white hover:text-gray-700"
            >
              Today's tasks
            </a>
          </li>
          <li className="flex-1">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow"
            >
              Next 7 days
            </a>
          </li>
          <li className="flex-1">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow"
            >
              All
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">
                8
              </span>
            </a>
          </li>
          <li className="flex-1">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow"
            >
              Completed
            </a>
          </li>
          <li className="flex-1">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow"
            >
              Trash
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center mt-60">
        <div className="p-1">
          <img className="h-40" src="https://cdn-icons-png.flaticon.com/512/5058/5058432.png"></img>
<<<<<<< HEAD
          <p>No tasks for today!</p>
      </div>

      <div className="hidden grid-col-3 items-center">
        <div className="p-5 bg-gray-400 rounded-3xl flex gap-3">
          <img className="h-40" src="https://cdn-icons-png.flaticon.com/512/5058/5058432.png"></img>
          <div className="grid grid-rows-3">
            <p className="font-extrabold text-xl">Task Title</p>
            <p className="font-normal text-lg whitespace-wrap">task description</p>
            <p className="font-normal text-sm mt-auto">CreatedOn / ExpectedBy</p>
          </div>
          <div className="grid grid-rows-3">

          edit- delete - postpone
          </div>
=======
          <h1>No Tasks For Today!</h1>
>>>>>>> parent of f5e59f3 (Revert "Revert "fixing the tabs component"")
        </div>
      </div>
    </div>
  );
}
