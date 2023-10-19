import { Tab } from '@headlessui/react'
import Tabs from './Tabs'
import Empty from './Empty'
import Tasks from './Tasks'

export default function Main() {
  return (
    <div className="bg-gradient-to-tr from-azure-radiance-400 to-azure-radiance-200 h-screen w-screen">

      <Tab.Group>
        <div className="flex flex-col items-center mb-4">
          <Tabs />
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="overflow-y-auto">
              <Tasks />
            </div>
            <div className='hidden mt-24'><Empty /></div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

    </div>
  
  );
}
