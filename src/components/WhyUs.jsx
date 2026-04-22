import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "../config/site";
import { localeConfig } from "../config/locale";

export default function WhyUs() {
  const { whyUsItems } = siteConfig;

  return (
    <section id="whyus" className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Imagen izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-3xl shadow-[0_35px_120px_-65px_rgba(15,23,42,0.55)] ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000"
                alt={localeConfig.whyUs.imageAlt}
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Diferenciadores derecha */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {localeConfig.whyUs.titleStart}{" "}
              <span className="bg-gradient-to-l from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {localeConfig.whyUs.titleHighlight}
              </span>
            </h2>

            <div className="space-y-5">
              {whyUsItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-row-reverse items-start gap-4 text-right"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/10 ring-1 ring-orange-500/15">
                    <Check className="h-3.5 w-3.5 text-orange-600" />
                  </div>
                  <p className="text-base leading-relaxed text-slate-800">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
