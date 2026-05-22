'use client';

import { urlFor } from '@/lib/sanity';
import { FALLBACK_PRODUCTS } from '@/lib/data';
import Image from 'next/image';

interface ProductItem {
  title: string;
  description: string;
  image?: object;
  imagePath?: string;
}

export default function Products({ data }: { data?: ProductItem[] }) {
  const products: (ProductItem & { imgUrl: string })[] = ((data && data.length > 0) ? data : FALLBACK_PRODUCTS).map((p) => ({
    ...p,
    imgUrl: p.image
      ? urlFor(p.image as object).width(600).height(700).url()
      : p.imagePath || '/product-gaskets.png',
  }));

  return (
    <section id="products" className="py-24 md:py-32 bg-background border-t border-b border-white/5 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
            Premium <span className="text-primary">Materials</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <Image
                  src={product.imgUrl}
                  alt={product.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-1 bg-primary mb-4 shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                  <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">{product.title}</h3>
                  <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
