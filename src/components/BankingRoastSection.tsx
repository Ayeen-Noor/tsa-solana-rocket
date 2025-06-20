
import { Button } from '@/components/ui/button';

const BankingRoastSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-tsa-cosmic to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 space-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-tsa-gradient bg-clip-text text-transparent">
            Traditional Banks: Where Your Money Goes to Die
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Seriously, let's talk about how traditional banking is basically financial quicksand
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Banking (Left) */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-600 relative">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Traditional Banking</h3>
              <p className="text-gray-300">The "Safe" Choice (LOL)</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-red-500">❌</span>
                <span className="text-white">0.1% APY (if you're lucky)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">❌</span>
                <span className="text-white">3-5 business day transfers</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">❌</span>
                <span className="text-white">Endless fees for everything</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">❌</span>
                <span className="text-white">Inflation eats your savings</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">❌</span>
                <span className="text-white">Closed on weekends (seriously?)</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">📉 $10,000</div>
                <div className="text-sm text-gray-300">After 10 years at 0.1%</div>
                <div className="text-xs text-red-400">Still $10,000 (minus inflation)</div>
              </div>
            </div>
          </div>

          {/* TSA (Right) */}
          <div className="bg-tsa-gradient/20 backdrop-blur-md rounded-2xl p-8 border border-tsa-gold/50 relative animate-pulse-glow">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-tsa-gold mb-2">$TSA Power</h3>
              <p className="text-white">The Actually Smart Choice</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-tsa-gold">✅</span>
                <span className="text-white">Unlimited moon potential</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-tsa-gold">✅</span>
                <span className="text-white">Solana-speed transactions</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-tsa-gold">✅</span>
                <span className="text-white">Minimal fees (pennies)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-tsa-gold">✅</span>
                <span className="text-white">24/7 trading & liquidity</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-tsa-gold">✅</span>
                <span className="text-white">Community-driven growth</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-tsa-gold/20 rounded-lg border border-tsa-gold/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-tsa-gold">🚀 TO THE MOON</div>
                <div className="text-sm text-white">After joining $TSA</div>
                <div className="text-xs text-tsa-gold">Gains so big they're visible from space</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="mb-6">
            <p className="text-2xl text-white mb-2">Ready to escape financial purgatory?</p>
            <p className="text-tsa-gold font-bold">Your savings account is not your friend.</p>
          </div>
          <Button 
            size="lg" 
            className="bg-tsa-gradient hover:scale-110 transition-all duration-300 text-black font-bold text-xl px-10 py-5 rounded-full shadow-2xl"
          >
            🔥 Ditch Your Bank Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BankingRoastSection;
