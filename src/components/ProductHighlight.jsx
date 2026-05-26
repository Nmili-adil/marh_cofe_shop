import { ShoppingBag } from 'lucide-react';
import { m, useReducedMotion } from 'framer-motion';
import AnimatedButton from './AnimatedButton.jsx';
import SectionLabel from './SectionLabel.jsx';
import { aromaNotes, productDetails } from '../data/sections.js';
import { media } from '../data/mediaPrompts.js';

export default function ProductHighlight() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0f0a08] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(232,200,120,0.15),transparent_25rem),radial-gradient(circle_at_22%_70%,rgba(95,128,123,0.13),transparent_25rem)]" />
      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionLabel>Ethiopian Arabica Signature Roast</SectionLabel>
          <m.h2
            className="font-display text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-none text-crema-50"
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8 }}
          >
            A daily roast with a quiet signature.
          </m.h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-crema-100/72 sm:text-lg">
            Balanced aroma. Elegant finish. Built for espresso, filter, slow coffee, and the daily
            ritual.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {productDetails.map(([label, value]) => (
              <div key={label} className="border border-crema-50/10 bg-crema-50/[0.045] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">{label}</p>
                <p className="mt-2 text-sm leading-6 text-crema-50/82">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <AnimatedButton href="#visit" icon={ShoppingBag}>
              Order / Visit Us
            </AnimatedButton>
            <AnimatedButton href="#sensory" variant="secondary">
              Taste the Details
            </AnimatedButton>
          </div>
        </div>

        <m.div
          className="glass-panel relative mx-auto w-full max-w-[520px] overflow-hidden rounded-lg p-5"
          initial={{ opacity: 0, y: 26, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8 }}
          whileHover={reduceMotion ? undefined : { rotateY: -5, rotateX: 2, y: -6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 via-transparent to-mineral-500/10" />
          <div className="relative aspect-square overflow-hidden rounded-[5px] bg-espresso-950">
            <img
              src={media.productBag}
              alt="Marh Coffee Roasters Ethiopian Arabica Signature Roast bag"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/35 via-transparent to-transparent" />
          </div>
          <div className="relative mt-5">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-bold text-crema-50">Roast level</span>
              <span className="text-crema-100/66">Medium elegant</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-crema-50/12">
              <div className="h-full w-[58%] bg-gradient-to-r from-gold-300 to-clay-400" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {aromaNotes.slice(0, 4).map((note) => (
                <span key={note} className="border border-gold-300/18 bg-gold-300/8 px-3 py-2 text-xs text-crema-50/78">
                  {note}
                </span>
              ))}
            </div>
          </div>
          <span className="glass-panel absolute right-4 top-8 rounded-[6px] px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
            100% Arabica
          </span>
        </m.div>
      </div>
    </section>
  );
}
