import { m } from 'framer-motion';
import SectionLabel from './SectionLabel.jsx';
import MediaFrame from './MediaFrame.jsx';
import { aromaNotes } from '../data/sections.js';
import { media } from '../data/mediaPrompts.js';

export default function SensoryNotes() {
  return (
    <section id="sensory" className="relative overflow-hidden bg-crema-50 py-24 text-espresso-950 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,237,0.94),rgba(245,234,216,0.96)),radial-gradient(circle_at_24%_24%,rgba(215,168,77,0.24),transparent_24rem)]" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Taste the Details</SectionLabel>
          <m.h2
            className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-none text-espresso-950"
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8 }}
          >
            A cup with a soft aromatic trail.
          </m.h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-espresso-800/68 sm:text-lg">
            Floral aroma, citrus brightness, light chocolate depth, smooth crema, and a clean
            finish.
          </p>
        </div>
        <div className="relative">
          <MediaFrame
            src={media.sensory}
            alt="Abstract warm sensory aroma notes for coffee"
            ratio="aspect-[16/10]"
            className="border-espresso-950/10 bg-espresso-950/5"
            loop
          />
          <div className="absolute inset-0">
            {aromaNotes.map((note, index) => (
              <m.span
                key={note}
                className={[
                  'absolute rounded-full border border-white/35 bg-white/45 px-4 py-2 text-xs font-bold text-espresso-900 shadow-[0_18px_50px_rgba(20,11,7,0.12)] backdrop-blur-xl',
                  ['left-[8%] top-[16%]', 'right-[10%] top-[20%]', 'left-[18%] bottom-[18%]', 'right-[18%] bottom-[16%]', 'left-[40%] top-[48%]'][index],
                ].join(' ')}
                initial={{ opacity: 0, y: 18, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-120px' }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.08 },
                  y: { duration: 4 + index * 0.3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 },
                  scale: { duration: 0.5 },
                }}
              >
                {note}
              </m.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
