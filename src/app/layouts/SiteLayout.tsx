import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function SiteLayout() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
