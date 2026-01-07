import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 md:py-3 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'py-4 md:py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
              <Terminal className="text-white w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-base md:text-lg font-extrabold tracking-tighter text-slate-900">MOHD<span className="text-blue-600">ISMAIL</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-bold transition-all active:scale-95 shadow-lg shadow-slate-900/10">
              Work with me
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 absolute top-full left-0 right-0 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-base font-bold text-slate-800" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="w-full py-3 bg-blue-600 text-white text-center rounded-lg font-bold shadow-lg shadow-blue-600/20" onClick={() => setIsOpen(false)}>
              Work with me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
