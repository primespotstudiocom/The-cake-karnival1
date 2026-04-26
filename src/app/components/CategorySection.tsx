import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageSquare } from 'lucide-react';

const categories = [
  {
    name: 'Birthday Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Designer Cakes',
    image: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Chocolate Cakes',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=600&q=80',
  },
];

type CategorySectionProps = {
  variant?: 'default' | 'glass';
};

export function CategorySection({ variant = 'default' }: CategorySectionProps) {
  const isGlass = variant === 'glass';
  const whatsappNumber = '1234567890';
  const sectionClassName = isGlass ? 'py-20 bg-transparent' : 'py-20 bg-background';
  const cardClassName = isGlass
    ? 'rounded-xl p-8 text-center cursor-pointer transition-all duration-200 border border-border/60 bg-card/60 shadow-lg shadow-black/10 backdrop-blur-xl supports-[backdrop-filter]:bg-card/45 hover:shadow-xl hover:shadow-black/15'
    : 'bg-card rounded-xl p-8 text-center cursor-pointer transition-all duration-200 shadow-sm hover:shadow-lg';
  const iconWrapClassName = isGlass
    ? 'w-16 h-16 mx-auto mb-4 bg-muted/70 rounded-full overflow-hidden flex items-center justify-center backdrop-blur-sm'
    : 'w-16 h-16 mx-auto mb-4 bg-muted rounded-full overflow-hidden flex items-center justify-center';
  const orderButtonClassName = isGlass
    ? 'mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground'
    : 'mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground';

  return (
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hi! I want to order ${category.name}.`,
            )}`;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(123, 78, 45, 0.18)' }}
                className={cardClassName}
              >
                <div className={iconWrapClassName}>
                  <ImageWithFallback src={category.image} alt={category.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <h3 className="font-semibold text-card-foreground">{category.name}</h3>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={orderButtonClassName}
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageSquare className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
