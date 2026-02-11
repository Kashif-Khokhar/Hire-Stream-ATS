import React from 'react';
import {
    LayoutDashboard,
    Users,
    Briefcase,
    Calendar,
    Settings,
    HelpCircle,
    Zap,
    X,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { cn } from '../../utils/cn';

export type AppView = 'dashboard' | 'pipeline' | 'jobs' | 'candidates' | 'schedule' | 'settings' | 'help';

interface SidebarProps {
    currentView: AppView;
    onNavigate: (view: AppView) => void;
    isOpen: boolean;
    onClose: () => void;
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
    currentView,
    onNavigate,
    isOpen,
    onClose,
    isCollapsed,
    toggleCollapse
}) => {
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
        <>
            {/* Mobile Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            <aside
                className={cn(
                    "bg-white border-r border-slate-200/60 h-screen flex flex-col fixed left-0 top-0 z-50 shadow-sm bg-dot-pattern transition-all duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
                    isCollapsed ? "lg:w-20" : "lg:w-64",
                    "w-64" // Always w-64 on mobile
                )}
            >
                <div className={cn("p-6 flex items-center justify-between relative", isCollapsed ? "lg:p-4 lg:justify-center" : "lg:p-10")}>
                    <div className={cn("flex items-center gap-4 transition-all", isCollapsed && "lg:scale-0 lg:w-0 lg:opacity-0 hidden")}>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/20 rotate-3 transition-all hover:rotate-0 hover:scale-110 cursor-pointer shrink-0">
                            <img src="/logo.svg" alt="Logo" className="w-full h-full" />
                        </div>
                        <div className="flex flex-col whitespace-nowrap">
                            <span className="text-xl font-black text-slate-900 tracking-tighter italic leading-none">HireStream</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">HR Intelligence</span>
                        </div>
                    </div>

                    {/* Collapsed Logo */}
                    {isCollapsed && (
                        <div className="hidden lg:flex w-10 h-10 rounded-xl items-center justify-center shadow-lg shadow-brand-500/20 cursor-pointer">
                            <img src="/logo.svg" alt="Logo" className="w-full h-full" />
                        </div>
                    )}

                    <button onClick={onClose} className="lg:hidden p-2 text-slate-400 hover:bg-slate-100 rounded-xl">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto overflow-x-hidden no-scrollbar">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => onNavigate(item.view)}
                            data-active={currentView === item.view}
                            className={cn(
                                "premium-sidebar-item w-full flex items-center gap-3 px-0 py-3 rounded-2xl text-sm font-black transition-all group relative",
                                isCollapsed ? "lg:justify-center lg:px-0" : "px-5",
                                currentView === item.view
                                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20 active:scale-95"
                                    : "text-slate-400 hover:bg-slate-100/50 hover:text-slate-900"
                            )}
                            title={isCollapsed ? item.label : undefined}
                        >
                            <item.icon className={cn(
                                "w-5 h-5 shrink-0 transition-transform group-hover:scale-110",
                                currentView === item.view ? "text-white" : "text-slate-400 group-hover:text-slate-900"
                            )} />
                            <span className={cn("italic relative z-10 whitespace-nowrap transition-all duration-300", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>{item.label}</span>
                            {currentView === item.view && !isCollapsed && (
                                <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent rounded-2xl opacity-50 block" />
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
                                "premium-sidebar-item w-full flex items-center gap-3 px-0 py-3 rounded-2xl text-sm font-black transition-all group",
                                isCollapsed ? "lg:justify-center" : "px-5",
                                currentView === item.view
                                    ? "bg-indigo-50 text-indigo-600 shadow-sm"
                                    : "text-slate-400 hover:bg-slate-100/50 hover:text-slate-900"
                            )}
                            title={isCollapsed ? item.label : undefined}
                        >
                            <item.icon className={cn(
                                "w-5 h-5 shrink-0 transition-transform group-hover:scale-110",
                                currentView === item.view ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-900"
                            )} />
                            <span className={cn("italic whitespace-nowrap transition-all duration-300", isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100")}>{item.label}</span>
                        </button>
                    ))}

                    {!isCollapsed ? (
                        <div className="mt-8 p-6 bg-linear-to-br from-slate-900 via-indigo-950 to-brand-950 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl group cursor-pointer active:scale-[0.98] transition-transform hidden lg:block">
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
                    ) : (
                        <div className="hidden lg:flex items-center justify-center mt-8 pt-4 border-t border-slate-100">
                            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-brand-400 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <Zap className="w-4 h-4 fill-current" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Collapse Toggle (Desktop Only) */}
                <button
                    onClick={toggleCollapse}
                    className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 hover:text-brand-600 shadow-sm z-50 hover:scale-110 transition-all"
                >
                    {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
                </button>
            </aside>
        </>
    );
};

