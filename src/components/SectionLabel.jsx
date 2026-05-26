import { m } from 'framer-motion';

export default function SectionLabel({ children }) {
  return (
    <m.div
      className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-300"
      initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="h-1.5 w-1.5 bg-gold-300 shadow-[0_0_18px_rgba(232,200,120,0.8)]" />
      {children}
    </m.div>
  );
}
