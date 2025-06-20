
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SavingsCalculator = () => {
  const [amount, setAmount] = useState(10000);
  const [years, setYears] = useState(5);
  
  const traditionalReturn = amount * Math.pow(1.001, years); // 0.1% APY
  const tsaReturn = amount * Math.pow(1.5, years); // Conservative 50% growth projection
  
  return (
    <section className="py-20 bg-gradient-to-b from-tsa-cosmic-light to-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-tsa-gradient bg-clip-text text-transparent">
            The Reality Check Calculator
          </h2>
          <p className="text-xl text-white/80">
            See exactly how much your bank is stealing from you
          </p>
        </div>

        <Card className="bg-black/60 backdrop-blur-md border-tsa-gold/30">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">
              Your Money: Bank vs. $TSA
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Input controls */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-white mb-2 font-semibold">Investment Amount</label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="bg-white/10 border-tsa-gold/30 text-white text-lg"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Time Period (Years)</label>
                <Input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="bg-white/10 border-tsa-gold/30 text-white text-lg"
                  placeholder="Enter years"
                />
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Traditional Bank */}
              <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏦</div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">Traditional Bank</h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    ${traditionalReturn.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-sm text-red-400">
                    Gain: ${(traditionalReturn - amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    At 0.1% APY (if you're lucky)
                  </div>
                </div>
              </div>

              {/* TSA */}
              <div className="bg-tsa-gradient/20 rounded-lg p-6 border border-tsa-gold/50 animate-pulse-glow">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <h3 className="text-xl font-bold text-tsa-gold mb-4">$TSA Potential</h3>
                  <div className="text-3xl font-bold text-tsa-gold mb-2">
                    ${tsaReturn.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-sm text-tsa-gold">
                    Potential Gain: ${(tsaReturn - amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-xs text-gray-300 mt-2">
                    Conservative growth projection
                  </div>
                </div>
              </div>
            </div>

            {/* Difference highlight */}
            <div className="mt-8 text-center">
              <div className="bg-tsa-gold/20 rounded-lg p-6 border border-tsa-gold/50">
                <h4 className="text-2xl font-bold text-white mb-2">The Difference</h4>
                <div className="text-4xl font-bold text-tsa-gold mb-2">
                  ${(tsaReturn - traditionalReturn).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <p className="text-white/80">
                  That's how much your bank is costing you by playing it "safe"
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="bg-tsa-gradient hover:scale-110 transition-all duration-300 text-black font-bold text-lg px-8 py-4 rounded-full"
              >
                Stop Losing Money - Get $TSA Now! 🚀
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SavingsCalculator;
