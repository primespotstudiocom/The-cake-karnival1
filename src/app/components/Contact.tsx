import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      'New Franchise Inquiry',
      `Name: ${formData.name}`,
      `Contact No: ${formData.phone}`,
      `Product Type: ${formData.productType}`,
      `Message/Specifications: ${formData.message}`,
    ].join('\n');
    window.open(`https://wa.me/9009003867?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" ref={ref} className="instagram-section pb-16 pt-6 sm:pt-8 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="text-left">
            <div className="mb-4 inline-block border border-[#eb89e4]/30 rounded px-4 py-2 text-xs font-semibold tracking-[0.14em] text-[#96028b] bg-[#fff2fc]">
              GET IN TOUCH
            </div>
            <h2 className="mb-4 text-4xl font-semibold text-[#1f1f1f] sm:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Let's Make Your Celebration Special
            </h2>
            <p className="max-w-3xl text-lg text-[#777]">Contact us for a customized cake consultation, or place an order.</p>
          </div>
          <div className="flex-shrink-0 self-start md:self-end">
            <div className="bg-[#96028b] text-white font-bold text-2xl px-6 py-3 rounded-xl shadow-lg inline-flex items-center justify-center min-w-[150px]">
              30+ Stores
            </div>
          </div>
        </motion.div>

        {/* Franchise Promotion Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 overflow-hidden rounded-3xl border border-[#e6e6e6] bg-white shadow-[0_10px_28px_rgba(10,10,10,0.04)] relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] min-h-[380px]">
            {/* Left Panel: Purple BG + Cake Collage + Text */}
            <div className="bg-[#96028b] text-white p-8 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden md:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] z-10">
              
              {/* Stacked Collage of 3 Cake Photos */}
              <div className="w-[180px] sm:w-[220px] grid grid-cols-2 gap-1.5 p-1 bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 self-start z-10">
                <div className="aspect-square rounded-lg overflow-hidden border border-white/20 bg-purple-950/20">
                  <img
                    src={encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.50 PM (2).jpeg')}
                    alt="Pistachio Cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-white/20 bg-purple-950/20">
                  <img
                    src={encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (3).jpeg')}
                    alt="Chocolate Cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-[1.8/1] rounded-lg overflow-hidden border border-white/20 bg-purple-950/20">
                  <img
                    src={encodeURI('/customize/WhatsApp Image 2026-04-27 at 11.01.48 PM (1).jpeg')}
                    alt="Red Velvet Heart Cake"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-8 md:mt-10 text-left z-10">
                <h2 
                  className="text-4xl sm:text-5xl font-black italic tracking-wide text-white leading-tight font-serif"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Own a <br className="hidden sm:inline" /> Franchise
                </h2>
              </div>
            </div>

            {/* Cursive Ampersand '&' */}
            <div 
              className="hidden md:block absolute z-20 text-[#f3d7f0] text-9xl select-none pointer-events-none font-serif italic"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                textShadow: "0 0 15px rgba(150,2,139,0.4)",
                top: "50%",
                left: "56%",
                transform: "translate(-50%, -50%)"
              }}
            >
              &
            </div>

            {/* Right Panel: Text + Phone Details */}
            <div className="bg-white p-8 sm:p-10 md:p-12 md:pl-20 flex flex-col justify-between z-0">
              <div className="text-left mt-4 md:mt-0">
                <h2 
                  className="text-3xl sm:text-4xl font-extrabold text-[#1f1f1f] leading-tight font-serif"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Start Your <br /> Own Business
                </h2>
                <p className="text-sm sm:text-base font-bold tracking-widest text-[#b633a9] mt-2 uppercase">
                  QUICK SETUP HIGH RETURNS
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 md:mt-0">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#96028b]/10 text-[#96028b] shadow-sm">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <a href="tel:9009003867" className="block text-xl sm:text-2xl font-black text-[#96028b] tracking-wider leading-none hover:text-[#b633a9] transition-colors">
                    900 900 3867
                  </a>
                  <a href="tel:8793773867" className="block text-xl sm:text-2xl font-black text-[#96028b] tracking-wider mt-2.5 leading-none hover:text-[#b633a9] transition-colors">
                    879 377 3867
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lower Columns Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h3 className="mb-6 text-3xl font-semibold text-[#1f1f1f]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Apply for New Franchise
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block font-semibold text-[#323232]">
                  Name <span className="text-[#96028b]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#96028b] focus-visible:ring-[3px] focus-visible:ring-[#96028b33] rounded-lg"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#323232]">
                  Contact No. <span className="text-[#96028b]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your Contact No."
                  className="w-full border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#96028b] focus-visible:ring-[3px] focus-visible:ring-[#96028b33] rounded-lg"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#323232]">
                  Product Type <span className="text-[#96028b]">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.productType}
                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                    className="w-full appearance-none border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all focus-visible:border-[#96028b] focus-visible:ring-[3px] focus-visible:ring-[#96028b33] rounded-lg"
                  >
                    <option value="">Select Your Product</option>
                    <option value="Birthday Cake">Birthday Cake</option>
                    <option value="Customized Cake">Customized Cake</option>
                    <option value="Wedding Cake">Wedding Cake</option>
                    <option value="Anniversary Cake">Anniversary Cake</option>
                    <option value="Cupcakes">Cupcakes</option>
                    <option value="Pastries">Pastries</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#777]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-[#323232]">
                  Message <span className="text-[#96028b]">*</span>
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Order Specifications"
                  rows={4}
                  className="w-full resize-none border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#96028b] focus-visible:ring-[3px] focus-visible:ring-[#96028b33] rounded-lg"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="relative isolate flex w-full items-center justify-center overflow-hidden rounded-xl bg-[#c92cb6] hover:bg-[#96028b] px-6 py-4 text-sm font-semibold tracking-[0.14em] text-white shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#96028b]/25"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  SEND MESSAGE VIA WHATSAPP
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-left space-y-8"
          >
            <h3 className="mb-6 text-3xl font-semibold text-[#1f1f1f]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Bakery
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#96028b]/10 text-[#96028b] rounded-xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1 font-semibold text-[#2a2a2a] text-lg">Address</div>
                  <div className="text-[#777] leading-relaxed">
                    Vaishnavi Apartments, Kheshaba Jadhav Path,
                    <br />
                    Shriram Nagar, Dhankawadi, Pune,
                    <br />
                    Maharashtra 411046
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#96028b]/10 text-[#96028b] rounded-xl">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1 font-semibold text-[#2a2a2a] text-lg">Contact No.</div>
                  <a href="tel:+919009003867" className="text-[#777] hover:text-[#96028b] transition-colors">
                    +91 9009003867
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#96028b]/10 text-[#96028b] rounded-xl">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1 font-semibold text-[#2a2a2a] text-lg">Email Address</div>
                  <a href="mailto:hello@thecakecarnival.com" className="text-[#777] hover:text-[#96028b] transition-colors">
                    hello@thecakecarnival.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#96028b]/10 text-[#96028b] rounded-xl">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1 font-semibold text-[#2a2a2a] text-lg">Time</div>
                  <div className="text-[#777]">
                    Open Every Day
                    <br />
                    9:00 AM - 11:00 PM
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
