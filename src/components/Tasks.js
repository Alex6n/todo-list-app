import { FiEdit } from 'react-icons/fi';
import { LuDelete } from 'react-icons/lu';
import { BiAlarmSnooze } from 'react-icons/bi';
import { MdSettingsBackupRestore } from 'react-icons/md';

export default function Tasks({task,catogery}) {
  return (
    <div className="max-w-3xl mt-2 p-4 bg-azure-radiance-200 rounded-3xl shadow-md">
      
      <div className="grid grid-cols-4 gap-3">

        <div className="card-devider">
          <img
            className="h-40 justify-self-center"
            src={require('../assets/task-template.png')}
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
                <a href="#" className="card-action pspn"><BiAlarmSnooze className="mr-1" /> Postpone</a>
              </div>
            ) : catogery === 'trash' ? (
              <div>
                <a href="#" className="card-action pspn"><BiAlarmSnooze className="mr-1" /> Postpone</a>
              </div>
            ) : (
              <div>
                <a href="#" className="card-action pspn"><BiAlarmSnooze className="mr-1" /> Postpone</a>
                <a href="#" className="card-action edt"><FiEdit className="mr-1" /> Edit</a>
                <a href="#" className="card-action del"><LuDelete className="mr-1" /> Delete</a>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
