import { m } from 'framer-motion';
import SectionLabel from './SectionLabel.jsx';
import MediaFrame from './MediaFrame.jsx';
import { atmosphereMoments } from '../data/sections.js';
import { media } from '../data/mediaPrompts.js';

export default function CafeAtmosphere() {
  return (
    <section className="relative overflow-hidden bg-crema-50 py-24 text-espresso-950 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(184,102,67,0.15),transparent_26rem),radial-gradient(circle_at_88%_20%,rgba(95,128,123,0.12),transparent_24rem)]" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
          <MediaFrame
            src={media.cafe}
            alt="Warm modern Marrakech specialty coffee shop interior"
            ratio="aspect-[16/11]"
            className="border-espresso-950/10 bg-espresso-950/5"
            imgClassName="saturate-[0.95]"
            loop
          />
          <m.div
            className="absolute -bottom-6 right-4 max-w-xs rounded-lg border border-espresso-950/10 bg-crema-50/80 p-4 shadow-[0_24px_80px_rgba(20,11,7,0.18)] backdrop-blur-xl sm:right-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-clay-500">Marrakech Pause</p>
            <p className="mt-2 text-sm leading-6 text-espresso-800/72">A calm ritual for focused mornings.</p>
          </m.div>
        </div>

        <div>
          <SectionLabel>A Modern Pause in Marrakech</SectionLabel>
          <m.h2
            className="font-display text-[clamp(2.45rem,5vw,5.3rem)] font-semibold leading-none text-espresso-950"
            initial={{ opacity: 0, y: 22, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8 }}
          >
            Quiet luxury for the rhythm of the city.
          </m.h2>
          <p className="mt-7 text-base leading-8 text-espresso-800/68 sm:text-lg">
            Warm interior light, stone texture, ceramic cups, and enough stillness to make the
            coffee feel considered.
          </p>
          <div className="mt-10 grid gap-3">
            {atmosphereMoments.map(({ title, copy, icon: Icon }, index) => (
              <m.article
                key={title}
                className="grid grid-cols-[auto_1fr] gap-4 border border-espresso-950/10 bg-white/45 p-4 shadow-[0_18px_60px_rgba(20,11,7,0.08)] backdrop-blur-xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className="grid h-10 w-10 place-items-center border border-gold-500/30 bg-gold-400/10 text-gold-500">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <h3 className="font-semibold text-espresso-950">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-espresso-800/65">{copy}</p>
                </span>
              </m.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
