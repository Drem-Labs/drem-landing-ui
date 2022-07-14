import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Emoji from '../Emoji'

const ConfirmationScreen = ({isOpen, closeModal, status, message}: any) => {
    let alertTitle= <Dialog.Title></Dialog.Title>
    let alertText = <div></div>

    if (status === "success"){
      alertTitle = <Dialog.Title 
                    as="h3"
                    className="text-2xl font-[montserrat] font-extrabold leading-6 text-center uppercase text-transparent bg-clip-text  bg-gradient-to-r from-[#A814AB] to-[#0029FF]">
                  {status}
                  </Dialog.Title>
      alertText = <div>Thanks for coming on this journey with us!<Emoji symbol="✌️" label="peace"/></div>
    } else {
      alertTitle =  <Dialog.Title 
                      as="h3"
                      className="text-2xl font-[montserrat] font-extrabold leading-6 text-red-500 text-center uppercase">
                    {status}
                    </Dialog.Title>
      alertText = <div>{message}</div>
    }

    // custom alert code is from the first example at https://headlessui.com/react/dialog 
    return (
        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={closeModal}>
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
                    <Dialog.Panel className="w-full max-w-lg max-h-fit transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      {alertTitle}
                      <div className="mt-4">
                        <p className="text-base text-slate-900 font-[montserrat] text-center">
                            {alertText}
                        </p>
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

export default ConfirmationScreen

