import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { localeConfig } from "../config/locale";

const SHOW_AFTER_PX = 320;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const isRtl = localeConfig.dir === "rtl";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sideStyle = isRtl
    ? { left: "max(1rem, env(safe-area-inset-left, 0px))" }
    : { right: "max(1rem, env(safe-area-inset-right, 0px))" };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={goTop}
          aria-label={localeConfig.a11y.scrollToTop}
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
          style={sideStyle}
          className="fixed z-[41] flex h-12 w-12 items-center justify-center rounded-full border border-orange-200/90 bg-white/95 text-orange-600 shadow-[0_18px_50px_-28px_rgba(249,115,22,0.45)] backdrop-blur-md ring-2 ring-orange-400/15 transition-colors hover:border-orange-300 hover:bg-white hover:text-orange-700 hover:shadow-[0_22px_55px_-30px_rgba(249,115,22,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 active:scale-[0.96]
            bottom-[calc(max(1.5rem,env(safe-area-inset-bottom,0px))+4.25rem)]
            md:bottom-[calc(max(1rem,env(safe-area-inset-bottom,0px))+6rem)]"
        >
          <ChevronUp className="h-6 w-6 stroke-[2.5]" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
