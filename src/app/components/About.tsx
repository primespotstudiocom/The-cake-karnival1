import { motion } from 'motion/react';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

interface VideoCardProps {
  id: string;
  title: string;
}

function VideoCard({ id, title }: VideoCardProps) {
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);
  const [open, setOpen] = useState(false);

  const handleImgError = () => {
    setImgSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`);
  };

  return (
    <div className="group flex flex-col">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="relative w-full overflow-hidden rounded-2xl border border-[#ebdce6] bg-white/70 pt-[56.25%] shadow-[0_8px_20px_rgba(25,16,10,0.04)] ring-1 ring-black/5 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cf2aa6]">
            <img
              src={imgSrc}
              alt={title}
              onError={handleImgError}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/35 flex items-center justify-center">
              {/* Play Button Overlay */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#96028b] shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#cf2aa6] group-hover:text-white">
                <Play className="h-6 w-6 fill-current ml-0.5" />
              </div>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-black aspect-video border-none shadow-2xl rounded-2xl max-w-[calc(100%-2rem)]">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <DialogDescription className="sr-only">
            Watch {title} on YouTube
          </DialogDescription>
          {open && (
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          )}
        </DialogContent>
      </Dialog>
      <h3 className="mt-4 text-base font-semibold leading-snug text-[#1f1f1f] group-hover:text-[#cf2aa6] transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
}

export function About() {
  const youtubeVideos = [
    {
      id: 'pMlSK0K8SWA',
      title: 'How to Start a Cake Business | Cake Carnival Franchise Podcast | Wakad',
    },
    {
      id: '8hBye4svme8',
      title: 'Cake Business Success Story | Ravet & Punawle',
    },
    {
      id: 'fuEcgmkNWIA',
      title: 'The Cake Carnival Franchise Success Story | Owner Podcast | Bhosari',
    },
  ];

  return (
    <section id="about" className="instagram-section pb-24 pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Brand Story Section */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* Left Column: Text & Cards */}
          <motion.div
            className="self-start"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="mb-6 text-5xl font-bold text-[#1f1f1f]"
              style={{ fontFamily: 'var(--font-editorial)' }}
            >
              Brand Story
            </h1>

            <div className="space-y-6 leading-relaxed text-[#3f3a36]">
              <div>
                <div className="mb-3 text-xs font-bold tracking-[0.18em] text-[#96028b] uppercase">
                  HOW STARTED
                </div>
                <p className="mb-4">
                  Cake Carnival started with a simple dream—serving delicious, freshly made cakes from
                  a home kitchen. As more people fell in love with the taste, the demand kept growing,
                  turning a small homemade venture into a trusted cake brand. Today, Cake Carnival has
                  expanded to 30+ franchise outlets across Pune, serving happiness to thousands of
                  customers every day.
                </p>
                <p>
                  As a proudly Marathi-founded brand, we are committed to helping new entrepreneurs
                  start their own business through our proven franchise model. With complete support,
                  training, and a strong brand presence, we make entrepreneurship easier for aspiring
                  business owners. From home-made cakes to 30+ successful outlets—our journey is
                  proof that great taste and big dreams can create something extraordinary. Join the
                  Cake Carnival family and grow with us.
                </p>
              </div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#ebd2e6]/60 bg-gradient-to-br from-[#fff2fc] to-[#fde5f7] p-6 shadow-[0_4px_12px_rgba(150,2,139,0.02)]">
                  <div className="mb-2 text-xs font-bold tracking-[0.18em] text-[#96028b] uppercase">
                    FOUNDER / CEO
                  </div>
                  <div className="font-semibold text-[#2a2a2a] text-[1.05rem]">
                    Ajay Takawale & Madhura Takawale
                  </div>
                </div>
                <div className="rounded-2xl border border-[#ebd2e6]/60 bg-gradient-to-br from-[#fff2fc] to-[#fde5f7] p-6 shadow-[0_4px_12px_rgba(150,2,139,0.02)]">
                  <div className="mb-2 text-xs font-bold tracking-[0.18em] text-[#96028b] uppercase">
                    OUTLETS
                  </div>
                  <div className="font-semibold text-[#2a2a2a] text-[1.05rem]">
                    30+ Franchise Stores in Pune
                  </div>
                </div>
              </div>

              {/* Vision Card (Full Width in Grid Column) */}
              <div className="rounded-2xl border border-[#ebd2e6]/80 bg-gradient-to-r from-[#fff0fb] via-[#fcd7f5] to-[#f7acf0] p-6 shadow-[0_4px_16px_rgba(150,2,139,0.04)]">
                <div className="mb-2 text-xs font-bold tracking-[0.18em] text-[#96028b] uppercase">
                  VISION
                </div>
                <div className="font-semibold text-[#2a2a2a] text-[1.05rem]">
                  Bringing Happiness to Every Celebration with Freshly Baked Perfection.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Photo */}
          <motion.div
            className="self-center lg:self-start lg:ml-auto w-full max-w-[480px] lg:max-w-none"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full overflow-hidden rounded-[2.25rem] border border-[#cf2aa6]/25 bg-white p-2.5 shadow-[0_20px_40px_rgba(150,2,139,0.06)]">
              <div className="overflow-hidden rounded-[1.75rem]">
                <ImageWithFallback
                  src="/ceo.jpeg"
                  alt="Ajay Takawale & Madhura Takawale - Founders of The Cake Carnival"
                  className="aspect-[3/4] h-auto w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Youtube Channel Section */}
        <div className="mt-20 lg:mt-24">
          <h2
            className="mb-8 text-4xl font-bold text-[#1f1f1f] sm:text-5xl"
            style={{ fontFamily: 'var(--font-editorial)' }}
          >
            Youtube Channel
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.map((video) => (
              <VideoCard key={video.id} id={video.id} title={video.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
