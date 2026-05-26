import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import AnimatedButton from './AnimatedButton.jsx';

const links = [
  ['Home', '#home'],
  ['Coffee', '#coffee'],
  ['Experience', '#experience'],
  ['Roasting', '#roasting'],
  ['Visit', '#visit'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className={[
          'mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300 sm:px-5',
          scrolled
            ? 'border-crema-50/12 bg-espresso-950/70 shadow-glass backdrop-blur-2xl'
            : 'border-crema-50/8 bg-espresso-950/28 backdrop-blur-lg',
        ].join(' ')}
        aria-label="Main navigation"
      >
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-[6px]">
          <span className="grid h-9 w-9 place-items-center border border-gold-300/40 bg-gold-300/10 font-display text-lg font-semibold text-gold-300 shadow-[0_0_30px_rgba(215,168,77,0.18)]">
            M
          </span>
          <span className="text-sm font-bold text-crema-50 sm:text-base">Marh Coffee Roasters</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="focus-ring rounded-[4px] text-sm font-medium text-crema-100/76 transition-colors hover:text-gold-300"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <AnimatedButton href="#visit" variant="secondary" className="min-h-10 px-4 py-2 text-xs">
            Order / Visit Us
          </AnimatedButton>
        </div>

        <button
          type="button"
          className="focus-ring grid h-10 w-10 place-items-center rounded-[6px] border border-crema-50/12 bg-crema-50/[0.06] text-crema-50 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-navigation"
            className="mx-auto mt-2 max-w-7xl rounded-lg border border-crema-50/12 bg-espresso-950/90 p-3 shadow-glass backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
            transition={{ duration: 0.22 }}
          >
            <div className="grid gap-1">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-[6px] px-3 py-3 text-sm font-semibold text-crema-50/82 hover:bg-crema-50/[0.065]"
                >
                  {label}
                </a>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
