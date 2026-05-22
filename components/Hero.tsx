'use client';

import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

interface HeroData {
  badge?: string;
  title?: string;
  subtitle?: string;
  backgroundImage?: object;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export default function Hero({ data }: { data?: HeroData }) {
  const badge = data?.badge || 'Approved Aramco Vendor';
  const title = data?.title || 'INDUSTRIAL SOLUTIONS';
  const subtitle = data?.subtitle || 'MARAFI Al Omran Contracting Est is a trusted industrial contracting and material supply company based in Saudi Arabia. We specialize in comprehensive construction solutions, manpower supply, equipment rental, scaffolding, asphalt works, and oil & gas support services.';
  const bgImage = data?.backgroundImage ? urlFor(data.backgroundImage).width(1920).height(1080).url() : '/hero-bg.png';
  const ctaPrimary = data?.ctaPrimary || 'Request Quote';
  const ctaSecondary = data?.ctaSecondary || 'Our Services';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Industrial Refinery at Night"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
      </div>

      {/* Particle dots */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 text-center max-w-6xl">
        <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
          <span className="text-primary text-xs md:text-sm font-bold tracking-widest uppercase">{badge}</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 drop-shadow-2xl uppercase">
          {title.includes('\n') ? (
            title.split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-600">{line}</span>
                ) : line}
                {i < title.split('\n').length - 1 && <br />}
              </span>
            ))
          ) : (
            <>
              INDUSTRIAL<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-600">
                {title.replace('INDUSTRIAL', '').trim() || 'SOLUTIONS'}
              </span>
            </>
          )}
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="bg-primary text-background font-black px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.7)] h-14 flex items-center justify-center"
          >
            {ctaPrimary}
          </Link>
          <button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 text-white font-bold px-8 py-4 rounded-full uppercase tracking-widest text-sm h-14 flex items-center justify-center transition-all"
          >
            {ctaSecondary}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
}
