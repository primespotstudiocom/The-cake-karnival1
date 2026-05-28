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
      className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[linear-gradient(90deg,rgba(250,246,242,0.94)_0%,rgba(254,218,117,0.22)_18%,rgba(250,126,30,0.18)_42%,rgba(186,148,255,0.12)_100%)] backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 sm:py-3">
        <div className="flex items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-x-8 lg:gap-x-12">
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
                className="h-[3.75rem] w-auto object-contain sm:h-[4.5rem] md:h-[5.25rem] lg:h-[6rem]"
              />
            </NavLink>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e4d4ce] bg-white/85 text-foreground shadow-sm transition-colors hover:bg-white md:hidden"
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
          <div className="mt-4 rounded-3xl border border-[#ead8d0] bg-[linear-gradient(135deg,rgba(250,246,242,0.96)_0%,rgba(254,218,117,0.24)_22%,rgba(250,126,30,0.18)_46%,rgba(186,148,255,0.12)_100%)] p-3 shadow-[0_18px_40px_rgba(25,16,10,0.08)] backdrop-blur md:hidden">
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
                      isActive ? 'bg-[#fff7ef] text-[#FA7E1E]' : 'text-foreground/80 hover:bg-[#fffaf4] hover:text-foreground',
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
