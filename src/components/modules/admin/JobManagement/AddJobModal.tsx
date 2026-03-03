"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import CreateJobForm from "./CreateJobForm";
import Modal from "@/components/shared/Modal";

export default function AddJobModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-2.5 font-bold"
      >
        <Plus size={20} strokeWidth={2.5} />
        <span className="md:flex hidden">Add Job</span>
      </button>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title="Post New Job"
        className="max-w-2xl"
        closeOnOutsideClick={false}
      >
        <div className="max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">
          {isOpen && <CreateJobForm handleClose={handleClose} />}
        </div>
      </Modal>
    </>
  );
}
