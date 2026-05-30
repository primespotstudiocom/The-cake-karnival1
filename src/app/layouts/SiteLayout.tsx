import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FranchiseInquiryPopup } from '../components/FranchiseInquiryPopup';

export function SiteLayout() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <FranchiseInquiryPopup />
      <main className="pt-16 sm:pt-20 lg:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
