import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import confetti from 'canvas-confetti';
import { ChefHat, Heart, Sparkles } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './ui/carousel';

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const perks = useMemo(
    () => [
      { icon: Sparkles, label: 'Premium Ingredients' },
      { icon: ChefHat, label: 'Freshly Baked' },
      { icon: Heart, label: 'Made with Love' },
    ],
    [],
  );

  const heroImages = useMemo(() => ['/ttt-Photoroom.png'], []);

  useEffect(() => {
    if (!isInView) return;
    if (typeof window === 'undefined') return;

    const shoot = () =>
      confetti({
        particleCount: 28,
        spread: 58,
        startVelocity: 28,
        gravity: 0.9,
        ticks: 160,
        origin: { x: 0.73, y: 0.72 },
        colors: ['#FFF7EE', '#7B4E2D', '#C59B6A', '#D97706'],
        scalar: 0.8,
      });

    const id = window.setTimeout(() => {
      shoot();
      window.setTimeout(shoot, 160);
    }, 450);

    return () => window.clearTimeout(id);
  }, [isInView]);

  useEffect(() => {
    if (!carouselApi) return;
    const id = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 3200);
    return () => window.clearInterval(id);
  }, [carouselApi]);

  return (
    <section ref={ref} id="home" className="relative bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <div className="absolute -top-24 -right-24 size-[520px] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-[520px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28 lg:pt-32 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1
              className="text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The perfect cake every time!
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              Handcrafted artisan cakes made with premium ingredients and timeless recipes passed down through
              generations.
            </p>

            {/* Offer Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-xl rounded-2xl bg-card border border-border p-7 shadow-xl"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-primary">
                  LIMITED TIME OFFER
                  <span className="inline-block size-2 rounded-full bg-primary/60" />
                </div>
              </div>

              <div className="text-5xl font-extrabold text-card-foreground leading-none">20% OFF</div>
              <div className="mt-2 text-lg font-semibold text-primary">On All Cakes</div>

              <div className="mt-5 h-px bg-border" />

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {perks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.label} className="inline-flex items-center gap-2">
                      <Icon className="size-4 text-primary" />
                      <span>{perk.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Discover Menu <span className="ml-2">→</span>
                </motion.a>
                <div className="text-xs text-muted-foreground self-center">Offer valid for a limited time only!</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Cake Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/25 aspect-[3/4] max-w-sm mx-auto lg:max-w-none">
              <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="h-full">
                <CarouselContent className="h-full">
                  {heroImages.map((src, idx) => (
                    <CarouselItem key={`${src}-${idx}`} className="h-full">
                      <ImageWithFallback src={src} alt={`Hero slide ${idx + 1}`} className="w-full h-full object-cover object-top" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Offer badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute -bottom-8 -left-8"
            >
              <div className="relative">
                <svg width="176" height="176" viewBox="0 0 176 176" className="drop-shadow-2xl">
                  <defs>
                    <radialGradient id="badgeFill" cx="30%" cy="20%" r="90%">
                      <stop offset="0%" stopColor="#C59B6A" />
                      <stop offset="100%" stopColor="#7B4E2D" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M88 6
                      C93 16 104 18 114 15
                      C114 26 123 34 134 34
                      C129 44 132 55 142 61
                      C133 69 131 80 136 90
                      C125 90 116 97 114 108
                      C104 104 93 107 88 118
                      C83 107 72 104 62 108
                      C60 97 51 90 40 90
                      C45 80 43 69 34 61
                      C44 55 47 44 42 34
                      C53 34 62 26 62 15
                      C72 18 83 16 88 6Z"
                    fill="url(#badgeFill)"
                    stroke="rgba(255,247,238,0.38)"
                    strokeWidth="2"
                  />
                  <circle cx="88" cy="74" r="54" fill="rgba(255,247,238,0.10)" />
                  <text
                    x="88"
                    y="54"
                    textAnchor="middle"
                    fill="rgba(255,247,238,0.92)"
                    fontSize="12"
                    fontWeight="800"
                  >
                    LIMITED TIME
                  </text>
                  <text x="88" y="98" textAnchor="middle" fill="#FFF7EE" fontSize="42" fontWeight="900">
                    20%
                  </text>
                  <text x="88" y="124" textAnchor="middle" fill="#FFF7EE" fontSize="26" fontWeight="900">
                    OFF
                  </text>
                  <text
                    x="88"
                    y="144"
                    textAnchor="middle"
                    fill="rgba(255,247,238,0.92)"
                    fontSize="11"
                    fontWeight="800"
                  >
                    ON ALL CAKES
                  </text>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    
  );
}

