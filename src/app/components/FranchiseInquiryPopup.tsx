import { useEffect, useMemo, useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone, X } from 'lucide-react';

type FormState = {
  name: string;
  phone: string;
  city: string;
  email: string;
  message: string;
};

const POPUP_DELAY_MS = 10 * 1000;

export function FranchiseInquiryPopup() {
  const whatsappNumber = '9009003867';

  const initialForm = useMemo<FormState>(
    () => ({
      name: '',
      phone: '',
      city: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormState>(initialForm);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const timeoutId = window.setTimeout(() => setIsVisible(true), POPUP_DELAY_MS);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[80] sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="relative w-[calc(100vw-2rem)] max-w-[390px] overflow-hidden rounded-3xl border border-[#e6ddd8] bg-white shadow-[0_22px_70px_rgba(0,0,0,0.25)]">
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1f1f1f] shadow-sm ring-1 ring-black/10 transition-colors hover:bg-[#f6f6f6]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="max-h-[78vh] overflow-auto p-6 sm:p-7">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#cf5c4a] uppercase">
              Franchise Inquiry
              <span className="inline-block h-2 w-2 rounded-full bg-[#cf5c4a]/70" />
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-[#2a2a2a] sm:text-3xl" style={{ fontFamily: 'var(--font-editorial)' }}>
              Let's Build Your Store
            </h3>
            <p className="mb-8 text-sm text-[#706760]">
              Fill in your details and we will contact you with the next steps for your city.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-[#2a2a2a] font-semibold">Name</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                />
              </div>

              <div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[#2a2a2a] font-semibold">Phone / WhatsApp</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#cf5c4a]" />
                      <input
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your number"
                        className="w-full rounded-xl border border-[#dddddd] bg-[#fafafa] py-3 pl-10 pr-4 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[#2a2a2a] font-semibold">City</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#cf5c4a]" />
                      <input
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Your city"
                        className="w-full rounded-xl border border-[#dddddd] bg-[#fafafa] py-3 pl-10 pr-4 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[#2a2a2a] font-semibold">Email (Optional)</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#cf5c4a]" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email"
                    className="w-full rounded-xl border border-[#dddddd] bg-[#fafafa] py-3 pl-10 pr-4 text-[#2d2d2d] outline-none transition-all placeholder:text-[#9a9a9a] focus-visible:border-[#cf5c4a] focus-visible:ring-[3px] focus-visible:ring-[#cf5c4a33]"
                  />
                </div>
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

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#1f1f1f] bg-[#1f1f1f] px-6 py-4 text-sm font-semibold tracking-[0.12em] text-white transition-colors hover:border-[#cf5c4a] hover:bg-[#cf5c4a]"
              >
                <MessageCircle className="size-5" />
                Send Inquiry on WhatsApp
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#cf5c4a] text-white shadow-[0_18px_34px_rgba(207,92,74,0.38)] transition-transform duration-200 hover:scale-105 hover:bg-[#b94d3d]"
          aria-label="Open franchise inquiry form"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      )}
    </div>
  );
}
