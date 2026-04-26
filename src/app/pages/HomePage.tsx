import { HeroVideo } from '../components/HeroVideo';
import { CategorySection } from '../components/CategorySection';
import { HotSelling } from '../components/HotSelling';
import { Testimonials } from '../components/Testimonials';

export function HomePage() {
  return (
    <>
      <HeroVideo />
      <div className="relative bg-background overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
        {/* No corner glow blobs (keep background clean) */}

        <div className="relative">
          <CategorySection variant="glass" />
          <HotSelling variant="glass" />
          <Testimonials variant="glass" />
        </div>
      </div>
    </>
  );
}
