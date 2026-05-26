import { m, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel.jsx';
import { experienceCards } from '../data/sections.js';

export default function CoffeeExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative overflow-hidden bg-[#0b0706] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(184,102,67,0.18),transparent_26rem),radial-gradient(circle_at_82%_10%,rgba(232,200,120,0.11),transparent_24rem)]" />
      <div className="section-shell relative">
        <div className="max-w-3xl">
          <SectionLabel>Balanced. Elegant. Unforgettable.</SectionLabel>
          <m.h2
            className="font-display text-[clamp(2.45rem,5vw,5.2rem)] font-semibold leading-none text-crema-50"
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8 }}
          >
            Coffee made for pause, work, and connection.
          </m.h2>
        </div>

        <div id="coffee" className="mt-14 grid gap-4 md:grid-cols-3">
          {experienceCards.map(({ title, copy, icon: Icon }, index) => (
            <m.article
              key={title}
              className="glass-panel group relative min-h-[21rem] overflow-hidden rounded-lg p-6 shadow-insetGold"
              initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      rotateX: 2,
                      rotateY: index === 1 ? 0 : index === 0 ? -3 : 3,
                    }
              }
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 via-transparent to-mineral-500/8 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold-300/10 blur-3xl" />
              <span className="float-bean right-8 top-8 scale-125 opacity-55" aria-hidden="true" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="grid h-12 w-12 place-items-center border border-gold-300/24 bg-gold-300/10 text-gold-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold text-crema-50">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-crema-100/68">{copy}</p>
                </div>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
