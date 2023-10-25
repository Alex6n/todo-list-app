import { Tab } from '@headlessui/react'
import Tabs from './tasks/Tabs'
import Filters from './tasks/Filters'
import Empty from './tasks/Empty'
import Tasks from './tasks/Tasks'
import { useSelector } from 'react-redux'


export default function Main() {
  const tasks = useSelector(state => state.tasks.list);
  const allTasks = tasks.filter(task => task.Trash == false && task.Completed == false)
  const todaysDate = new Date().toISOString().slice(0, 10)
  const todayTasks = allTasks.filter(task => task.ExpectedBy == todaysDate)
  const weekTasks = allTasks.filter(task =>  new Date(task.ExpectedBy).getTime() < (new Date(todaysDate).getTime()+604800000))
  const completedTasks = tasks.filter(task =>  task.Completed == true)
  const deletedTasks = tasks.filter(task =>  task.Trash == true)

  return (
    <div className="bg-gradient-to-tr from-azure-radiance-400 to-azure-radiance-200 h-screen w-screen overflow-auto">

      <Tab.Group>
        <div className="flex flex-col items-center pb-4 top-0 z-10 bg-azure-radiance-400">
        <Tabs />
        <Filters />
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="flex flex-wrap gap-3">
              <div className="m-auto">
                {todayTasks.length == 0 ? <div className='mt-28'><Empty text='No tasks for today!' /></div> : todayTasks.map((task, index) => { return (<Tasks key={index} task={task} />) })}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap gap-3">
              <div className="m-auto">
                {weekTasks.length == 0 ? <div className='mt-28'><Empty text='No tasks for this week!' /></div> : weekTasks.map((task, index) => { return (<Tasks key={index} task={task} />) })}
              </div>
                      </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap gap-3">
              <div className="m-auto">
                {allTasks.length == 0 ? <div className='mt-28'><Empty text='looks like your task list is empty!' /></div> : allTasks.map((task,index) => { return (<Tasks key={index} task={task} />) })}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap gap-3">
              <div className="m-auto">
                {completedTasks.length == 0 ? <div className='mt-28'><Empty text="you haven't completed any task!" /></div> : completedTasks.map((task,index) => { return (<Tasks key={index} task={task} catogery={'completed'}/>) })}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap gap-3">
              <div className="m-auto">
                {deletedTasks.length == 0 ? <div className='mt-28'><Empty text="the trash bin is empty!" /></div> : deletedTasks.map((task, index) => { return (<Tasks key={index} task={task} catogery={'trash'} />) })}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

    </div>
  
  );
}
