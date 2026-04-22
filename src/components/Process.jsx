import { motion } from "framer-motion";
import { MessageCircle, PenTool, Hammer, Key } from "lucide-react";
import { siteConfig } from "../config/site";

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
          <h2 className="text-[#1A1A1A] text-3xl md:text-4xl font-bold">
            De la idea a tu negocio abierto,{" "}
            <span className="text-[#E07A5F]">en 4 pasos</span>
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
                    <Icon className="w-8 h-8 text-[#E07A5F]" />
                  </div>
                  <h3 className="mt-6 font-bold text-[#1A1A1A]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B7280] leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative">
          <div className="absolute left-[29px] top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.number}
                  className="flex gap-5 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-[60px] h-[60px] rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 relative z-10 border-4 border-white">
                    <Icon className="w-5 h-5 text-[#E07A5F]" />
                  </div>
                  <div>
                    <span className="text-[#E07A5F] text-xs font-bold">
                      PASO {step.number}
                    </span>
                    <h3 className="font-bold text-[#1A1A1A] mt-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
