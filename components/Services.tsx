'use client';

import { urlFor } from '@/lib/sanity';
import { FALLBACK_SERVICES } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  _id?: string;
  title: string;
  slug?: { current: string } | string;
  description?: string;
  desc?: string;
  cardImage?: object | string;
  icon?: string;
}

function getSlug(s: ServiceItem): string {
  if (typeof s.slug === 'string') return s.slug;
  if (s.slug?.current) return s.slug.current;
  return '';
}

function getCardImageUrl(s: ServiceItem): string {
  if (s.cardImage && typeof s.cardImage === 'object') {
    try { return urlFor(s.cardImage as object).width(600).height(400).url(); } catch { /* fall through */ }
  }
  if (typeof s.cardImage === 'string') return s.cardImage;
  return '/hero-bg.png';
}

export default function Services({ data }: { data?: ServiceItem[] }) {
  const services: ServiceItem[] = (data && data.length > 0)
    ? data.map((s) => ({
        ...s,
        desc: s.description || s.desc || '',
        cardImage: s.cardImage,
      }))
    : FALLBACK_SERVICES;

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
            Industrial <span className="text-primary">Capabilities</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
          <p className="text-gray-400 text-lg">
            Comprehensive, end-to-end solutions engineered for the demands of the oil & gas and heavy construction sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const slug = getSlug(service);
            const imgUrl = getCardImageUrl(service);
            const desc = service.desc || service.description || '';

            return (
              <Link
                key={service._id || i}
                href={slug ? `/services/${slug}` : '#'}
                className="block h-full"
              >
                <div
                  className="group relative rounded-2xl overflow-hidden h-full cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] min-h-[220px]"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={imgUrl}
                      alt={service.title}
                      fill
                      className="object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60 group-hover:from-background group-hover:via-background/75 group-hover:to-background/40 transition-all duration-500" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 transition-all duration-500" />
                  </div>
                  <div className="relative z-10 p-6 flex flex-col h-full min-h-[220px]">
                    <div className="flex-1 mt-auto pt-12">
                      <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide group-hover:text-primary transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-light">{desc}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-primary font-bold text-xs tracking-widest uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
