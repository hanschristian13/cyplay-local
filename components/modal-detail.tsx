/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import frame from '@/public/assets/frame.svg';
import Image from 'next/image';
import { IoChevronBackCircle } from 'react-icons/io5';
import { getImageSrc } from '@/lib/helper';
const ModalDetail = ({ isOpen, onClose, data }: any) => {
  return (
    <Modal isOpen={!!isOpen} onClose={() => onClose(null)}>
      <div className=" max-w-[640px] mx-auto h-screen ovberflow-y-auto relative">
        <div className="relative">
          <Image
            src={getImageSrc(`${data?.key}_header`)}
            alt={'title'}
            layout="intrinsic"
          />
          <div
            className="absolute top-0 "
            style={{
              height: '90%',
              width: '100%',
              backgroundImage: `url(${frame.src})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: ' bottom', // Ensures the background is positioned at the bottom
              // Adds 10px spacing from the bottom
            }}
          />
        </div>
        <button
          onClick={() => onClose(null)}
          className="absolute top-[15px] left-[24px] z-10 text-white"
        >
          <IoChevronBackCircle size={30} />
        </button>

        <div className="  px-[24px] py-[12px] h-min -mt-[30px]">
          <div className="flex space-x-[30px]">
            <div className="text-[#72757A] text-[12px]">
              <h4>Volatility</h4>
              <h2 className="text-[#4D4D4D] font-[700] capitalize text-[14px]">
                Medium
              </h2>
            </div>
            <div className="text-[#72757A] text-[12px]">
              <h4>RTP</h4>
              <h2 className="text-[#4D4D4D] font-[700] text-[14px]">100%</h2>
            </div>
            <div className="text-[#72757A] text-[12px]">
              <h4>Maxwin</h4>
              <h2 className="text-[#4D4D4D] font-[700] text-[14px]">x120000</h2>
            </div>
            <div className="text-[#72757A] text-[12px]">
              <h4>Betways</h4>
              <h2 className="text-[#4D4D4D] font-[700] text-[14px]">1200</h2>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-[10px] py-[12px] px-[24px]">
          <div className="rotate-[180deg] w-full">
            <SvgArrow />
          </div>

          <h1 className="text-[12px] whitespace-nowrap text-[#4D4D4D]">
            Game Preview
          </h1>
          <SvgArrow />
        </div>
        <div className="px-[16px] min-w-full">
          <Image
            src={getImageSrc(`${data?.key}_preview`)}
            alt={'ex'}
            layout="responsive"
          />

          <button className="rounded-[50px] w-full shadow-[0px_4px_15px_rgba(252,157,5,0.75)] bg-gradient-to-b from-[#FBA10F] to-[#FBA10F] relative overflow-hidden px-4 py-2 text-white font-bold">
            Custom Button
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetail;

const Modal = ({
  isOpen,
  children,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full h-full bg-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent click bubbling
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const SvgArrow = () => {
  return (
    <div className="flex items-center w-full space-x-[4px] ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
      >
        <rect
          x="11.5002"
          y="14"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-180 11.5002 14)"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          x="8.50024"
          y="14"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-180 8.50024 14)"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          x="8.50024"
          y="11"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-180 8.50024 11)"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          x="5.50049"
          y="11"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-180 5.50049 11)"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          x="5.50049"
          y="8"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-180 5.50049 8)"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          x="2.5"
          y="8"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-180 2.5 8)"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          x="8.50024"
          y="5"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-180 8.50024 5)"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          x="5.50049"
          y="5"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-180 5.50049 5)"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          x="11.5002"
          y="2"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-180 11.5002 2)"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          x="8.50024"
          y="2"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-180 8.50024 2)"
          fill="black"
          fill-opacity="0.5"
        />
      </svg>
      <div className="h-[1px] bg-black bg-opacity-50 w-full" />
    </div>
  );
};
