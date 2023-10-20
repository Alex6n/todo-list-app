import { FiEdit } from 'react-icons/fi';
import { LuDelete } from 'react-icons/lu';
import { BiAlarmSnooze } from 'react-icons/bi';
import { MdSettingsBackupRestore } from 'react-icons/md';

export default function Tasks() {
  return (
    <div className="max-w-3xl mt-4 p-4 bg-azure-radiance-200 rounded-3xl shadow-2xl">

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
            <p className="font-extrabold text-xl">Task Title</p>
            <div className="overflow-scroll h-28 w-96">
              <p className="font-normal text-base">Task Description</p>
            </div>
          </div>
          <div>
            <p className="font-normal text-sm h-fit">CreatedOn / ExpectedBy</p>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center mb-3 ">
            <div className="hidden badge urgent">Urgent</div>
            <div className="hidden badge pressing">Pressing</div>
            <div className="hidden badge strategic">Strategic</div>
            <div className="badge optional">Optional</div>
          </div>

          <a href="#" className="special-tab"><BiAlarmSnooze className="mr-1"/>Postpone</a>
          <a href="#" className="special-tab"><FiEdit className="mr-1"/>Edit</a>
          <a href="#" className="special-tab"><LuDelete className="mr-1"/>Delete</a>
          <a href="#" className="hidden special-tab"><MdSettingsBackupRestore className="mr-1" />Restore</a>



        </div>

      </div>
    </div>
  );
}
