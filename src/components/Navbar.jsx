import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../config/site";
import { localeConfig } from "../config/locale";

export default function Navbar({ onOpenContact, splashDone }) {
  const { brand } = siteConfig;
  const navLinks = localeConfig.navLinks;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "border-slate-200/95 shadow-[0_18px_55px_-44px_rgba(15,23,42,0.14)]"
          : "border-slate-200/70"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: splashDone ? 1 : 0, y: splashDone ? 0 : -20 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className="text-lg font-bold tracking-wider text-slate-900"
        >
          {brand.shortName}
          <span className="bg-gradient-to-l from-orange-400 to-orange-600 bg-clip-text text-transparent">
            {brand.name.replace(`${brand.shortName} `, "")}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-sm tracking-wide text-slate-600 transition-colors hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenContact}
            className="rounded-full bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(249,115,22,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-22px_rgba(249,115,22,0.75)] active:translate-y-0"
          >
            {localeConfig.buttons.freeConsultation}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-slate-900 lg:hidden"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="lg:hidden bg-white border-t shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-slate-900 text-sm py-2 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="mt-2 rounded-full bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(249,115,22,0.65)]"
            >
              {localeConfig.buttons.freeConsultation}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
