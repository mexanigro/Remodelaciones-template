import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";
import { siteConfig } from "../config/site";
import { localeConfig } from "../config/locale";

export default function Hero({ onOpenContact }) {
  const { brand, stats } = siteConfig;
  const [headlineStart = "", headlineEnd = ""] = brand.heroHeadline.split(
    localeConfig.heroHighlight
  );
  const [sliderPos, setSliderPos] = useState(52);
  const safeSliderPos = Math.max(sliderPos, 1);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const fromLeft = ((clientX - rect.left) / rect.width) * 100;
    const pct = fromLeft;
    setSliderPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const stop = () => {
      draggingRef.current = false;
    };
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!draggingRef.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!draggingRef.current) return;
    handleMove(e.touches[0].clientX);
  };

  const beginDrag = () => {
    draggingRef.current = true;
  };

  const scrollToPortfolio = () => {
    const el = document.querySelector("#portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const accentBtn =
    "group relative isolate overflow-hidden rounded-full bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 px-7 py-3.5 font-semibold text-white shadow-[0_18px_55px_-18px_rgba(249,115,22,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_65px_-18px_rgba(249,115,22,0.85)] active:translate-y-0";

  const ghostBtn =
    "rounded-full border border-slate-200/95 bg-white/85 px-7 py-3.5 font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-orange-200 hover:bg-white hover:text-slate-900 active:scale-[0.98]";

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden hero-backdrop"
    >
      {/* acento suave encima del fondo claro */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(251,146,60,0.11),transparent_52%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-24 md:px-6">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-6 lg:gap-14">
          {/* Copy */}
          <motion.div
            className="order-2 min-w-0 text-start lg:order-2 lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 md:text-4xl lg:text-[2.65rem]">
              {headlineStart}
              <span className="bg-gradient-to-l from-orange-300 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                {localeConfig.heroHighlight}
              </span>
              {headlineEnd}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              {brand.heroDescription}
            </p>

            <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:justify-end sm:gap-4">
              <button type="button" onClick={onOpenContact} className={`${accentBtn} w-full sm:w-auto`}>
                <span className="relative z-10">{localeConfig.buttons.freeConsultation}</span>
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.35),transparent_55%)]" />
              </button>
              <button type="button" onClick={scrollToPortfolio} className={`${ghostBtn} w-full sm:w-auto`}>
                {localeConfig.buttons.seeProjects}
              </button>
            </div>

            <div className="mt-10 flex w-full flex-wrap justify-end gap-6 md:gap-10">
              {stats.map((s, i) => (
                <div key={i} className="min-w-[5.5rem] text-start">
                  <p className="bg-gradient-to-l from-orange-300 via-orange-400 to-orange-600 bg-clip-text text-2xl md:text-3xl font-bold text-transparent">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 md:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Slider */}
          <motion.div
            className="order-1 min-w-0 lg:order-1 lg:col-span-4"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
          >
            <p className="mb-4 text-start text-sm leading-relaxed text-slate-600 md:text-base">
              {localeConfig.hero.sliderHint}
            </p>

            <div
              ref={containerRef}
              className="relative aspect-[16/10] w-full max-w-full cursor-ew-resize select-none overflow-hidden rounded-3xl ring-1 ring-slate-900/10 shadow-[0_40px_100px_-48px_rgba(15,23,42,0.35)] touch-pan-x min-h-[min(56vw,420px)] sm:min-h-[min(72vw,520px)] md:aspect-[16/9] md:min-h-0 lg:aspect-[2/1] lg:min-h-[min(72vw,620px)]"
              onMouseMove={handleMouseMove}
              onMouseUp={() => {
                draggingRef.current = false;
              }}
              onMouseLeave={() => {
                draggingRef.current = false;
              }}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => {
                draggingRef.current = false;
              }}
            >
              {/* After (background) */}
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600"
                alt={localeConfig.hero.afterAlt}
                className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
                draggable={false}
              />

              {/* Before (clipped) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${safeSliderPos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=85&w=1600"
                  alt={localeConfig.hero.beforeAlt}
                  className="absolute inset-0 h-full object-cover max-w-none"
                  style={{ width: `${(100 / safeSliderPos) * 100}%` }}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-amber-900/18" />
              </div>

              {/* Divider + handle */}
              <div
                className="absolute top-0 bottom-0 z-20 w-[3px] bg-gradient-to-b from-white/15 via-white to-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
                style={{ left: `${safeSliderPos}%`, transform: "translateX(-50%)" }}
              >
                <button
                  type="button"
                  aria-label={localeConfig.a11y.sliderThumb}
                  className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-[0_18px_55px_-18px_rgba(0,0,0,0.65)] ring-4 ring-orange-400/35 transition-transform duration-200 hover:scale-105 active:scale-95"
                  onMouseDown={beginDrag}
                  onTouchStart={beginDrag}
                >
                  <GripVertical className="h-6 w-6 opacity-80" />
                </button>
              </div>

              {/* Edge cues */}
              <div className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-full bg-black/55 px-3 py-1.5 text-[11px] font-semibold text-white/92 backdrop-blur-md">
                {localeConfig.hero.sliderCueBefore}
              </div>
              <div className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full bg-black/55 px-3 py-1.5 text-[11px] font-semibold text-white/92 backdrop-blur-md">
                {localeConfig.hero.sliderCueAfter}
              </div>

              {/* Top chips */}
              <span className="absolute top-4 left-4 z-10 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                {localeConfig.hero.beforeLabel}
              </span>
              <span className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-l from-orange-500 to-orange-600 px-3 py-1 text-[11px] font-semibold text-white shadow-lg">
                {localeConfig.hero.afterLabel}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
