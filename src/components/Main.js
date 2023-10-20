import { Tab } from '@headlessui/react'
import Tabs from './Tabs'
import Empty from './Empty'
import Tasks from './Tasks'

export default function Main() {
  return (
    <div className="bg-gradient-to-tr from-azure-radiance-400 to-azure-radiance-200 h-screen w-screen overflow-auto">

      <Tab.Group>
      
        <div className="sticky flex flex-col items-center pb-4 top-0 z-10 bg-gray-100 bg-opacity-60">
          <Tabs />
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="flex flex-col items-center gap-3 mb-5">
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
            </div>
            <div className='hidden mt-24'><Empty /></div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

    </div>
  
  );
}
