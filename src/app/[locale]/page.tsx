import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import AdvantagesSection from '@/components/home/AdvantagesSection';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import AboutSummary from '@/components/home/AboutSummary';
import ContactCTA from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioPreview />
      <AdvantagesSection />
      <HowWeWorkSection />
      <AboutSummary />
      <ContactCTA />
    </>
  );
}
