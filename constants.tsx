
import React from 'react';
import { Bot, Cpu, Database, Globe, Layers, Zap, Code, Terminal, BrainCircuit, Rocket } from 'lucide-react';
import { NavItem, Service, TechStackItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Approach', href: '#approach' },
  { label: 'Solutions', href: '#services' },
  { label: 'AI Twin', href: '#ai' },
  { label: 'Connect', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Autonomous AI Agents',
    description: 'I design digital workers that handle multi-step workflows—from lead research to automated customer support using CrewAI.',
    icon: <Bot className="w-6 h-6 text-blue-600" />,
    tags: ['CrewAI', 'LangGraph', 'Agentic Workflows']
  },
  {
    title: 'Enterprise RAG Systems',
    description: 'I turn your messy company data into a high-performance brain. Instant, accurate answers for your team or customers.',
    icon: <Database className="w-6 h-6 text-emerald-600" />,
    tags: ['Vector DBs', 'Semantic Search', 'Retrieval']
  },
  {
    title: 'Process Automation',
    description: 'Replacing repetitive tasks with bulletproof Python scripts. I integrate your entire stack to work while you sleep.',
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    tags: ['Python', 'API Integration', 'Efficiency']
  },
  {
    title: 'Custom LLM Pipelines',
    description: 'Whether it is fine-tuning Llama 3 or optimizing Gemini prompts, I build the logic that makes AI actually useful.',
    icon: <BrainCircuit className="w-6 h-6 text-indigo-600" />,
    tags: ['Fine-tuning', 'Prompt Ops', 'Open Source']
  },
  {
    title: 'AI Dashboards',
    description: 'I build the interface for your AI operations. Beautiful, fast, and secure internal tools to manage your automation.',
    icon: <Layers className="w-6 h-6 text-slate-700" />,
    tags: ['Next.js', 'FastAPI', 'UI/UX']
  },
  {
    title: 'Growth Engineering',
    description: 'AI-driven prospecting and personalization. I help your sales team scale without increasing headcount.',
    icon: <Rocket className="w-6 h-6 text-rose-500" />,
    tags: ['Lead Gen', 'Personalization', 'Scale']
  }
];

export const TECH_STACK: TechStackItem[] = [
  { name: 'Python', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'LangChain', category: 'LLM Framework', icon: 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png' },
  { name: 'Google Gemini', category: 'Models', icon: 'https://www.gstatic.com/lamda/images/favicon_v2_192x192.png' },
  { name: 'FastAPI', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Pinecone', category: 'Vector DB', icon: 'https://www.pinecone.io/favicon.ico' },
  { name: 'Docker', category: 'DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
];

export const PROCESS_STEPS = [
  { title: 'The Audit', description: 'I deep-dive into your operations to find every bottleneck costing you time.', icon: <Terminal className="w-5 h-5" /> },
  { title: 'The Blueprint', description: 'I architect a custom AI solution that fits perfectly into your existing stack.', icon: <Code className="w-5 h-5" /> },
  { title: 'The Build', description: 'I develop, test, and refine your autonomous agents and pipelines.', icon: <Cpu className="w-5 h-5" /> },
  { title: 'The Scale', description: 'Deployment is just the start. I monitor and iterate for maximum ROI.', icon: <Globe className="w-5 h-5" /> },
];
