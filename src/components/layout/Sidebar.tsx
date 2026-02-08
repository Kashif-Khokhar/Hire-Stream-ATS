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
        <aside className="w-64 bg-white border-r border-slate-200/60 h-screen flex flex-col fixed left-0 top-0 z-20 shadow-sm">
            <div className="p-8 border-b border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/10 rotate-3 transition-transform hover:rotate-0 cursor-pointer border border-slate-100">
                    <img src="/logo.svg" alt="HireStream Logo" className="w-6 h-6" />
                </div>
                <span className="text-xl font-black text-slate-900 tracking-tighter italic">HireStream</span>
            </div>

            <nav className="flex-1 px-4 py-8 space-y-1">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => onNavigate(item.view)}
                        data-active={currentView === item.view}
                        className={cn(
                            "premium-sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-black transition-all group",
                            currentView === item.view
                                ? "bg-brand-50 text-brand-600 shadow-sm"
                                : "text-slate-400 hover:bg-slate-50/80 hover:text-slate-900"
                        )}
                    >
                        <item.icon className={cn(
                            "w-5 h-5 transition-transform group-hover:scale-110",
                            currentView === item.view ? "text-brand-600" : "text-slate-400 group-hover:text-slate-600"
                        )} />
                        <span className="italic">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="px-4 py-8 border-t border-slate-100 space-y-1">
                {bottomItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => onNavigate(item.view)}
                        data-active={currentView === item.view}
                        className={cn(
                            "premium-sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-black transition-all group",
                            currentView === item.view
                                ? "bg-brand-50 text-brand-600 shadow-sm"
                                : "text-slate-400 hover:bg-slate-50/80 hover:text-slate-900"
                        )}
                    >
                        <item.icon className={cn(
                            "w-5 h-5 transition-transform group-hover:scale-110",
                            currentView === item.view ? "text-brand-600" : "text-slate-400 group-hover:text-slate-600"
                        )} />
                        <span className="italic">{item.label}</span>
                    </button>
                ))}

                <div className="mt-8 p-5 bg-linear-to-br from-brand-900 to-slate-900 rounded-[2rem] text-white relative overflow-hidden shadow-xl">
                    <p className="text-[10px] font-black text-brand-400 uppercase tracking-widest relative z-10 italic">Platform Plan</p>
                    <div className="mt-2 flex items-center justify-between relative z-10">
                        <span className="text-sm font-black italic">Enterprise</span>
                        <span className="text-[10px] text-brand-600 font-bold bg-white px-2 py-0.5 rounded-full shadow-sm">PRO</span>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/5 rounded-full blur-2xl" />
                </div>
            </div>
        </aside>
    );
};
