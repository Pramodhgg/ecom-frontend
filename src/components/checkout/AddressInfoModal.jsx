import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
const AddressInfoModal = ({ isOpen, setIsOpen, children }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-md mx-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
          {children}
          <div className="flex justify-end gap-4 absolute right-4 top-2">
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-slate-700" size={25} />
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
export default AddressInfoModal;
