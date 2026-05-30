import { motion } from 'motion/react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Franchise', to: '/franchise' },
    { label: 'Products', to: '/products' },
    { label: 'Store Locator', to: '/store-locator' },
    { label: 'Contact', to: '/contact' },
  ];

  const leftItems = menuItems.slice(0, 3);
  const rightItems = menuItems.slice(3);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[linear-gradient(90deg,rgba(250,246,242,0.98)_0%,rgba(233,213,255,0.42)_42%,rgba(150,2,139,0.16)_100%)] backdrop-blur-md"
    >
      <div className="mx-auto h-16 max-w-7xl px-4 sm:h-20 sm:px-6 lg:h-24">
        <div className="flex h-full items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-x-8 lg:gap-x-12">
          {/* Left Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 justify-end">
            {leftItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'relative px-1 py-1 text-sm font-semibold tracking-[0.2em] uppercase transition-colors',
                    'text-foreground/80 hover:text-foreground',
                    'after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:bg-foreground/50 after:origin-left after:scale-x-0 after:transition-transform after:duration-200',
                    'hover:after:scale-x-100',
                    isActive ? 'text-foreground after:scale-x-100' : '',
                  ].join(' ')
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Center Brand */}
          <div className="flex items-center justify-center md:justify-center">
            <NavLink to="/" className="inline-flex">
              <img
                src="/logo.png"
                alt="The Cake Carnival"
                className="h-12 w-auto object-contain sm:h-16 lg:h-20"
              />
            </NavLink>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e4d4ce] bg-white text-foreground shadow-sm transition-colors hover:bg-[#fff7ef] md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Right Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 justify-start">
            {rightItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'relative px-1 py-1 text-sm font-semibold tracking-[0.2em] uppercase transition-colors',
                    'text-foreground/80 hover:text-foreground',
                    'after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:bg-foreground/50 after:origin-left after:scale-x-0 after:transition-transform after:duration-200',
                    'hover:after:scale-x-100',
                    isActive ? 'text-foreground after:scale-x-100' : '',
                  ].join(' ')
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div className="absolute left-4 right-4 top-full mt-3 rounded-3xl border border-[#e5d2e4] bg-[#fffaf7] p-3 shadow-[0_22px_60px_rgba(35,18,34,0.18)] ring-1 ring-white md:hidden">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'rounded-2xl px-4 py-3 text-sm font-semibold tracking-[0.12em] uppercase transition-colors',
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
