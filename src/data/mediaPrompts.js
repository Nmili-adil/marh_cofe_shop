export const imagePrompts = [
  {
    name: 'Hero Coffee Product',
    file: '/assets/marh/images/hero-coffee-product.webp',
    aspectRatio: '16:9 desktop, mobile-safe 9:16 crop',
    prompt:
      'Cinematic premium product render of a specialty coffee bag and ceramic cup for “Marh Coffee Roasters”, floating in a dark espresso environment, warm golden rim light, soft steam rising, roasted Arabica beans suspended in the air, subtle Moroccan geometric shadows, Ethiopian origin mood, luxury coffee atelier, Apple-level product photography, Stripe-like gradient depth, ultra realistic, studio lighting, shallow depth of field, 8K, premium editorial composition, no cheap stock photo look, no distorted text, no fake hands.',
  },
  {
    name: 'Ethiopian Arabica Origin',
    file: '/assets/marh/images/ethiopian-arabica-origin.webp',
    aspectRatio: '16:9',
    prompt:
      'Refined editorial image representing 100% Arabica coffee from Ethiopia, warm sunrise over abstract Ethiopian highlands, coffee cherries, delicate botanical details, golden atmosphere, elegant topographic lines, modern luxury coffee branding, soft film grain, cinematic depth, premium warm tones, realistic but artistic, no generic stock photo look.',
  },
  {
    name: 'Marrakech Cafe Interior',
    file: '/assets/marh/images/marrakech-cafe-interior.webp',
    aspectRatio: '16:9',
    prompt:
      'Modern warm specialty coffee shop interior in Marrakech, soft natural light, stone textures, warm wood, subtle Moroccan zellige pattern, premium minimal furniture, people working quietly and friends drinking coffee, ceramic cups, golden crema, cozy but luxurious atmosphere, editorial hospitality photography, cinematic realism, shallow depth of field, calm premium mood, avoid fake hands and distorted faces.',
  },
  {
    name: 'Roasting Craft',
    file: '/assets/marh/images/coffee-roasting-craft.webp',
    aspectRatio: '3:2',
    prompt:
      'Close-up cinematic image of coffee roasting, Arabica beans in motion, warm fire glow, smoke particles, dark roasted tones, golden highlights, artisanal precision, premium specialty coffee mood, macro photography, high-detail texture, elegant shadows, luxury coffee craftsmanship.',
  },
  {
    name: 'Sensory Notes Visual',
    file: '/assets/marh/images/sensory-notes-visual.webp',
    aspectRatio: '16:9',
    prompt:
      'Abstract luxury sensory visual for coffee aroma notes: floral aroma, soft citrus brightness, light chocolate depth, smooth crema, clean finish. Floating translucent aroma bubbles, warm beige and espresso gradients, elegant empty space for typography, premium minimal composition, cinematic soft light, refined editorial feel.',
  },
  {
    name: 'Product Bag Mockup',
    file: '/assets/marh/images/ethiopian-signature-roast-bag.webp',
    aspectRatio: '1:1',
    prompt:
      'Premium coffee bag mockup for “Marh Coffee Roasters”, minimalist label, deep espresso packaging, gold foil accent, ivory typography, Moroccan-modern detail, specialty Ethiopian Arabica, luxury product photography on warm stone surface, soft shadows, cinematic studio lighting, high-end packaging design, no distorted text.',
  },
  {
    name: 'Final CTA Background',
    file: '/assets/marh/images/final-cta-steam.webp',
    aspectRatio: '16:9',
    prompt:
      'Cinematic dark espresso coffee atmosphere with soft steam, warm golden light leaks, roasted coffee beans, abstract Moroccan pattern shadows, premium calm mood, luxury specialty coffee brand background, strong depth, subtle grain, elegant negative space for headline text.',
  },
];

export const videoPrompts = [
  {
    name: 'Hero Steam Loop',
    file: '/assets/marh/videos/hero-steam-loop.mp4',
    duration: '6-8 seconds',
    format: 'seamless loop',
    prompt:
      '6–8 second seamless cinematic loop of a premium ceramic coffee cup with soft steam rising slowly, dark espresso background, warm golden rim light, floating roasted Arabica beans moving gently, luxury coffee atmosphere, macro shot, slow motion, elegant camera push-in, shallow depth of field, no harsh movement, no fake hands, no distorted objects, perfect for website hero background.',
  },
  {
    name: 'Floating Beans Loop',
    file: '/assets/marh/videos/beans-floating-loop.mp4',
    duration: '5-7 seconds',
    format: 'seamless loop',
    prompt:
      '5–7 second seamless loop of Arabica coffee beans floating slowly in warm air, soft shadows, slow parallax movement, golden dust particles, dark roasted palette, premium studio lighting, cinematic macro look, elegant calm motion, luxury coffee brand atmosphere.',
  },
  {
    name: 'Roasting Cinematic Loop',
    file: '/assets/marh/videos/roasting-cinematic-loop.mp4',
    duration: '6-8 seconds',
    format: 'seamless loop',
    prompt:
      '6–8 second cinematic seamless loop showing roasted coffee beans moving inside a coffee roaster, warm fire glow, soft smoke, artisanal roasting craft, premium specialty coffee mood, slow motion, realistic texture, elegant shadows, not industrial, not messy.',
  },
  {
    name: 'Cafe Ambience Loop',
    file: '/assets/marh/videos/cafe-atmosphere-loop.mp4',
    duration: '7-10 seconds',
    format: 'seamless loop',
    prompt:
      '7–10 second cinematic loop of a warm modern cafe in Marrakech, soft morning light, coffee being served, laptop on table, friends talking gently in background, cozy premium atmosphere, shallow depth of field, calm elegant motion, avoid clear faces, avoid fake hands, luxury hospitality feeling.',
  },
];

export const mediaLibrary = {
  brand: 'Marh Coffee Roasters',
  imagePrompts,
  videoPrompts,
};

export const media = {
  heroProduct: imagePrompts[0].file,
  origin: imagePrompts[1].file,
  cafe: imagePrompts[2].file,
  roasting: imagePrompts[3].file,
  sensory: imagePrompts[4].file,
  productBag: imagePrompts[5].file,
  finalCta: imagePrompts[6].file,
};
