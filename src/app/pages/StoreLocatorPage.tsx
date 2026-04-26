import { motion } from 'motion/react';
import { Clock, MapPin, Navigation, Phone, Image as ImageIcon, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

export function StoreLocatorPage() {
  const [query, setQuery] = useState('');
  const toTel = (phone: string) => phone.replace(/[^\d+]/g, '');

  const stores = [
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival Bharati vidhypeeth',
      address: 'Bharati vidhypeeth, Pune',
      phone: '9009003867',
      photosUrl: 'https://share.google/jETGHMqv3E9anFV2e',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival (SAMVIT ENTPRIZES)',
      address: 'Shop no. 2, opp. Prabhat sweets, nda road. Amedkar chawk, warje',
      phone: '9049765848',
      photosUrl: 'https://share.google/evJAhS6rBnc7HN0cB',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival (JAMBHULWADI RD)',
      address:
        'Shop no. 7, chintamani srushti, near lipane vasi, beside lipane landmark, jambhulwadi road, ambegaon (kh)',
      phone: '8380888674',
      photosUrl: 'https://share.google/zyYFE3i36wHYjSZhB',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival (AMBEGAON)',
      address: 'Shop no. 1 near bhairavnath emple ambegaon(kh)',
      phone: '9673366537',
      photosUrl: 'https://share.google/kgNrYx5yzAV99bxku',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival (SUKHSAGAR)',
      address: 'Shop 6 balaji garden, front of ambika sweet, sukhsagar nagar',
      phone: '9881499245',
      photosUrl: 'https://share.google/rd6jvMPvD3kKdBHHD',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival (KIRKITWADI)',
      address: 'Shop no 4, amruta vihar kirkitwadi, sinhgad road',
      phone: '9604885800',
      photosUrl: 'https://share.google/JI8oL2rL6tsomsp3O',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival (BANER)',
      address: 'Baner mhalunge road, 120/1/1, ganraj chowk, near zudio showroom, baner,',
      phone: '7038340153',
      photosUrl: 'https://share.google/4fpznDIVZrkzIVGrZ',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival (GUJARWADI)',
      address: 'Suvarna heights, warkhade nagar chauk gujarwadi road, katraj pune',
      phone: '9284695668',
      photosUrl: 'https://share.google/Heu55Sj1TfLmUUqdf',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival (WADGAON)',
      address: 'Shop no. 2, sr.no. 51, wadgaon (bk), dangat patil market point, pune 411041',
      phone: '9049765848',
      photosUrl: 'https://share.google/C6Qved9vl6I5u7uJ4',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival (DHAYARI)',
      address: 'Sr.n 18, dhayari road, rayakarnagar, opp murali hotel, pune',
      phone: '8888381866',
      photosUrl: 'https://share.google/HaW2Fq2tN0kwpLOOs',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival sinhgad road',
      address: 'Shop no 2, sabian app. Near shivarushti, ambegaon bk.',
      phone: '9130891689',
      photosUrl: 'https://share.google/7By0yRArMowWyfyw7',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival KOTHRUD',
      address: 'Sr. No.19/1b, varun complex, shop no. 5, near medico medical near karishma soc. Kothrud',
      phone: '9604199557',
      photosUrl: 'https://share.google/OQ9rNdfKKLjJkznHH',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival KONDHWA',
      address: 'Shop no8, nirman square, kamathe patil nagar, yewalewadi',
      phone: '9881499245',
      photosUrl: 'https://share.google/exuY3Z4KbfKAv6NKz',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival NARAYAN PETH',
      address:
        'Shop no 4, snehdeep apt. Back to narayanpeth police chowki, near vijay maruti mandal, pune',
      phone: '7972631615',
      photosUrl: 'https://share.google/IjR6yjrcV6sJD3GHZ',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival Narhe',
      address: 'Shree concrol chowk , Audumber Complex narhe',
      phone: '9049765848',
      photosUrl: 'https://share.google/H5Y5eHsYcHvssIlQE',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival SHIVANE',
      address:
        'CHANDRASHEELA COMPLEX, SHOP NO 2, SR NO 13/2, MORE PETROL PUMP , JAWAL NDA ROAD SHIVANE HAWELI PUNE 411023',
      phone: '8010146930',
      photosUrl: 'https://share.google/D7VCcPhYHkmlyUIN1',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival (DSK)',
      address: 'shop no-8, Vasudha A building, DSK Vishwa, Pune, Maharashtra 411041',
      phone: '9881863686',
      photosUrl: 'https://share.google/HeCqBqpZfuEplqf5l',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival bhosari',
      address:
        'Jai Maharashtra Chowk, near Rubab Collection, Ramnagar, Bhosari, Pimpri-Chinchwad, Maharashtra 411039',
      phone: '9689445566',
      photosUrl: 'https://share.google/WyJq9ueKSqW4fKjDc',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival gangadham',
      address:
        'SHOP.NO.3, PART A, S.NO 580/2, CHOWK, next to BALAJI TRADERS, Hamal Nagar, Gaganvihar, Gangadham Phase II, Ganga Dham, Pune, Maharashtra 411037',
      phone: '8055789905',
      photosUrl: 'https://share.google/oZJHVYxeyWma49d9g',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival chinchwad',
      address:
        'PremSagar Society, S no 185, nr. PCMC auditorium, Shridharnagar, Chinchwad, Pune, Pimpri-Chinchwad, Maharashtra 411033',
      phone: '7038340153',
      photosUrl: 'https://share.google/38HHYgH2wgEtb7Xtl',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival deccan',
      address:
        'Shop No 725/B, More Niwas, Khandoji Baba Chowk, opposite Central Bank of India, Pulachi Wadi, Deccan Gymkhana, Pune, Maharashtra 411004',
      phone: '8999648392',
      photosUrl: 'https://share.google/4QWSqYEnEsfukpWaK',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival aranyashwar',
      address:
        'Shop no 2, shivsagar apartment, in front of ARANYESHWAR PARK, phase 2, Parvati Paytha, Pune, Maharashtra 411009',
      phone: '8983855999',
      photosUrl: 'https://share.google/x28tqUyx8a4zvFVXW',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival punwale',
      address:
        'The Cake Carnival, society, Gaikwad Nagar Rd, beside Madhav Mithas, in front of Legacy Millennia - C, Punawale, Pune, Pimpri-Chinchwad, Maharashtra 411033',
      phone: '9970733756',
      photosUrl: 'https://share.google/XqJkcABc0JMJbPYQB',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival ravet',
      address:
        'The cake carnival, Akash avenue, Pipeline Rd, in front of silver oak society, Shinde Vasti, Ravet, Pune, Pimpri-Chinchwad, Maharashtra 412101',
      phone: '9970733756',
      photosUrl: 'https://share.google/7ZnElBu58g2ZlnNYP',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival wakad',
      address:
        'Shop No-1, GogekarHight, opposite to APOSTROPHEExit Gate, Yamuna Nagar, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057',
      phone: '9665122353',
      photosUrl: 'https://share.google/IjGTgHTNXvZcV6gFG',
    },
    {
      badge: 'FRANCHISE LOCATION',
      name: 'Cake Carnival Moshi',
      address:
        'Shop number 13, A17, River Residency Rd, Jadhav Wadi, Chikhali, Moshi, Pimpri-Chinchwad, Maharashtra 411062',
      phone: '8007176770',
      photosUrl: 'https://share.google/NyMe7QZtlUeAarYWE',
    },
  ];

  const filteredStores = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stores;

    return stores.filter((store) => {
      const haystack = `${store.name} ${store.address} ${store.phone}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7f5] via-[#f7f7f7] to-[#f3f3f3] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 size-[320px] rounded-full bg-[#cf5c4a]/12 blur-3xl" />
        <div className="absolute -right-24 top-24 size-[420px] rounded-full bg-black/5 blur-3xl" />
        <div className="absolute left-1/2 top-[520px] size-[520px] -translate-x-1/2 rounded-full bg-[#cf5c4a]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[12px] font-semibold tracking-widest text-[#cf5c4a] uppercase shadow-sm backdrop-blur">
            Find a store
            <span className="inline-block size-1.5 rounded-full bg-[#cf5c4a]/70" />
            Pune & nearby
          </div>
          <h1
            className="mb-3 text-4xl font-semibold text-[#1f1f1f] sm:text-5xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Store Locator
          </h1>
          <p className="mx-auto max-w-2xl text-[#777]">
            Find your nearest Cake Carnival outlet with address, phone, and quick actions.
          </p>
        </motion.div>

        <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#777]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by area, store name, or phone..."
              className="h-12 w-full rounded-2xl border border-black/10 bg-white/80 pl-10 pr-4 text-[14px] text-[#1f1f1f] shadow-sm backdrop-blur outline-none placeholder:text-[#8a8a8a] focus:border-[#cf5c4a]/50 focus:ring-4 focus:ring-[#cf5c4a]/15"
            />
          </div>
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-[13px] text-[#555] shadow-sm backdrop-blur sm:min-w-[210px] sm:justify-center">
            <span className="font-semibold text-[#1f1f1f]">{filteredStores.length}</span>
            <span className="text-[#777]">stores found</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredStores.map((store, index) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/85 p-5 shadow-[0_10px_26px_rgba(10,10,10,0.06)] backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(10,10,10,0.10)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#cf5c4a] via-[#f2b08a] to-[#cf5c4a]" />

              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#cf5c4a]/20 bg-[#cf5c4a]/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-[#cf5c4a] uppercase">
                  {store.badge}
                  <span className="inline-block size-2 rounded-full bg-[#cf5c4a]/60" />
                </div>
              </div>

              <div className="text-[18px] font-semibold leading-tight text-[#1f1f1f] overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                {store.name}
              </div>

              <div className="mt-4 h-px bg-black/10" />

              <div className="mt-4 space-y-4 text-[13px] text-[#6f6f6f]">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-8 items-center justify-center rounded-xl bg-[#cf5c4a]/10 text-[#cf5c4a]">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <div className="text-[13px] font-semibold text-[#2a2a2a]">Address</div>
                    <div className="leading-relaxed overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                      {store.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-8 items-center justify-center rounded-xl bg-black/5 text-[#1f1f1f]">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <div className="text-[13px] font-semibold text-[#2a2a2a]">Phone</div>
                    <a
                      className="font-semibold text-[#1f1f1f] underline-offset-4 transition-all hover:underline"
                      href={`tel:${toTel(store.phone)}`}
                    >
                      {store.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-8 items-center justify-center rounded-xl bg-black/5 text-[#1f1f1f]">
                    <Clock className="size-4" />
                  </span>
                  <div>
                    <div className="text-[13px] font-semibold text-[#2a2a2a]">Hours</div>
                    <div>Mon - Sun</div>
                  </div>
                </div>
              </div>

              <div className="mt-auto grid grid-cols-1 gap-2 pt-5 sm:grid-cols-12">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="sm:col-span-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1f1f1f] px-3 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#cf5c4a] focus:outline-none focus:ring-4 focus:ring-[#cf5c4a]/20"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Directions <Navigation className="size-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="sm:col-span-3 inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2.5 text-center text-[13px] font-semibold leading-tight text-[#1f1f1f] shadow-sm transition-all hover:bg-black/5 focus:outline-none focus:ring-4 focus:ring-black/10"
                  href={`tel:${toTel(store.phone)}`}
                  aria-label={`Call ${store.name}`}
                >
                  <span>
                    <span className="block">Call</span>
                    <span className="block">Store</span>
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="sm:col-span-3 inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2.5 text-[13px] font-semibold text-[#1f1f1f] shadow-sm transition-all hover:bg-black/5 focus:outline-none focus:ring-4 focus:ring-black/10"
                  href={store.photosUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImageIcon className="size-4 text-[#777] transition-colors group-hover:text-[#1f1f1f]" />
                  Photos
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
