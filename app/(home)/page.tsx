/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
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

import { IoIosInformationCircleOutline } from 'react-icons/io';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { __GAME_LIST__ } from '@/constant';
import { Suspense } from 'react';

import { getImageSrc } from '@/lib/helper';
import Carousel from '@/components/carousel';
import ModalDetail from '@/components/modal-detail';

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
    <div className="min-w-full relative">
      <button
        onClick={onSelectDetail}
        className="absolute top-[24px] right-[10px]"
      >
        <IoIosInformationCircleOutline size={23} />
      </button>

      <Image src={imageSrc} alt={title} layout="responsive" />
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
                  stroke-width="2"
                  stroke-linecap="round"
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
    supercell: 'SuperCell',
    reskin: 'Reskin',
    campaign: 'Campaign',
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

  const data = __GAME_LIST__?.find((x) => x.category === selectedTab);

  const [isModalOpen, setModalOpen] = useState(null);

  return (
    <>
      <ModalDetail
        isOpen={!!isModalOpen}
        onClose={() => setModalOpen(null)}
        data={isModalOpen}
      />
      <div className="h-screen px-[23px] max-w-[640px] mx-auto">
        <Carousel />
        <div className="flex w-full h-[31.882px] space-x-[22px] -mt-[15px] !overflow-x-auto scrollbar-hide">
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
                      'absolute -bottom-[8px] left-1/2 transform -translate-x-1/2 w-[60%] h-[6px] rounded-full bg-[#FBA10F] transition-transform duration-300',
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

        <div className="flex flex-col space-y-[12.79px] py-[6.79px]">
          {data?.games?.map((game: any) => (
            <GameCard
              data={game}
              key={game?.key}
              title={game?.key}
              onSelectDetail={() => setModalOpen(game)}
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
