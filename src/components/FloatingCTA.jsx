import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { localeConfig } from "../config/locale";

export default function FloatingCTA({ onOpenContact }) {
  const isRtl = localeConfig.dir === "rtl";

  return (
    <>
      {/* Mobile: floating button bottom-right */}
      <motion.button
        onClick={onOpenContact}
        className="fixed bottom-6 z-40 md:hidden bg-[#E07A5F] text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center"
        style={isRtl ? { left: "1.5rem" } : { right: "1.5rem" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Desktop: sticky banner bottom */}
      <motion.div
        className="hidden md:block fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[#1A1A1A] font-semibold text-sm">
              {localeConfig.floatingCta.title}
            </p>
            <p className="text-[#6B7280] text-xs mt-0.5">
              {localeConfig.floatingCta.subtitle}
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="bg-[#E07A5F] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#c96a50] transition-colors flex-shrink-0"
          >
            {localeConfig.buttons.contactNow}
          </button>
        </div>
      </motion.div>
    </>
  );
}
