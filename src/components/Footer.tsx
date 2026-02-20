import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-tsarine.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Tsarine" className="h-20 w-auto mb-4 brightness-0 invert opacity-80" />
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed text-center md:text-left mt-2">
              L'empreinte de l'Excellence Russe à Alger. Un salon dédié à la beauté, au raffinement et au bien-être.
            </p>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-sm tracking-[0.2em] uppercase mb-6 text-primary-foreground/80">
              Nos Services
            </h4>
            <ul className="space-y-3 text-sm font-body text-primary-foreground/60">
              <li>Manicure / Onglerie</li>
              <li>Soins du visage</li>
              <li>Pack Regard & Bridal</li>
              <li>Hygiène & Propreté</li>
              <li>Service Garanti</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-sm tracking-[0.2em] uppercase mb-6 text-primary-foreground/80">
              Contact
            </h4>
            <ul className="space-y-4 text-sm font-body text-primary-foreground/60">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-primary-foreground/40" />
                <a href="tel:+213558231984" className="hover:text-primary-foreground transition-colors">
                  +213 558 23 19 84
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MessageCircle className="w-4 h-4 text-primary-foreground/40" />
                <a href="https://wa.me/213558231984" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-4 h-4 text-primary-foreground/40" />
                <a href="https://maps.app.goo.gl/ZaqwpLYGLJX2jSfUA" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  Alger, Algérie
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Clock className="w-4 h-4 text-primary-foreground/40" />
                <span>Sur rendez-vous</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-primary-foreground/40">
            © {new Date().getFullYear()} Tsarine. Tous droits réservés.
          </p>
          <p className="text-xs font-body text-primary-foreground/40 tracking-[0.15em] uppercase">
            Onglerie · Soins · Bridal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
