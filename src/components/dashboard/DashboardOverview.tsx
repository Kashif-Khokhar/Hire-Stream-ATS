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
        { label: 'Total Candidates', value: '254', change: '+18', icon: Users, color: 'text-accent-600', bg: 'bg-accent-50' },
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
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-black gradient-text italic mb-2">Workspace Overview</h1>
                <p className="text-slate-500 font-medium italic">Welcome back, Kashif. Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="card-premium p-6 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300", stat.bg, stat.color)}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className={cn(
                                "px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1",
                                stat.change.includes('+') ? "bg-emerald-50 text-emerald-600" : "bg-brand-50 text-brand-600"
                            )}>
                                {stat.change}
                                {stat.change !== 'Live' && <ArrowUpRight className="w-3 h-3" />}
                            </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-1">{stat.value}</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Card (Placeholder) */}
                <div className="lg:col-span-2 card-premium p-8 h-[400px] flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-black text-slate-900">Application Trends</h3>
                        <div className="flex gap-2 bg-slate-50 p-1 rounded-xl">
                            {['7D', '1M', '3M'].map((t) => (
                                <button key={t} className={cn(
                                    "px-3 py-1.5 text-[10px] font-black rounded-lg transition-all",
                                    t === '1M' ? "bg-white text-brand-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                                )}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 flex items-end gap-3 px-2">
                        {[45, 60, 40, 80, 50, 70, 90, 65, 85, 40, 70, 55].map((h, i) => (
                            <div key={i} className="flex-1 relative group">
                                <div
                                    className="w-full bg-brand-500/10 rounded-t-lg group-hover:bg-brand-500/20 transition-all cursor-pointer relative"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 px-2">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                            <span key={m} className="text-[10px] font-black text-slate-400 uppercase">{m}</span>
                        ))}
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="card-premium p-8">
                    <h3 className="text-lg font-black text-slate-900 mb-6 italic">Recent Activity</h3>
                    <div className="space-y-6">
                        {activities.map((act) => (
                            <div key={act.id} className="flex gap-4 group">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-xs font-black text-slate-500 border border-slate-100 group-hover:bg-white group-hover:border-brand-200 group-hover:text-brand-600 transition-all shadow-sm">
                                        {act.user.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className={cn(
                                        "absolute -right-1 -bottom-1 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center",
                                        act.status === 'Success' ? "bg-emerald-500" : act.status === 'New' ? "bg-brand-500" : "bg-amber-500"
                                    )}>
                                        {act.status === 'Success' ? <CheckCircle2 className="w-2.5 h-2.5 text-white" /> : <Clock3 className="w-2.5 h-2.5 text-white" />}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-slate-600 leading-snug">
                                        <span className="font-black text-slate-900">{act.user}</span> {act.action} <span className="font-bold text-slate-900 italic underline decoration-brand-500/30 decoration-2 underline-offset-2">{act.target}</span>
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{act.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 bg-slate-50 text-slate-600 text-xs font-black rounded-xl hover:bg-slate-100 transition-colors uppercase tracking-widest italic border border-slate-100">
                        View All Activity
                    </button>
                </div>
            </div>
        </div>
    );
};
