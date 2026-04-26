import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const signatureCakes = useMemo(
    () => [
      {
        title: 'Velvet Bloom',
        note: 'Rich layers with silky cream and berry finish.',
        image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Golden Crumb',
        note: 'Classic sponge with smooth vanilla glaze.',
        image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Noir Truffle',
        note: 'Dark chocolate indulgence for true cocoa lovers.',
        image: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Citrus Mist',
        note: 'Light sponge with fresh citrus cream accents.',
        image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Ruby Crown',
        note: 'Premium celebration cake with jewel-like topping.',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    [],
  );

  useEffect(() => {
    if (!carouselApi) return;
    const id = window.setInterval(() => carouselApi.scrollNext(), 2800);
    return () => window.clearInterval(id);
  }, [carouselApi]);

  return (
    <section id="about" className="bg-[#f3f3f3] pb-24 pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          <motion.div
            className="self-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-[#e6ddd8] bg-white p-2 shadow-[0_18px_34px_rgba(20,14,10,0.10)] lg:mx-0">
              <div className="overflow-hidden rounded-xl">
                <ImageWithFallback
                  src="/ceo.jpeg"
                  alt="CEO"
                  className="aspect-[3/4] h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-3 text-center text-xs font-medium tracking-[0.14em] text-[#8a8a8a]">CEO PHOTO</div>
          </motion.div>

          <motion.div
            className="self-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="mb-5 text-5xl font-semibold text-[#1f1f1f]"
              style={{ fontFamily: 'var(--font-editorial)' }}
            >
              Brand Story
            </h2>

            <div className="space-y-6 leading-relaxed text-[#7a7a7a]">
              <div className="border border-[#e6e6e6] bg-white p-6">
                <div className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#cf5c4a]">HOW STARTED</div>
                <p>The Cake Carnival started with a vision to make premium cakes affordable and accessible for everyone.</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="border border-[#e6e6e6] bg-white p-6">
                  <div className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#cf5c4a]">FOUNDER / CEO</div>
                  <div className="font-semibold text-[#2a2a2a]">Add name</div>
                </div>
                <div className="border border-[#e6e6e6] bg-white p-6">
                  <div className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#cf5c4a]">OUTLETS</div>
                  <div className="font-semibold text-[#2a2a2a]">30+ Franchise Stores</div>
                </div>
              </div>

              <div className="border border-[#e6e6e6] bg-white p-6">
                <div className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#cf5c4a]">VISION</div>
                <div className="font-semibold text-[#2a2a2a]">
                  To become Maharashtra's most loved cake brand with 30+ outlets.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-[#eadfda] bg-gradient-to-br from-[#fff8f4] via-[#fffdf9] to-[#f7f7fb] px-6 py-10 sm:mt-16 sm:px-8 lg:px-10"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#ffd9c6]/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-56 w-56 rounded-full bg-[#ffe8bc]/50 blur-3xl" />

          <div className="relative mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#b56d56]">SIGNATURE COLLECTION</p>
              <h3 className="mt-2 text-4xl font-semibold text-[#231f1d]">Sliding Cake Showcase</h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#6f6662]">
              Discover rotating highlights from our best handcrafted cakes, curated for birthdays, events, and sweet cravings.
            </p>
          </div>

          <Carousel setApi={setCarouselApi} opts={{ loop: true, align: 'start' }} className="relative">
            <CarouselContent className="-ml-3 md:-ml-4">
              {signatureCakes.map((cake) => (
                <CarouselItem
                  key={cake.title}
                  className="basis-[82%] pl-3 sm:basis-[48%] md:basis-[34%] md:pl-4 lg:basis-[28%]"
                >
                  <div className="group overflow-hidden rounded-2xl border border-[#efdfd7] bg-white/95 shadow-[0_16px_30px_rgba(30,20,10,0.08)]">
                    <div className="aspect-[4/5] overflow-hidden">
                      <ImageWithFallback
                        src={cake.image}
                        alt={cake.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-xl font-semibold text-[#1f1b18]">{cake.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#6b615d]">{cake.note}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
