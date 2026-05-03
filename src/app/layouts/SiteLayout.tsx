import { Outlet, useLocation } from 'react-router';
import { AnimatedCursor } from '../components/AnimatedCursor';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FranchiseInquiryPopup } from '../components/FranchiseInquiryPopup';

export function SiteLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <AnimatedCursor />
      <Navbar />
      <FranchiseInquiryPopup />
      <main className={isHomePage ? '' : 'pt-16 sm:pt-20 md:pt-24 lg:pt-28'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
