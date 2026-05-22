import { client, serviceBySlugQuery, allServicesQuery } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';
import { FALLBACK_SERVICES_DETAIL, FALLBACK_SERVICES } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

async function getService(slug: string) {
  try {
    return await client.fetch(serviceBySlugQuery, { slug }, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

async function getAllServiceSlugs() {
  try {
    const services = await client.fetch(allServicesQuery, {}, { next: { revalidate: 3600 } });
    return services?.map((s: { slug: { current: string } }) => ({ slug: s.slug?.current })) || [];
  } catch {
    return FALLBACK_SERVICES.map((s) => ({ slug: s.slug }));
  }
}

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sanityService = await getService(params.slug);
  const fallback = FALLBACK_SERVICES_DETAIL[params.slug];
  const title = sanityService?.title || fallback?.title || params.slug;
  const description = sanityService?.subtitle || fallback?.subtitle || '';

  return {
    title: `${title} | MARAFI Al Omran`,
    description,
    openGraph: { title: `${title} | MARAFI Al Omran`, description },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const sanityService = await getService(params.slug);
  const fallback = FALLBACK_SERVICES_DETAIL[params.slug];

  const service = sanityService
    ? {
        title: sanityService.title,
        subtitle: sanityService.subtitle,
        description: sanityService.description,
        heroImageUrl: sanityService.heroImage
          ? urlFor(sanityService.heroImage).width(1200).height(600).url()
          : fallback?.heroImage || '/hero-bg.png',
        categories: sanityService.categories?.map((c: { title: string; items: string[]; image?: object }) => ({
          title: c.title,
          items: c.items || [],
          imageUrl: c.image ? urlFor(c.image).width(600).height(400).url() : null,
        })) || [],
        features: sanityService.features || [],
      }
    : fallback
    ? {
        title: fallback.title,
        subtitle: fallback.subtitle,
        description: fallback.description,
        heroImageUrl: fallback.heroImage,
        categories: fallback.categories.map((c) => ({ ...c, imageUrl: null })),
        features: fallback.features,
      }
    : null;

  if (!service) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-white mb-4">Service Not Found</h1>
            <Link href="/" className="text-primary hover:underline">Return Home</Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImageUrl}
            alt={service.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40 z-10" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-6 hover:gap-3 transition-all"
          >
            ← Back to Services
          </Link>
          <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Industrial Service</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase mb-4">
            {service.title}
          </h1>
          {service.subtitle && (
            <p className="text-xl text-gray-300 font-light max-w-2xl">{service.subtitle}</p>
          )}
        </div>
      </section>

      {/* Description */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-6">
                Service <span className="text-primary">Overview</span>
              </h2>
              <div className="h-1 w-16 bg-primary mb-8 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
              <div className="text-gray-400 leading-relaxed space-y-4">
                {service.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            {service.features.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-black text-white uppercase tracking-wide mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_6px_rgba(0,212,255,0.8)]" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      {service.categories.length > 0 && (
        <section className="py-16 bg-card border-t border-white/5">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
              Service <span className="text-primary">Categories</span>
            </h2>
            <div className="h-1 w-16 bg-primary mb-12 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.categories.map((cat: { title: string; items: string[]; imageUrl: string | null }, i: number) => (
                <div key={i} className="bg-background border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300">
                  {cat.imageUrl && (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={cat.imageUrl}
                        alt={cat.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="w-8 h-0.5 bg-primary mb-4 shadow-[0_0_6px_rgba(0,212,255,0.8)]" />
                    <h3 className="text-base font-bold text-white uppercase tracking-wide mb-4">{cat.title}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((item: string, j: number) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="text-primary text-xs">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">
            Ready to get <span className="text-primary">started?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact our team today for a detailed quote and consultation on your project requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-background font-bold px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
