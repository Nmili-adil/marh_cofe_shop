import { Quote } from 'lucide-react';
import { m } from 'framer-motion';
import SectionLabel from './SectionLabel.jsx';
import { testimonials } from '../data/sections.js';

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#0a0605] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(232,200,120,0.12),transparent_24rem),radial-gradient(circle_at_20%_70%,rgba(184,102,67,0.12),transparent_24rem)]" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Brand Promise</SectionLabel>
          <m.h2
            className="font-display text-[clamp(2.35rem,5vw,5.2rem)] font-semibold leading-none text-crema-50"
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8 }}
          >
            Coffee that feels intentional.
          </m.h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map(({ quote, name, role }, index) => (
            <m.article
              key={name}
              className="glass-panel min-h-[18rem] rounded-lg p-6"
              initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              <Quote className="h-7 w-7 text-gold-300" />
              <p className="mt-8 text-lg leading-8 text-crema-50/84">"{quote}"</p>
              <div className="mt-10 h-px bg-crema-50/10" />
              <p className="mt-5 font-bold text-crema-50">{name}</p>
              <p className="mt-1 text-sm text-crema-100/55">{role}</p>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
