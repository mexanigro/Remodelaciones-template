import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../config/site";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#portfolio" },
  { label: "Servicios", href: "#process" },
  { label: "Por qué nosotros", href: "#whyus" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar({ onOpenContact, splashDone }) {
  const { brand } = siteConfig;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
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
          className={`font-bold text-lg tracking-wider ${
            scrolled ? "text-[#1A1A1A]" : "text-white"
          }`}
        >
          {brand.shortName}
          <span className="text-[#E07A5F]">
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
              className={`text-sm tracking-wide transition-colors hover:text-[#E07A5F] ${
                scrolled ? "text-[#6B7280]" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenContact}
            className="bg-[#E07A5F] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#c96a50] transition-colors"
          >
            Consulta gratuita
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}
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
                className="text-[#1A1A1A] text-sm py-2 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="bg-[#E07A5F] text-white px-5 py-3 rounded-lg text-sm font-medium mt-2"
            >
              Consulta gratuita
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
