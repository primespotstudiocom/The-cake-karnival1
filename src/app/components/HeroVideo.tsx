import { useEffect, useState } from 'react';

const heroImages = [
  '/pop/website-01.jpg.jpeg',
  '/pop/website-02.jpg.jpeg',
  '/pop/website-03.jpg.jpeg',
  '/pop/website-04.jpg.jpeg',
];

const shopUrl = 'https://www.kwikza.com/shop/the-cake-carnival-katraj-pune';

export function HeroVideo() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroImages.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="relative aspect-[8333/4648] w-full overflow-hidden bg-[#f7eef4] sm:aspect-auto sm:h-[calc(100svh-5rem)] lg:h-[calc(100svh-6rem)]"
    >
      {heroImages.map((image, index) => (
        <a
          key={image}
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-label="Order Cake Carnival cakes online"
        >
          <img
            src={image}
            alt="Cake Carnival featured cakes"
            className="h-full w-full object-cover object-center"
          />
        </a>
      ))}
    </section>
  );
}
