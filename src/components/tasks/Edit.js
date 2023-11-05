import { AiOutlinePlusCircle } from 'react-icons/ai'; 
import { ImCheckmark } from 'react-icons/im'; 
import { useDispatch, useSelector } from 'react-redux';
import { initiateEdit, instantPriority, instantUpdateTask, instantApplied } from '../../store/editSlice';
import { updateTask } from '../../store/tasksSlice';
import { useEffect } from 'react';

export default function Edit({ task }) {

  const editList = useSelector(state => state.edit);
  const index = editList.findIndex(item => item.ID == task.ID);
  const originalIndex = useSelector(state => state.tasks.list).findIndex(item => item.ID == task.ID);
  const edit = editList[index];
  const dispatch = useDispatch();

  useEffect(() => {
    edit || dispatch(initiateEdit(task))
  })
  
  const applyChangesHandler = () => {
    dispatch(updateTask({index: originalIndex, updatedTask: {...edit, State: 'show'}}))
  }

  if (edit) return (
    <div className="max-w-3xl mt-2 p-4 bg-azure-radiance-100 rounded-3xl shadow-md">
      
      <div className="grid grid-cols-4 gap-3">

        <div className="card-devider group flex flex-col items-center justify-center"> {/* selecting image should be done */}
          <a className="absolute text-6xl text-gray-800 transition-opacity group-hover:opacity-100 opacity-0 duration-500">
            {/* absolute class to need to be fixed */}
            <AiOutlinePlusCircle/>
          </a>
          <img className="h-40 pr-1 rounded-xl object-cover justify-self-center transition-opacity duration-300 group-hover:opacity-30"
            src={require(`../../assets/${task.Icon}`)}
            alt="Task Icon"
            />
        </div>
        
        <div className="col-span-2 max-w-fit card-devider w-96">
          <div className="mt-0 ">
            <input onChange={(e) => dispatch(instantUpdateTask({index: index, updatedTask: {...edit, Title: e.target.value}}))} type="text"
              className="font-extrabold text-lg bg-transparent bg-opacity-20 outline-none ring-0" value={edit.Title} />
            <div className="overflow-scroll h-28 max-w-xl">
              <textarea onChange={(e) => dispatch(instantUpdateTask({index: index, updatedTask: {...edit, Describtion: e.target.value}}))} rows="5"
                className="font-normal text-sm whitespace-pre-wrap bg-transparent outline-none ring-0 w-full" value={edit.Describtion} />
            </div>
          </div>
            <div className="font-normal flex justify-between text-xs h-fit w-96 pr-3">
              <p>Expected By:
              <input type="date" onChange={(e) => dispatch(instantUpdateTask({ index: index, updatedTask: { ...edit, ExpectedBy: e.target.value } }))}
                value={edit.ExpectedBy}
                  min={new Date().toISOString().slice(0, 10)} className="bg-sky-50/0" /></p>
              <p>Created On: {task.CreatedOn}</p>
            </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className="mb-5">
            <div className="mt-3 flex gap-1 text-sm font-bold">
              <a href="#" onClick={() => dispatch(instantPriority(index))} className={`filter badge ${edit.Priority.toLowerCase()}`} >
                {edit.Priority}</a>
            </div>
          </div>

          <div className='flex flex-col justify-center'>
            <a href="#" onClick={applyChangesHandler} className="card-action cmplt"><ImCheckmark className="mr-1" /> Apply Changes</a>
          </div>

        </div>

      </div>
    </div>
  );
}