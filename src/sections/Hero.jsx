import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { heroContent, clinicInfo } from '../data/siteData';
import { scrollToSection } from '../utils/hooks';

const heroSlides = [
  {
    image: '/images/hero-clinic.jpg',
    alt: 'Modern Lumora Dental & Aesthetics Operatory Clinic',
    label: 'State-of-the-Art Clinic',
  },
  {
    image: '/images/dental-tech.jpg',
    alt: 'Digital 3D Intraoral Diagnostic Scanning',
    label: '3D Digital Diagnostics',
  },
  {
    image: '/images/smile-cosmetic.jpg',
    alt: 'Aesthetic Smile Makeover & Veneers',
    label: 'Cosmetic Smile Design',
  },
  {
    image: '/images/service-cleaning.jpg',
    alt: 'Gentle Preventive Patient Dental Care',
    label: 'Gentle Preventive Care',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance background slides like an ambient video reel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background Slideshow (Ambient Video-Style Crossfade) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out block ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Calibrated Overlay — Keeps Dental Imagery Clearly Visible While Preserving Contrast */}
        {/* Desktop Gradient: Darker on left behind text, luminous on right showing clinic */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30 pointer-events-none" />
        {/* Subtle Top & Bottom Vignette for Cinematic Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80 pointer-events-none" />
        {/* Soft Dental Teal Brand Tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-teal-500/10 mix-blend-screen pointer-events-none" />
      </div>

      <div className="container-main relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-7 xl:col-span-7 max-w-2xl">
            {/* Acceptance Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-primary/30 border border-primary-200/40 backdrop-blur-md mb-4 sm:mb-5 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-sm font-semibold text-primary-100 tracking-wide drop-shadow-xs">
                Accepting new patients • Krishnagiri
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-md"
            >
              A healthier smile.{' '}
              <span className="block mt-1 sm:mt-2 text-primary-200 bg-gradient-to-r from-primary-100 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
                A more confident you.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-3.5 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-normal max-w-xl drop-shadow-sm"
            >
              {heroContent.subtext}
            </motion.p>

            {/* CTA Buttons — Mobile First (Full width on mobile, inline on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('appointment')}
                className="group h-12 sm:h-14 px-6 sm:px-8 inline-flex items-center justify-center gap-2.5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/40 active:scale-[0.98] text-sm sm:text-base whitespace-nowrap w-full sm:w-auto cursor-pointer"
              >
                <span>{heroContent.primaryCTA}</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('treatments')}
                className="group h-12 sm:h-14 px-6 sm:px-8 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/30 backdrop-blur-md transition-all duration-300 active:scale-[0.98] text-sm sm:text-base whitespace-nowrap w-full sm:w-auto cursor-pointer"
              >
                {heroContent.secondaryCTA}
              </button>
            </motion.div>

            {/* Quick Stats Grid — Mobile First with Zero Overflow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="bg-slate-900/60 sm:bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-white/15 shadow-sm text-center sm:text-left">
                  <div className="text-xs sm:text-base md:text-lg font-heading font-extrabold text-white leading-tight">
                    Mon – Sat
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-200 font-medium mt-0.5 truncate">
                    Open 6 Days
                  </div>
                </div>

                <div className="bg-slate-900/60 sm:bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-white/15 shadow-sm text-center sm:text-left">
                  <div className="text-xs sm:text-base md:text-lg font-heading font-extrabold text-primary-200 leading-tight">
                    9+ Services
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-200 font-medium mt-0.5 truncate">
                    Comprehensive
                  </div>
                </div>

                <div className="bg-slate-900/60 sm:bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-white/15 shadow-sm text-center sm:text-left">
                  <div className="text-xs sm:text-base md:text-lg font-heading font-extrabold text-white leading-tight">
                    Digital 3D
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-200 font-medium mt-0.5 truncate">
                    Diagnostics
                  </div>
                </div>
              </div>

              {/* Dynamic Background Slide Indicators */}
              <div className="flex items-center gap-2 mt-4 pt-1">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.label}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      activeSlide === idx
                        ? 'w-7 sm:w-9 bg-emerald-400'
                        : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Switch to ${slide.label}`}
                  />
                ))}
                <span className="text-[10px] sm:text-xs text-white/80 ml-2 font-medium truncate">
                  Now showing: <span className="text-primary-200 font-semibold">{heroSlides[activeSlide].label}</span>
                </span>
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
            <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-slate-900/70 sm:bg-gradient-to-b sm:from-white/15 sm:to-white/5 backdrop-blur-xl p-3.5 sm:p-6 shadow-2xl shadow-black/50">
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
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-3">
                <div className="bg-white/10 rounded-xl p-2.5 sm:p-3.5 border border-white/10">
                  <div className="flex items-center gap-1 text-amber-300 text-xs font-bold">
                    <Star size={14} fill="currentColor" />
                    <span>4.9 / 5.0</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-200 font-medium mt-1">250+ Patient Reviews</div>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5 sm:p-3.5 border border-white/10">
                  <div className="flex items-center gap-1 text-teal-300 text-xs font-bold">
                    <CheckCircle2 size={14} />
                    <span>Digital Care</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-200 font-medium mt-1">3D Smile Preview</div>
                </div>
              </div>

              {/* Quick Consultation Prompt */}
              <button
                onClick={() => scrollToSection('appointment')}
                className="w-full mt-3 h-11 sm:h-12 py-2.5 sm:py-3 px-4 bg-primary hover:bg-primary-light text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-primary/25 border border-primary-200/20 active:scale-[0.98] cursor-pointer"
              >
                <span>Book First Consultation</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Prompt */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 cursor-pointer z-10"
        onClick={() => scrollToSection('treatments')}
      >
        <span className="text-[10px] text-slate-300 uppercase tracking-widest font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-primary-200" />
        </motion.div>
      </div>
    </section>
  );
}
