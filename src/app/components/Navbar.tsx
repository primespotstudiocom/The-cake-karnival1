import { motion } from 'motion/react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Store Locator', to: '/store-locator' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#f3d9ed] bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto h-16 max-w-7xl px-4 sm:px-6 lg:h-[86px]">
        <div className="flex h-full items-center justify-between gap-4">
          <div className="flex items-center justify-center">
            <NavLink to="/" className="inline-flex">
              <img
                src="/logo.png"
                alt="The Cake Carnival"
                className="h-11 w-auto object-contain sm:h-14 lg:h-16"
              />
            </NavLink>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#e4d4ce] bg-white text-foreground shadow-sm transition-colors hover:bg-[#fff7ef] md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden items-center gap-5 md:flex lg:gap-9">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'rounded-sm px-4 py-2 text-xs font-black uppercase text-[#9c2f92] transition-colors',
                    isActive ? 'bg-[#cf2aa6] text-white shadow-sm' : 'bg-[#fff0fb] hover:bg-[#f7d4f0]',
                  ].join(' ')
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div className="absolute left-4 right-4 top-full mt-3 rounded-lg border border-[#e5d2e4] bg-[#fffaf7] p-3 shadow-[0_22px_60px_rgba(35,18,34,0.18)] ring-1 ring-white md:hidden">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-md px-4 py-3 text-sm font-semibold tracking-[0.12em] uppercase transition-colors',
                      isActive ? 'bg-[#f3e3f1] text-[#96028b]' : 'text-[#3f3b37] hover:bg-[#f8edf6] hover:text-[#96028b]',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </motion.nav>
  );
}
