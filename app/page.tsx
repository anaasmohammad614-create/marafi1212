import { client, homepageQuery, allServicesQuery } from '@/lib/sanity';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import Clients from '@/components/Clients';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';

async function getHomepageData() {
  try {
    return await client.fetch(homepageQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

async function getServicesData() {
  try {
    return await client.fetch(allServicesQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const [homepage, services] = await Promise.all([
    getHomepageData(),
    getServicesData(),
  ]);

  return (
    <main>
      <Navbar />
      <Hero data={homepage?.hero} />
      <About data={homepage?.about} stats={homepage?.stats} />
      <Services data={services} />
      <Products data={homepage?.products} />
      <WhyChooseUs data={homepage?.whyChooseUs} />
      <Clients clients={homepage?.clients} />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
