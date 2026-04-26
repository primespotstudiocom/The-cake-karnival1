import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  { id: 1, name: 'Hazelnut Praline', image: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=1000&q=80' },
  { id: 2, name: 'Dark Choco Slice', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80' },
  { id: 3, name: 'Classic Cupcake', image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=1000&q=80' },
  { id: 4, name: 'Berry Cheesecake', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=80' },
  { id: 5, name: 'Creamy Tart', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1000&q=80' },
  { id: 6, name: 'Fruit Burst', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1000&q=80' },
  { id: 7, name: 'Glaze Donut', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1000&q=80' },
  { id: 8, name: 'Ruby Velvet', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=80' },
];

type HotSellingProps = {
  variant?: 'default' | 'glass';
};

export function HotSelling({ variant = 'default' }: HotSellingProps) {
  const [activeTab, setActiveTab] = useState<'new' | 'best' | 'top'>('new');
  const [isUserSelected, setIsUserSelected] = useState(false);
  const isGlass = variant === 'glass';
  const sectionClassName = isGlass ? 'bg-transparent py-20' : 'bg-[#f3f3f3] py-20';

  useEffect(() => {
    if (isUserSelected) return;

    const order: Array<'new' | 'best' | 'top'> = ['new', 'best', 'top'];
    const id = window.setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = order.indexOf(prev);
        return order[(currentIndex + 1) % order.length];
      });
    }, 2000);

    return () => window.clearInterval(id);
  }, [isUserSelected]);

  const visibleProducts = useMemo(() => {
    if (activeTab === 'best') return products.slice(2, 6);
    if (activeTab === 'top') return products.slice(4, 8);
    return products.slice(0, 4);
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

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
        </div>

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
