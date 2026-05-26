import { LazyMotion, domAnimation, m, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import OriginStory from './components/OriginStory.jsx';
import CoffeeExperience from './components/CoffeeExperience.jsx';
import CafeAtmosphere from './components/CafeAtmosphere.jsx';
import RoastingCraft from './components/RoastingCraft.jsx';
import ProductHighlight from './components/ProductHighlight.jsx';
import SensoryNotes from './components/SensoryNotes.jsx';
import Testimonials from './components/Testimonials.jsx';
import VisitSection from './components/VisitSection.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

function CoffeeAromaTrail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0.04, 0.96], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0.25]);

  return (
    <m.div
      className="pointer-events-none fixed left-4 top-24 z-30 hidden h-[calc(100vh-8rem)] w-px origin-top overflow-visible md:left-[4.5vw] md:block"
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-400/20 to-transparent" />
      <m.div
        className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-gold-300/0 via-gold-300 to-clay-400/0 shadow-[0_0_22px_rgba(232,200,120,0.65)]"
        style={{ scaleY }}
      />
      <m.div
        className="absolute -left-[3px] top-0 h-full w-[7px] origin-top rounded-full bg-gold-300/25 blur-md"
        style={{ scaleY }}
      />
    </m.div>
  );
}

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen overflow-x-clip bg-espresso-950 text-crema-50">
        <CoffeeAromaTrail />
        <Navbar />
        <main>
          <Hero />
          <OriginStory />
          <CoffeeExperience />
          <CafeAtmosphere />
          <RoastingCraft />
          <ProductHighlight />
          <SensoryNotes />
          <Testimonials />
          <VisitSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}
