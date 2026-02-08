import React from 'react';
import { useJobs } from '../../context/JobContext';
import {
    Search,
    Filter,
    MoreHorizontal,
    Mail,
    Phone,
    ExternalLink,
    Star
} from 'lucide-react';
import type { Candidate } from '../../types';

interface CandidatesListProps {
    onCandidateClick: (candidate: Candidate) => void;
}

export const CandidatesList: React.FC<CandidatesListProps> = ({ onCandidateClick }) => {
    const { candidates } = useJobs();

    return (
        <div className="space-y-10">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-black gradient-text italic">Candidates</h2>
                    <p className="text-slate-500 font-medium mt-1 italic tracking-tight">Managing {candidates.length} active professional profiles.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by name, role..."
                            className="bg-white border border-slate-200/60 rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all w-80 font-medium"
                        />
                    </div>
                    <button className="flex items-center gap-2 border border-slate-200/60 bg-white hover:bg-slate-50 px-5 py-2.5 rounded-2xl text-xs font-black text-slate-600 transition-all shadow-sm uppercase tracking-widest italic">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                </div>
            </div>

            <div className="bg-white border border-slate-200/60 rounded-[2.5rem] overflow-hidden shadow-clean">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Candidate</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Applied Role</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Stage</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Rating</th>
                            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {candidates.map((candidate) => (
                            <tr
                                key={candidate.id}
                                className="hover:bg-slate-50/50 transition-colors cursor-pointer group"
                                onClick={() => onCandidateClick(candidate)}
                            >
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-sm font-black text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:border-brand-200 transition-all border border-transparent">
                                            {candidate.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="font-black text-slate-900 italic tracking-tight">{candidate.name}</div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{candidate.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className="text-sm font-black text-slate-700 italic tracking-tight">{candidate.role}</span>
                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-1">Applied {candidate.appliedDate}</div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className="px-3 py-1 rounded-xl text-[10px] font-black bg-brand-50 text-brand-600 border border-brand-100 shadow-xs uppercase italic tracking-wider">
                                        {candidate.stage}
                                    </span>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
                                        <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                                        {candidate.rating.toFixed(1)}
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 translate-x-4">
                                        <button className="p-2 text-slate-400 hover:text-brand-600 hover:bg-white rounded-xl border border-transparent hover:border-brand-100 transition-all shadow-sm">
                                            <Mail className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-brand-600 hover:bg-white rounded-xl border border-transparent hover:border-brand-100 transition-all shadow-sm">
                                            <Phone className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-brand-600 hover:bg-white rounded-xl border border-transparent hover:border-brand-100 transition-all shadow-sm">
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                        <div className="w-px h-6 bg-slate-200 mx-1"></div>
                                        <button className="p-2 text-slate-400 hover:text-brand-600 hover:bg-white rounded-xl border border-transparent hover:border-brand-100 transition-all shadow-sm">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
