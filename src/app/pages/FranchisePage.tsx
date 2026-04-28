import { motion } from 'motion/react';
import { useState } from 'react';
import {
  BadgeCheck,
  ClipboardList,
  FileSpreadsheet,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Store,
  Video,
} from 'lucide-react';

export function FranchisePage() {
  const whatsappNumber = '9009003867';
  const supportNumber = '8793773867';
  const crmUrl =
    'https://docs.google.com/spreadsheets/d/1rfpKfYham04u5SMGoYCt_-ZbXtHC4f7fNoYx_oyXqBc/edit?gid=0#gid=0';

  const getYouTubeEmbedSrc = (embedUrl: string) => {
    try {
      const url = new URL(embedUrl);
      url.searchParams.set('modestbranding', '1');
      url.searchParams.set('controls', '1');
      url.searchParams.set('rel', '0');
      return url.toString();
    } catch {
      return embedUrl;
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    email: '',
    message: '',
  });

  const pillars = [
    {
      icon: Store,
      title: 'Fast-Track Launch',
      text: 'Setup planning, kitchen guidance, and launch support from day one.',
    },
    {
      icon: BadgeCheck,
      title: 'Brand + Marketing Kit',
      text: 'Campaign creatives, local marketing playbook, and social media support.',
    },
    {
      icon: Rocket,
      title: 'Operational Training',
      text: 'Team onboarding, SOP support, and recipe/process training included.',
    },
  ];

  const setupSteps = [
    { title: 'Inquiry', text: 'Share your city, budget range, and timeline.' },
    { title: 'Discussion', text: 'Business call to review location feasibility and plan.' },
    { title: 'Setup', text: 'Store design, equipment setup, and hiring/training support.' },
    { title: 'Launch', text: 'Grand opening with campaign and performance tracking.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      'Franchise Inquiry',
      `Name: ${formData.name}`,
      `Phone/WhatsApp: ${formData.phone}`,
      `City: ${formData.city}`,
      formData.email ? `Email: ${formData.email}` : null,
      `Message: ${formData.message}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#f3f3f3] pb-10 pt-6 sm:pt-8">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#f5b49f]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-6 h-80 w-80 rounded-full bg-[#f6d8a2]/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] lg:items-center lg:gap-12 xl:gap-16"
          >
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e3cfc8] bg-white/75 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[#b45f4f]">
                FRANCHISE OPPORTUNITY
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#cf5c4a]" />
              </p>

              <h1
                className="text-5xl font-semibold leading-[1.02] text-[#1f1f1f] sm:text-6xl"
                style={{ fontFamily: 'var(--font-editorial)' }}
              >
                Grow With
                <br />
                The Cake Carnival
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#6e6762]">
                Partner with a loved bakery brand and launch your own store with complete setup, operations,
                and marketing support.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-[#3f3a36]">
                <span className="rounded-full border border-[#e4d4ce] bg-white px-4 py-2">Investment: 5 - 6 Lakhs</span>
                <span className="rounded-full border border-[#e4d4ce] bg-white px-4 py-2">ROI: 12 - 18 Months</span>
                <span className="rounded-full border border-[#e4d4ce] bg-white px-4 py-2">30+ Franchise Stores</span>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;

                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="rounded-2xl border border-[#e7ddd8] bg-white/90 p-4 shadow-[0_14px_30px_rgba(25,16,10,0.06)]"
                    >
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff3ee] text-[#cf5c4a]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#1f1f1f]">{pillar.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#716963]">{pillar.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative mt-2 lg:mt-0 lg:self-center"
            >
              <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-[#f4c9b8]/35 blur-3xl lg:block" />
              <div className="absolute -right-6 bottom-10 hidden h-32 w-32 rounded-full bg-[#f6d8a2]/35 blur-3xl lg:block" />

              <div className="relative mx-auto w-full max-w-[29rem] lg:ml-auto">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'https://www.youtube.com/embed/pMlSK0K8SWA?si=GJcH2nYVe0YlfGUU',
                    'https://www.youtube.com/embed/8hBye4svme8?si=gsAlHXFHgYgC-e6z',
                    'https://www.youtube.com/embed/fuEcgmkNWIA?si=Ql1at2JF-fH9QohP',
                  ].map((videoSrc) => (
                    <div
                      key={videoSrc}
                      className="overflow-hidden rounded-[1.25rem] border border-[#e7ddd8] bg-white/70 shadow-[0_14px_30px_rgba(25,16,10,0.06)] ring-1 ring-black/5"
                    >
                      <iframe
                        className="h-[11rem] w-full bg-black sm:h-[12.5rem] lg:h-[13.5rem]"
                        src={getYouTubeEmbedSrc(videoSrc)}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] pb-24 pt-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="rounded-3xl border border-[#e6ddd8] bg-white p-8 shadow-[0_14px_34px_rgba(10,10,10,0.05)]">
                <h2 className="mb-6 text-4xl font-semibold text-[#232323]" style={{ fontFamily: 'var(--font-editorial)' }}>
                  Franchise Details
                </h2>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#ece3de] bg-[#fffdfc] p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <MessageCircle className="size-5 text-[#cf5c4a]" />
                      <div className="text-xs font-semibold tracking-[0.18em] text-[#cf5c4a] uppercase">Contact</div>
                    </div>
                    <div className="space-y-3 text-sm text-[#777]">
                      <div className="flex items-start gap-3">
                        <Mail className="mt-0.5 size-4 text-[#cf5c4a]" />
                        <div>
                          <div className="font-semibold text-[#2a2a2a]">Email</div>
                          <div>Add email</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MessageCircle className="mt-0.5 size-4 text-[#cf5c4a]" />
                        <div>
                          <div className="font-semibold text-[#2a2a2a]">WhatsApp</div>
                          <a
                            className="transition-colors hover:text-[#1f1f1f]"
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {whatsappNumber}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 size-4 text-[#cf5c4a]" />
                        <div>
                          <div className="font-semibold text-[#2a2a2a]">Support Number</div>
                          <a className="transition-colors hover:text-[#1f1f1f]" href={`tel:${supportNumber}`}>
                            {supportNumber}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#ece3de] bg-[#fffdfc] p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <ClipboardList className="size-5 text-[#cf5c4a]" />
                      <div className="text-xs font-semibold tracking-[0.18em] text-[#cf5c4a] uppercase">Information</div>
                    </div>
                    <div className="space-y-3 text-sm text-[#777]">
                      <div>
                        <div className="font-semibold text-[#2a2a2a]">Investment</div>
                        <div>5 - 6 Lakhs</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[#2a2a2a]">ROI</div>
                        <div>12 - 18 Months</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[#2a2a2a]">Support</div>
                        <div>Setup, training, marketing support, and raw materials.</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#ece3de] bg-[#fffdfc] p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <Video className="size-5 text-[#cf5c4a]" />
                      <div className="text-xs font-semibold tracking-[0.18em] text-[#cf5c4a] uppercase">Media</div>
                    </div>
                    <div className="space-y-2 text-sm text-[#777]">
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-semibold text-[#2a2a2a]">Franchise videos</div>
                        <div>Yes</div>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-semibold text-[#2a2a2a]">Cake making videos</div>
                        <div>Yes</div>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-semibold text-[#2a2a2a]">Store walkthrough</div>
                        <div>Yes</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[#2a2a2a]">Drive link</div>
                        <div>Add drive link</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#ece3de] bg-[#fffdfc] p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <FileSpreadsheet className="size-5 text-[#cf5c4a]" />
                      <div className="text-xs font-semibold tracking-[0.18em] text-[#cf5c4a] uppercase">CRM</div>
                    </div>
                    <div className="space-y-3 text-sm text-[#777]">
                      <div>
                        <div className="font-semibold text-[#2a2a2a]">Lead system</div>
                        <a className="break-all transition-colors hover:text-[#1f1f1f]" href={crmUrl} target="_blank" rel="noreferrer">
                          Open CRM Sheet
                        </a>
                      </div>
                      <div>
                        <div className="font-semibold text-[#2a2a2a]">Lead collection</div>
                        <div>Website forms, Instagram, and performance ads.</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[#2a2a2a]">Automation</div>
                        <div>WhatsApp first-response setup enabled.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#e6ddd8] bg-white p-8 shadow-[0_14px_34px_rgba(10,10,10,0.05)]">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#cf5c4a] uppercase">
                Franchise Inquiry
                <span className="inline-block h-2 w-2 rounded-full bg-[#cf5c4a]/70" />
              </div>
              <h3 className="mb-2 text-3xl font-semibold text-[#2a2a2a]" style={{ fontFamily: 'var(--font-editorial)' }}>
                Let's Build Your Store
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#777]">
                Fill in your details and we will contact you with the next steps for your city.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-[#2a2a2a] font-semibold">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[#2a2a2a] font-semibold">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your number"
                      className="w-full rounded-xl border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[#2a2a2a] font-semibold">City</label>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a58f84]" />
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Your city"
                        className="w-full rounded-xl border border-[#dddddd] bg-[#fafafa] py-3 pl-9 pr-4 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[#2a2a2a] font-semibold">Email (Optional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email"
                    className="w-full rounded-xl border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[#2a2a2a] font-semibold">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us your preferred location, expected timeline, and questions..."
                    rows={4}
                    className="w-full resize-none rounded-xl border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#1f1f1f] bg-[#1f1f1f] px-6 py-4 text-sm font-semibold tracking-[0.12em] text-white transition-colors hover:border-[#cf5c4a] hover:bg-[#cf5c4a]"
                >
                  <MessageCircle className="size-5" />
                  Send Inquiry on WhatsApp
                </motion.button>

                <p className="text-xs text-[#777]">
                  Submitting opens WhatsApp with a pre-filled message to {whatsappNumber}.
                </p>
              </form>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-12 rounded-3xl border border-[#e6ddd8] bg-gradient-to-r from-[#fffaf7] via-[#fffdfb] to-[#fff8ef] p-8"
          >
            <p className="text-xs font-semibold tracking-[0.22em] text-[#b56d56]">HOW IT WORKS</p>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
              {setupSteps.map((step, idx) => (
                <div key={step.title} className="rounded-2xl border border-[#f0e3dc] bg-white p-5">
                  <div className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#cf5c4a]">STEP {idx + 1}</div>
                  <h4 className="text-lg font-semibold text-[#222]">{step.title}</h4>
                  <p className="mt-1 text-sm text-[#706760]">{step.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
