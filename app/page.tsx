/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
// import AthenaAres from '@/components/section/legends/athena-ares';
// import ZeusLegacy from '@/components/section/legends/zeus-legacy';
// import OlympusRisen from '@/components/section/legends/olympus-risen';
// import CopBuddies from '@/components/section/blockbuster/cop-buddies';
// import SpeedAndFury from '@/components/section/blockbuster/speed-and-fury';
// import WildCatch from '@/components/section/casual/wild-catch';
// import JossJossJoss from '@/components/section/indo-local/joss-joss-joss';
// //import ComingSoon from "@/components/section/coming-soon";

// import Ahri from '@/components/section/reskin/ahri';
// import Akali from '@/components/section/reskin/akali';
// import Arcane from '@/components/section/reskin/arcane';
// import Evelynn from '@/components/section/reskin/evelynn';
// import Hayabusa from '@/components/section/reskin/hayabusa';
// import Kagura from '@/components/section/reskin/kagura';
// import Kaisa from '@/components/section/reskin/kaisa';
// import Nasus from '@/components/section/reskin/nasus';
// import Seraphine from '@/components/section/reskin/seraphine';
// import Commando from '@/components/section/blockbuster/commando';
// import GoldRushShowdown from '@/components/section/blockbuster/gold-rush-showdown';
// import Caesar from '@/components/section/empire/caecar';
// import Pharaoh from '@/components/section/empire/pharaoh';
// import Shogun from '@/components/section/empire/shogun';
// import EnergSuperLaga from '@/components/section/indo-local/energ-super-laga';
// import GaliMania from '@/components/section/indo-local/gali-mania';
// import NabungTapTap from '@/components/section/indo-local/nabung-tap-tap';
// import ClashHeroes from '@/components/section/supercell/clash-heroes';
// import Coc from '@/components/section/supercell/coc';
// import CocReborn from '@/components/section/supercell/coc-reborn';
// import Dota from '@/components/section/campaign/dota';
import Slider1 from '@/public/assets/slider/1.webp';
import Slider2 from '@/public/assets/slider/2.webp';
import Slider3 from '@/public/assets/slider/3.webp';
import Slider4 from '@/public/assets/slider/4.webp';
import Slider5 from '@/public/assets/slider/5.webp';
import Slider6 from '@/public/assets/slider/6.webp';
import Slider7 from '@/public/assets/slider/7.webp';

import athena_vs_ares from '@/public/assets/gamelist/athena_vs_ares.webp';
import olympus_risen from '@/public/assets/gamelist/olympus_risen.webp';
import zeus_legacy from '@/public/assets/gamelist/zeus_legacy.webp';
import cop_buddies from '@/public/assets/gamelist/cop_buddies.webp';
import joss_joss_joss from '@/public/assets/gamelist/joss_joss_joss.webp';
import energ_super_laga from '@/public/assets/gamelist/energ_super_laga.webp';
import nabung_tap_tap from '@/public/assets/gamelist/nabung_tap_tap.webp';
import gali_mania from '@/public/assets/gamelist/gali_mania.webp';
import coc_reborn from '@/public/assets/gamelist/coc_reborn.webp';
import clash_heroes from '@/public/assets/gamelist/clash_heroes.webp';
import coc from '@/public/assets/gamelist/coc.webp';
import ahri from '@/public/assets/gamelist/ahri.webp';
import akali from '@/public/assets/gamelist/akali.webp';
import arcane from '@/public/assets/gamelist/arcane.webp';
import evelynn from '@/public/assets/gamelist/evelynn.webp';
import hayabusa from '@/public/assets/gamelist/hayabusa.webp';
import kagura from '@/public/assets/gamelist/kagura.webp';
import kaisa from '@/public/assets/gamelist/kaisa.webp';
import nasus from '@/public/assets/gamelist/nasus.webp';
import seraphine from '@/public/assets/gamelist/seraphine.webp';
import dota from '@/public/assets/gamelist/dota.webp';

import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { __GAME_LIST__ } from '@/constant';
import { Suspense } from 'react';

const GameCard = ({ imageSrc, title }: { imageSrc: string; title: string }) => {
  return (
    <div className="min-full relative">
      <Image src={imageSrc} alt={title} layout="responsive" />
      <div className="absolute bottom-0  w-full bg-white flex items-center justify-center rounded-b rounded-b-[25px] h-[58.7398px]">
        <div className="absolute -right-[15.5px] -bottom-[px]">
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
        </div>
      </div>
    </div>
  );
};

// const GameList = ({ selectedTab }: { selectedTab: CategoryType }) => {
//   const games = GAME_LIST[selectedTab] || {};

//   return (
//     <div className="grid grid-cols-2 gap-4 mt-4">
//       {Object.entries(games).map(([key, imageSrc]) => (
//         <GameCard
//           key={key}
//           imageSrc={imageSrc}
//           title={key.replace(/_/g, ' ')}
//         />
//       ))}
//     </div>
//   );
// };
const Slider = () => {
  const images = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6,
    Slider7,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className="relative w-full  overflow-x-hidden isolation"
      onTouchStart={(e) => {
        const touchStartX = e.touches[0].clientX;
        e.currentTarget.dataset.touchStartX = touchStartX.toString();
      }}
      onTouchEnd={(e) => {
        const touchStartX = parseFloat(
          e.currentTarget.dataset.touchStartX || '0'
        );
        const touchEndX = e.changedTouches[0].clientX;
        const touchDifference = touchStartX - touchEndX;

        if (touchDifference > 50) {
          // Swipe left
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (touchDifference < -50) {
          // Swipe right
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        }
      }}
    >
      <h3 className=" absolute top-[30px] text-[20px] text-[#4D4D4D] z-0">
        COMING <strong className="text-[#FBA10F]">SOON</strong>
      </h3>
      <div
        className="flex transition-transform duration-500 z-10"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={image}
              alt={`Slider ${index + 1}`}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-[25px] left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={` rounded-full ${
              currentIndex === index
                ? 'bg-[#FFFFFF] w-4 h-[5px]'
                : 'bg-[#00000080] w-[5px] h-[5px]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// type CategoryType =
//   | 'Legends'
//   | 'Blockbuster'
//   | 'Casual'
//   | 'Empire'
//   | 'Indo Local'
//   | 'SuperCell'
//   | 'Reskin'
//   | 'Campaign'
//   | 'Coming Soon';
// type GameComponents = { [key in CategoryType]: React.ReactNode[] };

function MainComponent() {
  const allCategories: { [key: string]: any } = {
    legends: 'Legends',
    blockbuster: 'Blockbuster',
    // casual: 'Casual',
    // empire: 'Empire',
    indo_local: 'Indo Local',
    // supercell: 'SuperCell',
    reskin: 'Reskin',
    // campaign: 'Campaign',
    // coming_soon: 'Coming Soon',
  };

  // const gamesByCategory: GameComponents = {
  //   Legends: [
  //     <AthenaAres key="athena" />,
  //     <ZeusLegacy key="zeus" />,
  //     <OlympusRisen key="olympus" />,
  //   ],
  //   Blockbuster: [<CopBuddies key="cop" />],
  //   Casual: [],
  //   Empire: [],
  //   'Indo Local': [
  //     <JossJossJoss key="joss" />,
  //     <EnergSuperLaga key="energ" />,
  //     <GaliMania key="gali" />,
  //     <NabungTapTap key="nabung" />,
  //   ],
  //   SuperCell: [
  //     <CocReborn key="cocreborn" />,
  //     <ClashHeroes key="clashheroes" />,
  //     <Coc key="coc" />,
  //   ],
  //   Reskin: [
  //     <Ahri key="ahri" />,
  //     <Akali key="akali" />,
  //     <Arcane key="arcane" />,
  //     <Evelynn key="evelynn" />,
  //     <Hayabusa key="hayabusa" />,
  //     <Kagura key="kagura" />,
  //     <Kaisa key="kaisa" />,
  //     <Nasus key="nasus" />,
  //     <Seraphine key="seraphine" />,
  //   ],
  //   Campaign: [<Dota key="dota" />],
  //   'Coming Soon': [
  //     <Caesar key="caesar" />,
  //     <Shogun key="shogun" />,
  //     <Pharaoh key="pharaoh" />,
  //     <GoldRushShowdown key="gold" />,
  //     <WildCatch key="wild" />,
  //     <SpeedAndFury key="speed" />,
  //     <Commando key="commando" />,
  //   ],
  // };

  // Filter out categories with no content
  // const categories = allCategories.filter(
  //   (category) => gamesByCategory[category].length > 0
  // );

  // const [activeTab, setActiveTab] = useState<CategoryType>(
  //   categories.length > 0 ? categories[0] : allCategories[0]
  // );

  // const getGames = (category: CategoryType) => {
  //   return gamesByCategory[category];
  // };

  const query = useSearchParams();
  const tab = query.get('tab');
  const selectedTab = tab ? (allCategories[tab] ? tab : 'legends') : 'legends';

  const getImageSrc = (key: string) => {
    const images: { [key: string]: any } = {
      athena_vs_ares,
      olympus_risen,
      zeus_legacy,
      cop_buddies,
      joss_joss_joss,
      energ_super_laga,
      nabung_tap_tap,
      gali_mania,
      coc_reborn,
      clash_heroes,
      coc,
      ahri,
      akali,
      arcane,
      evelynn,
      hayabusa,
      kagura,
      kaisa,
      nasus,
      seraphine,
      dota,
    };
    return images[key] || '';
  };

  const data = __GAME_LIST__?.find((x) => x.category === selectedTab);

  return (
    <>
      <div className="h-screen px-[23px] max-w-[640px]  mx-auto">
        <Slider />
        <div className="flex  w-full space-x-[22px] -mt-[15px]">
          {Object.keys(allCategories)?.map((key) => (
            <Link
              key={key}
              href={{ pathname: '/', query: { tab: key } }}
              passHref
            >
              <>
                <button
                  className={classNames(
                    'text-left flex-1 whitespace-nowrap relative transition-all duration-300',
                    selectedTab === key
                      ? 'text-[#4D4D4D] font-bold text-[15px]'
                      : 'text-[#72757A] text-[12px]'
                  )}
                >
                  {allCategories[key]}
                  <span
                    className={classNames(
                      'absolute -bottom-[10px] left-0 w-full h-[6px] rounded-full bg-[#FBA10F] transition-transform duration-300',
                      selectedTab === key ? 'scale-x-100' : 'scale-x-0'
                    )}
                    style={{
                      transformOrigin: 'left',
                    }}
                  />
                </button>
              </>
            </Link>
          ))}
        </div>

        <div className="flex flex-col space-y-[12.79px] py-[12.79px]">
          {data?.games?.map((game: any) => (
            <GameCard
              key={game?.key}
              title={game?.key}
              imageSrc={getImageSrc(game?.key)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

export default function Home() {
  return (
    <SuspenseWrapper>
      <MainComponent />
    </SuspenseWrapper>
  );
}
