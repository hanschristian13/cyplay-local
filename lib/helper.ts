/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
// images list game
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

// images details header

import joss_joss_joss_header from '@/public/assets/details/joss_joss_joss.webp';
import energ_super_laga_header from '@/public/assets/details/energ_super_laga.webp';
import nabung_tap_tap_header from '@/public/assets/details/nabung_tap_tap.webp';
import gali_mania_header from '@/public/assets/details/gali_mania.webp';
import athena_vs_ares_header from '@/public/assets/details/athena_vs_ares.webp';
import olympus_risen_header from '@/public/assets/details/olympus_risen.webp';
import zeus_legacy_header from '@/public/assets/details/zeus_legacy.webp';
import cop_buddies_header from '@/public/assets/details/cop_buddies.webp';

import coc_reborn_header from '@/public/assets/details/coc_reborn.webp';
import clash_heroes_header from '@/public/assets/details/clash_heroes.webp';

import coc_header from '@/public/assets/details/coc.webp';
import ahri_header from '@/public/assets/details/ahri.webp';
import akali_header from '@/public/assets/details/akali.webp';
import arcane_header from '@/public/assets/details/arcane.webp';
import evelynn_header from '@/public/assets/details/evelynn.webp';
import hayabusa_header from '@/public/assets/details/hayabusa.webp';
import kagura_header from '@/public/assets/details/kagura.webp';
import kaisa_header from '@/public/assets/details/kaisa.webp';
import nasus_header from '@/public/assets/details/nasus.webp';
import seraphine_header from '@/public/assets/details/seraphine.webp';
import dota_header from '@/public/assets/details/dota.webp';
import caesar_header from '@/public/assets/details/caesar.webp';
import shogun_header from '@/public/assets/details/shogun.webp';
import pharaoh_header from '@/public/assets/details/pharaoh.webp';
import commando_header from '@/public/assets/details/commando.webp';
import gold_rush_header from '@/public/assets/details/gold_rush.webp';
import speed_and_fury_header from '@/public/assets/details/speed_and_fury.webp';
import wild_catch_header from '@/public/assets/details/wild_catch.webp';

// images preview
import coc_reborn_preview from '@/public/assets/details/preview/coc_reborn.webp';
import clash_heroes_preview from '@/public/assets/details/preview/clash_heroes.webp';
import joss_joss_joss_preview from '@/public/assets/details/preview/joss_joss_joss.webp';
import energ_super_laga_preview from '@/public/assets/details/preview/energ_super_laga.webp';
import nabung_tap_tap_preview from '@/public/assets/details/preview/nabung_tap_tap.webp';
import gali_mania_preview from '@/public/assets/details/preview/gali_mania.webp';
import athena_vs_ares_preview from '@/public/assets/details/preview/athena_vs_ares.webp';
import olympus_risen_preview from '@/public/assets/details/preview/olympus_risen.webp';
import zeus_legacy_preview from '@/public/assets/details/preview/zeus_legacy.webp';
import cop_buddies_preview from '@/public/assets/details/preview/cop_buddies.webp';
import coc_preview from '@/public/assets/details/preview/coc.webp';
import ahri_preview from '@/public/assets/details/preview/ahri.webp';
import akali_preview from '@/public/assets/details/preview/akali.webp';
import arcane_preview from '@/public/assets/details/preview/arcane.webp';
import evelynn_preview from '@/public/assets/details/preview/evelynn.webp';
import hayabusa_preview from '@/public/assets/details/preview/hayabusa.webp';
import kagura_preview from '@/public/assets/details/preview/kagura.webp';
import kaisa_preview from '@/public/assets/details/preview/kaisa.webp';
import nasus_preview from '@/public/assets/details/preview/nasus.webp';
import seraphine_preview from '@/public/assets/details/preview/seraphine.webp';
import dota_preview from '@/public/assets/details/preview/dota.webp';

import caesar_preview from '@/public/assets/details/preview/caesar.webp';
import shogun_preview from '@/public/assets/details/preview/shogun.webp';
import pharaoh_preview from '@/public/assets/details/preview/pharaoh.webp';
import commando_preview from '@/public/assets/details/preview/commando.webp';
import gold_rush_preview from '@/public/assets/details/preview/gold_rush.webp';
import speed_and_fury_preview from '@/public/assets/details/preview/speed_and_fury.webp';
import wild_catch_preview from '@/public/assets/details/preview/wild_catch.webp';
import { useEffect } from 'react';

export const useDisableBodyScroll = (isActive: boolean) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isActive]);
};

export const getImageSrc = (key: string) => {
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
    // details header
    joss_joss_joss_header,
    energ_super_laga_header,
    nabung_tap_tap_header,
    gali_mania_header,
    athena_vs_ares_header,
    olympus_risen_header,
    zeus_legacy_header,
    cop_buddies_header,
    coc_reborn_header,
    clash_heroes_header,
    coc_header,
    ahri_header,
    akali_header,
    arcane_header,
    evelynn_header,
    hayabusa_header,
    kagura_header,
    kaisa_header,
    nasus_header,
    seraphine_header,
    dota_header,
    caesar_header,
    shogun_header,
    pharaoh_header,
    commando_header,
    gold_rush_header,
    speed_and_fury_header,
    wild_catch_header,

    // preview
    joss_joss_joss_preview,
    energ_super_laga_preview,
    nabung_tap_tap_preview,
    gali_mania_preview,
    athena_vs_ares_preview,
    olympus_risen_preview,
    zeus_legacy_preview,
    cop_buddies_preview,
    coc_reborn_preview,
    clash_heroes_preview,
    coc_preview,
    ahri_preview,
    akali_preview,
    arcane_preview,
    evelynn_preview,
    hayabusa_preview,
    kagura_preview,
    kaisa_preview,
    nasus_preview,
    seraphine_preview,
    dota_preview,
    caesar_preview,
    shogun_preview,
    pharaoh_preview,
    commando_preview,
    gold_rush_preview,
    speed_and_fury_preview,
    wild_catch_preview,
  };
  return images[key] || '';
};
