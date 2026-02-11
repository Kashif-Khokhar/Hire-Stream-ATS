import React from 'react';
import { Search, Bell, User, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
    return (
        <header className="h-20 glass bg-white/80 sticky top-0 z-30 ml-64 flex items-center justify-between px-10 border-b border-slate-200/40">
            <div className="flex items-center flex-1 max-w-2xl">
                <div className="relative w-full group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 group-focus-within:scale-110 transition-all" />
                    <input
                        type="text"
                        placeholder="Search everything: candidates, jobs, notes..."
                        className="w-full bg-slate-100/50 border border-slate-200/50 rounded-2xl py-3 pl-14 pr-4 text-sm focus:outline-none focus:ring-8 focus:ring-brand-500/5 focus:border-brand-500/40 focus:bg-white transition-all font-medium placeholder:text-slate-400 shadow-sm"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 opacity-0 group-focus-within:opacity-100 transition-all translate-x-4 group-focus-within:translate-x-0">
                        <kbd className="px-2 py-0.5 text-[10px] font-black bg-slate-100 border border-slate-200 rounded-lg text-slate-400 shadow-xs">⌘</kbd>
                        <kbd className="px-2 py-0.5 text-[10px] font-black bg-slate-100 border border-slate-200 rounded-lg text-slate-400 shadow-xs">K</kbd>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-8">
                <div className="hidden lg:flex items-center gap-2.5 px-4 py-2 bg-indigo-50 rounded-xl border border-indigo-100/50 shadow-xs">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                    <Zap className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest italic">AI Screening Active</span>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-3 text-slate-500 hover:text-brand-600 hover:bg-white rounded-xl transition-all relative border border-transparent hover:border-brand-100 hover:shadow-spotlight">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-indigo-500 rounded-full border-2 border-white shadow-sm">
                            <span className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-75" />
                        </span>
                    </button>

                    <div className="h-6 w-px bg-slate-200/60 mx-2"></div>

                    <button className="flex items-center gap-4 p-1.5 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-slate-200/50 hover:shadow-premium group">
                        <div className="text-right hidden sm:block px-1">
                            <p className="text-sm font-black text-slate-950 leading-none italic group-hover:text-brand-600 transition-colors">Kashif Khokhar</p>
                            <p className="text-[10px] text-slate-400 mt-2 leading-none font-bold uppercase tracking-widest opacity-80">Recruitment Lead</p>
                        </div>
                        <div className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-brand-300 group-hover:rotate-3 transition-all relative overflow-hidden">
                            <User className="text-slate-600 w-5.5 h-5.5 group-hover:text-brand-600 transition-colors relative z-10" />
                            <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 transition-colors" />
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

