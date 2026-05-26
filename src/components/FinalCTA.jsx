import { MapPin } from 'lucide-react';
import { m } from 'framer-motion';
import AnimatedButton from './AnimatedButton.jsx';
import { media } from '../data/mediaPrompts.js';

export default function FinalCTA() {
  return (
    <section className="relative isolate min-h-[86vh] overflow-hidden bg-espresso-950 py-24 sm:py-32">
      <img
        src={media.finalCta}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-72"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(232,200,120,0.15),transparent_24rem),linear-gradient(180deg,rgba(7,4,3,0.35),#070403_92%)]" />
      <div className="steam-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="section-shell relative z-10 flex min-h-[62vh] items-end">
        <div className="max-w-5xl">
          <m.p
            className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-gold-300"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.65 }}
          >
            Marh Coffee Roasters
          </m.p>
          <m.h2
            className="font-display text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.92] text-crema-50"
            initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Come for the Coffee. Stay for the Moment.
          </m.h2>
          <m.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <AnimatedButton href="#coffee">Explore Our Coffee</AnimatedButton>
            <AnimatedButton href="#visit" variant="secondary" icon={MapPin}>
              Visit Marh Coffee Roasters
            </AnimatedButton>
          </m.div>
        </div>
      </div>
    </section>
  );
}
