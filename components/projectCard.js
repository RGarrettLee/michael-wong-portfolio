import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function ProjectCard({ project }) {
   const [isOpen, setIsOpen] = useState(false);

   function openModal() {
      setIsOpen(true);
   }

   function closeModal() {
      setIsOpen(false);
   }

   return (
      <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="bg-white ring-1 ring-white text-black rounded-md px-4 py-2 shadow-md shadow-black hover:bg-black hover:text-white ease-in duration-500 transition-all"
        >
          {project.name}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-blue-300 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-center"
                  >
                    {project.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-white text-center">
                      {project.desc}
                    </p>
                  </div>

                  <div className='flex flex-col justify-center items-center mt-8'>
                     <div className="flex items-center justify-center gap-2">
                        {project['tags'].map((tag, index) => (
                           <span className='px-3 py-1 bg-slate-800 rounded-full text-sm font-semibold text-center' key={index}>{tag}</span>
                        ))}
                     </div>
                     <button
                      type="button"
                      className="mt-3 w-36 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </>
   )
}