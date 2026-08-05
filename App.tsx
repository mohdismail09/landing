import React from 'react';
import Navbar from './components/Navbar';
import WorkflowPreview from './components/WorkflowPreview';
import { PILOT_INCLUDES, PROCESS_STEPS, TECH_STACK, WORK_EXAMPLES } from './constants';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/hello-mohdismail/30min';

const App: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-white pb-16 pt-24 md:pb-24">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
              <h1 className="mb-6 text-4xl font-[900] leading-[1.05] tracking-tighter text-slate-900 sm:text-5xl md:text-6xl">
                Automation for the work your
                <span className="text-blue-600"> team repeats.</span>
              </h1>
              <p className="mx-auto mb-9 max-w-2xl text-lg font-medium leading-relaxed text-slate-500 md:text-xl">
                I build reliable client-operations workflows for service businesses, using the tools your team already works with.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-slate-900 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 active:scale-[0.98]"
                >
                  Discuss a workflow <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-600 transition hover:border-slate-300 hover:text-slate-900 active:scale-[0.98]"
                >
                  View pricing
                </a>
              </div>
            </div>

            <WorkflowPreview />
          </div>
        </section>

        <section className="border-y border-slate-100 bg-slate-50/60 py-8">
          <div className="mx-auto grid max-w-5xl gap-5 px-4 text-sm font-semibold text-slate-600 sm:grid-cols-3 sm:px-6">
            <TrustItem icon={CheckCircle2} text="Fixed scope and price" />
            <TrustItem icon={ShieldCheck} text="Built in client-owned systems" />
            <TrustItem icon={Terminal} text="Documented and maintainable" />
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-[900] tracking-tighter text-slate-900 md:text-5xl">
                Common workflows worth automating
              </h2>
              <p className="text-base font-medium leading-relaxed text-slate-500 md:text-lg">
                Start with a workflow that happens often, crosses several tools and has a clear owner.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
              {WORK_EXAMPLES.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-2xl border p-7 md:p-9 ${index === 0 || index === 3
                      ? 'border-blue-100 bg-blue-50/60'
                      : 'border-slate-100 bg-slate-50/50'
                    }`}
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-black text-slate-900 md:text-2xl">{item.title}</h3>
                  <p className="max-w-xl font-medium leading-relaxed text-slate-500">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-white py-10" aria-labelledby="tools-heading">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 px-4 text-center sm:px-6 md:flex-row md:text-left">
            <div className="max-w-md">
              <h2 id="tools-heading" className="mb-2 text-sm font-black text-slate-900">Selected tools</h2>
              <p className="text-sm font-medium leading-relaxed text-slate-500">
                APIs, Python, cloud services, automation platforms and AI when it is useful.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-7 md:justify-end">
              {TECH_STACK.map((tool) => (
                <img
                  key={tool.name}
                  src={tool.icon}
                  alt={tool.name}
                  title={tool.name}
                  loading="lazy"
                  className="h-8 w-8 object-contain opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 bg-slate-50/60 py-20 md:py-28">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="mb-5 text-3xl font-[900] tracking-tighter text-slate-900 md:text-5xl">
                One workflow. Fixed scope. $2,000.
              </h2>
              <p className="mb-7 max-w-lg text-lg font-medium leading-relaxed text-slate-500">
                A 10-business-day pilot for one repetitive client-operations workflow.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-bold text-slate-700">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2">50% to start</span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2">50% on acceptance</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 md:p-9">
              <h3 className="mb-6 text-lg font-black text-slate-900">Included in the pilot</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {PILOT_INCLUDES.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-24 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-12 max-w-2xl">
              <h2 className="mb-4 text-3xl font-[900] tracking-tighter text-slate-900 md:text-5xl">How the work runs</h2>
              <p className="text-base font-medium leading-relaxed text-slate-500 md:text-lg">
                Direct communication, a small scope and a clear handover.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {PROCESS_STEPS.map((step) => (
                <article key={step.title} className="border-t border-slate-200 pt-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {step.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-black text-slate-900">{step.title}</h3>
                  <p className="font-medium leading-relaxed text-slate-500">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-white pb-20 pt-8 md:pb-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 px-6 py-14 text-center md:px-12 md:py-20">
              <h2 className="mx-auto mb-5 max-w-2xl text-3xl font-[900] tracking-tighter text-slate-900 md:text-5xl">
                Have a workflow your team repeats every week?
              </h2>
              <p className="mx-auto mb-8 max-w-xl font-medium leading-relaxed text-slate-500 md:text-lg">
                Send me the rough process. I will tell you whether it is a sensible first automation project.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-slate-900 px-7 py-3.5 font-bold text-white transition hover:bg-slate-800 active:scale-[0.98]"
                >
                  Discuss a workflow <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hi@mohdismail.com"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-blue-100 bg-white px-7 py-3.5 font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-600 active:scale-[0.98]"
                >
                  <Mail className="h-5 w-5" /> hi@mohdismail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-blue-600" />
            <span className="font-extrabold tracking-tighter text-slate-900">MOHD<span className="text-blue-600">ISMAIL</span></span>
          </div>
          <p className="text-sm font-medium text-slate-400">
            © {new Date().getFullYear()} Mohd Ismail. Based in Hyderabad, India. Available for US projects.
          </p>
        </div>
      </footer>
    </div>
  );
};

type IconComponent = React.ComponentType<{ className?: string }>;

const TrustItem: React.FC<{ icon: IconComponent; text: string }> = ({ icon: Icon, text }) => (
  <div className="flex items-center justify-center gap-2.5 sm:justify-start">
    <Icon className="h-5 w-5 flex-none text-blue-600" />
    <span>{text}</span>
  </div>
);

export default App;
