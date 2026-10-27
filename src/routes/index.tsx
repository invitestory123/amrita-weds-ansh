import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { Reveal } from "@/components/wedding/Section";
import { TwoStatesStory } from "@/components/wedding/TwoStatesStory";
import { CelebrationsTimeline } from "@/components/wedding/CelebrationsTimeline";
import { WishLantern } from "@/components/wedding/WishLantern";
import { WeddingFooter } from "@/components/wedding/WeddingFooter";
import { InvitationOpener } from "@/components/wedding/InvitationOpener";
import { BackgroundMusic } from "@/components/wedding/BackgroundMusic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Amrutha & Ansh | Wedding Invitation · 22 Nov 2026",
      },
      {
        name: "description",
        content:
          "Together with their families, Amrutha and Ansh invite you to their wedding in Bengaluru on 22 Nov 2026.",
      },
      {
        property: "og:title",
        content: "Amrutha & Ansh | Wedding Invitation · 22 Nov 2026",
      },
      {
        property: "og:description",
        content:
          "Wedding & Muhurtham in Bengaluru (22 Nov 2026).",
      },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:secure_url", content: "/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Amrutha & Ansh Wedding Invitation",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Amrutha & Ansh | Wedding Invitation · 22 Nov 2026",
      },
      {
        name: "twitter:description",
        content:
          "Wedding & Muhurtham in Bengaluru (22 Nov 2026).",
      },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: InvitationPage,
});

function InvitationPage() {
  return (
    <main className="paper overflow-x-hidden min-h-screen text-[#2c241d] selection:bg-[#d4af37]/30">
      {/* Background Music Player (Kesariya Instrumental Loop) */}
      <BackgroundMusic />

      {/* Royal Seal Curtain Opener */}
      <InvitationOpener />

      {/* Hero Section with Parents and Couple */}
      <Hero />

      {/* Two States, One Heartbeat Story Section */}
      <Reveal>
        <TwoStatesStory />
      </Reveal>

      {/* Complete Celebrations & Itinerary Timeline */}
      <Reveal>
        <CelebrationsTimeline />
      </Reveal>

      {/* Interactive Wishes Ceremony */}
      <Reveal>
        <WishLantern />
      </Reveal>

      {/* Wedding Footer with Share, WhatsApp, and Calendar */}
      <WeddingFooter />
    </main>
  );
}
