import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const fallbackProducts = [
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.47 PM (1).jpeg'),
    title: 'Customized Cake 01',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.47 PM.jpeg'),
    title: 'Customized Cake 02',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (1).jpeg'),
    title: 'Customized Cake 03',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (2).jpeg'),
    title: 'Customized Cake 04',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (3).jpeg'),
    title: 'Customized Cake 05',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM.jpeg'),
    title: 'Customized Cake 06',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.49 PM (1).jpeg'),
    title: 'Customized Cake 07',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.49 PM.jpeg'),
    title: 'Customized Cake 08',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM (1).jpeg'),
    title: 'Customized Cake 09',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM (2).jpeg'),
    title: 'Customized Cake 10',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM.jpeg'),
    title: 'Customized Cake 11',
    tag: 'Custom',
  },
  {
    src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.51 PM (1).jpeg'),
    title: 'Customized Cake 12',
    tag: 'Custom',
  },
];

const tilePatterns = [
  'row-span-3 sm:col-span-1 sm:row-span-3 lg:col-span-3 lg:row-span-5',
  'row-span-2 sm:col-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-3',
  'row-span-3 sm:col-span-2 sm:row-span-3 lg:col-span-4 lg:row-span-4',
  'row-span-2 sm:col-span-1 sm:row-span-2 lg:col-span-3 lg:row-span-3',
  'row-span-3 sm:col-span-1 sm:row-span-3 lg:col-span-2 lg:row-span-5',
  'row-span-2 sm:col-span-2 sm:row-span-2 lg:col-span-3 lg:row-span-3',
  'row-span-3 sm:col-span-1 sm:row-span-3 lg:col-span-4 lg:row-span-4',
  'row-span-2 sm:col-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-3',
  'row-span-3 sm:col-span-2 sm:row-span-3 lg:col-span-3 lg:row-span-4',
];

export function ImageGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tileRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [popupRect, setPopupRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [products, setProducts] = useState(fallbackProducts);

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
        if (!images.length) return;

        setProducts(
          images.map((src, index) => ({
            src,
            title: `Customized Cake ${String(index + 1).padStart(2, '0')}`,
            tag: 'Custom',
          })),
        );
      } catch {
        // Keep fallback products if manifest loading fails.
      }
    })();

    return () => controller.abort();
  }, []);

  const hoveredProduct = useMemo(
    () => (hoveredIndex !== null ? products[hoveredIndex] : null),
    [hoveredIndex],
  );

  const updatePopupRect = (index: number) => {
    const container = containerRef.current;
    const tile = tileRefs.current[index];
    if (!container || !tile) return;

    const containerBox = container.getBoundingClientRect();
    const tileBox = tile.getBoundingClientRect();

    setPopupRect({
      top: tileBox.top - containerBox.top,
      left: tileBox.left - containerBox.left,
      width: tileBox.width,
      height: tileBox.height,
    });
  };

  useEffect(() => {
    if (hoveredIndex === null) return;

    const handle = () => updatePopupRect(hoveredIndex);
    window.addEventListener('resize', handle, { passive: true });
    window.addEventListener('scroll', handle, { passive: true });
    return () => {
      window.removeEventListener('resize', handle);
      window.removeEventListener('scroll', handle);
    };
  }, [hoveredIndex]);

  return (
    <section id="photo-gallery" className="bg-[#f3f3f3] pb-16 pt-6 sm:pt-8 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#e7ddd7] bg-gradient-to-r from-[#fff9f7] via-[#fffdfb] to-[#fff6ef] px-6 py-8 sm:px-8">
          <div className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#ffd8c8]/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-12 h-48 w-48 rounded-full bg-[#ffe8bc]/50 blur-3xl" />
          <p className="relative text-xs font-semibold tracking-[0.2em] text-[#b7664f]">SHOWCASE GALLERY</p>
          <h2 className="relative mt-2 text-4xl font-semibold text-[#221f1d]">Browse Our Crafted Collection</h2>
          <p className="relative mt-2 max-w-2xl text-sm text-[#6f6662]">
            Hover any item to focus on it. Other images blur and the selected one pops in place for a smooth preview.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative"
          onMouseLeave={() => {
            setHoveredIndex(null);
            setPopupRect(null);
          }}
        >
          <div
            className={[
              'grid auto-rows-[96px] grid-cols-1 gap-4 transition-all duration-300 sm:grid-cols-2 sm:auto-rows-[88px] sm:gap-5 lg:grid-cols-12 lg:auto-rows-[62px]',
              hoveredIndex !== null ? 'scale-[0.995]' : 'scale-100',
            ].join(' ')}
          >
            {products.map((item, index) => {
              const isActive = hoveredIndex === index;
              const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

              return (
                <div
                  key={`${item.title}-${index}`}
                  ref={(node) => {
                    tileRefs.current[index] = node;
                  }}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    updatePopupRect(index);
                  }}
                  className={[
                    'group relative overflow-hidden rounded-2xl border border-[#eadfd9] bg-white p-2 transition-all duration-300',
                    isActive ? 'z-20 shadow-[0_18px_34px_rgba(25,18,10,0.22)]' : 'shadow-[0_8px_20px_rgba(10,10,10,0.07)]',
                    isDimmed ? 'blur-[2px] brightness-75 saturate-75' : '',
                    isActive && hoveredIndex !== null ? 'opacity-25' : 'opacity-100',
                    tilePatterns[index % tilePatterns.length],
                  ].join(' ')}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#faf7f5]">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      loading="lazy"
                    />

                    <div
                      className={[
                        'absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-3 text-white transition-all duration-300',
                        isDimmed ? 'opacity-55' : 'opacity-100',
                      ].join(' ')}
                    >
                      <div className="inline-flex rounded-full border border-white/45 bg-black/30 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em]">
                        {item.tag}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <AnimatePresence>
            {hoveredProduct && popupRect && (
              <motion.div
                className="pointer-events-none absolute inset-0 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-black/20 backdrop-blur-[1.5px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                <motion.div
                  key={hoveredProduct.src}
                  className="absolute z-10 overflow-hidden rounded-3xl border border-[#f2ddd2] bg-white shadow-[0_30px_70px_rgba(20,12,8,0.35)]"
                  style={popupRect}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1.06 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <ImageWithFallback src={hoveredProduct.src} alt={hoveredProduct.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-4 text-white">
                      <div className="inline-flex rounded-full border border-white/40 bg-black/30 px-2.5 py-1 text-[11px] font-semibold tracking-[0.16em]">
                        {hoveredProduct.tag}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
