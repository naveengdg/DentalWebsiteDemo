import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { trustItems } from '../data/siteData';
import { useInView } from '../utils/hooks';

export default function TrustStrip() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white border-b border-border-light">
      <div ref={ref} className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {trustItems.map((item, i) => {
            const Icon = Icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-surface/80 hover:bg-white hover:shadow-card border border-border-light transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-50 group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 text-primary shadow-sm">
                  {Icon && <Icon size={22} strokeWidth={1.75} className="transition-colors" />}
                </div>
                <h3 className="text-sm sm:text-base font-heading font-bold text-text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
