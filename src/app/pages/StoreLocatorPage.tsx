import { motion } from 'motion/react';
import { Clock, MapPin, Phone, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

export function StoreLocatorPage() {
  const [query, setQuery] = useState('');
  const toTel = (phone: string) => phone.replace(/[^\d+]/g, '');

  const stores = [
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Bharati Vidhypeeth)',
      address: 'Vardhman Apartments, Chatrapati Jadhav Path, Shriram Nagar, Dhankawadi, Pune, Maharashtra 411043',
      phone: '9089003867',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Samvit Enterprizes)',
      address: 'Shop no. 2, Ambedkar chowk, NDA Rd, opposite pramod hardware, Warje, Jakat Naka, warje, Pune.',
      phone: '9049765848',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Jambhulwadi Rd)',
      address: 'Shop no. 7, Chintamani Srushti, Near Lipane Vasti, Beside Lipane Landmark, Jambhulwadi road, Ambegaon (Kh) Pune',
      phone: '8380888674',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Ambegaon)',
      address: 'Shop No. 8, Adishree Society, Near Samukh, Ambegaon Budruk, Pune',
      phone: '9673366537',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Sukhsagar)',
      address: 'Shop No. 6, Balaji Garden, Front of Ambika Sweet, Sukhsagar Nagar, Pune.',
      phone: 'Placeholder',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Kirkatwadi)',
      address: 'Shop No. 4, Amruta Vihar Building, Sinhawadi Phata, Near Balaji Electronics, Kirkatwadi, Pune.',
      phone: '9604885800',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Baner)',
      address: 'Baner Mhalunge road, 120/1/1, Ganraj Chowk, Near Zudio showroom, Baner, Pune.',
      phone: '7038340153',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Gujarwadi)',
      address: 'Suvarna Heights, Warkhade Nagar Chowk Gujarwadi Road, Katraj Pune',
      phone: '9284695668',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Wadgaon)',
      address: 'Shop no. 2, Sr. No. 51, Wadgaon (bk), Dangat Patil Market Point, Pune.',
      phone: '9049765848',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Dhayari)',
      address: 'Sr. No. 18, Dhayari Road, Rayakarnagar, Opp. Murali Hotel, Pune.',
      phone: '8888381866',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Sinhgad Road)',
      address: 'Shop no. 2, Sabir Apartment, near Shivarushti, off Sinhgad Campus Road, Ambegaon Budruk, Pune.',
      phone: '9130891689',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Kothrud)',
      address: 'Sr. No. 19/1b, Varun Complex, Shop No. 5, Near Medico Medical, Near Karishma Soc. Kothrud, Pune.',
      phone: '9822230648',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Kondhwa)',
      address: 'Shop no. 8, Nirman Square, Kamathe Patil Nagar, Yewalewadi, Pune.',
      phone: '9881499245',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Narayan Peth)',
      address: 'Shop no. 4, Snehdeep Apt., Back to Narayanpeth Police Chowki, Near Vijay Maruti Mandal, Pune.',
      phone: '7972631615',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Narhe)',
      address: 'Shree Control Chowk, Audumber Complex, Narhe, Pune, Maharashtra 411041',
      phone: '7776847366',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Shivane)',
      address: 'Chandrasheela Complex, Shop no. 2, Sr. no. 13/2, More Petrol Pump, Jawal NDA Road, Shivane, Pune.',
      phone: '8010146930',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (DSK)',
      address: 'Shop no. 8, Vasudha A, Ranjangaon, DSK Vishwa, Dhayari, Pune, Maharashtra 411068',
      phone: '9881863686',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Bhosari)',
      address: 'Jai Maharashtra Chowk, Near Rubab Collection, Ramnagar, Bhosari, Pimpri Chinchwad, Pune.',
      phone: '7776847366',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Gangadham)',
      address: 'Shop no. 3, Part A, Sl. no. 580/2, Chowk, next to Balaji Traders, Hamal Nagar, Gaganvihar, Gangadham',
      phone: '8055789905',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Deccan)',
      address: 'Shop no. 725/B, More Niwas, Khandoli Baba Chowk, Opp. Central Bank of India, Pulachi Wadi, Deccan Gymkhana.',
      phone: '8999648392',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Aranyashwar)',
      address: 'Shop no. 2, Shrisagar Apartment, in front of Aranyeshwar Park, Phase 2, Parvati Paytha, Pune.',
      phone: '8983855999',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Punawale)',
      address: 'Gaikwad Nagar Rd, Beside Madhav Mithas, In Front of Legacy Millennia C, Punawale, Pimpri Chinchwad, Pune.',
      phone: '9970733756',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Ravet)',
      address: 'Akash Avenue, Pipeline Rd, in Front of Silver Oak Society, Shinde Vasti, Pimpri-Chinchwad, Ravet, Pune.',
      phone: '9970733756',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Wakad)',
      address: 'Shop no. 1, Gogekar Height, Opp. to Apostrophe Exit Gate, Yamuna Nagar, Shankar Kalat Nagar, Wakad, Pune.',
      phone: '9665122353',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Moshi)',
      address: 'Shop number 13, A17, River Residency Rd, Jadhav Wadi, Chikhal, Moshi, Pimpri-Chinchwad, Pune.',
      phone: '8007176770',
    },
    {
      badge: 'Franchise Location',
      name: 'The Cake Carnival (Chakan)',
      address: 'The Cake Carnival Chakan, Ambethan Chowk, Chakan, Opp. Shivam Residence, Near the MLA office, Pune.',
      phone: '8308570712',
    },
  ];

  const filteredStores = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stores;

    return stores.filter((store) => {
      const haystack = `${store.name} ${store.address} ${store.phone}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query, stores]);

  return (
    <section className="instagram-section pb-24 pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Search Bar Section (Top) */}
        <div className="mb-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="inline-flex h-11 items-center justify-center rounded-lg border border-[#cf2aa6]/30 bg-[#fff5fc] px-5 py-2 text-xs font-bold tracking-widest text-[#cf2aa6] uppercase">
            FIND A STORE
          </div>
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#8a8a8a]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by area, store name, or phone..."
              className="h-11 w-full rounded-lg border border-[#ebdce6] bg-white pl-10 pr-4 text-[13px] text-[#1f1f1f] shadow-sm outline-none placeholder:text-[#a0a0a0] focus:border-[#cf2aa6] focus:ring-1 focus:ring-[#cf2aa6]"
            />
          </div>
        </div>

        {/* Page Header block */}
        <div className="relative mb-12 flex flex-col justify-between rounded-3xl border border-[#ebdce6] bg-gradient-to-r from-[#fff0fb] via-[#fcd7f5] to-[#fff0fb] p-8 shadow-[0_12px_28px_rgba(150,2,139,0.03)] sm:flex-row sm:items-center sm:py-10">
          <div className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#ffd8c8]/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-12 h-48 w-48 rounded-full bg-[#ffe8bc]/40 blur-3xl" />
          <div className="relative">
            <h1
              className="text-4xl font-bold text-[#1f1f1f] sm:text-5xl"
              style={{ fontFamily: 'var(--font-editorial)' }}
            >
              Store Locator
            </h1>
            <p className="mt-2 text-sm text-[#4a4a4a]">Find your nearest outlet!</p>
          </div>
          <div className="relative mt-4 inline-flex items-center justify-center rounded-full bg-[#cf2aa6] px-5 py-2 text-xs font-black tracking-wider text-white shadow-sm sm:mt-0">
            30+ STORES
          </div>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredStores.map((store) => (
            <div
              key={store.name}
              className="group flex flex-col rounded-3xl border border-[#ebdce6] bg-white p-6 shadow-[0_8px_20px_rgba(25,16,10,0.03)] transition-all duration-300 hover:shadow-[0_14px_30px_rgba(150,2,139,0.07)]"
            >
              {/* Franchise Location Header */}
              <div className="mb-2 text-[11px] font-bold tracking-[0.08em] text-[#cf2aa6] uppercase">
                {store.badge}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold leading-snug text-[#1f1f1f] min-h-[50px] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                {store.name}
              </h3>

              <div className="my-4 h-px bg-[#f3e9f1]" />

              {/* Details */}
              <div className="space-y-4 text-[13px] text-[#4f4f4f] flex-grow">
                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#cf2aa6]" />
                  <div>
                    <div className="font-bold text-[#1f1f1f]">Address</div>
                    <div className="mt-0.5 leading-relaxed [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                      {store.address}
                    </div>
                  </div>
                </div>

                {/* Contact No. */}
                <div className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 size-4 shrink-0 text-[#cf2aa6]" />
                  <div>
                    <div className="font-bold text-[#1f1f1f]">Contact No. :</div>
                    <div className="mt-0.5 font-medium">
                      {store.phone === 'Placeholder' ? (
                        <span className="text-[#888] font-normal">Placeholder</span>
                      ) : (
                        <a
                          href={`tel:${toTel(store.phone)}`}
                          className="text-[#1f1f1f] hover:text-[#cf2aa6] transition-colors"
                        >
                          {store.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 size-4 shrink-0 text-[#cf2aa6]" />
                  <div>
                    <div className="font-bold text-[#1f1f1f]">Time :</div>
                    <div className="mt-0.5 font-medium">10:00 AM - 11:30 PM</div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${store.name} ${store.address}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-[#cf2aa6] text-[13px] font-bold text-white shadow-sm transition-colors hover:bg-[#96028b] focus:outline-none"
                >
                  Direction
                </a>
                {store.phone === 'Placeholder' ? (
                  <button
                    disabled
                    className="inline-flex h-10 cursor-not-allowed items-center justify-center rounded-full bg-[#ebdce6] text-[13px] font-bold text-[#888] shadow-sm focus:outline-none"
                  >
                    Call Store
                  </button>
                ) : (
                  <a
                    href={`tel:${toTel(store.phone)}`}
                    className="inline-flex h-10 items-center justify-center rounded-full bg-[#cf2aa6] text-[13px] font-bold text-white shadow-sm transition-colors hover:bg-[#96028b] focus:outline-none"
                  >
                    Call Store
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
