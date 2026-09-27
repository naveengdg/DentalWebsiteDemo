import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { treatments } from '../data/siteData';
import { useInView } from '../utils/hooks';
import TreatmentCard from '../components/TreatmentCard';

export default function Treatments() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cosmetic', 'Surgical', 'Restorative', 'Preventive', 'Family'];

  const filteredTreatments = activeCategory === 'All'
    ? treatments
    : treatments.filter(t => t.category === activeCategory);

  return (
    <section id="treatments" className="section-padding bg-surface-warm">
      <div className="container-main">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 bg-white px-3.5 py-1 rounded-full border border-border shadow-xs"
          >
            Clinical Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-bold text-text-primary mb-3 sm:mb-4"
          >
            What dental care do you need?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed"
          >
            Select a service to view details, duration, and book your consultation with zero hassle.
          </motion.p>

          {/* Interactive Mobile-Friendly Filter Chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-2 px-1 mt-6 sm:mt-8 no-scrollbar"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap relative ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/25'
                      : 'bg-white text-text-secondary hover:text-text-primary hover:bg-slate-100 border border-border'
                  }`}
                >
                  {cat === 'All' ? `All Services (${treatments.length})` : cat}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Treatment Grid */}
        <motion.div
          layout
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredTreatments.map((treatment, i) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                index={i}
                isInView={gridInView}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
