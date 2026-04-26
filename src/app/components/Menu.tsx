import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const menuItems = [
  { id: 1, name: 'Classic Chocolate Cupcakes', rating: 4.9, image: '/gallery/DSC09035.JPG' },
  { id: 2, name: 'Assorted Macarons', rating: 4.8, image: '/gallery/DSC09041.JPG' },
  { id: 3, name: 'Artisan Pastry Selection', rating: 4.9, image: '/gallery/DSC09044.JPG' },
  { id: 4, name: 'Sweet Delights Platter', rating: 5.0, image: '/gallery/DSC09046.JPG' },
  { id: 5, name: 'Chocolate Cupcake Tower', rating: 4.7, image: '/gallery/DSC09050.JPG' },
  { id: 6, name: 'Rainbow Celebration Cakes', rating: 4.9, image: '/gallery/DSC09052.JPG' },
];

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our complete collection of handcrafted delights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-card-foreground mb-3">{item.name}</h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-card-foreground">{item.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
