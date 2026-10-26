import { couple } from "@/lib/wedding";
import { PetalTap } from "./PetalTap";
import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <PetalTap>
      <header className="relative min-h-[96svh] overflow-hidden paper flex flex-col items-center justify-start px-3 pt-2 pb-14 text-center select-none">
        {/* Soft Decorative Ambient Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 inset-x-0 h-72 bg-gradient-to-b from-[#839482]/10 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
        </div>

        {/* Top: Floral Arch with Monogram & Couple facing the sea */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto -mt-2">
          <div className="relative overflow-hidden">
            <img
              src={couple.heroCoupleUrl}
              alt="Amrutha & Ansh Wedding Arch"
              className="w-full h-auto object-contain max-h-[460px] sm:max-h-[500px] mx-auto select-none pointer-events-none drop-shadow-[0_8px_24px_rgba(180,140,50,0.08)]"
              loading="eager"
            />
          </div>
        </div>

        {/* Text Section: Matches uploaded design */}
        <div className="relative z-10 w-full max-w-lg mx-auto px-4 -mt-2 text-center flex flex-col items-center">
          {/* Script: Together with our families */}
          <p className="font-vibes text-3xl sm:text-4xl text-[#2b241e] tracking-wide">
            Together with our families
          </p>

          {/* Parents' names */}
          <div className="mt-3.5 space-y-1 font-display text-base sm:text-lg text-[#2c241d] leading-relaxed">
            <p className="font-semibold leading-snug">
              <span className="block sm:inline">Smt. A. Sandhya Prasad &amp;</span>{" "}
              <span className="inline-block whitespace-nowrap">Sri R. Venkatesh Prasad</span>
            </p>
            <p className="text-sm font-display italic text-[#8c6f37] my-0.5">&amp;</p>
            <p className="font-semibold">{couple.groomParents}</p>
          </div>

          {/* Invitation Callout */}
          <div className="mt-6 sm:mt-7 w-full">
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[#8c6f37] font-medium">
              INVITE YOU TO CELEBRATE THE WEDDING OF
            </p>

            {/* Couple Names */}
            <h1 className="mt-3 flex flex-col items-center leading-tight">
              <span className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-medium tracking-[0.14em] text-[#1c1814] uppercase">
                AMRUTHA
              </span>
              <span className="font-vibes text-2xl sm:text-4xl text-[#1c1814] font-normal my-0.5">
                &amp;
              </span>
              <span className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-medium tracking-[0.14em] text-[#1c1814] uppercase">
                ANSH
              </span>
            </h1>
          </div>

          {/* Date & Location Pill Badge */}
          <div className="mt-6 sm:mt-7 flex flex-col items-center gap-2.5 w-full">
            <div className="inline-flex items-center justify-center gap-2 py-2 px-5 sm:px-6 rounded-full bg-[#faf5e8]/95 border border-[#d4af37]/60 shadow-[0_2px_8px_rgba(212,175,55,0.08)] text-xs sm:text-sm font-display text-[#3d332a]">
              <MapPin className="h-3.5 w-3.5 text-[#8c6f37] shrink-0" />
              <span>
                <strong className="font-semibold text-[#2c241d]">Bengaluru:</strong> Sunday, 22nd Nov 2026
              </span>
            </div>
          </div>
        </div>
      </header>
    </PetalTap>
  );
}
