import { useSelector, useDispatch } from "react-redux";
import { updateUrgent, updateStrategic, updatePressing, updateOptional } from "../../store/filtersSlice";

export default function Filters() {
  const { urgent, strategic, pressing, optional } = useSelector(state => state.filters)
  const dispatch = useDispatch()
  
  return (
    <div className="mt-3 flex gap-1 text-sm font-bold">
      <a href="#" onClick={()=> dispatch(updateUrgent())} className={`filter badge ${urgent ? "urgent" : "bg-gray-600"}`} >Urgent</a>
      <a href="#" onClick={()=> dispatch(updateStrategic())} className={`filter badge ${strategic ? "strategic" : "bg-gray-600"}`} >Strategic</a>
      <a href="#" onClick={()=> dispatch(updatePressing())} className={`filter badge ${pressing ? "pressing" : "bg-gray-600"}`} >Pressing</a>
      <a href="#" onClick={()=> dispatch(updateOptional())} className={`filter badge ${optional ? "optional" : "bg-gray-600"}`} >Optional</a>
    </div>
  );
}
