
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface TechStackItem {
  name: string;
  category: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}
