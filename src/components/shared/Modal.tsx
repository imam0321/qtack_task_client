"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
  closeOnOutsideClick?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title = "Modal",
  className = "max-w-md",
  closeOnOutsideClick = true,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = () => {
    if (closeOnOutsideClick) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity"
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white w-full ${className} rounded-xl shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200 flex flex-col max-h-[95vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <h2 className="text-xl md:text-2xl font-bold text-[#25324B] truncate pr-4">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">{children}</div>
      </div>
    </div>
  );
}
