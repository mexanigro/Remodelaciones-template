import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "../config/site";
import { localeConfig } from "../config/locale";

export default function Testimonials() {
  const { testimonials } = siteConfig;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {localeConfig.testimonials.titleStart}{" "}
            <span className="bg-gradient-to-l from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {localeConfig.testimonials.titleHighlight}
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="relative rounded-3xl border border-black/5 bg-gradient-to-b from-white to-slate-50 p-8 shadow-[0_35px_120px_-75px_rgba(15,23,42,0.55)] md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Quote className="mb-4 h-10 w-10 text-orange-500/25" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-900 md:text-xl">
                "{t.text}"
              </p>

              <div className="mt-8 flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <p className="mt-3 font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-600">{t.business}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors hover:border-orange-200 hover:bg-orange-50"
            >
              {localeConfig.dir === "rtl" ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors hover:border-orange-200 hover:bg-orange-50"
            >
              {localeConfig.dir === "rtl" ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "w-6 bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 shadow-[0_14px_40px_-28px_rgba(249,115,22,0.55)]"
                    : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
