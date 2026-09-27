import { motion } from 'framer-motion';
import { Check, X, Shield, Sparkles, Clock, HeartHandshake } from 'lucide-react';
import { useInView } from '../utils/hooks';

export default function WhyChooseUs() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [diffRef, diffInView] = useInView({ threshold: 0.1 });

  const differences = [
    {
      feature: 'Dental Impressions',
      traditional: 'Sticky, gag-inducing putty trays in your mouth for 5+ minutes',
      lumora: '60-second painless 3D optical wand scan with zero mess',
    },
    {
      feature: 'Treatment Comfort',
      traditional: 'Standard manual injections, dental noise, high patient anxiety',
      lumora: 'Gentle computerized numbing, noise-cancelling headphones & calming suite',
    },
    {
      feature: 'Pricing & Treatment Plan',
      traditional: 'Vague estimates with unexpected hidden fees added after treatment',
      lumora: '100% transparent, itemized treatment estimate approved before starting',
    },
    {
      feature: 'Smile Aesthetics',
      traditional: 'Generic laboratory teeth that can look bulky and unnaturally white',
      lumora: 'Digital Smile Design (DSD) customized to your face, lips, and skin tone',
    },
    {
      feature: 'Doctor Attention',
      traditional: 'Rushed 5-minute checkups before being handed to assistants',
      lumora: 'Dedicated 1-on-1 consultation time with lead dentist Dr. Ananya Rao',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container-main">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 bg-primary-50 px-3.5 py-1 rounded-full border border-primary-100"
          >
            The Lumora Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-bold text-text-primary mb-3 sm:mb-4"
          >
            Why patients choose Lumora over typical clinics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed"
          >
            We redesigned the dental visit around absolute comfort, digital precision, and clear patient guidance.
          </motion.p>
        </div>

        {/* Side-by-Side Comparison Table / Cards */}
        <div ref={diffRef} className="max-w-4xl mx-auto bg-surface rounded-3xl p-5 sm:p-8 md:p-10 border border-border shadow-card">
          {/* Table Header Labels on Desktop */}
          <div className="hidden sm:grid sm:grid-cols-12 gap-4 pb-4 mb-4 border-b border-border text-xs font-bold uppercase tracking-wider text-text-tertiary">
            <div className="sm:col-span-4">Experience</div>
            <div className="sm:col-span-4 text-rose-600">Typical Dental Clinics</div>
            <div className="sm:col-span-4 text-primary font-extrabold flex items-center gap-1">
              <Sparkles size={14} className="text-primary" />
              <span>Lumora Dental & Aesthetics</span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-4 sm:space-y-3">
            {differences.map((diff, i) => (
              <motion.div
                key={diff.feature}
                initial={{ opacity: 0, y: 16 }}
                animate={diffInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-4 sm:p-4.5 rounded-2xl bg-white border border-border-light hover:border-primary/20 hover:shadow-xs transition-all"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                  {/* Feature Title */}
                  <div className="sm:col-span-4">
                    <span className="font-heading font-bold text-sm sm:text-base text-text-primary">
                      {diff.feature}
                    </span>
                  </div>

                  {/* Typical Clinic */}
                  <div className="sm:col-span-4 flex items-start gap-2 bg-rose-50/50 sm:bg-transparent p-2.5 sm:p-0 rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs sm:text-sm text-text-secondary leading-snug">
                      {diff.traditional}
                    </span>
                  </div>

                  {/* Lumora Experience */}
                  <div className="sm:col-span-4 flex items-start gap-2 bg-primary-50/60 p-2.5 sm:p-3 rounded-xl border border-primary-100 sm:border-primary/20">
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs sm:text-sm text-primary-900 font-medium leading-snug">
                      {diff.lumora}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-border-light text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-2">
                <Shield size={20} />
              </div>
              <h4 className="text-sm font-bold text-text-primary">100% Sterilization Guarantee</h4>
              <p className="text-xs text-text-tertiary mt-0.5">Class-B medical autoclave protocols</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-2">
                <Clock size={20} />
              </div>
              <h4 className="text-sm font-bold text-text-primary">Zero Waiting Room Delays</h4>
              <p className="text-xs text-text-tertiary mt-0.5">Dedicated appointment time slots</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-2">
                <HeartHandshake size={20} />
              </div>
              <h4 className="text-sm font-bold text-text-primary">Gentle Care Commitment</h4>
              <p className="text-xs text-text-tertiary mt-0.5">Comfort-first numbing & techniques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
