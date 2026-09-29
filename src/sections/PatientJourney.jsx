import { motion } from 'framer-motion';
import { patientJourney } from '../data/siteData';
import { useInView } from '../utils/hooks';

export default function PatientJourney() {
  const [sectionRef, isInView] = useInView({ threshold: 0.05 });

  return (
    <section id="journey" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div ref={sectionRef} className="container-main">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-2.5 sm:mb-3 bg-primary-50 px-3.5 py-1 rounded-full border border-primary-100"
          >
            Seamless Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-bold text-text-primary mb-3 sm:mb-4"
          >
            Your journey to a healthier smile
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed"
          >
            From your very first consultation to your final result, we make every step clear, calm, and comfortable.
          </motion.p>
        </div>

        {/* Desktop Timeline (horizontal) */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute top-[2.5rem] left-8 right-8 h-0.5 bg-border">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-primary origin-left"
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {patientJourney.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Dot */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-primary flex items-center justify-center shadow-md group-hover:bg-primary transition-all duration-300">
                    <span className="text-primary group-hover:text-white font-heading text-sm font-bold transition-colors">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-heading font-bold text-text-primary mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm text-text-secondary leading-relaxed px-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (vertical step list — always visible with zero empty gap) */}
        <div className="md:hidden max-w-md mx-auto space-y-2">
          {patientJourney.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex gap-3.5 items-start"
            >
              {/* Step indicator column with line */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-heading font-bold text-sm shadow-sm">
                  {item.step}
                </div>
                {i < patientJourney.length - 1 && (
                  <div className="w-0.5 h-10 bg-primary/20 my-1 rounded-full" />
                )}
              </div>

              {/* Step content */}
              <div className="pb-2 flex-1">
                <div className="p-3.5 rounded-2xl bg-surface border border-border-light shadow-xs">
                  <h3 className="text-sm font-heading font-bold text-text-primary mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
