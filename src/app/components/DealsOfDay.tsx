import { motion } from 'motion/react';
import { CheckCircle2, Heart, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const shopUrl = 'https://www.kwikza.com/shop/the-cake-carnival-katraj-pune';

const deals = [
  {
    id: 1,
    name: 'Sweet Cakes',
    description: 'Freshly crafted cakes for birthdays, events, and sweet cravings.',
    image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (1).jpeg'),
  },
  {
    id: 2,
    name: 'Spider Cupcakes',
    description: 'Beautiful custom cake designs made fresh for every celebration.',
    image: encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM (1).jpeg'),
  },
];

export function DealsOfDay() {
  return (
    <section className="bg-[#faf7f1] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-[33px] font-semibold tracking-[0.08em] text-[#1f1f1f] md:text-[38px]">DEALS OF THE DAY</h2>
          <div className="mx-auto mt-3 h-px w-20 bg-[#cfcfcf]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {deals.map((deal, index) => (
            <motion.a
              key={deal.id}
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="block border border-[#e2e2e2] bg-white p-4 transition-shadow hover:shadow-[0_18px_38px_rgba(20,12,18,0.08)]"
            >
              <div className="grid grid-cols-1 gap-4 border border-[#efefef] p-4 sm:grid-cols-[170px_1fr]">
                <div className="relative bg-[#fafafa] p-3">
                  <span className="absolute left-2 top-2 z-10 bg-[#2f89c5] px-2 py-1 text-[10px] font-semibold tracking-[0.18em] text-white">
                    NEW
                  </span>
                  <ImageWithFallback src={deal.image} alt={deal.name} className="h-36 w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#252525]">{deal.name}</h3>
                  <div className="my-3 h-px bg-[#ececec]" />
                  <p className="text-sm text-[#9a9a9a]">{deal.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="border border-[#dadada] p-2 text-[#4b4b4b]">
                      <Heart className="h-4 w-4" />
                    </span>
                    <span className="border border-[#dadada] p-2 text-[#4b4b4b]">
                      <Search className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 border border-[#efefef] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#2f6e50]">
                  <CheckCircle2 className="h-4 w-4" />
                  Chef Recommended
                </div>
                <div className="flex items-center gap-2 text-sm text-[#454545]">
                  <span className="font-medium">Availability:</span>
                  <span className="rounded-full border border-[#cfded4] bg-[#f4faf6] px-3 py-1 text-[#2f6e50]">Fresh Today</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
