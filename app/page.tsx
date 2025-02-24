'use client'

import { useState } from 'react';
import AthenaAres from "@/components/section/legends/athena-ares";
import ZeusLegacy from "@/components/section/legends/zeus-legacy";
import OlympusRisen from "@/components/section/legends/olympus-risen";
import CopBuddies from "@/components/section/blockbuster/cop-buddies";
import SpeedAndFury from "@/components/section/blockbuster/speed-and-fury";
import WildCatch from "@/components/section/casual/wild-catch";
import JossJossJoss from "@/components/section/indo-local/joss-joss-joss";
//import ComingSoon from "@/components/section/coming-soon";
import About from "@/components/about";
import Transition from "@/components/transition";
import Ahri from "@/components/section/reskin/ahri";
import Akali from "@/components/section/reskin/akali";
import Arcane from "@/components/section/reskin/arcane";
import ClashHeroes from "@/components/section/reskin/clash-heroes";
import Coc from "@/components/section/reskin/coc";
import Evelynn from "@/components/section/reskin/evelynn";
import Hayabusa from "@/components/section/reskin/hayabusa";
import Kagura from "@/components/section/reskin/kagura";
import Kaisa from "@/components/section/reskin/kaisa";
import Nasus from "@/components/section/reskin/nasus";
import Seraphine from "@/components/section/reskin/seraphine";
/*
import Commando from '@/components/section/blockbuster/commando';
import GoldRushShowdown from '@/components/section/blockbuster/gold-rush-showdown';
import Caesar from '@/components/section/empire/caecar';
import Pharaoh from '@/components/section/empire/pharaoh';
import Shogun from '@/components/section/empire/shogun';
import EnergSuperLaga from '@/components/section/indo-local/energ-super-laga';
import GaliMania from '@/components/section/indo-local/gali-mania';
import NabungTapTap from '@/components/section/indo-local/nabung-tap-tap';
*/

type CategoryType = 'Legends' | 'Blockbuster' | 'Casual' | 'Empire' | 'Indo Local' | 'Reskin' | 'Coming Soon';
type GameComponents = { [key in CategoryType]: React.ReactNode[] };

export default function Home() {
  const allCategories: CategoryType[] = ['Legends', 'Blockbuster', 'Casual', 'Empire', 'Indo Local', 'Reskin', 'Coming Soon'];
  
  const gamesByCategory: GameComponents = {
    "Legends": [<AthenaAres key="athena" />, <ZeusLegacy key="zeus" />, <OlympusRisen key="olympus" />],
    "Blockbuster": [<CopBuddies key="cop" />],
    "Casual": [],
    "Empire": [],
    "Indo Local": [<JossJossJoss key="joss" />],
    "Reskin": [<Ahri key="ahri" />, <Akali key="akali" />, <Arcane key="arcane" />, <ClashHeroes key="clashheroes" />, <Coc key="coc" />, <Evelynn key="evelynn" />, <Hayabusa key="hayabusa" />, <Kagura key="kagura" />, <Kaisa key="kaisa" />, <Nasus key="nasus" />, <Seraphine key="seraphine" />],
    //"Coming Soon": [<EnergSuperLaga key="energ" />, <GaliMania key="gali" />, <NabungTapTap key="nabung" />, <Caesar key="caesar" />, <Shogun key="shogun" />, <Pharaoh key="pharaoh" />, <GoldRushShowdown key="gold" />, <WildCatch key="wild" />, <SpeedAndFury key="speed" />, <Commando key="commando" />]
    "Coming Soon": [<WildCatch key="wild" />, <SpeedAndFury key="speed" />]
  };

  // Filter out categories with no content
  const categories = allCategories.filter(
    category => gamesByCategory[category].length > 0
  );
  
  const [activeTab, setActiveTab] = useState<CategoryType>(
    categories.length > 0 ? categories[0] : allCategories[0]
  );

  const getGames = (category: CategoryType) => {
    return gamesByCategory[category];
  };

  return (
    <Transition>
      <main className="flex flex-col items-center pt-[60px]">
        <div className="fixed top-[52px] left-0 right-0 backdrop-blur-sm bg-black/20 z-10">
          <div className="w-full relative">
            <div className="overflow-y-hidden overflow-x-auto scrollbar-hide touch-pan-x cursor-pointer">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex md:justify-center whitespace-nowrap">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-3 py-2 transition-colors text-center relative ${
                        activeTab === category 
                          ? 'text-[#FFFFFF] font-bold' 
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                      onClick={() => setActiveTab(category)}
                    >
                      {category}
                      {activeTab === category && (
                        <>
                          <div 
                            className="absolute bottom-0 left-0 w-full h-[2px]"
                            style={{
                              background: '#FFBC00',
                              boxShadow: '0 0 8px 2px rgba(255, 188, 0, 0.6)',
                            }}
                          />
                          <div className="absolute -bottom-[6px] left-1/2 transform -translate-x-1/2">
                            <div 
                              className="w-3 h-3 bg-[#FFBC00] rotate-45 transform"
                              style={{
                                boxShadow: '0 0 8px rgba(255, 188, 0, 0.6)',
                              }}
                            />
                          </div>
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-800/50" />
        </div>
        <div className="flex flex-col items-center w-full pt-[100px] relative mt-[-70px]">
          <div className="flex flex-col gap-y-8">
            {getGames(activeTab)}
          </div>
        </div>
        <About />
      </main>
    </Transition>
  );
}
