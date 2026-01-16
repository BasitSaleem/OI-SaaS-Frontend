import Image from "next/image";
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  gradientBackground?: string;
  onClose: () => void;
  children: ReactNode;     
}

const DEFAULT_GRADIENT_BACKGROUND = `
  linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.98) 18%,
    rgba(255, 255, 255, 0.85) 35%,
    rgba(255, 255, 255, 0.00) 50%,
    rgba(255, 255, 255, 0.00) 100%
  ),
  radial-gradient(900px 650px at 12% 8%,
    rgba(207, 181, 249, 0.80) 0%,
    rgba(207, 181, 249, 0.30) 45%,
    rgba(207, 181, 249, 0.00) 75%
  ),
  radial-gradient(900px 650px at 88% 10%,
    rgba(160, 215, 255, 0.80) 0%,
    rgba(160, 215, 255, 0.30) 45%,
    rgba(160, 215, 255, 0.00) 75%
  ),
  linear-gradient(
    135deg,
    rgba(210, 185, 255, 0.85) 0%,
    rgba(175, 205, 255, 0.77) 45%,
    rgba(160, 230, 245, 0.70) 100%
  )
`;


export default function Modal({ 
  isOpen, 
  onClose, 
  children,
  gradientBackground = DEFAULT_GRADIENT_BACKGROUND // Add this parameter with default value
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[99999]">
      <div 
        className="rounded-2xl py-[40px] px-0 md:px-5 w-full backdrop-blur-md h-screen flex items-center justify-center shadow-xl relative bg-contain z-[10000] bg-center bg-no-repeat" 
        style={{ background: gradientBackground }}
      >
        <div className="wrapper">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
            onClick={onClose}
          >
            <Image
              src="/assets/modalcross-icon.svg"
              alt="cross icon"
              width={32}
              height={32}
              className=""
            />
          </button>

          {/* Modal Content */}
          {children}
        </div>
      </div>
    </div>
  );
}