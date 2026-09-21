import React, { useEffect } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileSearch,
  Gauge,
  Mail,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Navbar from './components/Navbar';

const CALENDLY_URL = 'https://calendly.com/hello-mohdismail/30min';

type Offer = {
  slug: string;
  shortName: string;
  audience: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  outcome: string;
  problemTitle: string;
  problem: string;
  inputs: string[];
  outputs: { title: string; text: string; icon: React.ComponentType<{ className?: string }> }[];
  sample: { job: string; state: string; detail: string; ready: boolean }[];
};

const OFFERS: Offer[] = [
  {
    slug: 'compressor',
    shortName: 'Compressor service',
    audience: 'For independent compressor service companies',
    title: 'Turn completed service work into billing-ready job packets.',
    description: 'Catch missing paperwork before it reaches the billing desk. Your team reviews and sends every invoice.',
    image: '/images/compressor-service.webp',
    imageAlt: 'Compressor service technician reviewing a service ticket beside an industrial air compressor',
    outcome: 'A clear list of jobs ready to bill, plus exactly what is blocking the rest.',
    problemTitle: 'The repair is done. The invoice is still waiting.',
    problem: 'Technician notes, labor, parts, purchase orders and signatures often arrive in different places. Office staff spend hours chasing the last missing detail.',
    inputs: ['Completed service tickets', 'Technician notes and photos', 'Parts and labor records', 'Customer purchase orders'],
    outputs: [
      { title: 'Ready-to-bill list', text: 'See which completed jobs have every required item.', icon: ReceiptText },
      { title: 'Missing-item report', text: 'Know whether the blocker is a PO, signature, note or quantity.', icon: FileSearch },
      { title: 'Billing worksheet', text: 'Review a structured draft linked back to its source paperwork.', icon: ClipboardCheck },
    ],
    sample: [
      { job: 'Service job 1842', state: 'Ready for review', detail: 'Ticket, labor, parts and PO matched', ready: true },
      { job: 'Service job 1847', state: 'Missing customer PO', detail: 'All other documents received', ready: false },
      { job: 'Service job 1851', state: 'Check parts quantity', detail: 'Ticket and stock issue do not match', ready: false },
    ],
  },
  {
    slug: 'pump-repair',
    shortName: 'Pump repair',
    audience: 'For independent industrial pump repair shops',
    title: 'Turn inspection findings into quote-ready repair packets.',
    description: 'Organize inspection details, surface missing decisions and keep repair approvals moving.',
    image: '/images/pump-repair.webp',
    imageAlt: 'Pump repair specialist inspecting a disassembled centrifugal pump in a workshop',
    outcome: 'A consistent quote-preparation packet and a visible list of repairs waiting on approval.',
    problemTitle: 'A good inspection should not become a paperwork hunt.',
    problem: 'Measurements, photos, technician findings and customer requirements can sit across forms, folders and inboxes. Estimators rebuild the story before they can quote.',
    inputs: ['Inspection forms', 'Measurements and findings', 'Equipment photos', 'Customer scope and history'],
    outputs: [
      { title: 'Quote-ready packet', text: 'Bring findings, photos and scope into one reviewable record.', icon: ClipboardCheck },
      { title: 'Missing-detail check', text: 'Flag incomplete measurements or unclear repair recommendations.', icon: Gauge },
      { title: 'Approval tracker', text: 'Keep open quotes and customer decisions visible to the team.', icon: Wrench },
    ],
    sample: [
      { job: 'Pump repair 622', state: 'Ready to quote', detail: 'Inspection and measurements complete', ready: true },
      { job: 'Pump repair 628', state: 'Needs shaft measurement', detail: 'Inspection photo received', ready: false },
      { job: 'Pump repair 631', state: 'Awaiting approval', detail: 'Quote packet sent for review', ready: false },
    ],
  },
  {
    slug: 'fastener',
    shortName: 'Fastener distribution',
    audience: 'For independent industrial fastener distributors',
    title: 'Turn repeat purchase orders into checked order drafts.',
    description: 'Match known customer part numbers, flag exceptions and let your team approve the order.',
    image: '/images/fastener-distribution.webp',
    imageAlt: 'Fastener warehouse employee checking a purchase order against stocked bolts',
    outcome: 'A checked order draft for familiar repeat business, with every exception separated for review.',
    problemTitle: 'Repeat orders should not require repeat typing.',
    problem: 'Customer part numbers, pack sizes and internal SKUs often differ. Order entry staff retype familiar lines and manually catch exceptions under time pressure.',
    inputs: ['Repeat-customer purchase orders', 'Approved part-number mapping', 'Pack-size rules', 'Current customer records'],
    outputs: [
      { title: 'Mapped order draft', text: 'Convert known customer lines into your internal order format.', icon: PackageCheck },
      { title: 'Exception queue', text: 'Separate unknown parts, changed quantities and pricing questions.', icon: FileSearch },
      { title: 'Source-linked review', text: 'Check every draft line against the original purchase order.', icon: ClipboardCheck },
    ],
    sample: [
      { job: 'PO 43871', state: 'Ready for review', detail: '14 known items matched', ready: true },
      { job: 'PO 43876', state: 'Unknown customer part', detail: '2 lines need manual mapping', ready: false },
      { job: 'PO 43879', state: 'Check pack quantity', detail: 'Requested quantity breaks pack rule', ready: false },
    ],
  },
];

const getOffer = () => OFFERS.find((offer) => `/${offer.slug}` === window.location.pathname.replace(/\/$/, ''));

const App: React.FC = () => {
  const offer = getOffer();
  return offer ? <IndustryPage offer={offer} /> : <HomePage />;
};

const IndustryPage: React.FC<{ offer: Offer }> = ({ offer }) => {
  useEffect(() => {
    document.title = `${offer.shortName} Automation Pilot | Mohd Ismail`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', offer.description);
  }, [offer]);

  return (
    <div className="min-h-[100dvh] bg-white text-slate-950 selection:bg-blue-100 dark:bg-slate-950 dark:text-slate-50">
      <Navbar industry={offer.shortName} />
      <main>
        <section className="pt-20 lg:min-h-[min(780px,100dvh)] lg:pt-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-8">
            <div className="max-w-xl">
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-400">{offer.audience}</p>
              <h1 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">{offer.title}</h1>
              <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">{offer.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-blue-700 px-6 py-3.5 font-bold text-white transition hover:bg-blue-800 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">Book a walkthrough <ArrowRight className="h-4 w-4" /></a>
                <a href="#pilot" className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-slate-300 px-6 py-3.5 font-bold text-slate-800 transition hover:border-slate-500 active:translate-y-px dark:border-slate-700 dark:text-slate-100">See the pilot</a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-slate-900/10 dark:bg-slate-900">
              <img src={offer.image} alt={offer.imageAlt} width="1600" height="1067" fetchPriority="high" className="aspect-[4/3] h-full w-full object-cover" />
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/30 bg-slate-950/80 p-4 text-white backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-300">Pilot outcome</p>
                <p className="mt-2 max-w-xl font-semibold leading-snug">{offer.outcome}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-6 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 text-sm font-bold text-slate-700 sm:grid-cols-3 sm:px-6 lg:px-8 dark:text-slate-200">
            <Trust icon={ShieldCheck} text="Mohd leads every engagement" />
            <Trust icon={ClipboardCheck} text="One branch and one workflow" />
            <Trust icon={Check} text="Your team approves every result" />
          </div>
        </section>

        <section id="problem" className="scroll-mt-24 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:items-start lg:px-8">
            <h2 className="max-w-md text-3xl font-black leading-tight tracking-[-0.035em] md:text-5xl">{offer.problemTitle}</h2>
            <div>
              <p className="max-w-2xl text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">{offer.problem}</p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {offer.inputs.map((input) => <div key={input} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200"><Check className="h-4 w-4 flex-none text-blue-700 dark:text-blue-400" />{input}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="output" className="bg-slate-950 py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-xl text-3xl font-black tracking-[-0.035em] md:text-5xl">What your team gets</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
              {offer.outputs.map(({ title, text, icon: Icon }, index) => (
                <article key={title} className={index === 0 ? 'rounded-2xl bg-blue-700 p-7 md:p-9' : 'border-t border-slate-700 pt-7'}>
                  <Icon className={`h-7 w-7 ${index === 0 ? 'text-white' : 'text-blue-400'}`} />
                  <h3 className="mt-7 text-xl font-black">{title}</h3>
                  <p className={`mt-3 font-medium leading-relaxed ${index === 0 ? 'text-blue-50' : 'text-slate-300'}`}>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black tracking-[-0.035em] md:text-5xl">A clear review queue</h2>
              <p className="mt-4 font-medium leading-relaxed text-slate-600 dark:text-slate-300">A fictional example of the output. Your actual checks follow your paperwork and approval rules.</p>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
              {offer.sample.map((row) => (
                <div key={row.job} className="grid gap-3 border-b border-slate-100 p-5 last:border-b-0 sm:grid-cols-[1fr_1fr_1.4fr] sm:items-center dark:border-slate-800">
                  <p className="font-black">{row.job}</p>
                  <p className={`font-bold ${row.ready ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-700 dark:text-amber-400'}`}>{row.state}</p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{row.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pilot" className="scroll-mt-24 bg-slate-50 py-20 dark:bg-slate-900/50 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.035em] md:text-5xl">10 business days. $2,000.</h2>
              <p className="mt-5 max-w-md text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">$1,000 to start and $1,000 after the agreed acceptance check.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-700 dark:bg-slate-900 md:p-9">
              <h3 className="text-xl font-black">Pilot scope</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {['Map the current workflow', 'Use exported files first', 'Agree on success checks', 'Build the review output', 'Test with real examples', 'Document the handover'].map((item) => <div key={item} className="flex items-start gap-3 font-semibold text-slate-700 dark:text-slate-200"><Check className="mt-0.5 h-5 w-5 flex-none text-blue-700 dark:text-blue-400" />{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-blue-700 px-6 py-14 text-white md:px-12 md:py-16">
            <h2 className="max-w-2xl text-3xl font-black tracking-[-0.035em] md:text-5xl">Show us how one job moves through your office.</h2>
            <p className="mt-5 max-w-xl text-lg font-medium text-blue-100">In 30 minutes, we can decide together whether this is a sensible first pilot.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-6 py-3.5 font-bold text-blue-800 transition hover:bg-blue-50 active:translate-y-px">Book a walkthrough <ArrowRight className="h-4 w-4" /></a>
              <a href="mailto:ismail@mohdismail.com" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-blue-500 px-6 py-3.5 font-bold text-white transition hover:bg-blue-800 active:translate-y-px"><Mail className="h-4 w-4" /> Email us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const HomePage: React.FC = () => {
  useEffect(() => { document.title = 'Mohd Ismail | Industrial Operations Automation'; }, []);
  return (
    <div className="min-h-[100dvh] bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main className="pt-16">
        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-400">Mohd Ismail and team</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-6xl">We build practical automation for industrial operations.</h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">A founder-led team reducing repetitive work around service paperwork, quoting, order entry and billing.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pilots" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-blue-700 px-6 py-3.5 font-bold text-white transition hover:bg-blue-800 active:translate-y-px">Explore the pilots <ArrowRight className="h-4 w-4" /></a>
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-slate-300 px-6 py-3.5 font-bold text-slate-800 transition hover:border-slate-500 active:translate-y-px dark:border-slate-700 dark:text-white">Book a walkthrough</a>
            </div>
          </div>
          <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
            <img src="/images/compressor-service.webp" alt="Compressor service technician reviewing job paperwork" className="aspect-[4/5] h-full w-full rounded-2xl object-cover" fetchPriority="high" />
            <div className="grid gap-3 pt-12">
              <img src="/images/pump-repair.webp" alt="Specialist inspecting an industrial pump" className="aspect-square w-full rounded-2xl object-cover" />
              <div className="rounded-2xl bg-slate-950 p-5 text-white dark:bg-blue-700">
                <p className="text-2xl font-black">One workflow</p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-300 dark:text-blue-50">Small scope, real examples and a person approving every result.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pilots" className="scroll-mt-20 bg-slate-50 py-20 dark:bg-slate-900/50 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-3xl text-3xl font-black tracking-[-0.035em] md:text-5xl">Focused pilots for three industrial workflows</h2>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">Choose the example closest to your operation. The first engagement stays deliberately narrow and measurable.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr]">
            {OFFERS.map((offer, index) => (
              <a key={offer.slug} href={`/${offer.slug}`} className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 ${index === 0 ? 'md:row-span-2' : ''}`}>
                <img src={offer.image} alt="" className={`w-full object-cover ${index === 0 ? 'aspect-[16/10] md:aspect-[4/3]' : 'aspect-[16/7]'}`} />
                <div className="p-6 md:p-7">
                  <p className="text-sm font-bold text-blue-700 dark:text-blue-400">{offer.shortName}</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight">{offer.title}</h2>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-slate-700 group-hover:text-blue-700 dark:text-slate-200 dark:group-hover:text-blue-400">View pilot <ChevronRight className="h-4 w-4" /></span>
                </div>
              </a>
            ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-xl text-3xl font-black tracking-[-0.035em] md:text-5xl">How we work</h2>
            <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
              {[
                ['Start with one workflow', 'We define one repeated process, its owner and a clear acceptance check.'],
                ['Test before connecting', 'We begin with exported files and real examples before touching live systems.'],
                ['Keep people in control', 'Uncertain cases are flagged. Your team approves quotes, orders and invoices.'],
                ['Stay accountable', 'Mohd leads the engagement, supported by the team responsible for delivery.'],
              ].map(([title, text]) => (
                <article key={title} className="border-t border-slate-200 pt-6 dark:border-slate-800">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 max-w-md font-medium leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[0.7fr_1.3fr] md:items-start lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-blue-400">About us</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] md:text-5xl">A specialist team, led by Mohd</h2>
            </div>
            <div>
              <p className="max-w-2xl text-xl font-semibold leading-relaxed text-slate-200">I am Mohd Ismail. I lead our software and automation team.</p>
              <p className="mt-5 max-w-2xl font-medium leading-relaxed text-slate-400">We use software, AI and workflow automation to remove avoidable manual steps from everyday operations. We first understand how the work happens, improve one useful part and leave your team with a system they can review and maintain.</p>
              <p className="mt-5 max-w-2xl font-medium leading-relaxed text-slate-400">I remain your direct point of contact throughout the engagement, with our team supporting the work from discovery through handover.</p>
              <a href="mailto:ismail@mohdismail.com" className="mt-8 inline-flex items-center gap-2 font-bold text-blue-400 transition hover:text-blue-300"><Mail className="h-4 w-4" /> ismail@mohdismail.com</a>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-6xl rounded-2xl bg-blue-700 px-6 py-14 text-white md:px-12 md:py-16">
            <h2 className="max-w-2xl text-3xl font-black tracking-[-0.035em] md:text-5xl">Have a repeated office workflow worth examining?</h2>
            <p className="mt-5 max-w-xl text-lg font-medium text-blue-100">Show us the current process. We will tell you if it is a sensible first automation pilot.</p>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-6 py-3.5 font-bold text-blue-800 transition hover:bg-blue-50 active:translate-y-px">Book a walkthrough <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const Trust: React.FC<{ icon: React.ComponentType<{ className?: string }>; text: string }> = ({ icon: Icon, text }) => <div className="flex items-center gap-3"><Icon className="h-5 w-5 flex-none text-blue-700 dark:text-blue-400" /><span>{text}</span></div>;

const Footer = () => <footer className="border-t border-slate-200 py-10 dark:border-slate-800"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm font-medium text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><a href="/" className="font-black tracking-tight text-slate-950 dark:text-white">MOHD<span className="text-blue-700 dark:text-blue-400">ISMAIL</span></a><p>Practical automation for industrial operations.</p><a href="mailto:ismail@mohdismail.com" className="font-bold text-slate-700 transition hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-400">ismail@mohdismail.com</a></div></footer>;

export default App;
