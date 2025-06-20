
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: "💧",
      title: "Unmatched Liquidity",
      description: "Trade instantly, no waiting periods. Your money moves at the speed of light, not the speed of bureaucracy.",
      highlight: "Instant Results"
    },
    {
      icon: "📈", 
      title: "Robust Returns",
      description: "Higher-than-average performance that makes traditional interest rates look like pocket change.",
      highlight: "Maximum Gains"
    },
    {
      icon: "⚡",
      title: "Solana-Powered",
      description: "Built on the fastest, cheapest, and most scalable blockchain. Because waiting is for traditional banking.",
      highlight: "Lightning Fast"
    },
    {
      icon: "🎯",
      title: "Portfolio Flexibility", 
      description: "Diversified yield streams and multiple earning opportunities. Not just one boring savings rate.",
      highlight: "Multi-Stream Income"
    },
    {
      icon: "🔮",
      title: "Forward-Thinking",
      description: "Blockchain innovation over legacy systems. Welcome to the future of finance.",
      highlight: "Next-Gen Tech"
    },
    {
      icon: "🛡️",
      title: "Community Secure",
      description: "Decentralized, transparent, and community-driven. No mysterious bank fees or hidden surprises.",
      highlight: "Fully Transparent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-tsa-cosmic-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 space-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-tsa-gradient bg-clip-text text-transparent">
            Meet $TSA: Your Money's New Best Friend
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Finally, a financial solution that doesn't hate your money. Here's why $TSA actually works:
          </p>
          
          {/* Banner image */}
          <div className="mb-12 animate-float">
            <img 
              src="/lovable-uploads/34446c85-5b36-419a-a25f-0a4bd2354878.png" 
              alt="TSA Traditional Solana Account Banner" 
              className="max-w-4xl w-full mx-auto rounded-2xl shadow-2xl border border-tsa-gold/30"
            />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-black/40 backdrop-blur-md border-tsa-gold/30 hover:border-tsa-gold transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <div className="text-sm font-semibold text-tsa-gold mb-4 uppercase tracking-wider">
                  {feature.highlight}
                </div>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-tsa-gradient/20 backdrop-blur-md rounded-lg p-6 border border-tsa-gold/30">
            <div className="text-3xl font-bold text-tsa-gold mb-2">< 1s</div>
            <div className="text-white">Transaction Speed</div>
          </div>
          <div className="bg-tsa-gradient/20 backdrop-blur-md rounded-lg p-6 border border-tsa-gold/30">
            <div className="text-3xl font-bold text-tsa-gold mb-2">$0.001</div>
            <div className="text-white">Average Fee</div>
          </div>
          <div className="bg-tsa-gradient/20 backdrop-blur-md rounded-lg p-6 border border-tsa-gold/30">
            <div className="text-3xl font-bold text-tsa-gold mb-2">24/7</div>
            <div className="text-white">Always Active</div>
          </div>
          <div className="bg-tsa-gradient/20 backdrop-blur-md rounded-lg p-6 border border-tsa-gold/30">
            <div className="text-3xl font-bold text-tsa-gold mb-2">∞</div>
            <div className="text-white">Moon Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
