import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const signatureCakes = useMemo(
    () => [
      {
        title: 'Designer Cake',
        note: 'Freshly crafted cake for birthdays and celebrations.',
        image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (1).jpeg'),
      },
      {
        title: 'Chocolate Delight',
        note: 'Rich chocolate finish with a premium celebration look.',
        image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.49 PM.jpeg'),
      },
      {
        title: 'Birthday Special',
        note: 'Colorful custom cake made for memorable birthday moments.',
        image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM (1).jpeg'),
      },
      {
        title: 'Theme Cake',
        note: 'Personalized theme cake with detailed decoration.',
        image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.51 PM.jpeg'),
      },
      {
        title: 'Premium Creation',
        note: 'Elegant cake design for parties, events, and gifts.',
        image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.52 PM (1).jpeg'),
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
    <section id="about" className="instagram-section pb-24 pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:gap-4">
          <motion.div
            className="self-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-[#e6ddd8] bg-white p-2 shadow-[0_18px_34px_rgba(20,14,10,0.10)] lg:mx-0">
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
                <div className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#96028b]">HOW STARTED</div>
                <p>Cake Carnival started with a simple dream—serving delicious, freshly made cakes from a home kitchen. As more people fell in love with the taste, the demand kept growing, turning a small homemade venture into a trusted cake brand.

Today, Cake Carnival has expanded to 30+ franchise outlets across Pune, serving happiness to thousands of customers every day.</p>

<p>As a proudly Marathi-founded brand, we are committed to helping new entrepreneurs start their own business through our proven franchise model. With complete support, training, and a strong brand presence, we make entrepreneurship easier for aspiring business owners.

From home-made cakes to 30+ successful outlets—our journey is proof that great taste and big dreams can create something extraordinary.

Join the Cake Carnival family and grow with us.</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="border border-[#e6e6e6] bg-white p-6">
                  <div className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#96028b]">FOUNDER / CEO</div>
                  <div className="font-semibold text-[#2a2a2a]">Ajay Takawale & Madhura Takawale</div>
                </div>
                <div className="border border-[#e6e6e6] bg-white p-6">
                  <div className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#96028b]">OUTLETS</div>
                  <div className="font-semibold text-[#2a2a2a]">30+ Franchise Stores in Pune</div>
                </div>
              </div>

              <div className="border border-[#e6e6e6] bg-white p-6">
                <div className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#96028b]">VISION</div>
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
          className="instagram-card relative mt-14 overflow-hidden rounded-3xl border border-[#eadfda] px-6 py-10 sm:mt-16 sm:px-8 lg:px-10"
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
