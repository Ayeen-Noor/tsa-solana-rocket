
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-tsa-gold/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/1f4ce6ce-75bc-4962-8ffa-2b81e5c3b0b0.png" 
                alt="TSA Logo" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold bg-tsa-gradient bg-clip-text text-transparent">
                $TSA
              </span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              The Traditional Solana Account that actually works. Say goodbye to 0.1% returns and hello to infinite possibilities.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-tsa-gold text-tsa-gold hover:bg-tsa-gold hover:text-black"
              >
                Twitter
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-tsa-gold text-tsa-gold hover:bg-tsa-gold hover:text-black"
              >
                Telegram
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-tsa-gold text-tsa-gold hover:bg-tsa-gold hover:text-black"
              >
                Discord
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-white/80 hover:text-tsa-gold transition-colors">About</a>
              <a href="#tokenomics" className="block text-white/80 hover:text-tsa-gold transition-colors">Tokenomics</a>
              <a href="#buy" className="block text-white/80 hover:text-tsa-gold transition-colors">How to Buy</a>
              <a href="#roadmap" className="block text-white/80 hover:text-tsa-gold transition-colors">Roadmap</a>
            </div>
          </div>

          {/* Contract Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contract</h3>
            <div className="space-y-2">
              <div className="bg-tsa-cosmic/50 rounded-lg p-3 border border-tsa-gold/30">
                <div className="text-xs text-tsa-gold mb-1">CONTRACT ADDRESS</div>
                <div className="text-white font-mono text-sm break-all">
                  Coming Soon...
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="mt-2 w-full border-tsa-gold text-tsa-gold hover:bg-tsa-gold hover:text-black"
                >
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-tsa-gold/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 $TSA. All rights reserved. Built on Solana ⚡
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-tsa-gold text-sm">🌟 Built on Solana</span>
            <div className="bg-tsa-gradient/20 px-3 py-1 rounded-full border border-tsa-gold/30">
              <span className="text-white text-sm">No Rugs, Only Gains 🚀</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-tsa-cosmic/30 rounded-lg border border-tsa-gold/20">
          <p className="text-white/60 text-xs text-center">
            <strong>Disclaimer:</strong> $TSA is a meme token for entertainment purposes. 
            Cryptocurrency investments carry risk. Past performance doesn't guarantee future results. 
            Do your own research and only invest what you can afford to lose. 
            We're not financial advisors, just people tired of 0.1% interest rates.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
