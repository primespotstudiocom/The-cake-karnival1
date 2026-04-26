import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Tag, Gift, ShoppingBag, ArrowRight } from 'lucide-react';

export function Offers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const offers = [
    {
      icon: Tag,
      badge: 'Limited Offer',
      title: '50% OFF',
      subtitle: 'Mega Sale',
      description: 'On premium cakes and gourmet pastries',
      color: 'from-amber-500 to-yellow-500',
      link: '#',
    },
    {
      icon: Gift,
      badge: 'New Customer',
      title: '20% OFF',
      subtitle: 'First Order',
      description: 'For new customers on first ever order',
      color: 'from-orange-500 to-amber-500',
      link: '#',
    },
    {
      icon: ShoppingBag,
      badge: 'Best Deal',
      title: 'Special Pricing',
      subtitle: 'Bulk Orders',
      description: 'For corporate events and parties',
      color: 'from-yellow-500 to-orange-500',
      link: '#',
    },
  ];

  return (
    <section id="offers" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-card text-primary rounded-full text-sm font-semibold mb-4">
            Special Deals
          </div>
          <h2 className="text-4xl sm:text-5xl font-normal text-foreground mb-4">
            Incredible <span className="text-primary">Offers & Deals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium taste with amazing discounts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${offer.color} opacity-10 rounded-full blur-2xl`}></div>

                {/* Badge */}
                <div className="inline-block px-3 py-1 bg-muted text-primary rounded-full text-xs font-semibold mb-4">
                  {offer.badge}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${offer.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent mb-2`}>
                    {offer.title}
                  </div>
                  <div className="text-xl font-semibold text-card-foreground mb-3">
                    {offer.subtitle}
                  </div>
                  <p className="text-muted-foreground">
                    {offer.description}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={offer.link}
                  className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
                >
                  Claim Offer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-8 shadow-lg text-center"
        >
          <div className="inline-block px-4 py-2 bg-muted text-primary rounded-full text-sm font-semibold mb-4">
            Premium Quality
          </div>
          <h3 className="text-3xl font-bold text-card-foreground mb-2">Freshly baked daily</h3>
          <p className="text-muted-foreground">
            Premium cakes for every celebration
          </p>
        </motion.div>
      </div>
    </section>
  );
}
