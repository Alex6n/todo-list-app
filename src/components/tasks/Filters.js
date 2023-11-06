import { useSelector, useDispatch } from "react-redux";
import { updateUrgent, updateStrategic, updatePressing, updateOptional, updateSearch } from "../../store/filtersSlice";

export default function Filters() {
  const { urgent, strategic, pressing, optional } = useSelector(state => state.filters)
  const dispatch = useDispatch()
  
  return (
    <div className="mt-2 grid grid-rows-3 gap-1 text-sm font-bold bg-azure-radiance-300 p-2 rounded-xl">
      <input onChange={(e) => dispatch(updateSearch(e.target.value))} className="rounded-xl row-span-3 w-80 px-4 py-2 text-center" type="search" placeholder="Search for a task.." />
      <div className="mt-1 flex justify-center gap-1">
      <a href="#" onClick={()=> dispatch(updateUrgent())} className={`filter badge ${urgent ? "urgent" : "bg-gray-600"}`} >Urgent</a>
      <a href="#" onClick={()=> dispatch(updateStrategic())} className={`filter badge ${strategic ? "strategic" : "bg-gray-600"}`} >Strategic</a>
      <a href="#" onClick={()=> dispatch(updatePressing())} className={`filter badge ${pressing ? "pressing" : "bg-gray-600"}`} >Pressing</a>
      <a href="#" onClick={() => dispatch(updateOptional())} className={`filter badge ${optional ? "optional" : "bg-gray-600"}`} >Optional</a>
      </div>

    </div>
  );
}
