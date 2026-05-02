import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageSquare } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

const categories = [
  {
    name: 'Birthday Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Designer Cakes',
    image: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Chocolate Cakes',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Anniversary Cakes',
    image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Customized Cakes',
    image: encodeURI('/customize/WhatsApp Image 2026-04-30 at 2.50.35 PM.jpeg'),
  },
];

type CategorySectionProps = {
  variant?: 'default' | 'glass';
};

export function CategorySection({ variant = 'default' }: CategorySectionProps) {
  const isGlass = variant === 'glass';
  const whatsappNumber = '1234567890';
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

  const customizeFallback = useMemo(
    () => [
      encodeURI('/customize/WhatsApp Image 2026-04-30 at 2.50.35 PM.jpeg'),
      encodeURI('/customize/WhatsApp Image 2026-04-30 at 2.50.37 PM.jpeg'),
      encodeURI('/customize/WhatsApp Image 2026-04-30 at 2.50.38 PM.jpeg'),
      encodeURI('/customize/WhatsApp Image 2026-04-30 at 2.50.41 PM (1).jpeg'),
      encodeURI('/customize/WhatsApp Image 2026-04-30 at 2.50.41 PM.jpeg'),
    ],
    [],
  );

  const [customizeGallery, setCustomizeGallery] = useState<string[]>(customizeFallback);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetch(`/customize/manifest.json?v=${Date.now()}`, { signal: controller.signal });
        if (!res.ok) return;
        const data = (await res.json()) as { images?: unknown };
        if (!Array.isArray(data.images)) return;

        const images = data.images.filter((img): img is string => typeof img === 'string');
        if (images.length) setCustomizeGallery(images);
      } catch {
        // ignore and keep fallback
      }
    })();

    return () => controller.abort();
  }, [customizeFallback]);

  const customizeTrackRef = useRef<HTMLDivElement | null>(null);
  const [customizeActiveIndex, setCustomizeActiveIndex] = useState(0);
  const [isCustomizePaused, setIsCustomizePaused] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isCustomizePaused) return;
    if (customizeGallery.length <= 1) return;

    const id = window.setInterval(() => {
      setCustomizeActiveIndex((prev) => (prev + 1) % customizeGallery.length);
    }, 3000);

    return () => window.clearInterval(id);
  }, [customizeGallery.length, isCustomizePaused]);

  useEffect(() => {
    const track = customizeTrackRef.current;
    if (!track) return;

    const items = Array.from(track.querySelectorAll<HTMLElement>('[data-customize-slide="true"]'));
    const target = items[customizeActiveIndex];
    if (!target) return;

    track.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
  }, [customizeActiveIndex]);

  const customizeWhatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi! I want to order a Customized Cake.',
  )}`;

  return (
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hi! I want to order ${category.name}.`,
            )}`;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(123, 78, 45, 0.18)' }}
                className={cardClassName}
              >
                <div className={iconWrapClassName}>
                  <ImageWithFallback src={category.image} alt={category.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <h3 className="font-semibold text-card-foreground">{category.name}</h3>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={orderButtonClassName}
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageSquare className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card/40 p-6 shadow-lg shadow-black/5 backdrop-blur-xl supports-[backdrop-filter]:bg-card/30">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground">CUSTOMIZED CAKES</p>
              <h3 className="mt-2 text-2xl font-semibold text-card-foreground">Make it personal</h3>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Share your theme, photo, and weight — we’ll craft it exactly the way you want.
              </p>
            </div>
            <a
              href={customizeWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={[orderButtonClassName, 'md:w-auto'].join(' ')}
            >
              <MessageSquare className="h-4 w-4" />
              Order Customized Cake
            </a>
          </div>

          <div
            ref={customizeTrackRef}
            className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={() => setIsCustomizePaused(true)}
            onMouseLeave={() => setIsCustomizePaused(false)}
            onFocus={() => setIsCustomizePaused(true)}
            onBlur={() => setIsCustomizePaused(false)}
          >
            {customizeGallery.map((src) => (
              <div
                key={src}
                data-customize-slide="true"
                className="group relative aspect-square w-[min(72vw,260px)] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(20,20,20,0.08)] ring-1 ring-black/5"
              >
                <ImageWithFallback
                  src={src}
                  alt="Customized cake"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
