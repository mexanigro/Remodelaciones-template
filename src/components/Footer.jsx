import { siteConfig } from "../config/site";
import { localeConfig } from "../config/locale";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { brand } = siteConfig;
  const footerLinks = localeConfig.navLinks;

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative overflow-hidden py-16 text-white hero-backdrop md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.055),transparent_62%)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-wider">
              {brand.shortName}
              <span className="bg-gradient-to-l from-orange-300 to-orange-600 bg-clip-text text-transparent">
                {brand.name.replace(`${brand.shortName} `, "")}
              </span>
            </h3>
            <p className="mt-3 text-white/50 text-sm leading-relaxed">
              {localeConfig.footer.brandDescription}
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={brand.instagram}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange-500/90"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={brand.facebook}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange-500/90"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={brand.twitter}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange-500/90"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              {localeConfig.footer.navTitle}
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
                  className="text-white/65 text-sm transition-colors hover:text-orange-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              {localeConfig.footer.contactTitle}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 text-orange-400" />
                <span>{brand.address}</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-orange-400" />
                <span>{brand.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-orange-400" />
                <span>{brand.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            {localeConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
