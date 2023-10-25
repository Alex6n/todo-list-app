import { LuDelete } from 'react-icons/lu';
import { VscError } from 'react-icons/vsc';
import { BsQuestionCircle } from 'react-icons/bs';
import { MdRestore } from 'react-icons/md';
import { ImCheckmark } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, deleteTask } from '../../store/tasksSlice';
import EditTask from './EditTask';


export default function Tasks({ task, catogery }) {
  const list = useSelector(state => state.tasks.list);
  const index = list.findIndex(item => item.Title == task.Title)
  const dispatch = useDispatch();
  
  const removeTaskHandler = () => {
    dispatch(updateTask({index: index, updatedTask: {...task, Trash: true}}));
  };
  const completeTaskHandler = () => {
    dispatch(updateTask({index: index, updatedTask: {...task, Completed: true}}));
  };
  const restoreTaskHandler = () => {
    dispatch(updateTask({index: index, updatedTask: {...task, Trash: false}}));
  };
  const inCompletedTaskHandler = () => {
    dispatch(updateTask({index: index, updatedTask: {...task, Completed: false}}));
  };
  const deleteTaskHandler = () => {
    dispatch(deleteTask(index));
  };

  return (
    <div className="max-w-3xl mt-2 p-4 bg-azure-radiance-200 rounded-3xl shadow-md">
      
      <div className="grid grid-cols-4 gap-3">

        <div className="card-devider">
          <img
            className="h-40 justify-self-center"
            src={require('../../assets/task-template.png')}
            alt="Task Icon"
          ></img>
        </div>
        
        <div className="col-span-2 max-w-fit card-devider">
          <div className="mt-0 whitespace-wrap">
              <p className="font-extrabold text-xl">{task.Title}</p>
            <div className="overflow-scroll h-28 max-w-xl">
              <p className="font-normal text-base">{task.Describtion}</p>
            </div>
          </div>
          <div className="font-normal flex justify-between text-sm h-fit w-96">
          <p >Expected By: {task.ExpectedBy}</p>
          <p className="mr-1">Created On: {task.CreatedOn}</p>
          </div>
        </div>

        <div>
          <div className="flex justify-center mb-3 ">
            <div className={
              task.Priority == 'Urgent' ? "badge urgent" :
              task.Priority == 'Strategic' ?  "badge strategic" :
              task.Priority == 'Pressing' ?  "badge pressing" : "badge optional"
            }>{task.Priority}</div>
          </div>

          <div>
            {catogery === 'completed' ? (
              <div>
                <a href="#" onClick={inCompletedTaskHandler} className="card-action del"><BsQuestionCircle className="mr-1" />Incomplete</a>
                <a href="#" onClick={removeTaskHandler} className="card-action del"><LuDelete className="mr-1" /> Remove Task</a>
              </div>
            ) : catogery === 'trash' ? (
              <div>
                <a href="#" onClick={restoreTaskHandler} className="card-action rstr"><MdRestore className="mr-1" /> Restore Task</a>
                  <a href="#" onClick={deleteTaskHandler} className="card-action del"><VscError className="mr-1" /> Delete Task</a>
              </div>
            ) : (
              <div>
                <a href="#" onClick={completeTaskHandler} className="card-action cmplt"><ImCheckmark className="mr-1" /> Mark Completed</a>
                <EditTask/>
                <a href="#" onClick={removeTaskHandler} className="card-action del"><LuDelete className="mr-1" /> Remove Task</a>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
