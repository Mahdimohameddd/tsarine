import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-6 font-body">
            Nous trouver
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Notre salon
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
          <p className="text-muted-foreground text-sm font-body mt-6 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Alger, Algérie
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-3 border border-primary/20 pointer-events-none" />
          <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.3!2d3.0!3d36.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ1JzAwLjAiTiAzwrAwMCcwMC4wIkU!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(40%) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tsarine location"
              className="w-full h-full"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://maps.app.goo.gl/ZaqwpLYGLJX2jSfUA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase font-body hover:opacity-90 transition-opacity duration-300"
          >
            <MapPin className="w-4 h-4" />
            Ouvrir dans Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
