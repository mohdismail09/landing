import React, { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <nav aria-label="Primary" className="fixed left-0 right-0 top-0 z-50 border-b border-slate-100 bg-white/90 py-3 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="group flex items-center gap-2" aria-label="Mohd Ismail home">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
              <Terminal className="text-white w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-base md:text-lg font-extrabold tracking-tighter text-slate-900">MOHD<span className="text-blue-600">ISMAIL</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="rounded-md text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="whitespace-nowrap rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 active:scale-[0.98]">
              Discuss a workflow
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-navigation" className="absolute left-0 right-0 top-full border-b border-slate-100 bg-white p-4 shadow-xl lg:hidden">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="rounded-md text-base font-bold text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="w-full rounded-lg bg-slate-900 py-3 text-center font-bold text-white" onClick={() => setIsOpen(false)}>
              Discuss a workflow
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
