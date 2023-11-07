import { Tab } from '@headlessui/react'
import Tabs from './tasks/Tabs'
import Filters from './tasks/Filters'
import Empty from './tasks/Empty'
import Tasks from './tasks/Tasks'
import Edit from './tasks/Edit'
import { useSelector } from 'react-redux'


export default function Main() {
  const { urgent, strategic, pressing, optional, search } = useSelector(state => state.filters)
  const tasksX = useSelector(state => state.tasks.list);
  const todaysDate = new Date().toISOString().slice(0, 10)
  
  const tasks = tasksX.filter(task => JSON.stringify(task).toLowerCase().includes(search.toLowerCase()));
  

  const filterTasks = (taskList, filters) => {
    return taskList.filter(task => {
      switch (true) {
        case filters.urgent && task.Priority == 'Urgent': return true
        case filters.strategic && task.Priority == 'Strategic': return true
        case filters.pressing && task.Priority == 'Pressing': return true
        case filters.optional && task.Priority == 'Optional': return true
      }
    });
  };

  const allTasks = filterTasks(tasks, { urgent, strategic, pressing, optional }).filter(tasks => !tasks.Trash && !tasks.Completed)

  const todayTasks = allTasks.filter(task => task.ExpectedBy == todaysDate)
  const weekTasks = allTasks.filter(task => new Date(task.ExpectedBy).getTime() < (new Date(todaysDate).getTime() + 604800000))
  
  const completedTasks = filterTasks(tasks, { urgent, strategic, pressing, optional }).filter(tasks => !tasks.Trash && tasks.Completed)
  const deletedTasks = filterTasks(tasks, { urgent, strategic, pressing, optional }).filter(tasks => tasks.Trash)

  return (
    <div className="bg-gradient-to-tr from-azure-radiance-400 to-azure-radiance-200 h-screen w-screen overflow-auto">

      <Tab.Group>
        <div className="sticky z-30 flex flex-col items-center pb-4 top-0 bg-azure-radiance-400">
          <Tabs />
          <Filters />
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="flex flex-wrap gap-3">
              <div className="m-auto">
                {todayTasks.length == 0 ? <div className='mt-28'><Empty text='No tasks for today!' /></div> :
                  todayTasks.map((task, index) => {
                    return task.State == 'show' ? (<Tasks key={index} task={task} />) : (<Edit key={index} task={task} />)
                  })}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap gap-3">
              <div className="m-auto">
                {weekTasks.length == 0 ? <div className='mt-28'><Empty text='No tasks for this week!' /></div> :
                  weekTasks.map((task, index) => {
                    return task.State == 'show' ? (<Tasks key={index} task={task} />) : (<Edit key={index} task={task} />)
                  })}
              </div>
                      </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap gap-3">
              <div className="m-auto">
                {allTasks.length == 0 ? <div className='mt-28'><Empty text='looks like your task list is empty!' /></div> :
                  allTasks.map((task, index) => {
                    return task.State == 'show' ? (<Tasks key={index} task={task} />) : (<Edit key={index} task={task} />) 
                  })}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap gap-3">
              <div className="m-auto">
                {completedTasks.length == 0 ? <div className='mt-28'><Empty text="you haven't completed any task!" /></div> :
                  completedTasks.map((task, index) => { return (<Tasks key={index} task={task} catogery={'completed'} />) })}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-wrap gap-3">
              <div className="m-auto">
                {deletedTasks.length == 0 ? <div className='mt-28'><Empty text="the trash bin is empty!" /></div> :
                  deletedTasks.map((task, index) => { return (<Tasks key={index} task={task} catogery={'trash'} />) })}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

    </div>
  
  );
}
