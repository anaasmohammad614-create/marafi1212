'use client';

import { FALLBACK_WHY_REASONS } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

interface WhyChooseUsData {
  title?: string;
  subtitle?: string;
  reasons?: string[];
}

export default function WhyChooseUs({ data }: { data?: WhyChooseUsData }) {
  const title = data?.title || 'The Vendor of Choice';
  const subtitle = data?.subtitle || "When massive infrastructure projects are on the line, there is no margin for error. MARAFI is the trusted partner for Saudi Arabia's industrial titans because we deliver with military precision.";
  const reasons = (data?.reasons && data.reasons.length > 0) ? data.reasons : FALLBACK_WHY_REASONS;

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-card relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Why MARAFI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
              {title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                {title.split(' ').slice(-1)[0]}
              </span>
            </h2>
            <div className="h-1 w-16 bg-primary mb-8 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">{subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 border border-white/5 bg-white/5 backdrop-blur-sm rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '01', title: 'Proven Track Record', desc: 'Decades of successful project delivery across Saudi Arabia.' },
                { number: '02', title: 'Aramco Certified', desc: 'Approved vendor status with Saudi Aramco.' },
                { number: '03', title: 'Full-Service Partner', desc: 'End-to-end contracting, supply, and logistics.' },
                { number: '04', title: 'Safety First', desc: 'Zero-compromise approach to HSE standards.' },
              ].map((card, i) => (
                <div key={i} className="p-6 border border-white/10 bg-background/50 backdrop-blur-sm rounded-2xl hover:border-primary/30 transition-all group">
                  <div className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors mb-3">
                    {card.number}
                  </div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">{card.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
