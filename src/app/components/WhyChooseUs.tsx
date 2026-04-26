import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Clock, Award, ThumbsUp, Truck } from 'lucide-react';

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Clock,
      title: 'Freshly Baked Daily',
      description: 'Every cake is baked completely fresh to ensure maximum softness and taste.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source ingredients! Only the finest ingredients go into our creations.',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      icon: ThumbsUp,
      title: '100,000+ Happy Customers',
      description: 'Trusted by thousands across Pune for every joyful occasion.',
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Prompt delivery services available! Reach faster with care and hygiene.',
      gradient: 'from-lime-500 to-emerald-500',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-muted text-primary rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What Makes Us <span className="text-primary">Special</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver exceptional quality and taste with every order
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
