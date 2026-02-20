import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-foreground/70 tracking-[0.3em] uppercase text-xs mb-6 font-body">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Prenez rendez-vous
          </h2>
          <p className="text-primary-foreground/60 font-body text-sm mb-10 max-w-md mx-auto">
            Offrez-vous un moment de beauté et de sérénité. Contactez-nous pour réserver votre créneau.
          </p>
          <div className="w-12 h-px bg-primary-foreground/30 mx-auto mb-10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="tel:+213558231984"
            className="flex items-center gap-3 px-6 py-3 border border-primary-foreground/30 text-sm tracking-[0.15em] uppercase font-body hover:bg-primary-foreground hover:text-primary transition-all duration-500"
          >
            <Phone className="w-4 h-4" />
            +213 558 23 19 84
          </a>
          <a
            href="https://wa.me/213558231984"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-primary-foreground/30 text-sm tracking-[0.15em] uppercase font-body hover:bg-primary-foreground hover:text-primary transition-all duration-500"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
