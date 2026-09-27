import { motion } from 'framer-motion';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/hooks';

export default function TreatmentCard({ treatment, index, isInView }) {
  const handleSelectTreatment = (e) => {
    e.stopPropagation();
    scrollToSection('appointment');
    // Pre-populate treatment in select dropdown if available
    const selectElem = document.getElementById('apt-treatment');
    if (selectElem) {
      selectElem.value = treatment.title;
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onClick={handleSelectTreatment}
      className="group relative bg-white rounded-3xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-between"
    >
      <div className="w-full shrink-0">
        {/* Service Photographic Banner */}
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-slate-100">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out block"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Top Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="text-xs font-bold text-primary-900 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
              {treatment.category}
            </span>
          </div>

          {/* Highlight Badge */}
          <div className="absolute top-3 right-3">
            <span className="text-[11px] font-semibold text-white bg-primary/90 backdrop-blur-md px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              <Sparkles size={11} className="text-teal-200" />
              {treatment.highlight}
            </span>
          </div>

          {/* Duration tag at bottom of photo */}
          <div className="absolute bottom-2.5 left-3 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow-md">
            <Clock size={13} className="text-primary-200" />
            <span>{treatment.duration}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-heading font-bold text-text-primary group-hover:text-primary transition-colors leading-snug mb-2">
            {treatment.title}
          </h3>

          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2">
            {treatment.benefit}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-0">
        <div className="pt-3 border-t border-border-light flex items-center justify-between text-xs sm:text-sm font-bold text-primary group-hover:text-primary-light transition-colors">
          <span>Book Consultation</span>
          <div className="w-8 h-8 rounded-full bg-primary-50 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-300">
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
