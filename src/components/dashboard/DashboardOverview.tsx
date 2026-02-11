import React from 'react';
import {
    Users,
    Briefcase,
    Clock,
    ArrowUpRight,
    Calendar,
    CheckCircle2,
    Clock3
} from 'lucide-react';
import { cn } from '../../utils/cn';

export const DashboardOverview: React.FC = () => {
    const stats = [
        { label: 'Active Jobs', value: '12', change: '+2', icon: Briefcase, color: 'text-brand-600', bg: 'bg-brand-50' },
        { label: 'Total Candidates', value: '254', change: '+18', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { label: 'Interviews Today', value: '8', change: 'Live', icon: Calendar, color: 'text-success-600', bg: 'bg-success-50' },
        { label: 'Avg. Time to Hire', value: '18d', change: '-2d', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    ];

    const activities = [
        { id: 1, user: 'Sarah Connor', action: 'Applied for', target: 'Senior Frontend Engineer', time: '2h ago', status: 'New' },
        { id: 2, user: 'John Doe', action: 'Moved to', target: 'Technical Interview', time: '4h ago', status: 'Update' },
        { id: 3, user: 'Kyle Reese', action: 'Signed Offer', target: 'Lead Designer', time: '6h ago', status: 'Success' },
        { id: 4, user: 'Ellen Ripley', action: 'Added Note to', target: 'Product Manager', time: '1d ago', status: 'Note' },
    ];

    return (
        <div className="space-y-12 pb-10">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black gradient-text italic mb-3 tracking-tighter">Workspace Overview</h1>
                    <p className="text-slate-500 font-medium italic flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        Welcome back, Kashif. Your pipeline is looking healthy today.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest italic hover:bg-slate-50 transition-all shadow-sm">Export Report</button>
                    <button className="px-5 py-2.5 bg-brand-500 text-white rounded-xl text-xs font-black uppercase tracking-widest italic hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 active:scale-95">New Recruitment</button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="card-premium p-8 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <stat.icon className="w-16 h-16" />
                        </div>
                        <div className="flex justify-between items-start mb-6">
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3 duration-500 shadow-sm", stat.bg, stat.color)}>
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <span className={cn(
                                "px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-xs transition-colors",
                                stat.change.includes('+') ? "bg-emerald-50 text-emerald-600 border border-emerald-100/50" : "bg-brand-50 text-brand-600 border border-brand-100/50"
                            )}>
                                {stat.change}
                                {stat.change !== 'Live' && <ArrowUpRight className="w-3.5 h-3.5" />}
                            </span>
                        </div>
                        <h3 className="text-3xl font-black text-slate-950 mb-1.5 italic tracking-tight">{stat.value}</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>

                        <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Chart Card */}
                <div className="lg:col-span-2 card-premium p-10 h-[450px] flex flex-col group">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-xl font-black text-slate-900 italic tracking-tight">Application Trends</h3>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Global recruitment volume</p>
                        </div>
                        <div className="flex gap-2 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
                            {['7D', '1M', '3M'].map((t) => (
                                <button key={t} className={cn(
                                    "px-4 py-2 text-[10px] font-black rounded-xl transition-all",
                                    t === '1M' ? "bg-white text-indigo-600 shadow-premium" : "text-slate-400 hover:text-slate-600"
                                )}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 flex items-end gap-4 px-2">
                        {[45, 60, 40, 80, 50, 70, 90, 65, 85, 40, 70, 55].map((h, i) => (
                            <div key={i} className="flex-1 relative group/bar">
                                <div
                                    className="w-full bg-linear-to-t from-brand-500/5 via-indigo-500/10 to-transparent rounded-t-2xl group-hover/bar:from-brand-500/20 group-hover/bar:via-indigo-500/30 transition-all cursor-pointer relative min-h-[4px]"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 px-2 py-1 bg-slate-900 text-white text-[9px] font-black rounded opacity-0 group-hover/bar:opacity-100 transition-all scale-75 group-hover/bar:scale-100">
                                        {Math.round(h * 2.5)}
                                    </div>
                                    <div className="absolute inset-x-0 top-0 h-1.5 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50 opacity-40 group-hover/bar:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-8 px-2">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                            <span key={m} className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{m}</span>
                        ))}
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="card-premium p-10 flex flex-col">
                    <div className="mb-8">
                        <h3 className="text-xl font-black text-slate-900 italic tracking-tight">Recent activity</h3>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Real-time updates</p>
                    </div>
                    <div className="space-y-8 flex-1">
                        {activities.map((act) => (
                            <div key={act.id} className="flex gap-5 group cursor-pointer">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xs font-black text-slate-500 border border-slate-100 group-hover:bg-white group-hover:border-indigo-200 group-hover:text-indigo-600 transition-all shadow-sm group-hover:shadow-indigo-500/10 group-hover:-rotate-3">
                                        {act.user.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className={cn(
                                        "absolute -right-1 -bottom-1 w-5 h-5 rounded-full border-4 border-white flex items-center justify-center shadow-sm",
                                        act.status === 'Success' ? "bg-emerald-500" : act.status === 'New' ? "bg-brand-500" : "bg-amber-500"
                                    )}>
                                        {act.status === 'Success' ? <CheckCircle2 className="w-2.5 h-2.5 text-white" /> : <Clock3 className="w-2.5 h-2.5 text-white" />}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-slate-600 leading-snug">
                                        <span className="font-black text-slate-950 group-hover:text-indigo-600 transition-colors">{act.user}</span> {act.action} <span className="font-bold text-slate-900 italic underline decoration-indigo-500/20 decoration-2 underline-offset-4">{act.target}</span>
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Clock className="w-3 h-3 text-slate-300" />
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{act.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-10 py-4 bg-slate-900 text-white text-[10px] font-black rounded-2xl hover:bg-black transition-all uppercase tracking-[0.2em] italic shadow-lg shadow-slate-900/10 active:scale-[0.98]">
                        Full Audit Log
                    </button>
                </div>
            </div>
        </div>
    );
};

