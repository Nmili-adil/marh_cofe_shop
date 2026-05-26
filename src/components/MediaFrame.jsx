import { m } from 'framer-motion';

export default function MediaFrame({
  src,
  alt,
  ratio = 'aspect-[16/10]',
  className = '',
  imgClassName = '',
  priority = false,
  loop = false,
}) {
  return (
    <m.figure
      className={[
        'glass-panel relative isolate overflow-hidden rounded-lg shadow-insetGold',
        ratio,
        className,
      ].join(' ')}
      initial={{ opacity: 0, y: 26, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {loop && <div className="ambient-loop" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={['h-full w-full object-cover', imgClassName].join(' ')}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/55 via-transparent to-crema-50/[0.035]" />
      <div className="pointer-events-none absolute inset-0 zellige-mask opacity-[0.08] mix-blend-screen" />
    </m.figure>
  );
}
