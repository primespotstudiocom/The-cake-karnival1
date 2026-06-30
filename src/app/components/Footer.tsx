import { NavLink } from 'react-router';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#ffeffb] text-[#171217]">
      <div className="mx-auto grid max-w-7xl gap-10 px-8 py-14 text-xs md:grid-cols-[1fr_1fr_1fr] lg:px-16">
        <div>
          <h3 className="mb-3 text-xs font-black">Quick links</h3>
          <ul className="space-y-2 underline underline-offset-2">
            <li><NavLink to="/about">About us</NavLink></li>
            <li><a href="#">Refund policy</a></li>
            <li><a href="#">Terms &amp; conditions</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-black">Support</h3>
          <ul className="space-y-2 underline underline-offset-2">
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/contact">FAQ</NavLink></li>
          </ul>
        </div>

        <div className="md:justify-self-end">
          <h3 className="mb-3 text-xs font-medium">Follow us on:</h3>
          <div className="flex items-center gap-5">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Youtube, label: 'Youtube' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'Twitter' },
            ].map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="text-black transition-colors hover:text-[#a6199a]">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#f4d9ee] px-8 py-8 text-right text-xs lg:px-16">
        <div className="mx-auto max-w-7xl">(c) 2026 The Cake Carnival. All rights reserved.</div>
      </div>
    </footer>
  );
}
