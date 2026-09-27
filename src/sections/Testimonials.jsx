import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/siteData';
import { useInView } from '../utils/hooks';

export default function Testimonials() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 bg-primary-50 px-3.5 py-1 rounded-full"
          >
            Patient Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-bold text-text-primary mb-4"
          >
            What patients say about Lumora
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-text-secondary leading-relaxed"
          >
            Real feedback format showing how local patients build confidence and trust with their dentist.
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-surface rounded-2xl p-6 sm:p-7 border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row: Star rating + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center text-primary">
                    <Quote size={15} />
                  </div>
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center justify-between pt-4 border-t border-border-light mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-sm shadow-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text-primary font-heading">{testimonial.name}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.treatment}</div>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-text-tertiary bg-white border border-border px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-text-tertiary mt-8">
          Demonstration patient stories. In production, verified Google Reviews or local testimonials are linked.
        </p>
      </div>
    </section>
  );
}
