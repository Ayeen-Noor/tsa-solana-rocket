
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'How to Buy', href: '#buy' },
    { name: 'Community', href: '#community' },
    { name: 'Roadmap', href: '#roadmap' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-tsa-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1f4ce6ce-75bc-4962-8ffa-2b81e5c3b0b0.png" 
              alt="TSA Logo" 
              className="h-8 w-auto animate-pulse-glow"
            />
            <span className="text-2xl font-bold bg-tsa-gradient bg-clip-text text-transparent">
              $TSA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-tsa-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-tsa-gradient hover:scale-105 transition-transform duration-300 text-black font-bold">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-tsa-gold transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md rounded-lg mt-2 p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-white hover:text-tsa-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-tsa-gradient text-black font-bold">
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
