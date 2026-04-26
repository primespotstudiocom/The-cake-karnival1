import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do you provide customized cakes?',
      answer: 'Yes! We specialize in custom cakes for all occasions. Share your ideas with us and we\'ll bring them to life with our expert bakers.',
    },
    {
      question: 'Do you offer eggless cakes?',
      answer: 'Absolutely! We offer a wide range of eggless cakes that taste just as delicious as our regular cakes. Just specify your preference when ordering.',
    },
    {
      question: 'Can I order cakes online?',
      answer: 'Yes, you can easily order cakes online through WhatsApp or by calling us directly. We accept online payments and cash on delivery.',
    },
    {
      question: 'Do you deliver cakes?',
      answer: 'Yes, we provide fast and reliable delivery services across Pune. Your cake will be delivered fresh and on time.',
    },
    {
      question: 'What occasions do you cover?',
      answer: 'We cover all occasions including birthdays, anniversaries, weddings, corporate events, baby showers, and more!',
    },
    {
      question: 'What are your payment options?',
      answer: 'We accept multiple payment options including UPI, credit/debit cards, net banking, and cash on delivery.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-card text-primary rounded-full text-sm font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers to help you choose the perfect cake
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted transition-all"
              >
                <span className="font-semibold text-card-foreground pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
            >
              Contact Us
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
