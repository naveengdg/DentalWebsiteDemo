import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { heroContent, clinicInfo } from '../data/siteData';
import { scrollToSection } from '../utils/hooks';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background Image with Rich Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-clinic.jpg"
          alt="Modern Lumora Dental Clinic"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          loading="eager"
        />
        {/* Responsive Multi-Stop Gradient Overlays for Guaranteed Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/10 mix-blend-screen" />
      </div>

      <div className="container-main relative z-10 pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 lg:pt-36 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-7 xl:col-span-7 max-w-2xl">
            {/* Acceptance Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/25 border border-primary-200/30 backdrop-blur-md mb-5"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-primary-100 tracking-wide">
                Accepting new patients • Krishnagiri
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.14] tracking-tight"
            >
              A healthier smile.{' '}
              <span className="block mt-1 sm:mt-2 text-primary-200 bg-gradient-to-r from-primary-100 via-teal-200 to-emerald-200 bg-clip-text text-transparent drop-shadow-sm">
                A more confident you.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-xl"
            >
              {heroContent.subtext}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mt-8"
            >
              <button
                onClick={() => scrollToSection('appointment')}
                className="group h-13 sm:h-14 px-7 sm:px-8 inline-flex items-center justify-center gap-2.5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/40 active:scale-[0.98] text-base whitespace-nowrap"
              >
                <span>{heroContent.primaryCTA}</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('treatments')}
                className="group h-13 sm:h-14 px-7 sm:px-8 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/30 backdrop-blur-md transition-all duration-300 active:scale-[0.98] text-base whitespace-nowrap"
              >
                {heroContent.secondaryCTA}
              </button>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/15"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-5 border border-white/15 shadow-sm">
                <div className="text-base sm:text-xl font-heading font-extrabold text-white">Mon – Sat</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Open 6 days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-5 border border-white/15 shadow-sm">
                <div className="text-base sm:text-xl font-heading font-extrabold text-primary-200">9+ Treatments</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Comprehensive</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-5 border border-white/15 shadow-sm">
                <div className="text-base sm:text-xl font-heading font-extrabold text-white">Digital 3D</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Diagnostics</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Hero Interactive Feature Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-black/40">
              {/* Doctor & Clinic Showcase Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full shrink-0 bg-slate-900">
                <img
                  src="/images/doctor-ananya.jpg"
                  alt="Dr. Ananya Rao - Lumora Dental"
                  className="w-full h-full object-cover object-top block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Doctor Name Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-primary-200 font-semibold mb-1">
                    <Sparkles size={14} className="text-primary-200" />
                    Lead Aesthetic Dentist
                  </div>
                  <div className="text-base sm:text-lg font-heading font-bold text-white leading-tight">
                    Dr. Ananya Rao, BDS, MDS
                  </div>
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="grid grid-cols-2 gap-3 mt-3.5">
                <div className="bg-white/10 rounded-xl p-3 sm:p-3.5 border border-white/10">
                  <div className="flex items-center gap-1 text-amber-300 text-xs font-bold">
                    <Star size={14} fill="currentColor" />
                    <span>4.9 / 5.0</span>
                  </div>
                  <div className="text-xs text-slate-200 font-medium mt-1">250+ Patient Reviews</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 sm:p-3.5 border border-white/10">
                  <div className="flex items-center gap-1 text-teal-300 text-xs font-bold">
                    <CheckCircle2 size={14} />
                    <span>Digital Care</span>
                  </div>
                  <div className="text-xs text-slate-200 font-medium mt-1">3D Smile Preview</div>
                </div>
              </div>

              {/* Quick Consultation Prompt */}
              <button
                onClick={() => scrollToSection('appointment')}
                className="w-full mt-3.5 h-12 py-3 px-4 bg-primary hover:bg-primary-light text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-primary/25 border border-primary-200/20 active:scale-[0.98]"
              >
                <span>Book First Consultation</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => scrollToSection('treatments')}
      >
        <span className="text-[10px] text-slate-300 uppercase tracking-widest font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-primary-200" />
        </motion.div>
      </motion.div>
    </section>
  );
}
