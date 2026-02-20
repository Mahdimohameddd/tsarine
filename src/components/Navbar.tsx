import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-tsarine.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Galerie", href: "#gallery" },
    { label: "Localisation", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Tsarine" className="h-10 w-auto brightness-0 invert opacity-90" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/60 text-xs tracking-[0.2em] uppercase font-body hover:text-primary-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-primary border-b border-primary-foreground/10 px-6 pb-6 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-primary-foreground/60 text-xs tracking-[0.2em] uppercase font-body hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
