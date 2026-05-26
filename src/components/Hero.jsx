import { Coffee, MapPin } from 'lucide-react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import AnimatedButton from './AnimatedButton.jsx';
import { heroBadges } from '../data/sections.js';
import { media } from '../data/mediaPrompts.js';

function FloatingBeans() {
  const beans = [
    'left-[10%] top-[28%] rotate-[-28deg]',
    'left-[19%] bottom-[25%] rotate-[20deg]',
    'right-[15%] top-[22%] rotate-[34deg]',
    'right-[10%] bottom-[30%] rotate-[-18deg]',
    'left-[46%] top-[10%] rotate-[60deg]',
  ];

  return beans.map((position, index) => (
    <m.span
      key={position}
      className={`float-bean ${position}`}
      animate={{ y: [0, -16, 0], x: [0, index % 2 ? 8 : -8, 0], rotate: [0, index % 2 ? 8 : -8, 0] }}
      transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
      aria-hidden="true"
    />
  ));
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, reduceMotion ? 0 : 90]);
  const imageY = useTransform(scrollYProgress, [0, 0.28], [0, reduceMotion ? 0 : -58]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.28], [0, reduceMotion ? 0 : -3]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(232,200,120,0.18),transparent_28rem),radial-gradient(circle_at_82%_8%,rgba(95,128,123,0.13),transparent_24rem),linear-gradient(180deg,#070403_0%,#140b07_54%,#070403_100%)]" />
      <div className="ambient-loop opacity-70" aria-hidden="true" />
      <div className="steam-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="absolute inset-0 zellige-mask opacity-[0.055]" aria-hidden="true" />
      <m.div
        className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-[0.93fr_1.07fr]"
        style={{ y: heroY }}
      >
        <div className="max-w-3xl">
          <m.p
            className="mb-5 inline-flex items-center gap-2 border border-gold-300/22 bg-gold-300/8 px-3 py-2 text-xs font-bold uppercase tracking-[0.28em] text-gold-300 backdrop-blur-xl"
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <Coffee className="h-3.5 w-3.5" />
            The Origin of Real Coffee
          </m.p>
          <m.h1
            className="font-display text-[clamp(2.25rem,8vw,2.8rem)] font-semibold leading-[0.92] text-crema-50"
            initial={{ opacity: 0, y: 28, filter: 'blur(14px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            100% Ethiopian Arabica, Roasted with Elegance in Marrakech.
          </m.h1>
          <m.p
            className="mt-7 max-w-2xl text-base leading-8 text-crema-100/76 sm:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
          >
            Marh Coffee Roasters brings carefully selected Ethiopian Arabica to Marrakech - balanced,
            aromatic, and crafted for true coffee moments.
          </m.p>
          <m.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46 }}
          >
            <AnimatedButton href="#coffee">Explore Our Coffee</AnimatedButton>
            <AnimatedButton href="#visit" variant="secondary" icon={MapPin}>
              Visit Us in Marrakech
            </AnimatedButton>
          </m.div>
          <m.div
            className="mt-10 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.56 }}
          >
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="border border-crema-50/12 bg-crema-50/[0.055] px-3 py-2 text-center text-xs font-semibold text-crema-100/80 backdrop-blur-xl"
              >
                {badge}
              </span>
            ))}
          </m.div>
        </div>

        <m.div className="relative mx-auto w-full max-w-[700px]" style={{ y: imageY, rotate: imageRotate }}>
          <div className="absolute -inset-8 rounded-full bg-gold-300/10 blur-3xl" aria-hidden="true" />
          <div className="absolute inset-10 rounded-full bg-mineral-500/10 blur-3xl" aria-hidden="true" />
          <FloatingBeans />
          <m.div
            className="glass-panel relative overflow-hidden rounded-lg p-2 shadow-glow"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(14px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.05, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { rotateX: 2, rotateY: -4, scale: 1.012 }}
          >
            <img
              src={media.heroProduct}
              alt="Floating Marh Coffee Roasters bag with ceramic coffee cup and steam"
              className="aspect-[16/12] h-auto w-full rounded-[5px] object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso-950/38 via-transparent to-gold-300/10" />
          </m.div>
          <m.div
            className="glass-panel absolute -bottom-5 left-5 max-w-[15rem] rounded-lg p-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.74, duration: 0.65 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">Signature Roast</p>
            <p className="mt-2 text-sm leading-6 text-crema-50/80">Roasted slowly. Served beautifully.</p>
          </m.div>
        </m.div>
      </m.div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-espresso-950" />
    </section>
  );
}
