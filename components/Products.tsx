'use client';

import { urlFor } from '@/lib/sanity';
import { FALLBACK_PRODUCTS } from '@/lib/data';
import Image from 'next/image';

export default function Products({ data }: { data?: any[] }) {
  const products = ((data && data.length > 0) ? data : FALLBACK_PRODUCTS).map((p: any) => ({
    ...p,
    imgUrl: p.image
      ? urlFor(p.image).width(600).height(700).url()
      : p.imagePath || '/product-gaskets.png',
  }));

  return (
    <section id="products" className="py-24 md:py-32 bg-background border-t border-b border-white/5 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
            Premium <span className="text-primary">Materials</span>
          </h2>

          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product: any, i: number) => (
            <div key={i}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={product.imgUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {product.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
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
