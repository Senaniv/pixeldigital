import HeroSection from '@/components/home/HeroSection';
import AdvantagesSection from '@/components/home/AdvantagesSection';
import ServicesSection from '@/components/home/ServicesSection';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import AboutSummary from '@/components/home/AboutSummary';
import ContactCTA from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <ServicesSection />
      <PortfolioPreview />
      <HowWeWorkSection />
      <AboutSummary />
      <ContactCTA />
    </>
  );
}
