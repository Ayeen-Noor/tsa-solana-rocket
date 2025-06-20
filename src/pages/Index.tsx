
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BankingRoastSection from '@/components/BankingRoastSection';
import FeaturesSection from '@/components/FeaturesSection';
import SavingsCalculator from '@/components/SavingsCalculator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <BankingRoastSection />
      <FeaturesSection />
      <SavingsCalculator />
      <Footer />
    </div>
  );
};

export default Index;
