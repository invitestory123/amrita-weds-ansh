import { couple } from "@/lib/wedding";
import { PetalTap } from "./PetalTap";
import { Sparkles, MapPin } from "lucide-react";

export function Hero() {
  return (
    <PetalTap>
      <header className="relative min-h-[96svh] overflow-hidden paper flex flex-col items-center justify-between px-4 pt-8 pb-12 text-center">
        {/* Soft Decorative Ambient Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#839482]/12 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
        </div>

        {/* Top: Auspicious Invocation & Monogram */}
        <div className="relative z-10 w-full max-w-lg pt-2">
          {/* Sacred Devanagari invocation */}
          <p className="font-devanagari text-xs sm:text-sm text-[#9a3412] tracking-widest animate-ink">
            ॥ श्री गणेशाय नमः ॥
          </p>

          {/* New Monogram - clean, natural, seamless without box */}
          <div className="mt-4 flex justify-center">
            <img
              src={couple.monogramUrl}
              alt="Amrutha & Ansh Monogram"
              className="h-28 w-28 sm:h-32 sm:w-32 object-contain drop-shadow-[0_4px_12px_rgba(180,140,50,0.15)] transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Centered Single Block of Parents under "Together with our families" */}
          <div className="mt-4">
            <p className="font-vibes text-2xl sm:text-3xl text-[#8c6f37]">
              Together with our families
            </p>

            <div className="mt-2.5 mx-auto max-w-md py-3 px-4 rounded-xl bg-white/60 border border-[#d4af37]/25 backdrop-blur-xs text-center space-y-1">
              <p className="font-display text-sm sm:text-base font-semibold text-[#2c241d] tracking-wide">
                {couple.brideParents}
              </p>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-[#b8860b] font-medium">
                &amp;
              </p>
              <p className="font-display text-sm sm:text-base font-semibold text-[#2c241d] tracking-wide">
                {couple.groomParents}
              </p>
            </div>
          </div>
        </div>

        {/* Centerpiece: Symmetrically Balanced AMRUTHA & ANSH (No Last Names) */}
        <div className="relative z-10 my-4 max-w-xl w-full">
          <p className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.35em] text-[#8c6f37]">
            Cordially invite you to celebrate the wedding of
          </p>

          <h1 className="mt-3 font-cinzel text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.14em] text-[#231d16] uppercase leading-tight">
            <span>AMRUTHA</span>
            <span className="inline-block mx-2.5 sm:mx-4 font-cinzel text-xl sm:text-3xl text-[#b8860b] font-normal">
              &amp;
            </span>
            <span>ANSH</span>
          </h1>
        </div>


        {/* Bottom Dates & Replay Button */}
        <div className="relative z-10 mt-2 w-full max-w-md">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs font-medium text-[#4a3e30]">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fbf5e7] border border-[#d4af37]/40 shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-[#b8860b]" />
              <span>
                <strong>Bengaluru:</strong> 22nd Nov 2026
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fbf5e7] border border-[#d4af37]/40 shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-[#b8860b]" />
              <span>
                <strong>Vadodara:</strong> 28th &amp; 29th Nov 2026
              </span>
            </div>
          </div>

          <div className="mt-3.5 flex justify-center">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("replay-wedding-opener"))}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#fbf5e7]/90 hover:bg-[#f5e9ce] border border-[#d4af37]/60 text-xs font-serif text-[#7a5c1a] shadow-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#b8860b]" />
              <span>Replay Entry Video</span>
            </button>
          </div>

          <p className="mt-3 text-[0.62rem] uppercase tracking-widest text-[#8c6f37]/80">
            Tap anywhere to shower rose petals
          </p>
        </div>
      </header>
    </PetalTap>
  );
}
