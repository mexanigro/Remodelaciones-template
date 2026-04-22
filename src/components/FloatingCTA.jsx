import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { localeConfig } from "../config/locale";

export default function FloatingCTA({ onOpenContact }) {
  const isRtl = localeConfig.dir === "rtl";

  return (
    <>
      {/* Mobile: floating button bottom-right */}
      <motion.button
        type="button"
        onClick={onOpenContact}
        className="fixed z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 text-white shadow-[0_22px_65px_-28px_rgba(249,115,22,0.85)] ring-4 ring-orange-400/25 md:hidden"
        style={
          isRtl
            ? { left: "max(1rem, env(safe-area-inset-left, 0px))", bottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))" }
            : { right: "max(1rem, env(safe-area-inset-right, 0px))", bottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))" }
        }
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
        className="hidden md:block fixed bottom-0 left-0 right-0 z-40 border-t border-black/5 bg-white/85 backdrop-blur-xl shadow-[0_-22px_70px_-52px_rgba(15,23,42,0.35)]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-slate-900">
              {localeConfig.floatingCta.title}
            </p>
            <p className="mt-0.5 text-xs text-slate-600">
              {localeConfig.floatingCta.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenContact}
            className="flex-shrink-0 self-start rounded-full bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(249,115,22,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-22px_rgba(249,115,22,0.78)] active:translate-y-0 sm:self-auto"
          >
            {localeConfig.buttons.contactNow}
          </button>
        </div>
      </motion.div>
    </>
  );
}
