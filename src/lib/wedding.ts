export type WeddingEvent = {
  id: string;
  name: string;
  hindi: string;
  glyph: string;
  date: string;
  time: string;
  dayNumber: number;
  startISO: string;
  endISO: string;
  venueName: string;
  address: string;
  city: string;
  mapsUrl: string;
  note: string;
  cardHighlight?: string;
  imageUrl?: string;
};

export const couple = {
  bride: "Amrutha",
  groom: "Ansh",
  brideFirst: "Amrutha",
  groomFirst: "Ansh",
  brideParents: "Smt. A. Sandhya Prasad & Sri R. Venkatesh Prasad",
  groomParents: "Dr. Mona Shah & Dr. Haresh R. Shah",
  familyWarmRegards: ["Namratha V", "Dr. Ashka Shah", "Amith", "Rohith"],
  tagline: "Two States, One Heartbeat",
  storyTitle: "Two States, One Heartbeat",
  storyText:
    "We met far from home - two strangers from two different states finding each other in a new country. We found our wavelengths matching over endless conversations and shared experiences, and our two stories began threading into one. This November, our two families come together as one - and we would love for you to join in the celebrations.",
  primaryDateLabel: "Sunday, 22nd November 2026",
  receptionDateLabel: "Sunday, 29th November 2026",
  weddingISO: "2026-11-22T09:45:00+05:30",
  receptionISO: "2026-11-29T19:00:00+05:30",
  garbaISO: "2026-11-28T18:30:00+05:30",
  monogramUrl: "/images/monogram.png",
  portraitUrl: "/images/couple-portrait.jpg",
  proposalUrl: "/images/proposal-stage.png",
  heroCoupleUrl: "/images/hero-arch.png",
  weddingImageUrl: "/images/event-wedding.jpg",
  garbaImageUrl: "/images/event-garba.jpg",
  receptionImageUrl: "/images/event-reception.jpg",
  ogImageUrl: "/og-image.png",
  bgmUrl: "/audio/bgm.mp3",
};

export const events: WeddingEvent[] = [
  {
    id: "wedding",
    name: "Wedding",
    hindi: "शुभ विवाह",
    glyph: "☀",
    date: "Sunday, 22 November 2026",
    time: "9:45 AM - 10:15 AM",
    dayNumber: 22,
    startISO: "2026-11-22T09:45:00+05:30",
    endISO: "2026-11-22T13:30:00+05:30",
    venueName: "Brigade MLR Convention Centre",
    address: "7th Phase, J.P Nagar, Bengaluru - 560078",
    city: "Bengaluru",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brigade+MLR+Convention+Centre+JP+Nagar+Bengaluru",
    note: "Muhurtham : 9:45 to 10:15 AM\nLagna : Dhanur · Followed by Lunch",
    cardHighlight: "Sacred Vows & Muhurtham in Bengaluru",
    imageUrl: "/images/event-wedding.jpg",
  },
];

function icsStamp(d: Date) {
  return `${d.toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`;
}

export function buildICS(targetEventId?: string) {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "PRODID:-//Amrutha & Ansh//Wedding Invitation//EN",
  ];

  const selectedEvents = targetEventId ? events.filter((e) => e.id === targetEventId) : events;

  for (const ev of selectedEvents) {
    const start = new Date(ev.startISO);
    const end = new Date(ev.endISO);
    lines.push(
      "BEGIN:VEVENT",
      `UID:${ev.id}-amrutha-ansh-2026@wedding`,
      `DTSTAMP:${icsStamp(new Date())}`,
      `DTSTART:${icsStamp(start)}`,
      `DTEND:${icsStamp(end)}`,
      `SUMMARY:${ev.name} | ${couple.groomFirst} & ${couple.brideFirst}`,
      `LOCATION:${ev.venueName}, ${ev.address}`,
      `DESCRIPTION:${ev.name} of Amrutha V & Ansh Haresh Shah.\\nDate: ${ev.date} at ${ev.time}.\\nVenue: ${ev.venueName}, ${ev.address}\\nMaps: ${ev.mapsUrl}\\n${ev.note}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
    );
  }

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function downloadICS(eventId?: string) {
  const content = buildICS(eventId);
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const fileName = eventId
    ? `amrutha-ansh-${eventId}.ics`
    : "amrutha-ansh-wedding-celebrations.ics";
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
