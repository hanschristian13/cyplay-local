/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoCyPlay from '@/public/assets/logo-black.svg';
import { IoSearch } from 'react-icons/io5';
import Modal from './modal';
import { RxCross2 } from 'react-icons/rx';
import { __GAME_LIST__ } from '@/constant';
import GameCard from './game-card';
import { getImageSrc } from '@/lib/helper';
import ModalDetail from './modal-detail';
//import BurgerMenu from '@/components/burger-menu';

const useGameSearch = (query: string) => {
  return useMemo(() => {
    if (!query) {
      return [];
    }

    const normalizedQuery = query.trim().toLowerCase().replace(/\s+/g, '_');

    if (!normalizedQuery) return __GAME_LIST__;

    return __GAME_LIST__
      .map((category) => {
        const categoryMatch = category.category
          .toLowerCase()
          .includes(normalizedQuery);

        const matchingGames = category.games.filter((game) =>
          game.key.toLowerCase().includes(normalizedQuery)
        );

        if (categoryMatch || matchingGames.length > 0) {
          return categoryMatch ? category.games : matchingGames;
        }

        return null;
      })
      .filter(Boolean)

      ?.reduce((acc: any, games: any) => [...acc, ...games], []); // Flatten the array of arrays and remove nulls
    // remove nulls
  }, [query]);
};
const Header = () => {
  const [query, setQuery] = useState('');
  const filteredCategories = useGameSearch(query);
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState<any>(null);

  return (
    <>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <div className="p-[23px] text-[#4D4D4D] space-y-[8px] max-w-[640px] mx-auto">
          <div className="flex space-x-[4px] items-center">
            <button
              onClick={() => setModal(false)}
              className="w-[28px] h-[28px] flex items-center justify-center border border-[#4D4D4D] rounded-full"
            >
              <RxCross2 size={20} />
            </button>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search Games..."
              className="border px-[10px] font-bold py-[3px] border-[#4D4D4D] rounded-full flex-1 text-[13px] outline-none placeholder:font-normal"
            />
          </div>
          {filteredCategories?.map((game) => (
            <GameCard
              data={game}
              key={game?.key}
              imageSrc={getImageSrc(game?.key)}
              title={game?.key}
              onSelectDetail={() => {
                setDetails(game);
              }}
            />
          ))}
        </div>
      </Modal>
      <ModalDetail
        isOpen={!!details}
        onClose={() => setDetails(null)}
        data={details}
      />
      <header className="px-[22.78px] h-[72.67px] absolute top-0  shadow-background shadow-lg w-screen bg-background backdrop-blur-xl flex items-center justify-between  z-30 sticky top-0 ">
        <div className="relative aspect-[89/29] h-[37px] w-[111px]">
          <Link href={'/'}>
            <Image
              alt="logo cyplay"
              src={logoCyPlay.src}
              fill
              sizes="100vw"
              style={{
                objectFit: 'contain',
              }}
            />
          </Link>
        </div>

        <button
          onClick={() => setModal(true)}
          className="text-[#4D4D4D] rounded-full w-[28px] h-[28px] flex items-center border border-[#4D4D4D] justify-center bg-[#F5F5F5]"
        >
          <IoSearch />
        </button>
        {/* <BurgerMenu /> */}
      </header>
    </>
  );
};

export default Header;
