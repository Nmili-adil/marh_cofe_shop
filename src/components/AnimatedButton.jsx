import { ArrowRight } from 'lucide-react';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function AnimatedButton({
  children,
  href = '#coffee',
  variant = 'primary',
  icon: Icon = ArrowRight,
  className = '',
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 170, damping: 18, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 170, damping: 18, mass: 0.2 });
  const iconX = useTransform(springX, [-12, 12], [-2, 5]);

  const isPrimary = variant === 'primary';

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.a
      href={href}
      className={[
        'focus-ring group inline-flex min-h-12 items-center justify-center gap-3 rounded-[6px] px-5 py-3 text-sm font-bold transition-colors',
        isPrimary
          ? 'bg-crema-50 text-espresso-950 shadow-[0_18px_60px_rgba(232,200,120,0.26)] hover:bg-gold-300'
          : 'border border-crema-50/16 bg-crema-50/[0.055] text-crema-50 backdrop-blur-xl hover:border-gold-300/45 hover:bg-crema-50/[0.09]',
        className,
      ].join(' ')}
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileTap={{ scale: 0.985 }}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      <span>{children}</span>
      <m.span style={{ x: iconX }} aria-hidden="true">
        <Icon className="h-4 w-4" />
      </m.span>
    </m.a>
  );
}
