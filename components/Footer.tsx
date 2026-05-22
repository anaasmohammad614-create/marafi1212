import Link from 'next/link';
import Image from 'next/image';

const services = [
  { label: 'Equipment Rental', slug: 'equipment-rental' },
  { label: 'Manpower Supply', slug: 'manpower-supply' },
  { label: 'Asphalt Works', slug: 'asphalt-works' },
  { label: 'Scaffolding Services', slug: 'scaffolding-services' },
  { label: 'Material Trading', slug: 'material-trading' },
  { label: 'Fencing Works', slug: 'fencing-works' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-primary/30">
                <Image src="/marafi-logo.jpeg" alt="MARAFI Logo" fill className="object-cover" />
              </div>
              <div>
                <div className="text-lg font-black tracking-widest text-white uppercase">MARAFI</div>
                <div className="text-xs text-primary/80 tracking-[0.2em] uppercase">Al Omran Contracting Est</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              A premier industrial contracting and material supply company based in Jubail Industrial City, Saudi Arabia. Proud Approved Aramco Vendor.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/966535444030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold tracking-widest uppercase px-4 py-2.5 rounded-full hover:bg-green-500/20 transition-all"
              >
                WhatsApp
              </a>
              <a
                href="mailto:info@marafiksa.com"
                className="flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2.5 rounded-full hover:bg-primary/20 transition-all"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/#about', label: 'About Us' },
                { href: '/#services', label: 'Services' },
                { href: '/#products', label: 'Products' },
                { href: '/#clients', label: 'Clients' },
                { href: '/#contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} MARAFI Al Omran Contracting Est. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Jubail Industrial City, Saudi Arabia | CR No. Registered in KSA
          </p>
        </div>
      </div>
    </footer>
  );
}
