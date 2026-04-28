import { NavLink } from 'react-router';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const footerLinks: Array<{ title: string; links: Array<{ label: string; to: string }> }> = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Our Story', to: '/about' },
        { label: 'Careers', to: '/contact' },
      ],
    },
    {
      title: 'Shop',
      links: [
        { label: 'Products', to: '/products' },
        { label: 'Store Locator', to: '/store-locator' },
        { label: 'Franchise', to: '/franchise' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', to: '/contact' },
        { label: 'FAQ', to: '/contact' },
      ],
    },
  ];

  return (
    <footer id="contact" className="border-t border-[#e4e4e4] bg-[#f3f3f3]">
      <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 border border-[#e6e6e6] bg-white p-8 shadow-[0_10px_30px_rgba(10,10,10,0.04)] md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="The Cake Carnival" className="mb-4 h-12 w-auto object-contain" />
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Crafting premium baked goods with traditional methods and the finest ingredients since 2015.
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>123, MG Road, Koregaon Park, Pune, Maharashtra - 411001</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>WhatsApp: 9009003867</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>Support Number: 8793773867</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-all hover:border-primary hover:bg-muted"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-semibold text-foreground">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <NavLink to={link.to} className="text-muted-foreground transition-colors hover:text-primary">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 h-px bg-[#dcdcdc]" />

        <div className="flex flex-col items-center justify-between gap-6 text-[#7a7a7a] md:flex-row">
          <div className="text-center md:text-left">
            <p>(c) 2026 The Cake Carnival. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-[#cf5c4a]">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-[#cf5c4a]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
