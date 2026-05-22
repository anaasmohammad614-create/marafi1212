'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const SERVICES = [
  'Equipment Rental', 'Manpower Supply', 'Asphalt Works', 'Scaffolding Services',
  'Material Trading', 'Fencing Works', 'Portacabin Services', 'Transportation & Logistics',
  'Industrial Gaskets', 'Hydraulic Fittings', 'Mechanical Fittings', 'Tools & Hardware',
  'Safety PPE', 'Electrical Materials', 'Tires & Lubricants', 'Other',
];

export default function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
            Request a <span className="text-primary">Quote</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
          <p className="text-gray-400 text-lg">
            Submit your project requirements and our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-xl">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wide text-sm mb-1">Head Office</h4>
                <p className="text-gray-400 text-sm">
                  Jubail Industrial City, Saudi Arabia<br />
                  Branches: Jubail | Riyadh | Jizan
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-xl">
              <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wide text-sm mb-1">Direct Lines</h4>
                <p className="text-gray-400 text-sm">
                  +966 53 544 4030<br />
                  +966 53 937 6178<br />
                  +966 53 726 3871
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-xl">
              <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wide text-sm mb-1">Electronic Mail</h4>
                <p className="text-gray-400 text-sm">info@marafiksa.com</p>
              </div>
            </div>
            <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113941.87229712716!2d49.52981971775193!3d27.021021481268393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e3505b223abef0d%3A0xcb1b6d14ea17d3d7!2sJubail%20Industrial%20City%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-background border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name *</label>
                  <input
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Company</label>
                  <input
                    type="text" name="company" value={formData.company} onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email *</label>
                  <input
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="+966 XXX XXX XXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Service Required</label>
                <select
                  name="service" value={formData.service} onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all text-sm appearance-none"
                >
                  <option value="" className="bg-background">Select a Service</option>
                  {SERVICES.map((s) => <option key={s} value={s} className="bg-background">{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Project Details *</label>
                <textarea
                  name="message" required rows={5} value={formData.message} onChange={handleChange}
                  placeholder="Describe your project requirements, timeline, and any specific needs..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all resize-none text-sm"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Message sent successfully! We will respond within 24 hours.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Failed to send. Please email us directly at info@marafiksa.com</span>
                </div>
              )}

              <button
                type="submit" disabled={status === 'sending'}
                className="w-full bg-primary text-background font-black px-8 py-4 rounded-xl uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Enquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
