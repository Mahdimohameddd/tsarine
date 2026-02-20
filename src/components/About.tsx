import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-6 font-body">
            À propos
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
            L'art de la beauté,
            <br />
            <span className="italic">sublimé par l'excellence</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground leading-relaxed font-body text-sm md:text-base max-w-2xl mx-auto"
        >
          Tsarine incarne l'élégance et le raffinement de la beauté russe au cœur d'Alger.
          Notre salon offre une expérience unique où chaque détail est pensé pour votre bien-être.
          De la manucure aux soins du visage, en passant par nos packs regard et bridal,
          nous vous garantissons un service d'exception dans un cadre luxueux et hygiénique.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-muted-foreground leading-relaxed font-body text-sm md:text-base max-w-2xl mx-auto mt-6"
        >
          L'hygiène et la propreté sont au cœur de notre engagement — chaque soin est réalisé
          avec les plus hauts standards de qualité et de sécurité.
        </motion.p>

        {/* Decorative flourish */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div className="w-16 h-px bg-primary/30" />
          <div className="w-2 h-2 border border-primary/40 rotate-45" />
          <div className="w-16 h-px bg-primary/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
