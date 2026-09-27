import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { featuredTreatment } from '../data/siteData';
import { useInView, scrollToSection } from '../utils/hooks';

export default function FeaturedTreatment() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div ref={ref} className="container-main">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Visual with Real Cosmetic Smile Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] shadow-xl border border-border-light bg-slate-100 shrink-0 w-full">
              <img
                src="/images/smile-cosmetic.jpg"
                alt="Cosmetic dentistry transformation smile"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-primary-900 bg-white/95 backdrop-blur-md shadow-sm border border-white/80">
                  <Sparkles size={14} className="text-primary" />
                  <span>Digital Smile Design</span>
                </span>
              </div>

              {/* Bottom Subtle Overlay Strip */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-sm sm:text-base font-heading font-bold text-white drop-shadow-sm">
                  3D Aesthetic Preview Before You Start
                </div>
                <div className="text-xs text-primary-200 mt-0.5">
                  Custom veneers, composite bonding & alignment
                </div>
              </div>
            </div>

            {/* Decorative background accent */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-3xl bg-primary-50 -z-10" />
            <div className="absolute -top-4 -right-4 w-28 h-28 rounded-3xl bg-amber-50 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 bg-primary-50 px-3 py-1 rounded-full">
              Signature Aesthetics
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-bold text-text-primary leading-tight mb-4 sm:mb-5">
              {featuredTreatment.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-8">
              {featuredTreatment.description}
            </p>

            {/* Feature Points */}
            <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 mb-7 sm:mb-8">
              {featuredTreatment.points.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-warm/70 border border-border-light"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-text-primary">{point}</span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('appointment')}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all duration-300 shadow-xl shadow-primary/25 active:scale-[0.98] w-full sm:w-auto"
            >
              <span>{featuredTreatment.cta}</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
