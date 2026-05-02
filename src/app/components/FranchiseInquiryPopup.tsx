import { useEffect, useMemo, useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone, X } from 'lucide-react';

type FormState = {
  name: string;
  phone: string;
  city: string;
  email: string;
  message: string;
};

const STORAGE_CLOSE_COUNT = 'tcc_franchise_popup_close_count';
const STORAGE_NEXT_SHOW_AT = 'tcc_franchise_popup_next_show_at';
const TWO_MINUTES_MS = 2 * 60 * 1000;
const POPUP_DELAY_MS = 30 * 1000;

function getNumberFromStorage(key: string) {
  const raw = window.localStorage.getItem(key);
  if (!raw) return null;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
}

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
  const [formData, setFormData] = useState<FormState>(initialForm);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const closeCount = getNumberFromStorage(STORAGE_CLOSE_COUNT) ?? 0;
    if (closeCount >= 2) return;

    const nextShowAt = getNumberFromStorage(STORAGE_NEXT_SHOW_AT) ?? 0;
    if (Date.now() < nextShowAt) return;

    const timeoutId = window.setTimeout(() => setIsOpen(true), POPUP_DELAY_MS);
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

  const scheduleNextOrDisable = () => {
    const closeCount = (getNumberFromStorage(STORAGE_CLOSE_COUNT) ?? 0) + 1;
    window.localStorage.setItem(STORAGE_CLOSE_COUNT, String(closeCount));

    if (closeCount >= 2) {
      window.localStorage.setItem(STORAGE_NEXT_SHOW_AT, String(Number.MAX_SAFE_INTEGER));
      return;
    }

    window.localStorage.setItem(STORAGE_NEXT_SHOW_AT, String(Date.now() + TWO_MINUTES_MS));
  };

  const handleClose = () => {
    scheduleNextOrDisable();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[#e6ddd8] bg-white shadow-[0_22px_70px_rgba(0,0,0,0.25)]">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1f1f1f] shadow-sm ring-1 ring-black/10 transition-colors hover:bg-[#f6f6f6]"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="max-h-[85vh] overflow-auto p-8">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#cf5c4a] uppercase">
            Franchise Inquiry
            <span className="inline-block h-2 w-2 rounded-full bg-[#cf5c4a]/70" />
          </div>
          <h3 className="mb-2 text-3xl font-semibold text-[#2a2a2a]" style={{ fontFamily: 'var(--font-editorial)' }}>
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
    </div>
  );
}
