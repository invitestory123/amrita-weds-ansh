import { events, downloadICS } from "@/lib/wedding";
import { Calendar, MapPin, Navigation, Clock } from "lucide-react";

export function CelebrationsTimeline() {
  return (
    <section className="relative px-4 py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[#8c6f37] font-medium">
            Wedding Itinerary
          </p>
          <h2 className="mt-2 font-cinzel text-3xl sm:text-4xl font-normal text-[#2c241d] tracking-wider uppercase">
            The Celebrations
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6b5842] max-w-md mx-auto">
            Celebrations across two heritage cities: Bengaluru &amp; Vadodara
          </p>
        </div>

        {/* 3 Event Cards with Portrait Artworks */}
        <div className="space-y-8 sm:space-y-10">
          {events.map((ev, index) => (
            <article
              key={ev.id}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#fffdfa] via-[#fcf8f0] to-[#f9f2e3] border border-[#d4af37]/45 shadow-[0_16px_40px_rgba(180,140,50,0.12)] transition-all duration-300 hover:shadow-[0_22px_50px_rgba(180,140,50,0.18)] hover:-translate-y-1 flex flex-col md:flex-row group"
            >
              {/* Event Artwork Image - Accommodates full vertical portrait */}
              {ev.imageUrl && (
                <div className="relative w-full md:w-[42%] lg:w-[40%] shrink-0 overflow-hidden bg-[#faf6ee] min-h-[380px] sm:min-h-[420px] md:min-h-[440px] flex items-center justify-center">
                  <img
                    src={ev.imageUrl}
                    alt={`${ev.name} celebration`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle decorative overlays */}
                  <div className="hidden md:block absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#fffdfa] to-transparent pointer-events-none" />
                  <div className="md:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fffdfa] to-transparent pointer-events-none" />

                  {/* Floating Date Badge */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1a1f1a]/85 text-[#f5e297] border border-[#d4af37]/60 shadow-md backdrop-blur-md">
                    {ev.dayNumber} Nov 2026
                  </div>

                  {/* City Pill */}
                  <div className="absolute bottom-4 left-4 px-3.5 py-1 rounded-full text-[0.68rem] uppercase tracking-wider bg-[#1a1f1a]/85 text-[#fcf9f0] border border-[#d4af37]/50 backdrop-blur-md">
                    {ev.city}
                  </div>
                </div>
              )}

              {/* Event Information */}
              <div className="flex-1 p-6 sm:p-7 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Event Header */}
                  <div className="flex items-center justify-between border-b border-[#d4af37]/25 pb-3.5">
                    <div>
                      <span className="font-devanagari text-sm sm:text-base text-[#9a3412] font-semibold tracking-wider">
                        {ev.hindi}
                      </span>
                      <h3 className="mt-1 font-cinzel text-2xl sm:text-3xl font-bold text-[#2c241d] tracking-wide">
                        {ev.name}
                      </h3>
                    </div>

                    <span className="h-9 w-9 rounded-full bg-[#f3ebd7] border border-[#b8860b]/40 text-[#996515] flex items-center justify-center font-cinzel text-xs sm:text-sm font-bold shadow-xs">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Timing & Venue details */}
                  <div className="mt-5 space-y-3 text-xs sm:text-sm text-[#4a3e30]">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-[#b8860b] shrink-0" />
                      <span className="font-medium text-[#2c241d]">
                        {ev.id === "wedding" ? ev.date : `${ev.date} · ${ev.time}`}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-[#b8860b] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#2c241d]">{ev.venueName}</p>
                        <p className="text-xs text-[#6b5842] leading-relaxed mt-0.5">{ev.address}</p>
                      </div>
                    </div>

                    {ev.note && (
                      <div className="mt-3 p-3 rounded-xl bg-[#faf5e8]/90 border border-[#d4af37]/30 text-xs text-[#705c43] leading-relaxed whitespace-pre-line">
                        {ev.note}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons: Open Maps & Add to Calendar */}
                <div className="mt-6 pt-4 border-t border-[#d4af37]/25 flex flex-wrap gap-2.5 sm:gap-3">
                  <a
                    href={ev.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-h-[42px] px-3.5 py-2 rounded-xl bg-[#2c332b] text-white text-xs uppercase font-medium tracking-wider flex items-center justify-center gap-1.5 shadow-xs hover:bg-[#1a211a] transition-colors whitespace-nowrap"
                  >
                    <Navigation className="h-3.5 w-3.5 text-[#d4af37] shrink-0" />
                    <span>Open Maps</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => downloadICS(ev.id)}
                    className="px-3.5 py-2 rounded-xl border border-[#b8860b] bg-white text-[#6b4f17] text-xs uppercase font-medium tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#faf6ee] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <span>Add to Calendar</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
