import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './ui/carousel';

export function HeroVideo() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slideIntervalMs = 1500;

  const heroSlides = useMemo(
    () => [
      {
        titleTop: 'Delicious',
        title: 'Delicious Cake For Everyone',
        description: 'Handcrafted cakes with rich flavors and elegant presentation, made fresh for every celebration.',
        offerLabel: 'Weekend Special',
        offerValue: '20% OFF',
        offerNote: 'On all designer cakes this weekend',
        accent: '#f15a24',
        softAccent: 'rgba(241,90,36,0.14)',
        src: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=1200&q=80',
        alt: 'Cake slice with garnish',
      },
      {
        titleTop: 'Fresh',
        title: 'Freshly Baked Every Day',
        description: 'Soft sponge, silky cream, and unforgettable taste for birthdays, weddings, and all special days.',
        offerLabel: 'Same Day Orders',
        offerValue: 'FREE DELIVERY',
        offerNote: 'For selected locations above Rs. 999',
        accent: '#0f8b8d',
        softAccent: 'rgba(15,139,141,0.14)',
        src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
        alt: 'Chocolate cake',
      },
      {
        titleTop: 'Premium',
        title: 'Premium Cakes For Events',
        description: 'From elegant classics to modern designs, our cakes are crafted to make your moments sweeter.',
        offerLabel: 'Bulk Party Offer',
        offerValue: 'BUY 2 GET 1',
        offerNote: 'Cupcakes combo for events and parties',
        accent: '#6f4df6',
        softAccent: 'rgba(111,77,246,0.14)',
        src: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80',
        alt: 'Berry cake slice',
      },
      {
        titleTop: 'Celebrate',
        title: 'Celebrate With Cake Carnival',
        description: 'Choose your flavor, style, and custom design and let us deliver joy in every bite.',
        offerLabel: 'Midnight Surprise',
        offerValue: 'LATE NIGHT SLOTS',
        offerNote: 'Book 11 PM to 1 AM delivery windows',
        accent: '#da3f57',
        softAccent: 'rgba(218,63,87,0.14)',
        src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=80',
        alt: 'Celebration cake',
      },
    ],
    [],
  );

  useEffect(() => {
    if (!carouselApi) return;

    const id = window.setInterval(() => {
      carouselApi.scrollNext();
    }, slideIntervalMs);

    return () => window.clearInterval(id);
  }, [carouselApi, slideIntervalMs]);

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setSelectedIndex(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on('select', onSelect);
    carouselApi.on('reInit', onSelect);

    return () => {
      carouselApi.off('select', onSelect);
      carouselApi.off('reInit', onSelect);
    };
  }, [carouselApi]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#f5efec]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 18% 90%, rgba(236, 102, 44, 0.14), transparent 30%), radial-gradient(circle at 86% 16%, rgba(244, 163, 116, 0.12), transparent 30%)',
      }}
    >
      <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {heroSlides.map((slide, idx) => (
            <CarouselItem key={slide.src}>
              <div className="mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-10 pt-24 lg:grid-cols-2 lg:pb-12 lg:pt-28">
                <motion.div
                  className="relative z-10 max-w-xl"
                  initial={false}
                  animate={{ opacity: selectedIndex === idx ? 1 : 0.55, y: selectedIndex === idx ? 0 : 12 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <motion.p
                    className="pointer-events-none absolute -top-16 left-0 text-7xl text-[#e8dbd5]/60 md:text-8xl"
                    style={{ fontFamily: 'var(--font-script)' }}
                    initial={false}
                    animate={{ x: selectedIndex === idx ? 0 : 8, opacity: selectedIndex === idx ? 1 : 0.45 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    {slide.titleTop}
                  </motion.p>

                  <h1
                    className="relative text-[3.45rem] leading-[0.97] text-[#141414] md:text-[5rem]"
                    style={{ fontFamily: 'var(--font-editorial)', fontWeight: 600, letterSpacing: '-0.02em' }}
                  >
                    {slide.title}
                  </h1>

                  <p className="mt-5 max-w-md text-base leading-relaxed text-[#4f4a46]">{slide.description}</p>

                  <motion.div
                    className="mt-7 max-w-sm rounded-2xl border border-black/5 bg-white/70 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm"
                    style={{ boxShadow: `0 18px 40px ${slide.softAccent}` }}
                    initial={false}
                    animate={{ scale: selectedIndex === idx ? 1 : 0.97, y: selectedIndex === idx ? 0 : 8 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f3b37]">{slide.offerLabel}</span>
                      <motion.span
                        className="inline-flex h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: slide.accent }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.75, 1, 0.75] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                    <div className="mt-2 text-2xl font-extrabold tracking-tight" style={{ color: slide.accent }}>
                      {slide.offerValue}
                    </div>
                    <p className="mt-1 text-sm text-[#5f5a56]">{slide.offerNote}</p>
                  </motion.div>

                  <Link
                    to="/products"
                    className="mt-7 inline-flex items-center justify-center rounded-full px-9 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
                    style={{
                      backgroundColor: slide.accent,
                      boxShadow: `0 14px 30px ${slide.softAccent}`,
                    }}
                  >
                    Explore Menu
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {'->'}
                    </motion.span>
                  </Link>
                </motion.div>

                <div className="relative z-10 mx-auto w-full max-w-[600px] lg:max-w-none">
                  <div
                    className="relative ml-auto aspect-square w-full max-w-[620px] overflow-hidden rounded-full bg-white/50 shadow-[0_25px_70px_rgba(56,28,15,0.2)]"
                    style={{ boxShadow: `0 26px 65px ${slide.softAccent}` }}
                  >
                    <motion.img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full object-cover"
                      initial={false}
                      animate={{ scale: selectedIndex === idx ? 1.04 : 1 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    />
                    <motion.div
                      className="absolute right-16 top-20 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white"
                      style={{ backgroundColor: slide.accent }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      Special Offer
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((slide, idx) => (
          <span
            key={slide.src}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: selectedIndex === idx ? 30 : 8,
              backgroundColor: selectedIndex === idx ? slide.accent : 'rgba(0,0,0,0.2)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
