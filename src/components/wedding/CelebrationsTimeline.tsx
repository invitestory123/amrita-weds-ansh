import { events, downloadICS } from "@/lib/wedding";
import { Calendar, MapPin, Navigation, Clock } from "lucide-react";

export function CelebrationsTimeline() {
  return (
    <section className="relative px-4 py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-xl">
        {/* Section Header - Clean & Minimal without Vishnu shloka or 3-days line */}
        <div className="text-center mb-10">
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

        {/* 3 Event Cards with Artistic Illustrations */}
        <div className="space-y-8">
          {events.map((ev, index) => (
            <article
              key={ev.id}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#fffcf7] to-[#fbf5e7] border border-[#d4af37]/40 shadow-[0_12px_36px_rgba(180,140,50,0.12)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Event Artwork Image */}
              {ev.imageUrl && (
                <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b border-[#d4af37]/30 bg-[#faf6ee]">
                  <img
                    src={ev.imageUrl}
                    alt={`${ev.name} celebration illustration`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-3 right-3 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#faf3e0]/95 text-[#854d0e] border border-[#d4af37]/50 shadow-sm backdrop-blur-xs">
                    {ev.dayNumber} Nov 2026
                  </div>

                  {/* City Pill */}
                  <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[0.68rem] uppercase tracking-wider bg-black/60 text-[#f5e297] border border-[#d4af37]/40 backdrop-blur-xs">
                    {ev.city}
                  </div>
                </div>
              )}

              <div className="p-5 sm:p-6">
                {/* Event Header */}
                <div className="flex items-center justify-between border-b border-[#d4af37]/25 pb-3">
                  <div>
                    <span className="font-devanagari text-sm text-[#9a3412] font-medium">
                      {ev.hindi}
                    </span>
                    <h3 className="mt-0.5 font-cinzel text-2xl font-bold text-[#2c241d]">
                      {ev.name}
                    </h3>
                  </div>

                  <span className="h-8 w-8 rounded-full bg-[#f3ebd7] border border-[#b8860b]/40 text-[#996515] flex items-center justify-center font-cinzel text-xs font-bold">
                    0{index + 1}
                  </span>
                </div>

                {/* Timing & Venue details */}
                <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#4a3e30]">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-[#b8860b] shrink-0" />
                    <span className="font-medium text-[#2c241d]">{ev.date} · {ev.time}</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 text-[#b8860b] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#2c241d]">{ev.venueName}</p>
                      <p className="text-xs text-[#6b5842] leading-relaxed mt-0.5">{ev.address}</p>
                    </div>
                  </div>

                  {ev.note && (
                    <div className="mt-2.5 p-2.5 rounded-lg bg-[#faf5e8] border border-[#d4af37]/25 text-xs text-[#705c43]">
                      {ev.note}
                    </div>
                  )}
                </div>

                {/* Action Buttons: Google Maps & Add to Calendar */}
                <div className="mt-5 pt-3 border-t border-[#d4af37]/25 flex flex-wrap gap-2.5">
                  <a
                    href={ev.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-h-[42px] px-4 py-2 rounded-xl bg-[#2c332b] text-white text-xs uppercase font-medium tracking-wider flex items-center justify-center gap-2 shadow-xs hover:bg-[#1a211a] transition-colors"
                  >
                    <Navigation className="h-3.5 w-3.5 text-[#d4af37]" />
                    <span>Open in Google Maps</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => downloadICS(ev.id)}
                    className="px-4 py-2 rounded-xl border border-[#b8860b] bg-white text-[#6b4f17] text-xs uppercase font-medium tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#faf6ee] transition-colors"
                  >
                    <Calendar className="h-3.5 w-3.5" />
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
