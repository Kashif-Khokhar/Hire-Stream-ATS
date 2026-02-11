import React from 'react';
import {
    LayoutDashboard,
    Users,
    Briefcase,
    Calendar,
    Settings,
    HelpCircle,
    Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';

export type AppView = 'dashboard' | 'pipeline' | 'jobs' | 'candidates' | 'schedule' | 'settings' | 'help';

interface SidebarProps {
    currentView: AppView;
    onNavigate: (view: AppView) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', view: 'dashboard' as const },
        { icon: Zap, label: 'Pipeline', view: 'pipeline' as const },
        { icon: Briefcase, label: 'Jobs', view: 'jobs' as const },
        { icon: Users, label: 'Candidates', view: 'candidates' as const },
        { icon: Calendar, label: 'Schedule', view: 'schedule' as const },
    ];

    const bottomItems = [
        { icon: Settings, label: 'Settings', view: 'settings' as const },
        { icon: HelpCircle, label: 'Help', view: 'help' as const },
    ];

    return (
        <aside className="w-64 bg-white border-r border-slate-200/60 h-screen flex flex-col fixed left-0 top-0 z-20 shadow-sm overflow-hidden bg-dot-pattern">
            <div className="p-10 flex items-center gap-4 relative">
                <div className="w-12 h-12 bg-linear-to-br from-brand-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/20 rotate-3 transition-all hover:rotate-0 hover:scale-110 cursor-pointer border border-white/20">
                    <img src="/logo.svg" alt="Logo" className="w-7 h-7 brightness-0 invert" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-black text-slate-900 tracking-tighter italic leading-none">HireStream</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">HR Intelligence</span>
                </div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => onNavigate(item.view)}
                        data-active={currentView === item.view}
                        className={cn(
                            "premium-sidebar-item w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-black transition-all group relative",
                            currentView === item.view
                                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20 active:scale-95"
                                : "text-slate-400 hover:bg-slate-100/50 hover:text-slate-900"
                        )}
                    >
                        <item.icon className={cn(
                            "w-5 h-5 transition-transform group-hover:scale-110",
                            currentView === item.view ? "text-white" : "text-slate-400 group-hover:text-slate-900"
                        )} />
                        <span className="italic relative z-10">{item.label}</span>
                        {currentView === item.view && (
                            <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent rounded-2xl opacity-50" />
                        )}
                    </button>
                ))}
            </nav>

            <div className="px-4 py-8 border-t border-slate-100 space-y-2 bg-white/50 backdrop-blur-sm">
                {bottomItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => onNavigate(item.view)}
                        data-active={currentView === item.view}
                        className={cn(
                            "premium-sidebar-item w-full flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-black transition-all group",
                            currentView === item.view
                                ? "bg-indigo-50 text-indigo-600 shadow-sm"
                                : "text-slate-400 hover:bg-slate-100/50 hover:text-slate-900"
                        )}
                    >
                        <item.icon className={cn(
                            "w-5 h-5 transition-transform group-hover:scale-110",
                            currentView === item.view ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-900"
                        )} />
                        <span className="italic">{item.label}</span>
                    </button>
                ))}

                <div className="mt-8 p-6 bg-linear-to-br from-slate-900 via-indigo-950 to-brand-950 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl group cursor-pointer active:scale-[0.98] transition-transform">
                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Zap className="w-12 h-12" />
                    </div>
                    <p className="text-[10px] font-black text-brand-400 uppercase tracking-widest relative z-10 italic">Platform Plan</p>
                    <div className="mt-2 flex items-center justify-between relative z-10">
                        <span className="text-sm font-black italic">Enterprise</span>
                        <div className="flex items-center gap-1.5 bg-brand-500 px-2 py-0.5 rounded-full shadow-lg shadow-brand-500/20">
                            <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                            <span className="text-[9px] text-white font-black uppercase">PRO</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-tr from-brand-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </aside>
    );
};

