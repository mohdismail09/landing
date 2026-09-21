import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC<{ industry?: string }> = ({ industry }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  const links = industry ? [{ label: 'The problem', href: '#problem' }, { label: 'Output', href: '#output' }, { label: 'Pilot', href: '#pilot' }] : [];

  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Mohd Ismail home">
          <span className="font-black tracking-tight text-slate-950 dark:text-white">MOHD<span className="text-blue-700 dark:text-blue-400">ISMAIL</span></span>
          {industry && <><span className="hidden h-4 w-px bg-slate-300 sm:block dark:bg-slate-700" /><span className="hidden truncate text-sm font-semibold text-slate-500 sm:block dark:text-slate-400">{industry}</span></>}
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400">{link.label}</a>)}
          {industry && <a href="#contact" className="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800 active:translate-y-px">Book a walkthrough</a>}
        </div>
        {industry && <button type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-700 md:hidden dark:text-slate-200">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>}
      </div>
      {open && <div id="mobile-nav" className="border-t border-slate-200 bg-white p-4 md:hidden dark:border-slate-800 dark:bg-slate-950">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-bold text-slate-800 dark:text-slate-100">{link.label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-blue-700 px-4 py-3 text-center font-bold text-white">Book a walkthrough</a></div>}
    </nav>
  );
};

export default Navbar;
