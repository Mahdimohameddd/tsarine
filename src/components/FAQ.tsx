import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Vous pouvez réserver directement via WhatsApp au +213 558 23 19 84 ou par appel téléphonique. Nous vous confirmerons votre créneau dans les plus brefs délais.",
  },
  {
    question: "Quels produits utilisez-vous ?",
    answer:
      "Nous travaillons exclusivement avec des produits professionnels haut de gamme, sélectionnés pour leur qualité et leur respect de la peau et des ongles.",
  },
  {
    question: "Est-ce que le service manucure est garanti ?",
    answer:
      "Oui, nous offrons une garantie sur nos prestations de manucure. Si vous constatez un problème dans les jours suivant votre soin, nous vous reprenons gratuitement.",
  },
  {
    question: "Quelles sont vos mesures d'hygiène ?",
    answer:
      "Chaque outil est stérilisé après utilisation, les espaces sont désinfectés entre chaque cliente, et nous utilisons du matériel à usage unique lorsque nécessaire. L'hygiène est notre priorité absolue.",
  },
  {
    question: "Proposez-vous des forfaits bridal ?",
    answer:
      "Oui, nous proposons des packs bridal complets incluant manucure, soins du visage et pack regard, personnalisés pour votre jour spécial. Contactez-nous pour un devis sur mesure.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-6 font-body">
            Questions fréquentes
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            FAQ
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="font-body text-sm text-foreground tracking-wide py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
