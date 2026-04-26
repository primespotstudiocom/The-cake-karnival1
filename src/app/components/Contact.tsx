import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0APhone: ${formData.phone}%0AProduct Type: ${formData.productType}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="contact" ref={ref} className="bg-[#f3f3f3] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-block border border-[#e2e2e2] bg-white px-4 py-2 text-xs font-semibold tracking-[0.14em] text-[#cf5c4a]">
            GET IN TOUCH
          </div>
          <h2 className="mb-4 text-4xl font-semibold text-[#1f1f1f] sm:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            Let's Make Your Celebration Special
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#777]">Contact us for a customized cake consultation, or place an order.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="border border-[#e6e6e6] bg-white p-8 shadow-[0_10px_28px_rgba(10,10,10,0.04)]"
          >
            <h3 className="mb-6 text-2xl font-semibold text-[#232323]">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block font-semibold text-[#323232]">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#323232]">Phone / WhatsApp No.</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your phone number"
                  className="w-full border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#323232]">Product Type</label>
                <select
                  required
                  value={formData.productType}
                  onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  className="w-full appearance-none border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                >
                  <option value="">Select a Product</option>
                  <option value="Birthday Cake">Birthday Cake</option>
                  <option value="Customized Cake">Customized Cake</option>
                  <option value="Wedding Cake">Wedding Cake</option>
                  <option value="Anniversary Cake">Anniversary Cake</option>
                  <option value="Cupcakes">Cupcakes</option>
                  <option value="Pastries">Pastries</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#323232]">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your order specifications..."
                  rows={4}
                  className="w-full resize-none border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="relative isolate flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#cf5c4a] via-[#f2b08a] to-[#cf5c4a] px-6 py-4 text-sm font-semibold tracking-[0.14em] text-white shadow-[0_14px_34px_rgba(207,92,74,0.22)] transition-all hover:shadow-[0_18px_44px_rgba(207,92,74,0.32)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#cf5c4a]/25"
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 opacity-80">
                  <span className="absolute left-6 top-3 size-1.5 rounded-full bg-white/80" />
                  <span className="absolute left-14 top-7 size-1 rounded-full bg-[#fff0e6]/90" />
                  <span className="absolute left-24 top-4 size-1 rounded-full bg-white/70" />
                  <span className="absolute right-10 top-4 size-1.5 rounded-full bg-white/75" />
                  <span className="absolute right-20 top-7 size-1 rounded-full bg-[#fff0e6]/90" />
                  <span className="absolute right-32 top-3 size-1 rounded-full bg-white/65" />
                </span>
                <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-white/25 blur-[0.5px]" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  SEND MESSAGE VIA WHATSAPP
                </span>
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="border border-[#e6e6e6] bg-white p-8 shadow-[0_10px_28px_rgba(10,10,10,0.04)]">
              <h3 className="mb-6 text-2xl font-semibold text-[#232323]">Our Bakery</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#fff3f1]">
                    <MapPin className="h-6 w-6 text-[#cf5c4a]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#2a2a2a]">Address</div>
                    <div className="text-[#777]">
                      123, MG Road, Koregaon Park, Pune,
                      <br />
                      Maharashtra - 411001
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#fff3f1]">
                    <Phone className="h-6 w-6 text-[#cf5c4a]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#2a2a2a]">Phone</div>
                    <div className="text-[#777]">+91 98765 43210 / 020-12345678</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#fff3f1]">
                    <Mail className="h-6 w-6 text-[#cf5c4a]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#2a2a2a]">Email</div>
                    <div className="text-[#777]">hello@thecakecarnival.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#fff3f1]">
                    <Clock className="h-6 w-6 text-[#cf5c4a]" />
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-[#2a2a2a]">Hours</div>
                    <div className="text-[#777]">Mon - Sun: 9:00 AM - 11:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} className="border border-[#e6e6e6] bg-white p-8 shadow-[0_10px_28px_rgba(10,10,10,0.04)]">
              <h3 className="mb-4 text-2xl font-semibold text-[#232323]">Quick Order on WhatsApp</h3>
              <p className="mb-6 text-[#777]">Chat with us directly for instant responses and quick orders!</p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative isolate w-full overflow-hidden rounded-2xl border border-[#cf5c4a]/25 bg-gradient-to-r from-[#cf5c4a] via-[#f2b08a] to-[#f6d3c0] px-6 py-4 text-sm font-semibold tracking-[0.14em] text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.25)] shadow-[0_14px_34px_rgba(207,92,74,0.20)] transition-all hover:shadow-[0_18px_44px_rgba(207,92,74,0.30)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#cf5c4a]/25"
                >
                  <span aria-hidden className="pointer-events-none absolute inset-0 opacity-80">
                    <span className="absolute left-6 top-3 size-1.5 rounded-full bg-white/80" />
                    <span className="absolute left-16 top-7 size-1 rounded-full bg-[#fff0e6]/90" />
                    <span className="absolute right-10 top-4 size-1.5 rounded-full bg-white/75" />
                    <span className="absolute right-24 top-8 size-1 rounded-full bg-[#fff0e6]/90" />
                  </span>
                  <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-white/25 blur-[0.5px]" />
                  <span className="relative z-10">OPEN WHATSAPP CHAT</span>
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
