import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const showcaseCount = 10;

  const customizeShowcase = useMemo(() => {
    if (!customizeGallery.length) return [];
    const count = Math.min(showcaseCount, customizeGallery.length);
    return Array.from({ length: count }, (_, i) => customizeGallery[(customizeActiveIndex + i) % customizeGallery.length]);
  }, [customizeActiveIndex, customizeGallery]);

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

    track.scrollTo({ left: target.offsetLeft - 8, behavior: 'smooth' });
  }, [customizeActiveIndex]);

  const goCustomizePrev = () => {
    setCustomizeActiveIndex((prev) => (prev - 1 + customizeGallery.length) % customizeGallery.length);
  };

  const goCustomizeNext = () => {
    setCustomizeActiveIndex((prev) => (prev + 1) % customizeGallery.length);
  };

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

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-white/70 via-white/55 to-white/40 p-6 shadow-[0_22px_50px_rgba(20,20,20,0.08)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/35 md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(207,92,74,0.10),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(255,179,92,0.10),transparent_55%)]" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground">CUSTOMIZED CAKES</p>
              <h3 className="mt-2 text-3xl font-semibold leading-tight text-card-foreground">Make it personal</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
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

          {/* Images carousel */}
          <div className="relative mt-6">
            <div
              ref={customizeTrackRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onMouseEnter={() => setIsCustomizePaused(true)}
              onMouseLeave={() => setIsCustomizePaused(false)}
              onTouchStart={() => setIsCustomizePaused(true)}
              onTouchEnd={() => setIsCustomizePaused(false)}
              onFocus={() => setIsCustomizePaused(true)}
              onBlur={() => setIsCustomizePaused(false)}
            >
              {customizeGallery.map((src) => (
                <div
                  key={src}
                  data-customize-slide="true"
                  className="group relative aspect-[3/4] w-60 shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/10 ring-1 ring-black/5"
                >
                  <ImageWithFallback
                    src={src}
                    alt="Customized cake"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {customizeGallery.length > 1 ? (
              <div className="mt-6 flex items-center justify-between gap-4 px-5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goCustomizePrev}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white/70 text-foreground shadow-sm transition-colors hover:bg-white"
                    aria-label="Previous customized cake"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goCustomizeNext}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white/70 text-foreground shadow-sm transition-colors hover:bg-white"
                    aria-label="Next customized cake"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {customizeGallery.slice(0, Math.min(7, customizeGallery.length)).map((_, i) => {
                    const page = customizeActiveIndex % Math.min(7, customizeGallery.length);
                    const isActive = i === page;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCustomizeActiveIndex(i)}
                        className={[
                          'h-2 rounded-full transition-all duration-300',
                          isActive ? 'w-4 bg-primary' : 'w-2 bg-foreground/20 hover:bg-foreground/30',
                        ].join(' ')}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
