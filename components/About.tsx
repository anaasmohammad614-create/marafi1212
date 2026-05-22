'use client';

import { urlFor } from '@/lib/sanity';
import { FALLBACK_STATS } from '@/lib/data';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Target, Zap } from 'lucide-react';

interface StatItem { value: number; suffix: string; label: string; }
interface AboutData {
  title?: string;
  mission?: string;
  vision?: string;
  image?: object;
}

function StatCounter({ value, suffix, label }: StatItem) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(value / 60));
    const interval = setInterval(() => {
      current = Math.min(current + step, value);
      setCount(current);
      if (current >= value) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [started, value]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 border border-white/5 bg-white/5 backdrop-blur-sm rounded-xl">
      <div className="text-4xl md:text-5xl font-black text-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.5)] mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider text-center">{label}</div>
    </div>
  );
}

export default function About({ data, stats }: { data?: AboutData; stats?: StatItem[] }) {
  const mission = data?.mission || 'To deliver unparalleled industrial contracting and material supply solutions that empower Saudi Arabia\'s critical infrastructure. We are committed to uncompromising safety, extreme efficiency, and exceeding client expectations on every project.';
  const vision = data?.vision || 'To be the sovereign standard of industrial excellence in the Middle East. As an Approved Aramco Vendor, we aim to continually elevate the benchmarks for quality, reliability, and technological integration in the contracting sector.';
  const aboutImageUrl = data?.image ? urlFor(data.image).width(800).height(700).url() : '/about-bg.png';
  const statItems = (stats && stats.length > 0) ? stats : FALLBACK_STATS;

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {statItems.map((stat, i) => (
            <StatCounter key={i} {...stat} />
          ))}
        </div>

        {/* About content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-8 uppercase">
              Industrial <span className="text-primary">Prowess</span>
            </h2>
            <div className="h-1 w-16 bg-primary mb-10 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />

            <div className="space-y-6">
              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                <Target className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">{mission}</p>
              </div>

              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                <Zap className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">{vision}</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay" />
            <Image src={aboutImageUrl} alt="Industrial Prowess" fill className="object-cover" />
            <div className="absolute bottom-8 left-8 z-20 p-6 bg-background/90 backdrop-blur-xl border border-white/10 rounded-xl max-w-xs">
              <div className="text-3xl font-black text-primary mb-2 tracking-tighter">ARAMCO</div>
              <div className="text-sm text-gray-300 uppercase tracking-widest font-bold">Approved Vendor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
