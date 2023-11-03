import { Popover, Transition, Listbox } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LuSettings, LuBellRing } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiBellRingingDuotone } from "react-icons/pi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeNotifications, updateSettings, updateShown } from "../../store/notificationsSlice";

export default function Notifications() {
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  return (
    <Popover className="relative">
          <Popover.Button className="p-2 text-2xl hover:text-azure-radiance-400 transition">
            <LuBellRing />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0 -translate-x-5"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-5">
              <Popover.Panel className="absolute left-14 top-0">
                  <div className="overflow-auto rounded-lg shadow-2xl ring-1 ring-black ring-opacity-10 w-64">
                      <div className="relative flex justify-between font-bold text-azure-radiance-900 bg-gradient-to-tr from-azure-radiance-300 to-azure-radiance-400 py-3 px-4">
                        <p>Notifications</p>
                        <a href='#' onClick={() => dispatch(updateShown('settings'))} className={`${notifications.shown == 'notifications' || 'hidden'} mt-1 hover:text-azure-radiance-50 transition-colors duration-300`}><LuSettings/></a>
                        <a href='#' onClick={() => dispatch(updateShown('notifications'))} className={`${notifications.shown == 'settings' || 'hidden'} mt-1 hover:text-azure-radiance-50 transition-colors duration-300`}><IoMdArrowRoundBack/></a>
                      </div>
                      <div className="overflow-scroll bg-gradient-to-tr from-azure-radiance-300 to-azure-radiance-100 h-64">
                        
                        
                        <div className={`grid h-64 ${notifications.shown == 'settings' || 'hidden'}`}>
                          <div className="ml-4 mt-10 opacity-80 font-bold text-azure-radiance-900">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input onChange={() => dispatch(updateSettings('browser'))} type="checkbox" className="sr-only peer" checked={notifications.settings.browser && true}/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-azure-radiance-500"></div>
                            <span className="ml-3 text-sm text-gray-900 font-bold">Browser Notifications</span>
                          </label>
                          <label className="relative inline-flex items-center cursor-pointer mt-2">
                            <input onChange={() => dispatch(updateSettings('email'))} value={notifications.settings.email} type="checkbox" className="sr-only peer" checked={notifications.settings.email && true}/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-azure-radiance-500"></div>
                            <span className="ml-3 text-sm text-gray-900 font-bold">Email Notifications</span>
                          </label>
                          <label className="relative inline-flex items-center cursor-pointer mt-2">
                            <input onChange={() => dispatch(updateSettings('telegram'))} value={notifications.settings.telegram} type="checkbox" className="sr-only peer" checked={notifications.settings.telegram && true}/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-azure-radiance-500"></div>
                            <span className="ml-3 text-sm text-gray-900 font-bold">Telegram Notifications</span>
                          </label>
                          </div>
                        </div>
              
                        <div className={notifications.shown == 'notifications' || 'hidden'}>
                          
                          <div className={`grid h-64 ${notifications.items.length < 1 || 'hidden'}`}>
                            <div className="flex flex-col justify-center items-center opacity-80 font-bold text-azure-radiance-900">
                                <PiBellRingingDuotone className="text-7xl"/>
                                <p className="text-md">Empty</p>
                            </div>
                          </div>
                          
                          {notifications.items.length > 0 && notifications.items.map((notification, index) => {
                            return (
                              <div key={index} className={`${notification.read || 'hover:bg-azure-radiance-500 bg-azure-radiance-400'} flex flex-col justify-between h-12 hover:bg-azure-radiance-400 bg-azure-radiance-300 m-1 rounded-md`}>
                                <div className="flex justify-between px-2 py-1 text-azure-radiance-700">
                                  <div>
                                    <p className="font-bold text-sm">{notification.title}</p>
                                    <p className="text-xs">{notification.description}</p>
                                  </div>
                                  <Listbox>
                                    <div className="absolute mt-2 left-56 overflow-visible">
                                      <Listbox.Button>
                                        <a href="#" className="z-10 text-md"><BsThreeDotsVertical/></a>
                                      </Listbox.Button>
                                      <Listbox.Options className='absolute z-20 rounded-lg text-xs bg-azure-radiance-200 p-1'>
                                        <a href="#" onClick={()=> dispatch(removeNotifications(index))} className="rounded-md w-32">Hide this notification</a>
                                      </Listbox.Options>
                                    </div>
                                  </Listbox>
                                </div>
                              </div>
                            )
                          })}
                          
                        </div>
                        
                      </div>
                  </div>
              </Popover.Panel>
          </Transition>
    </Popover>
  )
}
