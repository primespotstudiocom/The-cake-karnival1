import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

interface ProductCardProps {
  src: string;
  title?: string;
}

function ProductCard({ src, title }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group flex flex-col items-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="relative w-full overflow-hidden rounded-2xl border border-[#ebdce6] bg-white p-2.5 shadow-[0_8px_20px_rgba(25,16,10,0.04)] cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cf2aa6]">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#faf7f5]">
              <ImageWithFallback
                src={src}
                alt={title || 'Handcrafted cake design from The Cake Carnival'}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl p-0 overflow-hidden bg-white/95 border-none shadow-2xl rounded-2xl max-w-[calc(100%-2rem)] flex flex-col">
          <DialogTitle className="sr-only">{title || 'Product Image'}</DialogTitle>
          <DialogDescription className="sr-only">
            View full size product image.
          </DialogDescription>
          <div className="relative w-full overflow-hidden bg-[#faf7f5]">
            <img
              src={src}
              alt={title || 'Product Image'}
              className="w-full h-auto max-h-[80vh] object-contain mx-auto"
            />
          </div>
          {title && (
            <div className="bg-white px-6 py-4 border-t border-[#f3e9f1] text-center">
              <h4 className="text-xl font-bold text-[#1f1f1f]">{title}</h4>
            </div>
          )}
        </DialogContent>
      </Dialog>
      {title && (
        <h3 className="mt-3 text-sm font-semibold leading-snug text-center text-[#1f1f1f] group-hover:text-[#cf2aa6] transition-colors duration-300">
          {title}
        </h3>
      )}
    </div>
  );
}

interface CategoryHeaderProps {
  title: string;
}

function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <div className="w-full py-3 mb-8 rounded-xl border border-[#ebd2e6]/70 bg-gradient-to-r from-[#fff0fb] via-[#fcd7f5] to-[#fff0fb] shadow-[0_4px_16px_rgba(150,2,139,0.02)]">
      <h2 className="text-center text-lg font-bold tracking-[0.18em] text-[#1f1f1f] sm:text-xl uppercase">
        {title}
      </h2>
    </div>
  );
}

export function ImageGrid() {
  const cakes = [
    {
      title: 'Red Velvet Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (1).jpeg'),
    },
    {
      title: 'Pineapple Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.47 PM (1).jpeg'),
    },
    {
      title: 'Vanilla Kulfi Falooda Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (2).jpeg'),
    },
    {
      title: 'Rasmalai Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM (2).jpeg'),
    },
    {
      title: 'Chocolate Double Truffle Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (3).jpeg'),
    },
    {
      title: 'Chocolate Layer Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.49 PM (1).jpeg'),
    },
    {
      title: 'Chocolate Delight Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.49 PM.jpeg'),
    },
    {
      title: 'Butterscotch Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.51 PM (1).jpeg'),
    },
    {
      title: 'Rossomalai Truffle Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM.jpeg'),
    },
    {
      title: 'German Chocolate Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.51 PM.jpeg'),
    },
    {
      title: 'Coconut Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.51 PM (2).jpeg'),
    },
    {
      title: 'Chocolate Truffle Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.52 PM.jpeg'),
    },
    {
      title: 'Blueberry Cheese Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.52 PM (1).jpeg'),
    },
    {
      title: 'Choco chip Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.52 PM (2).jpeg'),
    },
    {
      title: 'Choco Lava Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.53 PM.jpeg'),
    },
    {
      title: 'Red Velvet Bento Cake',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.53 PM (1).jpeg'),
    },
  ];

  const pastries = [
    {
      title: 'Gulkand Pastry',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.56 PM (2).jpeg'),
    },
    {
      title: 'Rasmalai Pastry',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.54 PM (1).jpeg'),
    },
    {
      title: 'Truffle Pastry',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.52 PM (1).jpeg'),
    },
    {
      title: 'Black Forest Pastry',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.54 PM (2).jpeg'),
    },
    {
      title: 'Chocolate shorts',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.53 PM.jpeg'),
    },
    {
      title: 'Pastry',
      src: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.51 PM (2).jpeg'),
    },
  ];

  const customCakes = [
    encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.31 PM.jpeg'),
    encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.32 PM (1).jpeg'),
    encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.35 PM (1).jpeg'),
    encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.37 PM (1).jpeg'),
    encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.39 PM (1).jpeg'),
    encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.41 PM (1).jpeg'),
    encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.43 PM (1).jpeg'),
    encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.45 PM (1).jpeg'),
    encodeURI('/home-page/WhatsApp Image 2026-04-30 at 2.50.49 PM (1).jpeg'),
  ];

  return (
    <section id="photo-gallery" className="instagram-section pb-24 pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Showcase Gallery Header */}
        <div className="instagram-card relative mb-12 overflow-hidden rounded-3xl border border-[#eedde8] px-6 py-8 sm:px-8">
          <div className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#ffd8c8]/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-12 h-48 w-48 rounded-full bg-[#ffe8bc]/50 blur-3xl" />
          <p className="relative text-xs font-semibold tracking-[0.2em] text-[#96028b]">SHOWCASE GALLERY</p>
          <h2 className="relative mt-2 text-4xl font-semibold text-[#221f1d]">Browse Our Crafted Collection</h2>
          <p className="relative mt-2 max-w-2xl text-sm text-[#6f6662]">
            Here are some of our signatures, handcrafted cakes, pastries, and customized designs.
          </p>
        </div>

        {/* Cakes Section */}
        <div className="mb-16">
          <CategoryHeader title="Cakes" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cakes.map((cake) => (
              <ProductCard key={cake.title} src={cake.src} title={cake.title} />
            ))}
          </div>
        </div>

        {/* Pastry Section */}
        <div className="mb-16">
          <CategoryHeader title="Pastry" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastries.map((pastry) => (
              <ProductCard key={pastry.title} src={pastry.src} title={pastry.title} />
            ))}
          </div>
        </div>

        {/* Customized Cakes Section */}
        <div>
          <CategoryHeader title="Customized Cakes" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {customCakes.map((src, index) => (
              <ProductCard key={index} src={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
