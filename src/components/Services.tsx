import { Sparkles, Heart, Eye, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Sparkles,
    title: "Manicure / Onglerie",
    description:
      "Des ongles sublimés avec des techniques raffinées et des produits haut de gamme. Service garanti.",
  },
  {
    icon: Heart,
    title: "Soins du visage",
    description:
      "Des soins personnalisés pour révéler l'éclat naturel de votre peau avec des protocoles d'excellence.",
  },
  {
    icon: Eye,
    title: "Pack Regard & Bridal",
    description:
      "Un regard magnifié et des prestations bridal sur mesure pour vos moments les plus précieux.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiène & Propreté",
    description:
      "Un engagement absolu envers l'hygiène. Chaque outil est stérilisé, chaque espace est impeccable.",
  },
  {
    icon: Award,
    title: "Service Garanti",
    description:
      "Nous garantissons la qualité de chaque prestation. Votre satisfaction est notre priorité absolue.",
  },
];

const Services = () => {
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
            Nos prestations
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Services
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 text-center group hover:shadow-lg transition-shadow duration-500 relative overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-primary/40 group-hover:w-full transition-all duration-700" />
              <service.icon className="w-6 h-6 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-display text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
