import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from './SectionLabel.jsx';
import MediaFrame from './MediaFrame.jsx';
import { roastingSteps } from '../data/sections.js';
import { media } from '../data/mediaPrompts.js';

export default function RoastingCraft() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 55%'] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="roasting" ref={ref} className="relative overflow-hidden bg-espresso-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,200,120,0.12),transparent_24rem),linear-gradient(180deg,#070403,#140b07_44%,#070403)]" />
      <div className="steam-field opacity-55" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="section-shell relative">
        <div className="grid items-end gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel>Roasted to Reveal, Not Overpower</SectionLabel>
            <m.h2
              className="font-display text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-none text-crema-50"
              initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.8 }}
            >
              A roast guided by balance.
            </m.h2>
          </div>
          <m.p
            className="max-w-xl text-base leading-8 text-crema-100/70 sm:text-lg lg:justify-self-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Carefully roasted to preserve aroma, elegance, and the natural character of Ethiopian
            Arabica.
          </m.p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <MediaFrame
            src={media.roasting}
            alt="Arabica beans roasting with warm golden highlights"
            ratio="aspect-[3/2]"
            loop
          />

          <div className="relative">
            <div className="absolute left-0 top-8 hidden h-px w-full bg-crema-50/12 sm:block" />
            <m.div
              className="absolute left-0 top-8 hidden h-px origin-left bg-gradient-to-r from-gold-300 via-clay-400 to-gold-300 sm:block"
              style={{ scaleX }}
            />
            <div className="grid gap-4 sm:grid-cols-5">
              {roastingSteps.map((step, index) => (
                <m.article
                  key={step}
                  className="glass-panel relative min-h-[10.5rem] rounded-lg p-4"
                  initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.58, delay: index * 0.08 }}
                >
                  <span className="relative z-10 grid h-8 w-8 place-items-center border border-gold-300/35 bg-espresso-950 text-xs font-bold text-gold-300">
                    {index + 1}
                  </span>
                  <h3 className="mt-8 text-sm font-bold text-crema-50">{step}</h3>
                  <p className="mt-2 text-xs leading-5 text-crema-100/56">
                    {['Careful green selection', 'Measured heat curve', 'Aromas settle', 'Brewed with clarity', 'Shared warm'][index]}
                  </p>
                </m.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
