import React from 'react';
import { ArrowRightLeft, BarChart3, CheckCircle2, FileCheck2, ReceiptText, Route, UserRoundPlus } from 'lucide-react';
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Workflows', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#approach' },
];

export const WORK_EXAMPLES = [
  {
    title: 'Client onboarding',
    description: 'Turn an approved intake into the right project, folders, tasks, CRM records and team notifications.',
    icon: <UserRoundPlus className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Reporting preparation',
    description: 'Collect data, flag missing inputs and prepare reports for a person to review before they are sent.',
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Lead routing',
    description: 'Validate new enquiries, assign the right owner and create the next follow-up without manual sorting.',
    icon: <Route className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Invoicing and handoffs',
    description: 'Move approved work between delivery and finance without repeatedly copying the same details.',
    icon: <ReceiptText className="w-6 h-6 text-blue-600" />,
  },
];

export const TECH_STACK = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/EA4B71' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
];

export const PROCESS_STEPS = [
  {
    title: 'Scope',
    description: 'We choose one repetitive workflow, its success criteria and the systems it needs to connect.',
    icon: <FileCheck2 className="w-5 h-5" />,
  },
  {
    title: 'Build and test',
    description: 'We build it in a controlled environment, including validation, retries and failure alerts.',
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
  {
    title: 'Handover',
    description: 'Your team gets a working system, clear documentation and a recorded walkthrough.',
    icon: <ArrowRightLeft className="w-5 h-5" />,
  },
];

export const PILOT_INCLUDES = [
  'One clearly defined workflow',
  'Up to three primary integrations',
  'Testing, error handling and monitoring',
  'Documentation and handover',
  '30 days of defect support',
];
