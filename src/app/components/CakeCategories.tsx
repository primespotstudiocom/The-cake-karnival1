import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CakeCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const whatsappNumber = '1234567890';

  const orderCategoryOptions = [
    'Anniversary Cakes',
    'Designer Cakes',
    'Chocolate Cakes',
    'Pastries & Cupcakes',
    'Customized Cakes',
    'Birthday Cakes',
  ];

  const [selectedOrderCategory, setSelectedOrderCategory] = useState(orderCategoryOptions[orderCategoryOptions.length - 1]);

  const categories = [
    {
      title: 'Anniversary Cakes',
      description: 'Celebrate your milestones of love with our special anniversary cakes.',
      image: 'https://images.unsplash.com/photo-1764380746875-7a2dd20c9b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5pdmVyc2FyeSUyMGNlbGVicmF0aW9uJTIwY2FrZXxlbnwxfHx8fDE3NzU1NzM5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'Popular',
    },
    {
      title: 'Designer Cakes',
      description: 'Elegant and sophisticated cakes perfect for grand celebrations and parties.',
      image: 'https://images.unsplash.com/photo-1584158531321-2a1fefff2e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnQlMjB3aGl0ZXxlbnwxfHx8fDE3NzU1NDUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'Popular',
    },
    {
      title: 'Chocolate Cakes',
      description: 'Rich, gooey, and irresistible chocolate cakes baked with premium cocoa.',
      image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzU1OTI5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'Popular',
    },
    {
      title: 'Pastries & Cupcakes',
      description: 'Freshly baked, melt in the mouth pastries and cupcakes perfect for any time.',
      image: 'https://images.unsplash.com/photo-1748648594404-6d200f022458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGNvbG9yZnVsJTIwZnJvc3Rpbmd8ZW58MXx8fHwxNzc1NTk3MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'Popular',
    },
    {
      title: 'Customized Cakes',
      description: 'Bring your imagination to reality with our highly customized theme cakes.',
      image: 'https://images.unsplash.com/photo-1621302276432-69e778b68a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBkZXNpZ25lciUyMGNha2V8ZW58MXx8fHwxNzc1NjI4NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'Popular',
    },
    {
      title: 'Birthday Cakes',
      description: 'Make birthdays unforgettable with our wide range of delicious and beautiful cakes.',
      image: 'https://images.unsplash.com/photo-1581268879726-e9066753b737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjb2xvcmZ1bCUyMGZyb3N0aW5nfGVufDF8fHx8MTc3NTYyODQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'Popular',
    },
  ];

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi! I want to order ${selectedOrderCategory}.`,
  )}`;

  return (
    <section id="menu" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground mb-4">
            Delightful Cakes for Every <span className="text-primary">Celebration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fresh, high-quality cakes and pastries made with love for every occasion
          </p>
        </motion.div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedOrderCategory(category.title)}
              onKeyDown={(e) => {
                if (e.key !== 'Enter' && e.key !== ' ') return;
                e.preventDefault();
                setSelectedOrderCategory(category.title);
              }}
              role="button"
              tabIndex={0}
              aria-label={`Select ${category.title}`}
              className={[
                'group relative w-[min(86vw,340px)] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-2xl',
                selectedOrderCategory === category.title ? 'ring-2 ring-primary/35' : '',
              ].join(' ')}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute right-4 top-4 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary shadow-lg">
                  {category.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-card-foreground">{category.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-10 max-w-5xl rounded-2xl border border-border bg-gradient-to-r from-[#fff9f7] via-[#fffdfb] to-[#fff6ef] p-5 shadow-[0_18px_40px_rgba(30,16,10,0.08)]"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#b7664f]">ORDER ON WHATSAPP</p>
              <div className="mt-3 flex snap-x snap-mandatory flex-nowrap gap-2 overflow-x-auto pb-1">
                {orderCategoryOptions.map((option) => {
                  const isActive = option === selectedOrderCategory;
                  return (
                    <motion.button
                      key={option}
                      type="button"
                      onClick={() => setSelectedOrderCategory(option)}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className={[
                        'shrink-0 snap-start rounded-full border px-3.5 py-2 text-xs font-semibold tracking-[0.14em] transition-colors',
                        isActive
                          ? 'border-primary bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(207,92,74,0.25)]'
                          : 'border-border bg-white text-foreground/75 hover:bg-white/70',
                      ].join(' ')}
                    >
                      {option}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="shrink-0"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold tracking-[0.14em] text-primary-foreground shadow-[0_18px_40px_rgba(207,92,74,0.26)] transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-[0_22px_48px_rgba(207,92,74,0.30)]"
              >
                <MessageSquare className="h-5 w-5" />
                Order {selectedOrderCategory}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
