import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { smileTransformations } from '../data/siteData';
import { useInView, scrollToSection } from '../utils/hooks';

export default function SmileGallery() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-surface">
      <div className="container-main">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 bg-primary-50 px-3 py-1 rounded-full"
          >
            Clinical Transformations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-bold text-text-primary mb-4"
          >
            Real smile transformations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed"
          >
            Every smile is distinct. Discover personalized results achieved through modern aesthetic dentistry.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {smileTransformations.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Real Photograph Area */}
              <div className="aspect-[4/3] w-full shrink-0 relative overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

                {/* Floating Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-semibold text-primary-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-medium text-white/90 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>

                {/* Verified Icon */}
                <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 text-xs">
                  <CheckCircle2 size={14} className="text-teal-300" />
                  <span className="font-medium text-slate-100">Completed Case</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-base font-heading font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                    Personalized treatment plan focused on harmonious natural alignment.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border-light flex items-center justify-between text-xs font-semibold text-primary">
                  <span>View Case Details</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Notice & Action */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-xs text-text-tertiary mb-4 max-w-xl mx-auto">
            All photography demonstrates real clinical aesthetic outcomes. In production websites for client clinics, local before-and-after cases are presented with patient consent.
          </p>
          <button
            onClick={() => scrollToSection('appointment')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-light transition-all shadow-md shadow-primary/20"
          >
            <span>Discuss Your Smile Goals</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
