import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const shopUrl = 'https://www.kwikza.com/shop/the-cake-carnival-katraj-pune';

const img = (path: string) => encodeURI(path);

const heroSlides = [
  img('/hero  section/Image_3.jpg'),
  img('/hero  section/Image_1.jpg'),
  img('/hero  section/Image_4.jpg'),
  img('/hero  section/Image_2.jpg'),
];

const categoryCakes = [
  img('/New Arrivals Cake/Image_1.jpg'),
  img('/New Arrivals Cake/Image_4.jpg'),
  img('/New Arrivals Cake/Image_3.jpg'),
];

const bestCakes = [
  {
    name: 'Vanilla Pineapple',
    copy: 'A tropical delight in every bite.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.47 PM (1).jpeg'),
  },
  {
    name: 'Red Velvet Heart Cake',
    copy: 'Love at first bite.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (1).jpeg'),
  },
  {
    name: 'Vanilla Kulfi Faluda Cake',
    copy: 'Classic Indian flavors.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (2).jpeg'),
  },
  {
    name: 'Pistachio Delight Cake',
    copy: 'Nutty indulgence in every slice.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM (2).jpeg'),
  },
  {
    name: 'Chocolate Double Truffle',
    copy: 'Double chocolate, double joy.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (3).jpeg'),
  },
  {
    name: 'Chocolate Layer Cake',
    copy: 'Layers of pure chocolate bliss.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.49 PM (1).jpeg'),
  },
  {
    name: 'Chocolate Truffle Cake',
    copy: 'Smooth, rich, and chocolatey.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM (1).jpeg'),
  },
  {
    name: 'German Chocolate',
    copy: "A chocolate lover's favorite.",
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.49 PM.jpeg'),
  },
];

const pastries = [
  {
    name: 'Rasmalai Pastry',
    copy: 'Where classic kulfi meets irresistible vanilla pastry.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.54 PM (1).jpeg'),
  },
  {
    name: 'Gulkand Pastry',
    copy: 'A dreamy blend of fluffy sponge and luscious gulkand cream.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.56 PM (2).jpeg'),
  },
  {
    name: 'Chocolate Layer Pastry',
    copy: 'Chocolate cupcakes finished with cream frosting and Oreo crunch.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM (1).jpeg'),
  },
  {
    name: 'Black Forest Pastry',
    copy: 'Moist chocolate pastry topped with glossy truffle cream.',
    image: img('/customize/WhatsApp Image 2026-04-27 at 11.01.54 PM (2).jpeg'),
  },
];

export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#fff2fb] text-[#111111]">
      <section className="relative border-b-[3px] border-[#f1cf2a] bg-[#ffeafa] w-full overflow-hidden aspect-[1512/640]">
        {/* Slides */}
        <div className="relative w-full h-full">
          {heroSlides.map((src, index) => (
            <a
              key={src}
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                activeSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <ImageWithFallback
                src={src}
                alt={`Cake Carnival Banner ${index + 1}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.01]"
              />
            </a>
          ))}
        </div>

        {/* Floating custom interactive dots bar */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 flex gap-3.5 bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-white/50">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveSlide(index);
              }}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                activeSlide === index ? 'bg-[#941196] scale-125' : 'bg-[#941196]/20 hover:bg-[#941196]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl font-black leading-none">Cakes</h2>
          <p className="mt-2 text-sm font-black leading-tight max-w-[200px] mx-auto">
            View all
            <br />
            customized
            <br />
            beauty
          </p>
        </div>

        <div className="mt-5 grid gap-8 md:grid-cols-3">
          {categoryCakes.map((image, index) => (
            <a
              key={image}
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-[1.55] overflow-hidden rounded-lg shadow-sm transition-transform hover:-translate-y-1"
              aria-label={`Explore cake category ${index + 1}`}
            >
              <ImageWithFallback src={image} alt="Cake category" className="h-full w-full object-cover" loading="lazy" />
            </a>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <a
            href={shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[#d28ac3] bg-white px-4 py-1.5 text-xs font-black uppercase text-[#ad3ba1] hover:bg-[#ffeafa] transition-colors"
          >
            CUSTOMIZE
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-4 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase">Our Best Cakes</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            {['BEST SELLERS', 'CUSTOMIZED CAKE', 'SPECIAL CAKE'].map((tab, index) => (
              <span
                key={tab}
                className={[
                  'rounded-md border px-4 py-2 text-xs font-black tracking-wider uppercase',
                  index === 0 ? 'border-[#a6199a] bg-[#a6199a] text-white' : 'border-[#e5bee0] bg-white text-[#b14ca7]',
                ].join(' ')}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
          {bestCakes.map((cake) => (
            <a
              key={cake.name}
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center"
              aria-label={`Order ${cake.name}`}
            >
              <div className="aspect-[1.15] overflow-hidden rounded-lg bg-white shadow-sm">
                <ImageWithFallback
                  src={cake.image}
                  alt={cake.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-lg font-medium leading-tight">{cake.name}</h3>
              <p className="mt-2 text-sm font-black leading-tight">{cake.copy}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-black">New Arrivals</h2>
        <p className="mt-2 text-sm font-black">Try Something New</p>
        <a
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block h-[330px] overflow-hidden sm:h-[520px] lg:h-[640px]"
          aria-label="Order new arrival cake"
        >
          <ImageWithFallback
            src={img('/New Arrivals Cake/Image_1.jpg')}
            alt="New Arrivals Cake"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </a>
      </section>

      <section className="bg-[#7b3f15] px-6 pb-16 pt-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-black text-white">Pastries &amp; Cupcakes</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pastries.map((item) => (
              <a
                key={item.name}
                href={shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid min-h-[142px] grid-cols-[132px_1fr] gap-5 rounded-lg bg-white p-3 shadow-sm transition-transform hover:-translate-y-1 sm:grid-cols-[150px_1fr]"
                aria-label={`Order ${item.name}`}
              >
                <div className="overflow-hidden rounded-md">
                  <ImageWithFallback src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex min-w-0 flex-col py-1">
                  <h3 className="text-2xl font-black leading-tight text-[#111111]">{item.name}</h3>
                  <p className="mt-3 text-sm font-black leading-tight text-[#555555]">{item.copy}</p>
                  <div className="mt-auto flex items-end justify-between gap-3">
                    <span className="text-base font-semibold text-[#111111]">Rs. 80.00*</span>
                    <span className="rounded-md bg-[#a6199a] px-3 py-1.5 text-xs font-black text-white hover:bg-[#860e7b] transition-colors">Order Now</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7e1ee] to-[#fff4fb] py-16 sm:py-20">
        {/* Cake Drip Divider */}
        <div className="cake-drip" aria-hidden="true" />

        {/* Decorative Bokeh Balloons & Sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Large soft colorful light balls (Balloons) */}
          <div className="absolute top-[20%] left-[8%] w-[180px] h-[180px] rounded-full bg-pink-300/30 blur-[40px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[220px] h-[220px] rounded-full bg-cyan-300/35 blur-[50px]" />
          <div className="absolute bottom-[5%] right-[8%] w-[240px] h-[240px] rounded-full bg-pink-400/25 blur-[55px]" />
          <div className="absolute top-[15%] right-[5%] w-[160px] h-[160px] rounded-full bg-blue-300/30 blur-[40px]" />
          <div className="absolute top-[40%] left-[45%] w-[150px] h-[150px] rounded-full bg-yellow-200/25 blur-[45px]" />

          {/* Floating Bokeh Light Dots (Sparkles) */}
          <div className="absolute top-[35%] left-[15%] w-3 h-3 rounded-full bg-white/70 shadow-[0_0_8px_4px_rgba(255,255,255,0.8)]" />
          <div className="absolute top-[55%] left-[28%] w-2 h-2 rounded-full bg-white/60 shadow-[0_0_6px_3px_rgba(255,255,255,0.7)]" />
          <div className="absolute top-[25%] left-[38%] w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_6px_2px_rgba(255,255,255,0.7)]" />
          
          <div className="absolute top-[45%] right-[15%] w-3 h-3 rounded-full bg-white/70 shadow-[0_0_8px_4px_rgba(255,255,255,0.8)]" />
          <div className="absolute top-[30%] right-[32%] w-2 h-2 rounded-full bg-white/60 shadow-[0_0_6px_3px_rgba(255,255,255,0.7)]" />
          <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_6px_2px_rgba(255,255,255,0.7)]" />
          
          <div className="absolute bottom-[20%] left-[20%] w-4 h-4 rounded-full bg-white/50 shadow-[0_0_10px_5px_rgba(255,255,255,0.6)]" />
          <div className="absolute bottom-[25%] right-[18%] w-3.5 h-3.5 rounded-full bg-white/50 shadow-[0_0_10px_5px_rgba(255,255,255,0.6)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 pb-8 pt-24 text-center sm:pt-28">
          <h2 className="text-2xl font-black sm:text-3xl text-black">Crafted Fresh, Served With Love</h2>
          <p className="mx-auto mt-2 max-w-xl text-xs font-black leading-tight sm:text-sm text-[#3f3a36]">
            Explore handcrafted signature cakes made daily for birthdays, parties, and special celebrations.
          </p>
        </div>
      </section>
    </div>
  );
}
