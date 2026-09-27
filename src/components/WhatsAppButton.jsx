import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollPosition } from '../utils/hooks';

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScrollPosition();

  // Explicitly check for desktop viewport
  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(typeof window !== 'undefined' && window.innerWidth >= 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useEffect(() => {
    if (scrollY > 400 && !hasScrolled) {
      setHasScrolled(true);
    }
  }, [scrollY, hasScrolled]);

  // Show tooltip after delay
  useEffect(() => {
    if (hasScrolled && isDesktop) {
      const timer = setTimeout(() => setIsTooltipVisible(true), 2000);
      const hideTimer = setTimeout(() => setIsTooltipVisible(false), 8000);
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [hasScrolled, isDesktop]);

  // Never render on mobile devices
  if (!isDesktop || !hasScrolled) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-elevated p-4 max-w-[220px] border border-border-light relative"
          >
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-surface-warm transition-colors"
              aria-label="Close tooltip"
            >
              <X size={12} className="text-text-tertiary" />
            </button>
            <p className="text-sm text-text-primary font-medium mb-0.5">Chat with us</p>
            <p className="text-xs text-text-tertiary">Have questions? We&apos;re here to help.</p>
            {/* Arrow */}
            <div className="absolute -bottom-[6px] right-6 w-3 h-3 bg-white border-r border-b border-border-light transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/919000000000"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" fill="white" strokeWidth={0} />
      </motion.a>
    </motion.div>
  );
}
