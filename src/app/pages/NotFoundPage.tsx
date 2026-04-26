import { NavLink } from 'react-router';
import { motion } from 'motion/react';

export function NotFoundPage() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Page not found
        </motion.h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you’re looking for doesn’t exist.
        </p>
        <NavLink
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
        >
          Go to Home
        </NavLink>
      </div>
    </section>
  );
}
