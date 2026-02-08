import React from 'react';
import { Search, Bell, User, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
    return (
        <header className="h-20 glass bg-white/70 sticky top-0 z-30 ml-64 flex items-center justify-between px-10 border-b border-white/40">
            <div className="flex items-center flex-1 max-w-2xl">
                <div className="relative w-full group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search everything: candidates, jobs, notes..."
                        className="w-full bg-slate-100/50 border border-slate-200/50 rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500/50 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-0 group-focus-within:opacity-100 transition-opacity">
                        <kbd className="px-1.5 py-0.5 text-[10px] font-black bg-slate-100 border border-slate-200 rounded text-slate-400">⌘</kbd>
                        <kbd className="px-1.5 py-0.5 text-[10px] font-black bg-slate-100 border border-slate-200 rounded text-slate-400">K</kbd>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-brand-50 rounded-full border border-brand-100">
                    <Zap className="w-3.5 h-3.5 text-brand-600 fill-brand-600" />
                    <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest italic">AI Screening Active</span>
                </div>

                <button className="p-2.5 text-slate-500 hover:text-brand-600 hover:bg-white rounded-xl transition-all relative border border-transparent hover:border-brand-100 hover:shadow-sm">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-500 rounded-full border-2 border-white animate-pulse"></span>
                </button>

                <div className="h-6 w-px bg-slate-200/60"></div>

                <button className="flex items-center gap-3 p-1 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-slate-100 hover:shadow-sm group">
                    <div className="text-right hidden sm:block px-1">
                        <p className="text-sm font-black text-slate-950 leading-none italic">Kashif Khokhar</p>
                        <p className="text-[10px] text-slate-400 mt-1.5 leading-none font-bold uppercase tracking-tighter">Recruitment Lead</p>
                    </div>
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-brand-200 transition-colors">
                        <User className="text-slate-600 w-5 h-5 group-hover:text-brand-600 transition-colors" />
                    </div>
                </button>
            </div>
        </header>
    );
};
