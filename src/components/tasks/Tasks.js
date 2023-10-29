import { AiOutlinePlusCircle } from 'react-icons/ai'; 
import { ImCheckmark } from 'react-icons/im'; 
import { useDispatch, useSelector } from 'react-redux';
import { initiateEdit, instantTitle, instantDesc, instantExpectedBy, instantPriority, instantIcon, instantApplied } from '../../store/editSlice';

export default function Tasks({ task, catogery }) {
  const list = useSelector(state => state.tasks.list);
  const edit = useSelector(state => state.edit);
  const index = list.findIndex(item => item.ID == task.ID)
  const dispatch = useDispatch();
  

  const { urgent, strategic, pressing, optional } = useSelector(state => state.filters)

  Object.keys(edit).length < 1 && dispatch(initiateEdit(task))
  

  return (
    <div className="max-w-3xl mt-2 p-4 bg-azure-radiance-200 rounded-3xl shadow-md">
      
      <div className="grid grid-cols-4 gap-3">

        <div className="card-devider">
          <a className="absolute text-6xl transition-opacity duration-300 hover:opacity-100 opacity-0 p-12 bg-slate-50 bg-opacity-40 h-40 w-50 rounded-xl">
            <AiOutlinePlusCircle/>
          </a>
          <img className="h-40 pr-1 rounded-xl object-cover justify-self-center"
            src={require(`../../assets/${task.Icon}`)}
            alt="Task Icon"
          />
        </div>
        
        <div className="col-span-2 max-w-fit card-devider w-96">
          <div className="mt-0 ">
            <input onChange={(e) => dispatch(instantTitle(e.target.value))} type="text"
              className="font-extrabold text-lg bg-transparent outline-none ring-0" value={edit.Title} />
            <div className="overflow-scroll h-28 max-w-xl">
              <textarea onChange={(e) => dispatch(instantDesc(e.target.value))} rows="10"
                className="font-normal text-sm whitespace-pre-wrap bg-transparent outline-none ring-0 w-full" value={edit.Describtion} />
            </div>
          </div>
          <div>
            <div className="font-normal flex justify-between text-xs h-fit w-96">
              <p>Expected By:
              <input type="date" onChange={(e) => dispatch(instantExpectedBy(e.target.value))} value={edit.ExpectedBy} min={new Date().toISOString().slice(0, 10)} className="bg-sky-50/0" /></p>
              <p>Created On: {task.CreatedOn}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center mb-3">
            <div className="mt-3 flex gap-1 text-sm font-bold">
              <a href="#" onClick={() => dispatch(instantPriority())} className={`filter badge ${edit.Priority.toLowerCase()}`} >{edit.Priority}</a>
            </div>
          </div>

          <div>
            <a href="#" className="card-action cmplt"><ImCheckmark className="mr-1" /> Apply Changes</a>
          </div>

        </div>

      </div>
    </div>
  );
}
