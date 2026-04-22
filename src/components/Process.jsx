import { motion } from "framer-motion";
import { MessageCircle, PenTool, Hammer, Key } from "lucide-react";
import { siteConfig } from "../config/site";
import { localeConfig } from "../config/locale";

const iconMap = {
  MessageCircle,
  PenTool,
  Hammer,
  Key,
};

export default function Process() {
  const { processSteps: steps } = siteConfig;

  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">
            {localeConfig.process.titleStart}{" "}
            <span className="bg-gradient-to-l from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {localeConfig.process.titleHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Desktop: horizontal with line */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-[60px] left-[12%] right-[12%] h-0.5 bg-gray-200" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.number}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Icon circle */}
                  <div className="w-[120px] h-[120px] mx-auto rounded-full bg-gray-100 flex items-center justify-center relative z-10 border-4 border-white">
                    <Icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="mt-6 font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[200px] text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: timeline con borde lógico (RTL/LTR) */}
        <div className="md:hidden space-y-10 border-s-2 border-gray-200 ps-10">
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.number}
                className="relative text-start"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute -start-[31px] top-0 z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full border-4 border-white bg-gray-100">
                  <Icon className="h-5 w-5 text-orange-500" />
                </div>
                <span className="text-xs font-bold text-orange-500">
                  {localeConfig.process.stepLabel} {step.number}
                </span>
                <h3 className="mt-1 font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
