import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);
import { clinicInfo, navLinks } from '../data/siteData';
import { useInView, scrollToSection } from '../utils/hooks';

export default function Footer() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const treatmentLinks = [
    { label: 'General Dentistry', href: '#treatments' },
    { label: 'Cosmetic Dentistry', href: '#treatments' },
    { label: 'Dental Implants', href: '#treatments' },
    { label: 'Teeth Whitening', href: '#treatments' },
    { label: 'Orthodontics', href: '#treatments' },
  ];

  return (
    <footer className="bg-text-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div ref={ref} className="container-main relative z-10">
        {/* Top CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 py-10 border-b border-white/10"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-1">Ready for a healthier smile?</h3>
            <p className="text-sm text-white/50">Book your consultation today.</p>
          </div>
          <button
            onClick={() => scrollToSection('appointment')}
            className="px-8 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-light transition-all duration-300 flex-shrink-0"
          >
            Book Appointment
          </button>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-heading font-bold text-base leading-none">L</span>
              </div>
              <div>
                <span className="font-heading font-semibold text-base leading-none">{clinicInfo.shortName}</span>
                <span className="block text-[9px] font-medium tracking-widest uppercase text-white/40 leading-none mt-0.5">Dental & Aesthetics</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              {clinicInfo.description}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a href={clinicInfo.social.instagram} className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/60" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={clinicInfo.social.facebook} className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/60" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={clinicInfo.social.youtube} className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/60" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/70">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href.replace('#', '')); }}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/70">Treatments</h4>
            <ul className="space-y-2.5">
              {treatmentLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection('treatments'); }}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/70">Contact</h4>
            <div className="space-y-3 text-sm text-white/40">
              <p>{clinicInfo.address.full}</p>
              <p>
                <a href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {clinicInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${clinicInfo.email}`} className="hover:text-white transition-colors">
                  {clinicInfo.email}
                </a>
              </p>
              <div className="pt-2 space-y-1">
                <p>Mon – Fri: {clinicInfo.hours.weekdays}</p>
                <p>Sat: {clinicInfo.hours.saturday}</p>
                <p>Sun: {clinicInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-white/30">
            <span>© {new Date().getFullYear()} {clinicInfo.name}</span>
            <span className="hidden sm:inline">·</span>
            <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-wider">
              Demo Website — Created as a dental website concept
            </span>
          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="text-white/50" />
          </button>
        </div>
      </div>
    </footer>
  );
}
