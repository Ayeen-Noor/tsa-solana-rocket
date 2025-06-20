
import { Button } from '@/components/ui/button';
import { Circle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-gradient pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 space-pattern opacity-20"></div>
      
      {/* Floating stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            <Circle className="w-2 h-2 text-tsa-gold fill-current" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8 animate-scale-bounce">
          <img 
            src="/lovable-uploads/1f4ce6ce-75bc-4962-8ffa-2b81e5c3b0b0.png" 
            alt="TSA Logo" 
            className="h-32 w-auto mx-auto animate-pulse-glow"
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-tsa-gradient bg-clip-text text-transparent leading-tight">
          Why Settle for 0.1%<br />
          When You Can Have<br />
          <span className="text-6xl md:text-8xl animate-pulse">INFINITE GAINS?</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          <span className="text-tsa-gold font-bold">$TSA</span> - The Traditional Solana Account That Actually Works
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-tsa-gradient hover:scale-110 transition-all duration-300 text-black font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-tsa-orange/50"
          >
            🚀 Join the Revolution
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-tsa-gold text-tsa-gold hover:bg-tsa-gold hover:text-black transition-all duration-300 text-lg px-8 py-4 rounded-full"
          >
            📊 View Chart
          </Button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-tsa-gold/20">
            <div className="text-3xl font-bold text-tsa-gold mb-2">🏦 0.1%</div>
            <div className="text-white">Traditional Banks</div>
            <div className="text-sm text-white/60">Where money goes to die</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-tsa-gold/20">
            <div className="text-3xl font-bold text-tsa-gold mb-2">⚡ Instant</div>
            <div className="text-white">Solana Speed</div>
            <div className="text-sm text-white/60">No waiting periods</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 border border-tsa-gold/20">
            <div className="text-3xl font-bold text-tsa-gold mb-2">🚀 ∞%</div>
            <div className="text-white">$TSA Potential</div>
            <div className="text-sm text-white/60">To the moon!</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tsa-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tsa-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
