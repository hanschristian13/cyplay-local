'use client'

import AthenaAres from "@/components/section/athena-ares";
import ZeusLegacy from "@/components/section/zeus-legacy";
import OlympusRisen from "@/components/section/olympus-risen";
import CopBuddies from "@/components/section/cop-buddies";
import SpeedAndFury from "@/components/section/speed-and-fury";
import WildCatch from "@/components/section/wild-catch";
import JossJossJoss from "@/components/section/joss-joss-joss";
import ComingSoon from "@/components/section/coming-soon";
import About from "@/components/about";
import Transition from "@/components/transition";

export default function Home() {
  return (
    <Transition>
      <main className="flex flex-col gap-y-8 items-center">
        <AthenaAres />
        <ZeusLegacy />
        <OlympusRisen />
        <CopBuddies />
        {/* <SpeedAndFury /> */}
        {/* <WildCatch /> */}
        <JossJossJoss />
        <ComingSoon />
        <About />
      </main>
    </Transition>
  );
}
