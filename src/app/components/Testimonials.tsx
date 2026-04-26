import { motion } from 'motion/react';
import { CheckCircle2, Heart, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const deals = [
  {
    id: 1,
    name: 'Sweet Cakes',
    description: 'Things You Need To Know There are many variations of...',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Spider Cupcakes',
    description: 'Things You Need To Know There are many variations of...',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800&q=80',
  },
];

type TestimonialsProps = {
  variant?: 'default' | 'glass';
};

export function Testimonials({ variant = 'default' }: TestimonialsProps) {
  const sectionClassName = variant === 'glass' ? 'bg-[#f3f3f3] py-20' : 'bg-[#f3f3f3] py-20';

  const bannerImages = [
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1800&q=80',
  ];

  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);

    return () => window.clearInterval(id);
  }, [bannerImages.length]);

  return (
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 overflow-hidden border border-[#e6e6e6]"
        >
          <div className="relative aspect-[21/9] min-h-[260px] w-full">
            <ImageWithFallback
              src={bannerImages[bannerIndex]}
              alt="New arrivals cakes"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <p className="text-3xl font-semibold tracking-wide text-white md:text-5xl">new arrivals</p>
              <p
                className="text-6xl font-semibold uppercase leading-none text-transparent md:text-8xl"
                style={{ WebkitTextStroke: '2px #ffffff' }}
              >
                cakes
              </p>
              <button className="mt-5 bg-white px-7 py-2 text-[11px] font-semibold tracking-[0.18em] text-black">
                SHOP CAKE
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-[33px] font-semibold tracking-[0.08em] text-[#1f1f1f] md:text-[38px]">DEALS OF THE DAY</h2>
          <div className="mx-auto mt-3 h-px w-20 bg-[#cfcfcf]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border border-[#e2e2e2] bg-white p-4"
            >
              <div className="grid grid-cols-1 gap-4 border border-[#efefef] p-4 sm:grid-cols-[170px_1fr]">
                <div className="relative bg-[#fafafa] p-3">
                  <span className="absolute left-2 top-2 bg-[#2f89c5] px-2 py-1 text-[10px] font-semibold tracking-[0.18em] text-white">
                    NEW
                  </span>
                  <ImageWithFallback src={deal.image} alt={deal.name} className="h-36 w-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#252525]">{deal.name}</h3>
                  <div className="my-3 h-px bg-[#ececec]" />
                  <p className="text-sm text-[#9a9a9a]">{deal.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <button className="border border-[#dadada] p-2 text-[#4b4b4b]">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="border border-[#dadada] p-2 text-[#4b4b4b]">
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border border-[#efefef] px-4 py-3">
                <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#2f6e50]">
                  <CheckCircle2 className="h-4 w-4" />
                  Chef Recommended
                </div>
                <div className="flex items-center gap-2 text-sm text-[#454545]">
                  <span className="font-medium">Availability:</span>
                  <span className="rounded-full border border-[#cfded4] bg-[#f4faf6] px-3 py-1 text-[#2f6e50]">Fresh Today</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
