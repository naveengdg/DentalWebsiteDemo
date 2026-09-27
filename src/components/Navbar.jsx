import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { clinicInfo, navLinks } from '../data/siteData';
import { useScrollPosition, scrollToSection } from '../utils/hooks';

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const sectionId = href.replace('#', '');
    setTimeout(() => scrollToSection(sectionId), 100);
  };

  const handleBookClick = () => {
    setIsMobileMenuOpen(false);
    scrollToSection('appointment');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled
            ? 'bg-white/98 shadow-sm border-b border-border-light'
            : 'bg-slate-950/60 backdrop-blur-md border-b border-white/10'
        }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          paddingTop: 'env(safe-area-inset-top, 0px)',
          WebkitTransform: 'translate3d(0, 0, 0)',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <nav className="container-main" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-3 group shrink-0"
              aria-label={`${clinicInfo.shortName} - Home`}
            >
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:shadow-primary/40 group-hover:scale-105 transition-all duration-300 shadow-md shadow-primary/25 border border-white/15">
                  <span className="text-white font-heading font-extrabold text-lg sm:text-xl leading-none">L</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-heading font-bold text-lg sm:text-xl tracking-tight leading-none transition-colors duration-300 ${
                  isScrolled ? 'text-text-primary' : 'text-white'
                }`}>
                  {clinicInfo.shortName}
                </span>
                <span className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase leading-none mt-1 transition-colors duration-300 ${
                  isScrolled ? 'text-primary' : 'text-primary-200'
                }`}>
                  Dental & Aesthetics
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links — Luxury Frosted Island */}
            <div className={`hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 rounded-full border transition-all duration-300 ${
              isScrolled
                ? 'bg-slate-100/90 border-slate-200/90 shadow-xs'
                : 'bg-white/10 border-white/15 backdrop-blur-md shadow-xs'
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-3 xl:px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isScrolled
                      ? 'text-slate-600 hover:text-primary hover:bg-white hover:shadow-xs'
                      : 'text-white/85 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions — Concierge Phone & Appointment CTA */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
              <a
                href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-300 shrink-0 whitespace-nowrap border ${
                  isScrolled
                    ? 'bg-slate-50 hover:bg-primary-50/80 text-text-primary hover:text-primary border-slate-200/90 shadow-xs'
                    : 'bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md hover:border-white/40 shadow-xs'
                }`}
                aria-label={`Call ${clinicInfo.name} at ${clinicInfo.phone}`}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Phone size={13} className={`shrink-0 transition-colors ${isScrolled ? 'text-primary' : 'text-primary-200'}`} />
                <span className="font-semibold tracking-wide tabular-nums whitespace-nowrap">
                  {clinicInfo.phone.replace(/ /g, '\u00A0')}
                </span>
              </a>

              <button
                onClick={handleBookClick}
                className="h-9 xl:h-10 px-4 xl:px-5 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white text-xs xl:text-sm font-bold rounded-full transition-all duration-300 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 active:scale-[0.98] whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Book Appointment</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={handleBookClick}
                className="px-3.5 py-1.5 h-8.5 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary-light transition-colors shadow-sm inline-flex items-center justify-center whitespace-nowrap"
              >
                Book Now
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  isScrolled ? 'hover:bg-primary-50 text-text-primary' : 'hover:bg-white/10 text-white'
                }`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-5 border-b border-border-light">
                  <span className="font-heading font-semibold text-lg text-text-primary">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-surface-warm transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Menu Links */}
                <nav className="flex-1 overflow-y-auto py-4 px-3">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.15, duration: 0.4 }}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="flex items-center px-4 py-3.5 text-base font-medium text-text-secondary rounded-xl hover:bg-primary-50 hover:text-primary transition-all duration-300"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Menu Footer */}
                <div className="p-5 border-t border-border-light space-y-3">
                  <button
                    onClick={handleBookClick}
                    className="w-full py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-light transition-colors"
                  >
                    Book Appointment
                  </button>
                  <a
                    href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-2 py-2.5 text-sm text-text-secondary hover:text-primary transition-colors whitespace-nowrap font-medium"
                  >
                    <Phone size={16} />
                    <span>{clinicInfo.phone.replace(/ /g, '\u00A0')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
