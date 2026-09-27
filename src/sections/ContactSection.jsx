import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { clinicInfo } from '../data/siteData';
import { useInView } from '../utils/hooks';

export default function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="section-padding bg-surface">
      <div ref={ref} className="container-main">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-3"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-text-primary mb-4"
          >
            Visit {clinicInfo.name}
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border-light">
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">Address</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{clinicInfo.address.full}</p>
                <p className="text-[11px] text-text-tertiary mt-1">Demo location — not a real address</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border-light">
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">Phone</h3>
                <a href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} className="text-sm text-primary hover:text-primary-light transition-colors">
                  {clinicInfo.phone}
                </a>
                <p className="text-[11px] text-text-tertiary mt-1">Demo number — not a real phone number</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border-light">
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">Email</h3>
                <a href={`mailto:${clinicInfo.email}`} className="text-sm text-primary hover:text-primary-light transition-colors">
                  {clinicInfo.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border-light">
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">Clinic Hours</h3>
                <div className="space-y-0.5 text-sm text-text-secondary">
                  <p>Mon – Fri: {clinicInfo.hours.weekdays}</p>
                  <p>Saturday: {clinicInfo.hours.saturday}</p>
                  <p>Sunday: {clinicInfo.hours.sunday}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border-light h-full min-h-[400px] bg-gradient-to-br from-primary-50 via-white to-primary-50 relative">
              {/* Map visual placeholder */}
              <div className="absolute inset-0">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-[0.06]" style={{
                  backgroundImage: 'linear-gradient(rgba(42, 122, 110, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(42, 122, 110, 0.5) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />
                {/* Road lines */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-primary/10 transform -translate-y-1/2" />
                <div className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-primary/10" />
                <div className="absolute top-1/4 left-1/4 right-1/4 h-[1px] bg-primary/8 transform rotate-12" />

                {/* Location pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center">
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-primary/20 mt-1 blur-[2px]" />
                  </motion.div>
                </div>

                {/* Small dots around */}
                <div className="absolute top-1/4 left-1/2 w-2 h-2 rounded-full bg-primary/15" />
                <div className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-primary/15" />
                <div className="absolute top-1/3 left-2/3 w-2 h-2 rounded-full bg-primary/10" />
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border-light p-3.5 sm:p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-text-primary font-heading">{clinicInfo.name}</h4>
                    <p className="text-[11px] sm:text-xs text-text-secondary">{clinicInfo.address.full}</p>
                  </div>
                  <button className="group self-start sm:self-auto flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary-light transition-colors shadow-sm">
                    <span>Get Directions</span>
                    <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-text-tertiary text-center mt-3">
              Map placeholder — in production, an interactive map would be embedded here.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
