import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for detecting when an element enters the viewport.
 * Uses IntersectionObserver for performance.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once !== false) {
            observer.unobserve(element);
          }
        } else if (options.once === false) {
          setIsInView(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isInView];
}

/**
 * Custom hook to detect scroll position for navbar effects.
 * Throttled with requestAnimationFrame to prevent re-render thrashing during mobile scroll.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset || 0;
          const scrolled = y > 25;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          setScrollY(y);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrolled };
}

/**
 * Smooth scroll directly to a section or directly to the booking application form.
 * Accounts for fixed header offset and focuses the full name input field.
 */
export function scrollToSection(sectionId) {
  // If user clicks Book Appointment, point directly to the booking application form!
  const targetId = (sectionId === 'appointment' || sectionId === 'booking')
    ? 'booking-form'
    : sectionId;

  const el = document.getElementById(targetId) || document.getElementById(sectionId);
  if (el) {
    const headerHeight = window.innerWidth < 768 ? 72 : 88;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // Auto-focus the Name input on the booking application form
    if (targetId === 'booking-form') {
      setTimeout(() => {
        const nameInput = document.getElementById('apt-name');
        if (nameInput) {
          nameInput.focus({ preventScroll: true });
        }
      }, 450);
    }
  }
}

/**
 * Framer Motion animation presets.
 */
export const motionPresets = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  slideLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  slideRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
