
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, MessageSquareText } from 'lucide-react';
import { geminiService } from '../services/gemini';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Mohd's AI Twin. I handle the technical brainstorming while he's busy building. What business process are you looking to automate today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await geminiService.generateResponse([...messages, userMsg]);
    
    setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    setIsLoading(false);
  };

  return (
    <div id="ai" className="py-24 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" /> Agentic AI Twin
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Instant Strategy</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Get an immediate automation plan from my custom-trained AI agent while I'm in deep work mode.</p>
        </div>

        <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl shadow-blue-600/5 flex flex-col h-[650px]">
          <div className="px-6 py-4 border-b border-slate-50 flex items-center justify-between bg-white">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-extrabold text-sm text-slate-900">Mohd's AI Twin</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Active System</span>
                </div>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-4 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-100 text-slate-500' : 'bg-blue-50 text-blue-600'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <MessageSquareText className="w-4 h-4" />}
                  </div>
                  <div className={`p-5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Processing request...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-slate-50/50 border-t border-slate-50">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How would you automate a real estate lead pipeline?"
                className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 rounded-2xl px-6 py-4 pr-16 text-[15px] outline-none transition-all text-slate-800 placeholder:text-slate-400 shadow-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2.5 top-2.5 bottom-2.5 px-4 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-xl transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-center text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-widest">Powered by Gemini 3 Pro & Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
