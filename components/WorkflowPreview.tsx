import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  BarChart3,
  ClipboardCheck,
  Database,
  FileCheck2,
  FolderKanban,
  Mail,
  Pause,
  Play,
  Search,
  Terminal,
  UserRoundCheck,
  UserRoundPlus,
} from 'lucide-react';

type IconComponent = React.ComponentType<{ className?: string }>;

type Workflow = {
  id: string;
  name: string;
  file: string;
  nodes: Array<{
    icon: IconComponent;
    label: string;
    detail: string;
  }>;
};

const WORKFLOWS: Workflow[] = [
  {
    id: 'onboarding',
    name: 'Onboarding',
    file: 'client_onboarding.flow',
    nodes: [
      { icon: ClipboardCheck, label: 'Approved intake', detail: 'Validated client details' },
      { icon: FolderKanban, label: 'Create workspace', detail: 'Projects, tasks and folders' },
      { icon: UserRoundCheck, label: 'Notify team', detail: 'Clear status and failure alerts' },
    ],
  },
  {
    id: 'reporting',
    name: 'Reporting',
    file: 'reporting.flow',
    nodes: [
      { icon: Database, label: 'Collect source data', detail: 'Connected reporting inputs' },
      { icon: BarChart3, label: 'Validate and prepare', detail: 'Missing values are flagged' },
      { icon: FileCheck2, label: 'Human review', detail: 'Ready before anything is sent' },
    ],
  },
  {
    id: 'lead-routing',
    name: 'Lead routing',
    file: 'lead_routing.flow',
    nodes: [
      { icon: Mail, label: 'New enquiry', detail: 'Captured from the right source' },
      { icon: Search, label: 'Check and qualify', detail: 'Validated against your rules' },
      { icon: UserRoundPlus, label: 'Assign and follow up', detail: 'Owner and next action created' },
    ],
  },
];

const WorkflowPreview: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [pointerInside, setPointerInside] = useState(false);
  const [focusInside, setFocusInside] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const exitTimer = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    return () => {
      if (exitTimer.current !== null) window.clearTimeout(exitTimer.current);
    };
  }, []);

  const transitionTo = useCallback((nextIndex: number) => {
    if (nextIndex === activeIndex) return;

    if (exitTimer.current !== null) window.clearTimeout(exitTimer.current);

    if (reducedMotion) {
      setPreviousIndex(null);
      setActiveIndex(nextIndex);
      return;
    }

    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndex);
    exitTimer.current = window.setTimeout(() => {
      setPreviousIndex(null);
      exitTimer.current = null;
    }, 320);
  }, [activeIndex, reducedMotion]);

  useEffect(() => {
    if (paused || pointerInside || focusInside || reducedMotion) return;

    const timer = window.setInterval(() => {
      transitionTo((activeIndex + 1) % WORKFLOWS.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [activeIndex, paused, pointerInside, focusInside, reducedMotion, transitionTo]);

  const workflow = WORKFLOWS[activeIndex];

  const selectWorkflow = (index: number) => {
    transitionTo(index);
    setPaused(true);
  };

  return (
    <div
      className="relative mx-auto max-w-5xl"
      onMouseEnter={() => setPointerInside(true)}
      onMouseLeave={() => setPointerInside(false)}
      onFocusCapture={() => setFocusInside(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocusInside(false);
      }}
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        <div className="flex min-w-0 items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3">
          <div className="flex flex-none gap-1.5" aria-hidden="true">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="flex min-w-0 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 font-mono text-xs text-slate-500">
            <Terminal className="h-3 w-3 flex-none" />
            <span className="truncate">{workflow.file}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 border-b border-slate-100 bg-white px-3 py-2.5 sm:px-4">
          <div className="scrollbar-hide flex min-w-0 flex-1 gap-1 overflow-x-auto" role="tablist" aria-label="Workflow examples">
            {WORKFLOWS.map((item, index) => (
              <button
                key={item.id}
                id={`workflow-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="workflow-panel"
                onClick={() => selectWorkflow(index)}
                className={`flex-none whitespace-nowrap rounded-lg px-3 py-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  activeIndex === index ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setPaused((current) => !current)}
              className="flex flex-none items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-bold text-slate-500 transition hover:bg-slate-50 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label={paused ? 'Play workflow examples' : 'Pause workflow examples'}
            >
              {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              <span className="hidden sm:inline">{paused ? 'Play' : 'Pause'}</span>
            </button>
          )}
        </div>

        <div className="relative bg-slate-50/60 p-4 md:p-12">
          <div className="relative z-10 min-h-[336px] md:min-h-28">
            {previousIndex !== null && (
              <WorkflowPanel
                workflow={WORKFLOWS[previousIndex]}
                className="workflow-layer-exit absolute inset-0"
                ariaHidden
              />
            )}
            <WorkflowPanel
              workflow={workflow}
              className={previousIndex !== null ? 'workflow-layer-enter relative' : 'relative'}
              labelledBy={`workflow-tab-${workflow.id}`}
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px]" />
        </div>
      </div>
    </div>
  );
};

const WorkflowPanel: React.FC<{
  workflow: Workflow;
  className: string;
  labelledBy?: string;
  ariaHidden?: boolean;
}> = ({ workflow, className, labelledBy, ariaHidden = false }) => (
  <div
    id={ariaHidden ? undefined : 'workflow-panel'}
    role={ariaHidden ? undefined : 'tabpanel'}
    aria-labelledby={labelledBy}
    aria-hidden={ariaHidden || undefined}
    className={`${className} grid min-h-[336px] items-center gap-4 md:min-h-28 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-6`}
  >
    {workflow.nodes.map((node, index) => (
      <React.Fragment key={node.label}>
        {index > 0 && <Connector />}
        <WorkflowNode icon={node.icon} label={node.label} detail={node.detail} />
      </React.Fragment>
    ))}
  </div>
);

const WorkflowNode: React.FC<{ icon: IconComponent; label: string; detail: string }> = ({ icon: Icon, label, detail }) => (
  <div className="flex min-h-[78px] items-center gap-4 rounded-xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-900/5 sm:p-4 md:min-h-28">
    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-600">
      <Icon className="h-5 w-5" />
    </div>
    <div className="min-w-0">
      <div className="font-bold text-slate-900">{label}</div>
      <div className="mt-1 text-sm font-medium leading-snug text-slate-500">{detail}</div>
    </div>
  </div>
);

const Connector: React.FC = () => (
  <div className="mx-auto h-6 w-px bg-slate-300 md:h-px md:w-8" aria-hidden="true" />
);

export default WorkflowPreview;
