import React from 'react';
import {
    X,
    MapPin,
    Mail,
    Phone,
    Calendar,
    Download,
    Star,
    Plus,
    Send,
    FileText
} from 'lucide-react';
import type { Candidate } from '../../types';
import { cn } from '../../utils/cn';

interface CandidateProfileProps {
    candidate: Candidate;
    onClose: () => void;
}

export const CandidateProfile: React.FC<CandidateProfileProps> = ({ candidate, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/60 backdrop-blur-md transition-all duration-500">
            <div
                className="w-full max-w-2xl h-screen bg-white shadow-2xl animate-in slide-in-from-right duration-500 ease-out flex flex-col border-l border-white/20"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="px-8 py-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-xl font-black text-white shadow-xl shadow-brand-500/20 rotate-3 transition-transform hover:rotate-0">
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 italic tracking-tight leading-tight">{candidate.name}</h2>
                            <div className="flex items-center gap-2 mt-1.5">
                                <span className="px-2 py-0.5 rounded-lg bg-brand-50 text-brand-600 text-[10px] font-black uppercase tracking-widest italic border border-brand-100">
                                    {candidate.role}
                                </span>
                                <span className="text-slate-300">/</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">ID: {candidate.id.slice(0, 8)}</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 text-slate-400 hover:text-slate-900 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-slate-200 hover:shadow-sm"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-10 space-y-10 no-scrollbar">
                    {/* Stats Tiles */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Mail, label: 'Email Address', val: candidate.email },
                            { icon: Phone, label: 'Mobile Number', val: '+1 (555) 234-5678' },
                            { icon: MapPin, label: 'Current Location', val: 'New York, USA' },
                            { icon: Calendar, label: 'Application Date', val: candidate.appliedDate },
                        ].map((stat, i) => (
                            <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors group">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-brand-500 transition-colors">{stat.label}</p>
                                <div className="flex items-center gap-2.5 text-slate-900 font-bold text-xs italic tracking-tight">
                                    <stat.icon className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-400" />
                                    {stat.val}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Rating Assessment */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10 flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-black italic tracking-tight">Technical Assessment</h3>
                                <p className="text-[11px] text-slate-400 font-medium italic mt-1">Overall candidate performance score</p>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-2 text-amber-400">
                                    <Star className="w-5 h-5 fill-current" />
                                    <span className="text-3xl font-black italic">{candidate.rating}</span>
                                </div>
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-1">Scale of 5.0</p>
                            </div>
                        </div>
                        <div className="flex gap-2 relative z-10">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <div
                                    key={star}
                                    className={cn(
                                        "h-1.5 flex-1 rounded-full transition-all duration-500",
                                        star <= Math.floor(candidate.rating) ? "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" : "bg-white/10"
                                    )}
                                />
                            ))}
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl" />
                    </div>

                    {/* Quick Actions / Resume */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between px-2">
                            <h3 className="text-sm font-black text-slate-900 uppercase italic tracking-widest leading-none">Professional Resume</h3>
                            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-white border border-slate-100 hover:border-brand-200 rounded-xl transition-all group">
                                <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-500" />
                                <span className="text-[10px] font-black text-slate-500 group-hover:text-brand-600 uppercase italic">Download PDF</span>
                            </button>
                        </div>
                        <div className="card-premium aspect-video flex flex-col items-center justify-center bg-slate-50/30 border-dashed border-2 p-10 group overflow-hidden relative">
                            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-slate-300 border border-slate-100 shadow-sm group-hover:scale-110 group-hover:text-brand-500 transition-all duration-500">
                                <FileText className="w-8 h-8" />
                            </div>
                            <p className="mt-6 text-sm font-black text-slate-400 italic">Secure Preview Loading...</p>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-500/10">
                                <div className="h-full bg-brand-500 w-1/3 animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Timeline / Notes */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between px-2">
                            <h3 className="text-sm font-black text-slate-900 uppercase italic tracking-widest leading-none flex items-center gap-3">
                                Evolution Notes
                                <span className="w-5 h-5 rounded-lg bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-200">
                                    {candidate.notes.length}
                                </span>
                            </h3>
                            <button className="text-[10px] font-black text-brand-500 hover:text-brand-600 uppercase italic flex items-center gap-1.5 transition-colors">
                                <Plus className="w-3.5 h-3.5" />
                                Append Feedback
                            </button>
                        </div>

                        <div className="space-y-4">
                            {candidate.notes.map((note) => (
                                <div key={note.id} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-100">
                                    <div className="absolute left-[-4px] top-2 w-2.4 h-2.4 rounded-full bg-slate-200 border-4 border-white" />
                                    <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100/60 hover:border-brand-100 transition-colors">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[11px] font-black text-slate-900 italic">{note.author}</span>
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{note.createdAt}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium italic">{note.content}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="relative mt-8 pt-4">
                                <textarea
                                    placeholder="Type high-level assessment notes..."
                                    className="w-full bg-slate-50/30 border border-slate-200/60 rounded-[1.5rem] p-6 pr-14 text-xs focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500/50 min-h-[120px] resize-none font-medium italic placeholder:text-slate-300 transition-all"
                                />
                                <button className="absolute right-4 bottom-4 p-3 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/30 active:scale-90 group">
                                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
