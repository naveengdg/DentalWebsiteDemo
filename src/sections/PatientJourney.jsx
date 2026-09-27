import { motion } from 'framer-motion';
import { patientJourney } from '../data/siteData';
import { useInView } from '../utils/hooks';

export default function PatientJourney() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 bg-primary-50 px-3.5 py-1 rounded-full"
          >
            Seamless Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-bold text-text-primary mb-4"
          >
            Your journey to a healthier smile
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed"
          >
            From your very first consultation to your final result, we make every step clear, calm, and comfortable.
          </motion.p>
        </div>

        {/* Desktop Timeline (horizontal) */}
        <div ref={timelineRef} className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute top-[2.5rem] left-8 right-8 h-0.5 bg-border">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={timelineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-primary origin-left"
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {patientJourney.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Dot */}
                <div className="relative z-10 mb-5">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={timelineInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12, type: 'spring', stiffness: 300 }}
                    className="w-12 h-12 rounded-2xl bg-white border-2 border-primary flex items-center justify-center shadow-md group-hover:bg-primary transition-all duration-300"
                  >
                    <span className="text-primary group-hover:text-white font-heading text-sm font-bold transition-colors">
                      {item.step}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-base lg:text-lg font-heading font-bold text-text-primary mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm text-text-secondary leading-relaxed px-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (vertical flex list with continuous connector) */}
        <div className="md:hidden max-w-md mx-auto space-y-2">
          {patientJourney.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -16 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 items-start"
            >
              {/* Step indicator column with line */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-heading font-bold text-sm shadow-md shadow-primary/25">
                  {item.step}
                </div>
                {i < patientJourney.length - 1 && (
                  <div className="w-0.5 h-12 bg-primary/20 my-1 rounded-full" />
                )}
              </div>

              {/* Step content */}
              <div className="pt-1 pb-4 flex-1">
                <div className="p-3.5 rounded-xl bg-surface border border-border-light">
                  <h3 className="text-base font-heading font-bold text-text-primary mb-1">
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
