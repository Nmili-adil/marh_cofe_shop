import { Navigation } from 'lucide-react';
import { m } from 'framer-motion';
import AnimatedButton from './AnimatedButton.jsx';
import SectionLabel from './SectionLabel.jsx';
import { visitDetails } from '../data/sections.js';

function MapCard() {
  return (
    <m.div
      className="glass-panel relative min-h-[32rem] overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 26, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_47%_42%,rgba(232,200,120,0.22),transparent_15rem),linear-gradient(135deg,#140b07,#070403)]" />
      <div className="absolute inset-0 zellige-mask opacity-[0.13]" />
      <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 620 520" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((line) => (
          <path
            key={line}
            d={`M${-40 + line * 70} ${90 + line * 42} C ${130 + line * 18} ${40 + line * 20}, ${270 + line * 30} ${220 + line * 12}, ${660 - line * 30} ${135 + line * 52}`}
            fill="none"
            stroke={line % 2 ? '#e8c878' : '#5f807b'}
            strokeOpacity="0.16"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center border border-gold-300/30 bg-gold-300/12 shadow-[0_0_80px_rgba(232,200,120,0.32)] backdrop-blur-xl">
        <Navigation className="h-8 w-8 text-gold-300" />
      </div>
      <div className="absolute bottom-5 left-5 right-5 border border-crema-50/10 bg-espresso-950/62 p-5 backdrop-blur-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">Marrakech</p>
        <p className="mt-2 text-sm leading-6 text-crema-100/70">
          A premium coffee address shaped by warm light, aroma, and calm hospitality.
        </p>
      </div>
    </m.div>
  );
}

export default function VisitSection() {
  return (
    <section id="visit" className="relative overflow-hidden bg-espresso-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(95,128,123,0.12),transparent_22rem),radial-gradient(circle_at_85%_70%,rgba(232,200,120,0.12),transparent_24rem)]" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionLabel>Your Coffee Address in Marrakech</SectionLabel>
          <m.h2
            className="font-display text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-none text-crema-50"
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8 }}
          >
            Come in for the cup you were waiting for.
          </m.h2>
          <div id="contact" className="mt-10 grid gap-3">
            {visitDetails.map(({ label, value, icon: Icon }, index) => (
              <m.div
                key={label}
                className="grid grid-cols-[auto_1fr] gap-4 border border-crema-50/10 bg-crema-50/[0.045] p-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <span className="grid h-10 w-10 place-items-center border border-gold-300/22 bg-gold-300/8 text-gold-300">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">{label}</p>
                  <p className="mt-1 text-sm leading-6 text-crema-50/78">{value}</p>
                </span>
              </m.div>
            ))}
          </div>
          <div className="mt-8">
            <AnimatedButton href="https://maps.google.com/?q=Marrakech%20Morocco" icon={Navigation}>
              Get Directions
            </AnimatedButton>
          </div>
        </div>
        <MapCard />
      </div>
    </section>
  );
}
