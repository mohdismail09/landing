import React from 'react';
import Navbar from './components/Navbar';
import AIConsultant from './components/AIConsultant';
import FloatingChat from './components/FloatingChat';
import { SERVICES, TECH_STACK, PROCESS_STEPS } from './constants';
import { ArrowRight, CheckCircle2, Terminal, Code2, Globe, Github, Twitter, Linkedin, Mail, Rocket, Cpu, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <FloatingChat />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-56 lg:pb-40 overflow-hidden hero-gradient md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black mb-4 uppercase tracking-[0.2em] animate-float">
                <Sparkles className="w-3 h-3" /> Available for Select Contracts
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[84px] font-[900] leading-tight md:leading-[1] text-slate-900 mb-5 md:mb-8 tracking-tighter">
                I build your <br />
                <span className="text-gradient">Digital Workforce.</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-500 mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                High-performance Python developer and AI engineer. I architect custom agentic systems that reclaim 100+ hours of your monthly team capacity.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center lg:justify-start">
                <a href="#contact" className="px-6 md:px-10 py-3 md:py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-2xl font-black text-sm md:text-lg flex items-center justify-center gap-3 transition-all group shadow-xl shadow-blue-600/25 active:scale-95">
                  Book Free Audit <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="px-6 md:px-10 py-3 md:py-5 bg-white border border-slate-200 hover:border-blue-200 text-slate-600 rounded-xl md:rounded-2xl font-black text-sm md:text-lg flex items-center justify-center gap-2 transition-all hover:bg-slate-50">
                  Solutions
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="bg-slate-50 rounded-2xl md:rounded-3xl p-4 md:p-8 border border-slate-200 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-3 md:mb-6 border-b border-slate-200 pb-3 md:pb-5">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">lead_prospecting_agent.py</div>
                </div>
                <div className="font-mono text-xs md:text-sm space-y-2 md:space-y-3 text-slate-600">
                  <p><span className="text-blue-600">from</span> mohd_ismail <span className="text-blue-600">import</span> Automation</p>
                  <p><span className="text-emerald-600">ai</span> = Automation(agent=<span className="text-amber-600">'gpt-4o'</span>)</p>
                  <p><br /></p>
                  <p><span className="text-slate-400"># Start autonomous research loop</span></p>
                  <p><span className="text-blue-600">for</span> lead <span className="text-blue-600">in</span> company_db:</p>
                  <p className="pl-4">intel = ai.research(lead)</p>
                  <p className="pl-4">ai.send_outreach(intel)</p>
                  <p><br /></p>
                  <p className="text-emerald-500 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Ready to scale.
                  </p>
                </div>

                {/* Floating Metric Card */}
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-white p-3 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-50 flex items-center justify-center">
                      <CheckCircle2 className="text-emerald-600 w-4 h-4 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <p className="text-xl md:text-3xl font-black text-slate-900 leading-none">0%</p>
                      <p className="text-[8px] md:text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black mt-1">Manual Data Entry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Tech Stack */}
      <section className="py-10 md:py-16 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8 md:mb-12">Expertise in leading AI ecosystems</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-20 opacity-50 hover:opacity-100 transition-opacity">
            {TECH_STACK.map(tech => (
              <div key={tech.name} className="flex items-center gap-2 md:gap-3">
                <img src={tech.icon} alt={tech.name} className="w-5 h-5 md:w-7 md:h-7 filter grayscale" />
                <span className="font-bold text-slate-600 text-xs md:text-base">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-[900] text-slate-900 mb-4 md:mb-6 tracking-tighter italic">Engineered <span className="text-blue-600">Intelligence.</span></h2>
            <p className="text-base md:text-lg text-slate-500 font-medium">I don't just write code; I architect systems that transform your operational efficiency from the ground up.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl lg:rounded-[2.5rem] bg-slate-50/30 border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 hover:-translate-y-2">
                <div className="mb-4 md:mb-6 lg:mb-8 p-3 md:p-4 rounded-lg md:rounded-2xl bg-white shadow-sm w-fit group-hover:scale-110 transition-transform border border-slate-50">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 mb-3 md:mb-4">{service.title}</h3>
                <p className="text-slate-500 font-medium text-[13px] md:text-[15px] mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white text-[10px] font-black text-slate-400 uppercase tracking-wider border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="approach" className="py-16 md:py-24 lg:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 md:mb-8 lg:mb-10 tracking-tighter">My <span className="text-blue-600">Execution</span> Framework</h2>
              <div className="space-y-6 md:space-y-8 lg:space-y-12">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-6 lg:gap-8 group">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl lg:rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 font-black text-lg md:text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg lg:text-xl font-black text-slate-900 flex items-center gap-3 mb-1 md:mb-2">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-md">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 shadow-2xl flex items-center justify-center p-12 overflow-hidden">
                <div className="grid grid-cols-2 gap-6 w-full h-full">
                  <div className="bg-blue-50 rounded-[2rem] border border-blue-100 flex flex-col items-center justify-center p-6 group hover:bg-blue-600 transition-colors cursor-default">
                    <Terminal className="w-10 h-10 text-blue-600 group-hover:text-white mb-3" />
                    <span className="text-[10px] font-black uppercase text-blue-400 group-hover:text-blue-100">Scripts</span>
                  </div>
                  <div className="bg-emerald-50 rounded-[2rem] border border-emerald-100 flex flex-col items-center justify-center p-6 group hover:bg-emerald-600 transition-colors cursor-default">
                    <Code2 className="w-10 h-10 text-emerald-600 group-hover:text-white mb-3" />
                    <span className="text-[10px] font-black uppercase text-emerald-400 group-hover:text-emerald-100">LLM Logic</span>
                  </div>
                  <div className="bg-amber-50 rounded-[2rem] border border-amber-100 flex flex-col items-center justify-center p-6 group hover:bg-amber-600 transition-colors cursor-default">
                    <Globe className="w-10 h-10 text-amber-600 group-hover:text-white mb-3" />
                    <span className="text-[10px] font-black uppercase text-amber-400 group-hover:text-amber-100">API Sync</span>
                  </div>
                  <div className="bg-rose-50 rounded-[2rem] border border-rose-100 flex flex-col items-center justify-center p-6 group hover:bg-rose-600 transition-colors cursor-default">
                    <Rocket className="w-10 h-10 text-rose-600 group-hover:text-white mb-3" />
                    <span className="text-[10px] font-black uppercase text-rose-400 group-hover:text-rose-100">Scale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Twin Section */}
      <AIConsultant />

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl lg:rounded-[4rem] p-8 md:p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-600/20">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-7xl font-black text-white mb-6 md:mb-10 tracking-tighter">Let's build <span className="text-blue-400 italic">the future.</span></h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-400 mb-8 md:mb-14 max-w-2xl mx-auto font-medium">
                I help companies scale without increasing headcount. Ready for a 15-minute discovery call to map your ROI?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <button className="px-6 md:px-12 py-4 md:py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg md:rounded-2xl lg:rounded-[2rem] font-black text-sm md:text-lg lg:text-xl shadow-2xl shadow-blue-600/40 transition-all hover:scale-105 active:scale-95">
                  Book Discovery Call
                </button>
                <div className="flex items-center justify-center gap-3 md:gap-4 text-white px-6 md:px-8 py-4 md:py-6 bg-white/5 backdrop-blur-sm rounded-lg md:rounded-2xl lg:rounded-[2rem] border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  <span className="font-bold text-sm md:text-lg">hi@mohdismail.com</span>
                </div>
              </div>
            </div>
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 lg:py-20 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 md:mb-4">
              <Terminal className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
              <span className="text-lg md:text-xl font-extrabold tracking-tighter text-slate-900 uppercase">Mohd Ismail</span>
            </div>
            <p className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} mohdismail.com • Handcrafted with AI
            </p>
          </div>
          <div className="flex gap-3 md:gap-4">
            <a href="#" className="p-2.5 md:p-4 bg-slate-50 rounded-lg md:rounded-2xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100"><Github className="w-4 h-4 md:w-6 md:h-6" /></a>
            <a href="#" className="p-2.5 md:p-4 bg-slate-50 rounded-lg md:rounded-2xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100"><Linkedin className="w-4 h-4 md:w-6 md:h-6" /></a>
            <a href="#" className="p-2.5 md:p-4 bg-slate-50 rounded-lg md:rounded-2xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100"><Twitter className="w-4 h-4 md:w-6 md:h-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
