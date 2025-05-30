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

import classNames from 'classnames';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { __GAME_LIST__ } from '@/constant';
import { Suspense } from 'react';

import { getImageSrc } from '@/lib/helper';
import Carousel from '@/components/carousel';
import ModalDetail from '@/components/modal-detail';
import GameCard from '@/components/game-card';

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

  const [isModalOpen, setModalOpen] = useState<any>(null);

  const clickedOnCarousel = (selected: any) => {
    const dataClicked = __GAME_LIST__
      ?.find((x) => x.category === 'comming_soon')
      ?.games?.find((x: any) => x?.key === selected);

    setModalOpen(dataClicked);
  };

  return (
    <>
      <ModalDetail
        isOpen={!!isModalOpen}
        onClose={() => setModalOpen(null)}
        data={isModalOpen}
      />
      <div className="min-h-screen px-[23px] max-w-[640px] mx-auto">
        <Carousel onClick={clickedOnCarousel} />
        <div className="flex w-screen max-w-[640px] mx-auto h-[60.882px] space-x-[22px] -mt-[15px] overflow-x-auto scrollbar-hide sticky top-[70px] z-10 bg-background -mx-[23px] px-[23px] pt-4">
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
