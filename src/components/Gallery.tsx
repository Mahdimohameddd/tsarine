import { motion } from "framer-motion";
import nailFrench from "@/assets/nail-french.png";
import nailGalaxy from "@/assets/nail-galaxy.png";
import nailAutumn from "@/assets/nail-autumn.png";
import nailBridal from "@/assets/nail-bridal.png";

const images = [
  { src: nailFrench, alt: "French elegance nails", label: "French Élégance" },
  { src: nailGalaxy, alt: "Galaxy design nails", label: "Galaxy Chic" },
  { src: nailAutumn, alt: "Autumn chic nails", label: "Autumn Chic" },
  { src: nailBridal, alt: "Bridal glam nails", label: "Bridal Glam" },
];

const Gallery = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-6 font-body">
            Nos réalisations
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Galerie
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-secondary"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary-foreground text-xs tracking-[0.2em] uppercase font-body text-center">
                  {img.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
