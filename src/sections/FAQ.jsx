import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/siteData';
import { useInView } from '../utils/hooks';

function FAQItem({ item, isOpen, onToggle, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-border-light last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-base md:text-lg font-heading font-medium pr-4 transition-colors duration-300 ${
          isOpen ? 'text-primary' : 'text-text-primary group-hover:text-primary'
        }`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={20}
            className={`transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-text-tertiary'}`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 text-text-secondary leading-relaxed pr-8 text-sm md:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const [faqRef, faqInView] = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-surface-warm">
      <div className="container-main">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-3"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-text-primary mb-4"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            Find answers to common questions about our dental services.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div ref={faqRef} className="max-w-3xl mx-auto bg-white rounded-2xl border border-border shadow-sm px-4 sm:px-6 md:px-8 py-2 md:py-3">
          <div className="divide-y-0">
            {faqItems.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                isInView={faqInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
