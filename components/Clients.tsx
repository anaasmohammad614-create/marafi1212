'use client';

import { FALLBACK_CLIENTS } from '@/lib/data';

export default function Clients({ clients }: { clients?: string[] }) {
  const clientList = (clients && clients.length > 0) ? clients : FALLBACK_CLIENTS;
  const doubled = [...clientList, ...clientList];

  return (
    <section id="clients" className="py-20 bg-background overflow-hidden relative border-t border-white/5">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-sm text-primary font-bold tracking-[0.3em] uppercase">
          Trusted By Industry Leaders
        </h2>
      </div>

      <div className="relative w-full flex items-center h-24 bg-card/50 border-y border-white/5 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex whitespace-nowrap gap-16 md:gap-24 px-8 items-center">
          {doubled.map((client, i) => (
            <span
              key={i}
              className="text-gray-500 hover:text-primary transition-colors font-bold uppercase tracking-wider text-sm flex-shrink-0"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
