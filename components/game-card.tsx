/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import Image from 'next/image';
const GameCard = ({
  imageSrc,
  title,
  data,
  onSelectDetail,
}: {
  imageSrc: string;
  title: string;
  data: any;
  onSelectDetail: any;
}) => {
  return (
    <div className="min-w-full relative drop-shadow-lg">
      <button
        onClick={onSelectDetail}
        className="absolute top-8 right-3 text-white"
      >
        <IoIosInformationCircleOutline size={23} />
      </button>

      <Image
        onClick={onSelectDetail}
        src={imageSrc}
        alt={title}
        layout="responsive"
      />
      <div className="absolute bottom-0  w-full bg-white flex items-center justify-start rounded-b rounded-b-[25px] h-[58.7398px]">
        <div className="flex space-x-[23px] px-[15.53px]">
          <div className="text-[#72757A] text-[12px]">
            <h4>Volatility</h4>
            <h2 className="text-[#4D4D4D] font-[700] capitalize">
              {data?.volatility}
            </h2>
          </div>
          <div className="text-[#72757A] text-[12px]">
            <h4>RTP</h4>
            <h2 className="text-[#4D4D4D] font-[700]">{data?.rtp ?? 0} %</h2>
          </div>
          <div className="text-[#72757A] text-[12px]">
            <h4>Maxwin</h4>
            <h2 className="text-[#4D4D4D] font-[700]">x{data?.maxwin ?? 0}</h2>
          </div>
          <div className="text-[#72757A] text-[12px]">
            <h4>Betways</h4>
            <h2 className="text-[#4D4D4D] font-[700]">{data?.betways ?? 0}</h2>
          </div>
        </div>
        <button
          className="absolute -right-[15.5px] -bottom-[px]"
          onClick={() => window.open(data?.url, '_blank')}
        >
          <div className="right-1/2 absolute top-1/2 transform translate-x-1/2 -translate-y-1/2 text-white">
            <div className=" flex flex-col  space-y-[25px]">
              <h1
                style={{ textShadow: '0px 0px 10px white' }}
                className="absolute font-[700] text-[15px]  "
              >
                PLAY
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="10"
                viewBox="0 0 29 10"
                fill="none"
              >
                <path
                  d="M5.70764 4.81823H26.9064M26.9064 4.81823L23.1683 1.08005M26.9064 4.81823L23.1683 8.55641"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="1.35107" cy="4.81824" r="1" fill="white" />
              </svg>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="102"
            height="98"
            viewBox="0 0 102 98"
            fill="none"
          >
            <g filter="url(#filter0_d_1328_1266)">
              <path
                d="M26.587 30.6553C29.1973 19.3027 39.3024 11.2573 50.9513 11.2573H86.0619L86.0619 53.99C86.0619 67.7972 74.869 78.9901 61.0619 78.9901H15.4735L26.587 30.6553Z"
                fill="#FBA10F"
              />
              <path
                d="M26.587 30.6553C29.1973 19.3027 39.3024 11.2573 50.9513 11.2573H86.0619L86.0619 53.99C86.0619 67.7972 74.869 78.9901 61.0619 78.9901H15.4735L26.587 30.6553Z"
                fill="url(#paint0_radial_1328_1266)"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1328_1266"
                x="0.473511"
                y="0.257324"
                width="100.588"
                height="97.7327"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="7.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.988235 0 0 0 0 0.615686 0 0 0 0 0.0196078 0 0 0 0.75 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1328_1266"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1328_1266"
                  result="shape"
                />
              </filter>
              <radialGradient
                id="paint0_radial_1328_1266"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(58.5546 70.6322) rotate(-90) scale(46.8013 66.0646)"
              >
                <stop stopColor="#FFE53F" />
                <stop offset="0.61488" stopColor="#FFE53F" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GameCard;
