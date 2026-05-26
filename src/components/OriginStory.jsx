import { m } from 'framer-motion';
import SectionLabel from './SectionLabel.jsx';
import MediaFrame from './MediaFrame.jsx';
import { media } from '../data/mediaPrompts.js';

function OriginMap() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 640 440" role="presentation">
        <defs>
          <linearGradient id="originLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e8c878" stopOpacity="0" />
            <stop offset="30%" stopColor="#e8c878" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#b86643" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M123 301 C 230 210, 314 164, 501 132"
          fill="none"
          stroke="url(#originLine)"
          strokeWidth="2"
          strokeDasharray="8 9"
        />
        <circle cx="123" cy="301" r="7" fill="#e8c878" />
        <circle cx="501" cy="132" r="7" fill="#fff8ed" />
        <text x="88" y="330" fill="#fff8ed" fontSize="18" fontFamily="Inter" fontWeight="700">
          Ethiopia
        </text>
        <text x="456" y="111" fill="#fff8ed" fontSize="18" fontFamily="Inter" fontWeight="700">
          Marrakech
        </text>
        {[0, 1, 2, 3, 4].map((line) => (
          <path
            key={line}
            d={`M${65 + line * 18} ${100 + line * 33} C ${165 + line * 22} ${63 + line * 18}, ${250 + line * 26} ${138 + line * 21}, ${335 + line * 19} ${95 + line * 31}`}
            fill="none"
            stroke="#e8c878"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export default function OriginStory() {
  return (
    <section id="origin" className="relative overflow-hidden bg-espresso-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-paper-noise opacity-80" aria-hidden="true" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Born in Ethiopia, Roasted for Marrakech</SectionLabel>
          <m.h2
            className="font-display text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.98] text-crema-50"
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            From Ethiopian highlands to Marrakech light.
          </m.h2>
          <m.p
            className="mt-7 max-w-xl text-base leading-8 text-crema-100/74 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Every cup starts with carefully selected 100% Arabica beans from Ethiopia, known for
            their delicate aromatics, natural sweetness, and balanced profile.
          </m.p>
          <m.div
            className="mt-9 grid gap-4 border-l border-gold-300/35 pl-5 text-sm leading-7 text-crema-100/68"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <p>Selected for clarity, sweetness, and aromatic grace.</p>
            <p>Roasted in Marrakech with restraint, patience, and warmth.</p>
          </m.div>
        </div>

        <div className="relative">
          <MediaFrame
            src={media.origin}
            alt="Warm Ethiopian highland-inspired origin scene with coffee cherries"
            ratio="aspect-[4/3]"
            loop
          />
          <OriginMap />
        </div>
      </div>
    </section>
  );
}
