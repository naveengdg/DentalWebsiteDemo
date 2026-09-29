import { motion } from 'framer-motion';
import { ArrowRight, Award, GraduationCap, Sparkles } from 'lucide-react';
import { doctors } from '../data/siteData';
import { useInView, scrollToSection } from '../utils/hooks';

export default function DoctorProfile() {
  const [ref, isInView] = useInView({ threshold: 0.05 });
  const doctor = doctors[0];

  return (
    <section id="doctors" className="py-12 sm:py-16 md:py-20 bg-surface-warm overflow-hidden">
      <div ref={ref} className="container-main">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Doctor Portrait Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-square shadow-xl border border-border-light bg-slate-100 shrink-0 w-full">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500 block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Top Credential Chip */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-primary-900 bg-white/95 backdrop-blur-md shadow-sm border border-white/80">
                  <GraduationCap size={14} className="text-primary" />
                  <span>{doctor.credentials}</span>
                </span>
              </div>

              {/* Bottom Doctor Title Strip */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-base sm:text-lg font-heading font-bold text-white drop-shadow-sm leading-snug">
                  {doctor.name}
                </div>
                <div className="text-xs text-primary-200 font-medium mt-0.5">
                  {doctor.role} · 12+ Years Experience
                </div>
              </div>
            </div>

            {/* Decorative accents */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-3xl bg-primary/10 -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-3xl bg-accent/15 -z-10" />
          </motion.div>

          {/* Doctor Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 bg-primary-50 px-3 py-1 rounded-full">
              Clinical Leadership
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-text-primary mb-2">
              {doctor.name}
            </h2>
            <div className="flex items-center gap-2 text-primary font-medium text-sm sm:text-base mb-5">
              <Award size={18} className="text-primary flex-shrink-0" />
              <span>{doctor.credentials}</span>
            </div>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-8">
              {doctor.bio}
            </p>

            {/* Areas of Focus */}
            <div className="mb-7 sm:mb-8">
              <h4 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-3">
                Key Clinical Specialties
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {doctor.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm bg-white border border-border text-text-primary rounded-xl font-medium shadow-soft hover:border-primary/30 transition-colors"
                  >
                    <Sparkles size={13} className="text-primary" />
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5">
              <button
                onClick={() => scrollToSection('appointment')}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all duration-300 shadow-xl shadow-primary/25 active:scale-[0.98]"
              >
                <span>Consult Dr. Ananya</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-text-primary font-medium rounded-xl border border-border hover:border-primary transition-all duration-300 shadow-sm"
              >
                About Our Clinic
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
