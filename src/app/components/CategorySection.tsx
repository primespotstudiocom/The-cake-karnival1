import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const shopUrl = 'https://www.kwikza.com/shop/the-cake-carnival-katraj-pune';

const categories = [
  {
    name: 'Birthday Cakes',
    image: encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.31 PM.jpeg'),
  },
  {
    name: 'Designer Cakes',
    image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (1).jpeg'),
  },
  {
    name: 'Chocolate Cakes',
    image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.49 PM.jpeg'),
  },
  {
    name: 'Anniversary Cakes',
    image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM (1).jpeg'),
  },
  {
    name: 'Customized Cakes',
    image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.51 PM.jpeg'),
  },
];

const homePageGallery = [
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.31 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.32 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.32 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.32 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.33 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.34 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.34 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.34 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.35 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.35 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.35 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.36 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.36 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.37 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.37 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.38 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.39 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.39 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.39 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.40 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.40 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.41 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.41 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.41 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.42 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.42 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.43 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.43 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.43 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.44 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.45 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.45 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.46 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.46 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.47 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.47 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.47 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.48 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.48 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.48 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.49 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.49 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.49 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.50 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.50 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.50 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.51 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.51 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.51 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.52 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.52 PM (2).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.52 PM.jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.53 PM (1).jpeg'),
  encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.53 PM.jpeg'),
];

type CategorySectionProps = {
  variant?: 'default' | 'glass';
};

export function CategorySection({ variant = 'default' }: CategorySectionProps) {
  const isGlass = variant === 'glass';
  const sectionClassName = isGlass ? 'pt-20 pb-10 bg-transparent' : 'pt-20 pb-10 bg-background';
  const cardClassName = isGlass
    ? 'rounded-xl p-8 text-center cursor-pointer transition-all duration-200 border border-border/60 bg-card/60 shadow-lg shadow-black/10 backdrop-blur-xl supports-[backdrop-filter]:bg-card/45 hover:shadow-xl hover:shadow-black/15'
    : 'bg-card rounded-xl p-8 text-center cursor-pointer transition-all duration-200 shadow-sm hover:shadow-lg';
  const iconWrapClassName = isGlass
    ? 'w-16 h-16 mx-auto mb-4 bg-muted/70 rounded-full overflow-hidden flex items-center justify-center backdrop-blur-sm'
    : 'w-16 h-16 mx-auto mb-4 bg-muted rounded-full overflow-hidden flex items-center justify-center';
  const orderButtonClassName = isGlass
    ? 'mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground'
    : 'mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground';

  const customizeGallery = homePageGallery.slice(0, 8);

  return (
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(123, 78, 45, 0.18)' }}
                className={cardClassName}
              >
                <a
                  href={shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconWrapClassName}
                  aria-label={`Order ${category.name}`}
                >
                  <ImageWithFallback src={category.image} alt={category.name} className="h-full w-full object-cover" loading="lazy" />
                </a>
                <h3 className="font-semibold text-card-foreground">{category.name}</h3>
                <a
                  href={shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={orderButtonClassName}
                >
                  Order Now
                </a>
              </motion.div>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-[#ead8d0] bg-[linear-gradient(135deg,#fbf6f2_0%,#f8ece9_36%,#f5e9f0_68%,#fff8ee_100%)] p-6 shadow-[0_30px_70px_rgba(90,52,34,0.12)] md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(150,2,139,0.12),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(254,218,117,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05))]" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-[#96028b]">CUSTOMIZED CAKES</p>
              <h3 className="mt-2 text-3xl font-semibold leading-tight text-[#302b28]">Make it personal</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5f5650]">
                Share your theme, photo, and weight — we’ll craft it exactly the way you want.
              </p>
            </div>
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#96028b]/25 bg-white/75 px-5 py-3 text-sm font-semibold text-[#3f3b37] shadow-[0_12px_30px_rgba(150,2,139,0.12)] backdrop-blur-sm transition-all duration-200 hover:bg-white md:w-auto"
            >
              Order Now
            </a>
          </div>

          <div className="relative mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {customizeGallery.map((src) => (
                <a
                  key={src}
                  href={shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/75 shadow-[0_16px_34px_rgba(90,52,34,0.12)] ring-1 ring-[#ead8d0] backdrop-blur-[2px]"
                  aria-label="Order customized cake"
                >
                  <ImageWithFallback
                    src={src}
                    alt="Customized cake"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
