'use client'
import { Fragment } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import {
  XMarkIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function Sidebar ({
  children,
  open,
  onOpen,
}) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={onOpen}>
        <TransitionChild
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div className="fixed inset-0 flex">
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full">
                  <button
                    type="button"
                    className={clsx(
                      "m-3 p-2",
                      'rounded-full dark:bg-green-500/20 dark:hover:bg-green-500/40',
                      'text-white/80 hover:text-white',
                    )}
                    onClick={() => onOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div
                className={clsx(
                  "flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-2",
                  "border-r border-slate-500",
                )}
                style={{
                  background: `radial-gradient(23.91% 23.92% at 14.33% 30.99%, rgba(19, 10, 39, 0.2) 0%, rgba(32, 10, 39, 0) 100%), radial-gradient(37.93% 37.93% at 85.72% 23.89%, rgba(4, 11, 18, 0.2) 0%, rgba(58, 95, 129, 0) 100%), radial-gradient(25.52% 25.52% at 24.55% 76.74%, rgba(95, 116, 97, 0.2) 0%, rgba(45, 67, 48, 0) 100%), radial-gradient(42.95% 42.95% at 21.12% 25.63%, rgba(97, 130, 120, 0.2) 0%, rgba(122, 159, 132, 0) 100%), radial-gradient(63.47% 63.46% at 31.32% 63.18%, rgba(64, 86, 142, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(19.87% 43.71% at 73.92% 40.01%, rgba(122, 159, 132, 0.116) 0%, rgba(40, 52, 59, 0.056) 100%), #263134`,
                }}
              >
                {children}
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
