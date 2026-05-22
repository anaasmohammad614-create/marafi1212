import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: '3afwif15',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Homepage query
export const homepageQuery = `*[_type == "homepage"][0]{
  hero {
    badge,
    title,
    subtitle,
    backgroundImage,
    ctaPrimary,
    ctaSecondary
  },
  stats[] {
    value,
    suffix,
    label
  },
  about {
    title,
    mission,
    vision,
    image
  },
  whyChooseUs {
    title,
    subtitle,
    reasons[]
  },
  products[] {
    title,
    description,
    image
  },
  clients[],
  seo {
    title,
    description,
    ogImage
  }
}`;

// All services query
export const allServicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  cardImage,
  icon
}`;

// Single service query
export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  subtitle,
  slug,
  description,
  heroImage,
  cardImage,
  icon,
  categories[] {
    title,
    items[],
    image
  },
  features[]
}`;

// SEO settings query
export const seoQuery = `*[_type == "seoSettings"][0]{
  siteTitle,
  siteDescription,
  ogImage,
  twitterHandle
}`;
