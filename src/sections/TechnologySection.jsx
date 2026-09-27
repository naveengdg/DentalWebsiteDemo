import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { technologyItems } from '../data/siteData';
import { useInView } from '../utils/hooks';

export default function TechnologySection() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-slate-950 overflow-hidden relative text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs sm:text-sm font-semibold text-primary-200 tracking-wider uppercase mb-3 bg-white/10 px-3.5 py-1 rounded-full border border-white/10"
          >
            Clinical Innovation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-bold text-white mb-4"
          >
            Modern tools. Gentle, precise care.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed"
          >
            Digital scanning, intraoral visualization, and accurate planning ensure a comfortable, transparent dental experience.
          </motion.p>
        </div>

        {/* Feature Visual Banner + Technology List */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Tech Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] border border-white/20 shadow-2xl bg-slate-900 shrink-0 w-full">
              <img
                src="/images/dental-tech.jpg"
                alt="Digital intraoral 3D scanning"
                className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700 block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-sm">
                  <Sparkles size={13} className="text-primary-200" />
                  <span>3D Digital Scanner</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/15">
                <div className="text-sm font-semibold text-white mb-0.5">
                  Instant Intraoral 3D Mapping
                </div>
                <div className="text-xs text-slate-300">
                  No messy putty impressions. Fast, painless, and micrometer-precise digital diagnostics.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Highlight Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/25 text-primary-200 flex items-center justify-center mb-3">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="text-base font-bold text-white font-heading mb-1">Zero Discomfort Scans</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Smooth optical wands replace old impression molds for nausea-free diagnostic records.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/25 text-primary-200 flex items-center justify-center mb-3">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="text-base font-bold text-white font-heading mb-1">Chairside 3D Previews</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                See your teeth in ultra-high resolution on screen and understand treatment outcomes clearly.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/25 text-primary-200 flex items-center justify-center mb-3">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="text-base font-bold text-white font-heading mb-1">Digital Precision</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Micron-level accuracy for crowns, veneers, and orthodontic aligners that fit naturally.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/25 text-primary-200 flex items-center justify-center mb-3">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="text-base font-bold text-white font-heading mb-1">Class-B Sterilization</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hospital-grade autoclave protocols guaranteeing absolute patient hygiene and safety.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Tech Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {technologyItems.map((item, i) => {
            const Icon = Icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white/[0.04] backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                    {Icon && <Icon size={20} className="text-primary-200" strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Demo label */}
        <p className="text-center text-xs text-slate-500 mt-10">
          Technology equipment shown represents modern dental practice standard capabilities.
        </p>
      </div>
    </section>
  );
}
