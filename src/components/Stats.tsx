import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Années d'expérience" },
  { value: "2000+", label: "Clientes satisfaites" },
  { value: "100%", label: "Hygiène garantie" },
  { value: "★ 4.9", label: "Note moyenne" },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/60 text-xs tracking-[0.15em] uppercase font-body">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
