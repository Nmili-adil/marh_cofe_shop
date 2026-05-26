import { ArrowUpRight, Instagram, MapPin } from 'lucide-react';

const footerLinks = [
  ['Home', '#home'],
  ['Coffee', '#coffee'],
  ['Experience', '#experience'],
  ['Roasting', '#roasting'],
  ['Visit', '#visit'],
  ['Contact', '#contact'],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-crema-50/10 bg-espresso-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(232,200,120,0.09),transparent_22rem),radial-gradient(circle_at_86%_30%,rgba(95,128,123,0.08),transparent_20rem)]" />
      <div className="section-shell relative py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.85fr] lg:items-start">
          <div>
            <a href="#home" className="focus-ring inline-flex items-center gap-3 rounded-[6px]">
              <span className="grid h-10 w-10 place-items-center border border-gold-300/36 bg-gold-300/10 font-display text-lg font-semibold text-gold-300">
                M
              </span>
              <span className="text-sm font-bold text-crema-50 sm:text-base">Marh Coffee Roasters</span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-7 text-crema-100/62">
              100% Ethiopian Arabica, selected with care and roasted with elegance in Marrakech.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {footerLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="focus-ring w-fit rounded-[4px] text-crema-100/66 transition-colors hover:text-gold-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="grid gap-3 text-sm text-crema-100/66">
            <a
              href="https://maps.google.com/?q=Marrakech%20Morocco"
              className="focus-ring inline-flex w-fit items-center gap-2 rounded-[4px] transition-colors hover:text-gold-300"
            >
              <MapPin className="h-4 w-4 text-gold-300" />
              Marrakech, Morocco
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="focus-ring inline-flex w-fit items-center gap-2 rounded-[4px] transition-colors hover:text-gold-300"
            >
              <Instagram className="h-4 w-4 text-gold-300" />
              @marhcoffeeroasters
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <p className="text-crema-100/52">Daily - 8:00 to 21:00</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-crema-50/10 pt-6 text-xs text-crema-100/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Marh Coffee Roasters. All rights reserved.</p>
          <p>Roasted slowly. Served beautifully.</p>
        </div>
      </div>
    </footer>
  );
}
