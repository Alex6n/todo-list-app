import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LuHelpCircle } from "react-icons/lu";

export default function Help() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  return (
    <>
      <button title="Help" className="p-2 text-2xl hover:text-azure-radiance-400 transition" onClick={openModal}>
        <LuHelpCircle />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    How does this app work?
                  </Dialog.Title>
                  <div className="mt-1 mb-3">
                    <p className="text-sm text-gray-500">
                      This app utilizes the Eisenhower Matrix method to help you efficiently manage your tasks. It allows you to categorize them
                      based on their urgency and importance, enabling you to prioritize effectively.
                    </p>
                  </div>
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    How to choose the right priority for your task?
                  </Dialog.Title>
                  <div className="mt-1 mb-3">
                    <p className="text-sm text-gray-500 whitespace-pre-wrap">According to the Eisenhower Matrix,
                      tasks can be classified into four categories:<br className="mb-2"/>
                      <div className="badge urgent inline-block">Urgent and Important</div> Handle these tasks immediately.<br className="mb-2" />
                      <div className="badge strategic inline-block">Important but Not Urgent</div> Schedule these tasks for later.<br className="mb-2" />
                      <div className="badge pressing inline-block">Urgent but Not Important</div> Delegate these tasks if possible.<br className="mb-2" />
                      <div className="badge optional inline-block">Not Urgent and Not Important</div> Consider eliminating or deferring these tasks to free up your time
                      for more critical activities.
                    </p>

                  </div>

                  <div className="mt-4 flex justify-end gap-1">
                  <button
                      type="button"
                      onClick={()=> window.open('https://asana.com/resources/eisenhower-matrix', '_blank')}
                      className="inline-flex justify-center rounded-md border border-transparent bg-azure-radiance-100 px-4 py-2 text-sm 
                      font-medium text-azure-radiance-900 hover:bg-azure-radiance-200 focus:outline-none focus-visible:ring-2
                       focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Learn More
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-azure-radiance-200 px-4 py-2 text-sm 
                      font-medium text-azure-radiance-950 hover:bg-azure-radiance-300 focus:outline-none focus-visible:ring-2
                       focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
