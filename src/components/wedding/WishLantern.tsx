import { useRef, useState } from "react";

const lanternWithMonogram = "/images/watercolor-lantern.png";
const lanternsConstellation = "https://media.invitestory.in/seashell-vows/src/assets/lantern-constellation.png";

type ReleasedLantern = {
  id: number;
  x: number;
  drift: number;
  tilt: number;
  scale: number;
  duration: number;
  delay: number;
  blur: number;
  opacity: number;
  depth: "far" | "middle" | "near";
};

export function WishLantern() {
  const [released, setReleased] = useState<ReleasedLantern[]>([]);
  const [message, setMessage] = useState("Tap to fill the sky with lanterns.");
  const id = useRef(0);

  function releaseLanterns() {
    const batch: ReleasedLantern[] = Array.from({ length: 24 }, (_, index) => {
      const depth = index < 8 ? "far" : index < 18 ? "middle" : "near";
      const depthScale = depth === "far" ? 0.3 : depth === "middle" ? 0.58 : 0.92;
      return {
        id: id.current++,
        x: 5 + Math.random() * 90,
        drift: -90 + Math.random() * 180,
        tilt: -8 + Math.random() * 16,
        scale: depthScale * (0.78 + Math.random() * 0.42),
        duration: depth === "far" ? 7.4 : depth === "middle" ? 6.3 : 5.3,
        delay: Math.random() * 1.4,
        blur: depth === "far" ? 1.4 : depth === "middle" ? 0.45 : 0,
        opacity: depth === "far" ? 0.54 : depth === "middle" ? 0.78 : 1,
        depth,
      };
    });
    setReleased((current) => [...current.slice(-44), ...batch]);
    setMessage("The sky is glowing with warm wishes for Amrutha & Ansh ✨");
    window.setTimeout(() => {
      const batchIds = new Set(batch.map((entry) => entry.id));
      setReleased((current) => current.filter((entry) => !batchIds.has(entry.id)));
    }, 9000);
  }

  return (
    <section className="wish-sky relative isolate overflow-hidden px-6 py-20 text-center">
      {/* Background Lanterns constellation */}
      <img
        src={lanternsConstellation}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={1536}
        className="pointer-events-none absolute -right-24 -top-20 -z-10 h-[120%] w-auto opacity-50"
      />

      {/* Floating lanterns */}
      {released.map((entry) => (
        <img
          key={entry.id}
          src={lanternWithMonogram}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1536}
          className={`wish-lantern-flight pointer-events-none absolute bottom-[-13rem] w-24 ${
            entry.depth === "near" ? "z-20" : entry.depth === "middle" ? "z-10" : "z-0"
          }`}
          style={
            {
              left: `${entry.x}%`,
              opacity: entry.opacity,
              filter: `blur(${entry.blur}px) drop-shadow(0 12px 18px rgba(180,140,50,0.22))`,
              "--wish-tilt": `${entry.tilt}deg`,
              "--wish-drift": `${entry.drift}px`,
              "--wish-scale": entry.scale,
              "--wish-duration": `${entry.duration}s`,
              "--wish-delay": `${entry.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="mx-auto max-w-sm">
        {/* Monogrammed Watercolor Lantern */}
        <img
          src={lanternWithMonogram}
          alt="Glowing watercolor wedding lantern with monogram"
          loading="lazy"
          width={1024}
          height={1536}
          className="lantern-breathe mx-auto w-32 sm:w-36 object-contain drop-shadow-[0_16px_30px_rgba(180,140,50,0.3)]"
        />

        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-light text-[#2c241d] tracking-wide">
          Send them a wish
        </h2>

        <p className="mx-auto mt-2.5 max-w-xs text-sm sm:text-base leading-relaxed text-[#685848]">
          Release a sky full of light for their new beginning.
        </p>

        {/* Release Lanterns Button styled like the sample image */}
        <button
          type="button"
          onClick={releaseLanterns}
          className="press mt-7 flex min-h-[50px] w-full items-center justify-center rounded-sm bg-[#bda071] hover:bg-[#b09260] active:scale-[0.98] px-5 text-xs uppercase tracking-[0.22em] text-white font-medium shadow-[0_12px_28px_rgba(189,160,113,0.35)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bda071]"
        >
          Release lanterns
        </button>

        <p aria-live="polite" className="mt-3.5 min-h-5 text-xs text-[#8c7862] tracking-wide">
          {message}
        </p>
      </div>
    </section>
  );
}
