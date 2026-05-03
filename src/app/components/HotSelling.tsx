import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const fallbackProducts = [
  { id: 1, name: 'Hazelnut Praline', image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.47 PM (1).jpeg') },
  { id: 2, name: 'Dark Choco Slice', image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.47 PM.jpeg') },
  { id: 3, name: 'Classic Cupcake', image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (1).jpeg') },
  { id: 4, name: 'Berry Cheesecake', image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (2).jpeg') },
  { id: 5, name: 'Creamy Tart', image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (3).jpeg') },
  { id: 6, name: 'Fruit Burst', image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM.jpeg') },
  { id: 7, name: 'Glaze Donut', image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.49 PM (1).jpeg') },
  { id: 8, name: 'Ruby Velvet', image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.49 PM.jpeg') },
];

type HotSellingProps = {
  variant?: 'default' | 'glass';
};

export function HotSelling({ variant = 'default' }: HotSellingProps) {
  const [products, setProducts] = useState(fallbackProducts);
  const [activeTab, setActiveTab] = useState<'new' | 'best' | 'top'>('new');
  const [isUserSelected, setIsUserSelected] = useState(false);
  const isGlass = variant === 'glass';
  const sectionClassName = isGlass ? 'bg-transparent py-20' : 'bg-[#f3f3f3] py-20';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(`/customize/manifest.json?v=${Date.now()}`, { signal: controller.signal });
        if (!res.ok) return;

        const data = (await res.json()) as { images?: unknown };
        if (!Array.isArray(data.images)) return;

        const images = data.images.filter((img): img is string => typeof img === 'string').slice(0, 8);
        if (!images.length) return;

        setProducts((prev) =>
          images.map((image, index) => ({
            id: index + 1,
            name: prev[index]?.name ?? `Best Seller ${index + 1}`,
            image,
          })),
        );
      } catch {
        // Keep fallback products if manifest loading fails.
      }
    })();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (isUserSelected) return;

    const order: Array<'new' | 'best' | 'top'> = ['new', 'best', 'top'];
    const id = window.setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = order.indexOf(prev);
        return order[(currentIndex + 1) % order.length];
      });
    }, 4000);

    return () => window.clearInterval(id);
  }, [isUserSelected]);

  const visibleProducts = useMemo(() => {
    if (activeTab === 'best') return products.slice(2).concat(products.slice(0, 2));
    if (activeTab === 'top') return products.slice(4).concat(products.slice(0, 4));
    return products;
  }, [activeTab]);

  return (
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-[26px] font-semibold tracking-[0.16em] text-[#1f1f1f]">OUR BEST SELLER</h2>
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab('new');
                setIsUserSelected(true);
              }}
              className={[
                'border px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] transition-colors',
                activeTab === 'new'
                  ? 'border-[#222] bg-[#222] text-white'
                  : 'border-[#d8d8d8] bg-white text-[#7c7c7c] hover:border-[#b9b9b9]',
              ].join(' ')}
            >
              NEW ARRIVALS
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('best');
                setIsUserSelected(true);
              }}
              className={[
                'border px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] transition-colors',
                activeTab === 'best'
                  ? 'border-[#222] bg-[#222] text-white'
                  : 'border-[#d8d8d8] bg-white text-[#7c7c7c] hover:border-[#b9b9b9]',
              ].join(' ')}
            >
              BEST RATING
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('top');
                setIsUserSelected(true);
              }}
              className={[
                'border px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] transition-colors',
                activeTab === 'top'
                  ? 'border-[#222] bg-[#222] text-white'
                  : 'border-[#d8d8d8] bg-white text-[#7c7c7c] hover:border-[#b9b9b9]',
              ].join(' ')}
            >
              TOP RATE
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.45, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="group mx-auto w-full max-w-[240px] cursor-pointer"
              >
                <div className="aspect-square overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(20,20,20,0.08)] ring-1 ring-black/5">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="pt-2 text-center">
                  <h3 className="text-[1.65rem] font-semibold leading-tight text-[#171717]">{product.name}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-[#6f6f6f]">
                    Freshly baked and beautifully crafted for every celebration.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <h3 className="text-4xl font-semibold text-[#171717]">Crafted Fresh, Served With Love</h3>
          <p className="mt-2 text-base text-[#666]">
            Explore handcrafted signature cakes made daily for birthdays, parties, and special celebrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
