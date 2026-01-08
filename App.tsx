import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

import { SERVICES, TECH_STACK, PROCESS_STEPS } from './constants';
import { ArrowRight, CheckCircle2, Terminal, Code2, Globe, Github, Twitter, Linkedin, Mail, Rocket, Cpu, Sparkles, Bot, Database, MessageSquare, BrainCircuit, FileText, Send } from 'lucide-react';

const App: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const WORKFLOWS = [
    {
      trigger: { icon: Mail, label: 'New Lead', color: 'bg-blue-50 text-blue-600 border-blue-100', ring: 'group-hover:border-blue-400' },
      agent: { icon: Bot, label: 'Research Prospect', color: 'bg-emerald-50 text-emerald-600 border-emerald-100', ring: 'group-hover:border-emerald-400' },
      action: { icon: Database, label: 'Update CRM', color: 'bg-amber-50 text-amber-600 border-amber-100', ring: 'group-hover:border-amber-400' }
    },
    {
      trigger: { icon: MessageSquare, label: 'Support Ticket', color: 'bg-violet-50 text-violet-600 border-violet-100', ring: 'group-hover:border-violet-400' },
      agent: { icon: BrainCircuit, label: 'Draft Reply', color: 'bg-rose-50 text-rose-600 border-rose-100', ring: 'group-hover:border-rose-400' },
      action: { icon: Send, label: 'Slack Team', color: 'bg-sky-50 text-sky-600 border-sky-100', ring: 'group-hover:border-sky-400' }
    },
    {
      trigger: { icon: FileText, label: 'Meeting Notes', color: 'bg-orange-50 text-orange-600 border-orange-100', ring: 'group-hover:border-orange-400' },
      agent: { icon: Sparkles, label: 'Extract Tasks', color: 'bg-indigo-50 text-indigo-600 border-indigo-100', ring: 'group-hover:border-indigo-400' },
      action: { icon: CheckCircle2, label: 'Create Asana', color: 'bg-cyan-50 text-cyan-600 border-cyan-100', ring: 'group-hover:border-cyan-400' }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWorkflow((prev) => (prev + 1) % WORKFLOWS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-[900] leading-tight text-slate-900 mb-6 tracking-tighter">
              Automate your work with <br />
              <span className="text-blue-600 relative inline-block">
                Intelligent Agents
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              I build custom AI workflows that connect your apps and reclaim 100+ hours of team capacity. No monthly fees, just code that works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://calendly.com/hello-mohdismail/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-slate-900/20 flex items-center gap-2">
                Start Building <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 rounded-full font-bold text-lg transition-all hover:bg-slate-50">
                View Solutions
              </a>
            </div>
          </div>

          {/* Interactive Workflow Visual - Zapier Style */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="ml-4 bg-white px-3 py-1 rounded-md text-xs font-mono text-slate-500 border border-slate-200 flex items-center gap-2">
                  <Globe className="w-3 h-3" /> workflow_engine.py
                </div>
              </div>

              <div className="p-8 md:p-12 bg-slate-50/50 relative">
                {/* Workflow Nodes */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-10 min-h-[300px] md:min-h-[160px]">

                  {/* Trigger */}
                  <div className={`bg-white p-4 rounded-xl border border-slate-200 shadow-lg w-full md:w-64 flex items-center gap-4 transition-all duration-500 ${WORKFLOWS[activeWorkflow].trigger.ring}`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors duration-500 ${WORKFLOWS[activeWorkflow].trigger.color}`}>
                      {React.createElement(WORKFLOWS[activeWorkflow].trigger.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Trigger</div>
                      <div className="font-bold text-slate-900 transition-all duration-300">{WORKFLOWS[activeWorkflow].trigger.label}</div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="hidden md:block w-12 h-0.5 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-400 -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
                  </div>
                  <div className="md:hidden h-8 w-0.5 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-400 -translate-y-full animate-[shimmer_1.5s_infinite]"></div>
                  </div>

                  {/* Agent */}
                  <div className={`bg-white p-4 rounded-xl border border-slate-200 shadow-lg w-full md:w-64 flex items-center gap-4 transition-all duration-500 ${WORKFLOWS[activeWorkflow].agent.ring}`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors duration-500 ${WORKFLOWS[activeWorkflow].agent.color}`}>
                      {React.createElement(WORKFLOWS[activeWorkflow].agent.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Agent</div>
                      <div className="font-bold text-slate-900 transition-all duration-300">{WORKFLOWS[activeWorkflow].agent.label}</div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="hidden md:block w-12 h-0.5 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-400 -translate-x-full animate-[shimmer_1.5s_infinite]" style={{ animationDelay: '0.75s' }}></div>
                  </div>
                  <div className="md:hidden h-8 w-0.5 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-400 -translate-y-full animate-[shimmer_1.5s_infinite]" style={{ animationDelay: '0.75s' }}></div>
                  </div>

                  {/* Action */}
                  <div className={`bg-white p-4 rounded-xl border border-slate-200 shadow-lg w-full md:w-64 flex items-center gap-4 transition-all duration-500 ${WORKFLOWS[activeWorkflow].action.ring}`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors duration-500 ${WORKFLOWS[activeWorkflow].action.color}`}>
                      {React.createElement(WORKFLOWS[activeWorkflow].action.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Action</div>
                      <div className="font-bold text-slate-900 transition-all duration-300">{WORKFLOWS[activeWorkflow].action.label}</div>
                    </div>
                  </div>

                </div>

                {/* Background Grid for Workflow Area */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="bg-white p-3 rounded-lg shadow-xl border border-slate-100 animate-float" style={{ animationDelay: '0s' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8" alt="Python" />
              </div>
            </div>
            <div className="absolute -right-4 top-1/3 hidden lg:block">
              <div className="bg-white p-3 rounded-lg shadow-xl border border-slate-100 animate-float" style={{ animationDelay: '1s' }}>
                <img src="https://static.cdnlogo.com/logos/l/8/langchain_800.png" className="w-8 h-8" alt="LangChain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Strip */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-500 mb-8">Powering workflows with modern AI infrastructure</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {TECH_STACK.map(tech => (
              <div key={tech.name} className="flex items-center gap-2 group cursor-default">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6 md:w-8 md:h-8 object-contain group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-700 text-sm md:text-lg hidden md:block">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-slate-900 mb-4 md:mb-6 tracking-tighter">
              Enterprise-Grade <span className="text-blue-600">Solutions</span>
            </h2>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 md:mb-8 lg:mb-10 tracking-tighter">
                How it <span className="text-blue-600">Works</span>
              </h2>
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
                <a href="https://calendly.com/hello-mohdismail/30min" target="_blank" rel="noopener noreferrer" className="px-6 md:px-12 py-4 md:py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg md:rounded-2xl lg:rounded-[2rem] font-black text-sm md:text-lg lg:text-xl shadow-2xl shadow-blue-600/40 transition-all hover:scale-105 active:scale-95 inline-block">
                  Book Discovery Call
                </a>
                <div className="flex items-center justify-center gap-3 md:gap-4 text-white px-6 md:px-8 py-4 md:py-6 bg-white/5 backdrop-blur-sm rounded-lg md:rounded-2xl lg:rounded-[2rem] border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  <span className="font-bold text-sm md:text-lg">hi@mohdismail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 md:gap-4 text-white px-6 md:px-8 py-4 md:py-6 bg-white/5 backdrop-blur-sm rounded-lg md:rounded-2xl lg:rounded-[2rem] border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="font-bold text-sm md:text-lg">7032229659</span>
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
