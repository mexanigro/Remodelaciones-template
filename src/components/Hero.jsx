import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

export default function Hero({ onOpenContact }) {
  const { brand, stats } = siteConfig;
  const [headlineStart = "", headlineEnd = ""] = brand.heroHeadline.split(
    "creamos tu apertura"
  );
  const [sliderPos, setSliderPos] = useState(50);
  const safeSliderPos = Math.max(sliderPos, 1);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback(
    (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = (x / rect.width) * 100;
      setSliderPos(Math.max(0, Math.min(100, pct)));
    },
    []
  );

  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e) => {
    if (isDragging.current) handleMove(e.clientX);
  };
  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const scrollToPortfolio = () => {
    const el = document.querySelector("#portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#1A1A1A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center w-full">
          {/* Texto - 40% */}
          <motion.div
            className="lg:col-span-2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {headlineStart}
              <span className="text-[#E07A5F]">creamos tu apertura</span>
              {headlineEnd}
            </h1>
            <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed">
              {brand.heroDescription}
            </p>

            {/* Botones */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenContact}
                className="bg-[#E07A5F] text-white px-6 py-3.5 rounded-lg font-medium hover:bg-[#c96a50] transition-colors text-center"
              >
                Pedí tu consulta gratuita
              </button>
              <button
                onClick={scrollToPortfolio}
                className="border border-white/30 text-white px-6 py-3.5 rounded-lg font-medium hover:border-white/60 transition-colors text-center"
              >
                Ver trabajos realizados
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-6 md:gap-10">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-[#E07A5F] text-2xl md:text-3xl font-bold">
                    {s.value}
                  </p>
                  <p className="text-white/50 text-xs md:text-sm mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Imagen con slider antes/después - 60% */}
          <motion.div
            className="lg:col-span-3 order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              {/* Imagen "después" (fondo) */}
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Después - Local remodelado"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {/* Imagen "antes" (capa superior, recortada) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${safeSliderPos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
                  alt="Antes - Obra en construcción"
                  className="absolute inset-0 h-full object-cover max-w-none"
                  style={{ width: `${(100 / safeSliderPos) * 100}%` }}
                  draggable={false}
                />
                {/* Overlay sepia para "antes" */}
                <div className="absolute inset-0 bg-amber-900/20" />
              </div>

              {/* Línea del slider */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                style={{ left: `${safeSliderPos}%`, transform: "translateX(-50%)" }}
              >
                {/* Handle */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center"
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleMouseDown}
                >
                  <div className="flex gap-0.5">
                    <div className="w-0.5 h-4 bg-gray-400" />
                    <div className="w-0.5 h-4 bg-gray-400" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <span className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full z-10">
                Antes
              </span>
              <span className="absolute top-4 right-4 bg-[#E07A5F]/90 text-white text-xs px-3 py-1 rounded-full z-10">
                Después
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
