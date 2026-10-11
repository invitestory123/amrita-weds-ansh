import { couple } from "@/lib/wedding";
import { Heart } from "lucide-react";

export function TwoStatesStory() {
  return (
    <section className="relative px-5 py-14 sm:py-18 overflow-hidden">
      {/* Background ambient warmth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-lg text-center">
        {/* Soft Golden Flourish Icon */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#b8860b]/50" />
          <Heart className="h-4 w-4 text-[#b8860b] fill-[#b8860b]/20" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#b8860b]/50" />
        </div>

        {/* Section Title */}
        <h2 className="font-cinzel text-2xl sm:text-3xl font-normal text-[#2c241d] tracking-wider uppercase">
          {couple.storyTitle}
        </h2>

        {/* Story Body Card */}
        <div className="mt-5 p-6 sm:p-8 rounded-2xl bg-[#fffdfa]/80 border border-[#d4af37]/35 shadow-[0_10px_32px_rgba(180,140,50,0.08)] backdrop-blur-xs">
          <p className="font-display text-base sm:text-lg leading-relaxed sm:leading-loose text-[#544434] italic">
            &ldquo;{couple.storyText}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
