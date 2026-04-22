import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { siteConfig } from "../config/site";

export default function SplashScreen({ onComplete }) {
  const { brand } = siteConfig;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Verificar si ya se mostró en esta sesión
    const alreadyShown = sessionStorage.getItem("splashShown");
    if (alreadyShown) {
      setVisible(false);
      onComplete();
      return;
    }

    // Bloquear scroll mientras el splash está activo
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("splashShown", "true");
      document.body.style.overflow = "";
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center hero-backdrop"
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_62%)]" />
          {/* Nombre de marca */}
          <motion.h1
            className="bg-gradient-to-l from-white via-white to-orange-100 bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {brand.name}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="mt-4 text-sm md:text-base font-medium tracking-wide text-white/72"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {brand.tagline}
          </motion.p>

          {/* Línea decorativa */}
          <motion.div
            className="mt-6 h-[2px] rounded-full bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600"
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Indicador de scroll */}
          <motion.div
            className="absolute bottom-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronUp className="w-6 h-6 text-white/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
