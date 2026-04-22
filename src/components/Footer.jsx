import { siteConfig } from "../config/site";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#portfolio" },
  { label: "Servicios", href: "#process" },
  { label: "Por qué nosotros", href: "#whyus" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  const { brand } = siteConfig;

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-wider">
              {brand.shortName}
              <span className="text-[#E07A5F]">
                {brand.name.replace(`${brand.shortName} `, "")}
              </span>
            </h3>
            <p className="mt-3 text-white/50 text-sm leading-relaxed">
              {brand.tagline}. Diseño + obra llave en mano para que tu negocio
              empiece a facturar.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={brand.instagram}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E07A5F] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={brand.facebook}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E07A5F] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={brand.twitter}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E07A5F] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navegación
            </h4>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-white/60 text-sm hover:text-[#E07A5F] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
                <span>{brand.address}</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
                <span>{brand.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
                <span>{brand.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            © 2026 Renova Locales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
