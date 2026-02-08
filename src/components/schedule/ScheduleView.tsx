import React from 'react';
import {
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    Clock,
    MapPin
} from 'lucide-react';
import { cn } from '../../utils/cn';

export const ScheduleView: React.FC = () => {
    const events = [
        {
            id: 'e1',
            title: 'Initial Screening: Sarah Connor',
            time: '10:00 AM - 11:00 AM',
            date: 'Today',
            type: 'Video Call',
            attendees: ['Kashif Khokhar', 'Sarah Connor'],
            status: 'Upcoming'
        },
        {
            id: 'e2',
            title: 'Technical Interview: Kyle Reese',
            time: '02:00 PM - 03:30 PM',
            date: 'Tomorrow',
            type: 'On-site',
            attendees: ['John Doe', 'Kyle Reese'],
            status: 'Upcoming'
        }
    ];

    return (
        <div className="space-y-10">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-black gradient-text italic">Schedule</h2>
                    <p className="text-slate-500 font-medium mt-1 italic tracking-tight">Manage your upcoming interviews and meeting cycles.</p>
                </div>
                <div className="flex items-center gap-2 bg-white border border-slate-200/60 rounded-2xl p-1 shadow-sm">
                    <button className="px-5 py-2 bg-brand-50 text-brand-600 text-[10px] font-black uppercase italic rounded-xl transition-all shadow-xs">List View</button>
                    <button className="px-5 py-2 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase italic rounded-xl transition-all">Calendar</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 italic">Upcoming Events</h3>
                    <div className="space-y-6">
                        {events.map((event) => (
                            <div key={event.id} className="card-premium p-6 group">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-slate-50 rounded-[1.25rem] flex flex-col items-center justify-center border border-slate-100 group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors shadow-sm">
                                            <span className="text-[9px] font-black text-slate-400 uppercase leading-none tracking-widest italic">{event.date === 'Today' ? 'Feb' : 'Feb'}</span>
                                            <span className="text-xl font-black text-slate-900 leading-none mt-1.5">{event.date === 'Today' ? '08' : '09'}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-slate-950 group-hover:text-brand-600 transition-colors italic tracking-tight leading-tight">{event.title}</h4>
                                            <div className="flex items-center gap-4 mt-2.5 text-[11px] text-slate-500 font-black italic tracking-tight">
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                                                    {event.time}
                                                </span>
                                                <span className="text-slate-200">/</span>
                                                <span className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                                                    {event.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="bg-brand-500 text-white px-5 py-2.5 rounded-xl text-xs font-black italic hover:bg-brand-600 shadow-lg shadow-brand-500/20 active:scale-95 transition-all">
                                        Check-in
                                    </button>
                                </div>
                                <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2.5">
                                            {event.attendees.map((a, i) => (
                                                <div key={i} className="w-8 h-8 rounded-xl bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-black text-slate-500 group-hover:border-brand-50 transition-colors shadow-xs">
                                                    {a.split(' ').map(n => n[0]).join('')}
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic ml-1">{event.attendees.length} Expected</span>
                                    </div>
                                    <button className="text-[11px] font-black text-slate-400 hover:text-brand-600 uppercase tracking-widest flex items-center gap-2 transition-colors italic">
                                        Managing Sequence
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="card-premium p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="font-black text-slate-900 italic tracking-tight">February 2026</h4>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-slate-50 rounded-xl border border-slate-100 transition-colors"><ChevronLeft className="w-4 h-4 text-slate-400" /></button>
                                <button className="p-2 hover:bg-slate-50 rounded-xl border border-slate-100 transition-colors"><ChevronRight className="w-4 h-4 text-slate-400" /></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center mb-6">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                                <span key={d} className="text-[10px] font-black text-slate-300 uppercase italic tracking-widest">{d}</span>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center">
                            {Array.from({ length: 28 }).map((_, i) => (
                                <button
                                    key={i}
                                    className={cn(
                                        "aspect-square text-[11px] font-black rounded-xl transition-all flex items-center justify-center relative italic leading-none",
                                        i + 1 === 8 ? "bg-brand-500 text-white shadow-xl shadow-brand-500/30" : "text-slate-600 hover:bg-slate-50 hover:text-brand-600"
                                    )}
                                >
                                    {i + 1}
                                    {(i + 1 === 9 || i + 1 === 15) && i + 1 !== 8 && (
                                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-brand-400 rounded-full shadow-xs" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-slate-950/20 group">
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-brand-400 mb-6">
                                <CalendarIcon className="w-5 h-5 fill-current" />
                            </div>
                            <h4 className="font-black text-lg italic tracking-tight">System Intel</h4>
                            <p className="text-xs text-slate-400 mt-3 leading-relaxed font-medium italic">Sync with Google Workspace to unlock intelligent conflict resolution and auto-buffering between interview slots.</p>
                            <button className="mt-8 bg-brand-500 hover:bg-brand-600 text-white px-5 py-3 rounded-xl font-black text-xs transition-all flex items-center gap-3 w-full justify-center shadow-lg shadow-brand-500/20 group-hover:-translate-y-1">
                                Upgrade Integration
                                <CalendarIcon className="w-4 h-4" />
                            </button>
                        </div>
                        <CalendarIcon className="absolute -right-8 -bottom-8 w-40 h-40 text-white opacity-5 rotate-12 transition-transform duration-700 group-hover:scale-125" />
                    </div>
                </div>
            </div>
        </div>
    );
};
