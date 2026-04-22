import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "../config/site";

export default function WhyUs() {
  const { whyUsItems } = siteConfig;

  return (
    <section id="whyus" className="py-20 md:py-28 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Imagen izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000"
                alt="Local moderno remodelado"
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
            <h2 className="text-[#1A1A1A] text-3xl md:text-4xl font-bold mb-8">
              ¿Por qué <span className="text-[#E07A5F]">nos eligen</span>?
            </h2>

            <div className="space-y-5">
              {whyUsItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#E07A5F]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#E07A5F]" />
                  </div>
                  <p className="text-[#1A1A1A] text-base leading-relaxed">
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
