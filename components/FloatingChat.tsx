import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Bot, User, Loader2, MessageSquareText } from 'lucide-react';
import { geminiService } from '../services/gemini';
import { Message } from '../types';

const FloatingChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl shadow-blue-600/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-40 group"
            >
                {isOpen ? (
                    <X className="w-6 h-6 md:w-7 md:h-7" />
                ) : (
                    <>
                        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:animate-bounce" />
                        <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                    </>
                )}
            </button>

            {/* Chat Widget */}
            {isOpen && (
                <div className="fixed inset-0 md:inset-auto bottom-0 md:bottom-24 right-0 md:right-8 w-full md:w-96 h-screen md:h-[500px] bg-white flex flex-col overflow-hidden z-50 md:rounded-2xl md:shadow-2xl md:border md:border-slate-100 animate-in fade-in slide-in-from-bottom-4 md:animate-none">
                    {/* Header */}
                    <div className="px-4 md:px-6 py-3 md:py-4 border-b border-slate-50 flex items-center justify-between bg-white">
                        <div className="flex items-center gap-2 md:gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                                <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <div>
                                <p className="font-extrabold text-xs md:text-sm text-slate-900">Mohd's AI Twin</p>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-500"></span>
                                    <span className="text-[8px] md:text-[10px] text-slate-400 uppercase font-black tracking-widest">Active System</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 md:p-5 space-y-4 md:space-y-6 scrollbar-hide">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex gap-2 md:gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-100 text-slate-500' : 'bg-blue-50 text-blue-600'}`}>
                                        {msg.role === 'user' ? <User className="w-3 h-3 md:w-4 md:h-4" /> : <MessageSquareText className="w-3 h-3 md:w-4 md:h-4" />}
                                    </div>
                                    <div className={`p-3 md:p-4 rounded-lg md:rounded-xl text-[12px] md:text-[14px] leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'}`}>
                                        {msg.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="flex gap-2 md:gap-4 items-center bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-slate-100 shadow-sm">
                                    <Loader2 className="w-3 h-3 md:w-4 md:h-4 animate-spin text-blue-600" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Processing...</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-3 md:p-4 bg-slate-50/50 border-t border-slate-50">
                        <div className="relative group">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask me anything..."
                                className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 rounded-lg px-3 md:px-4 py-2 md:py-3 pr-10 md:pr-12 text-[12px] md:text-[14px] outline-none transition-all text-slate-800 placeholder:text-slate-400 shadow-sm"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading}
                                className="absolute right-1 md:right-1.5 top-1.5 md:top-2 bottom-1.5 md:bottom-2 px-2 md:px-3 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-md transition-all active:scale-95"
                            >
                                <Send className="w-3 h-3 md:w-4 md:h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingChat;
