import { Tab } from '@headlessui/react'
import Tabs from './Tabs'
import Empty from './Empty'
import Tasks from './Tasks'

export default function Main() {
  return (
    <div className="bg-gradient-to-tr from-azure-radiance-400 to-azure-radiance-200 h-screen w-screen overflow-auto">

      <Tab.Group>
        <div className="sticky flex flex-col items-center mb-4">
          <Tabs />
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="ml-14 items-center">
              <div className="flex flex-wrap gap-3">
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              <Tasks />
              </div>
            </div>
            <div className='hidden mt-24'><Empty /></div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

    </div>
  
  );
}
