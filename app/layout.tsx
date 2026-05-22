import type { Metadata } from 'next';
import './globals.css';
import { client, seoQuery } from '@/lib/sanity';

async function getSeoSettings() {
  try {
    return await client.fetch(seoQuery, {}, { next: { revalidate: 3600 } });
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoSettings();

  return {
    title: seo?.siteTitle || 'MARAFI Al Omran - Industrial Contracting & Material Solutions',
    description: seo?.siteDescription || 'MARAFI Al Omran Contracting Est is a trusted industrial contracting and material supply company based in Saudi Arabia. Approved Aramco Vendor.',
    robots: 'index, follow',
    openGraph: {
      title: seo?.siteTitle || 'MARAFI Al Omran - Industrial Solutions',
      description: seo?.siteDescription || 'Approved Aramco Vendor | Industrial Contracting & Material Solutions in Saudi Arabia.',
      type: 'website',
      images: seo?.ogImage ? [{ url: seo.ogImage }] : [{ url: '/opengraph.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.siteTitle || 'MARAFI Al Omran',
      description: seo?.siteDescription || 'Approved Aramco Vendor | Industrial Contracting & Material Solutions in Saudi Arabia.',
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
