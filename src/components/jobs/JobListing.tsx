import React from 'react';
import { useJobs } from '../../context/JobContext';
import {
    Briefcase,
    Clock,
    Users,
    MoreVertical,
    Plus
} from 'lucide-react';

interface JobListingProps {
    onCreateJob: () => void;
}

export const JobListing: React.FC<JobListingProps> = ({ onCreateJob }) => {
    const { jobs } = useJobs();

    return (
        <div className="space-y-10">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-black gradient-text italic">Job Openings</h2>
                    <p className="text-slate-500 font-medium mt-1 italic tracking-tight">Managing {jobs.length} active and draft recruitment cycles.</p>
                </div>
                <button
                    onClick={onCreateJob}
                    className="flex items-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-2xl text-xs font-black italic transition-all shadow-lg shadow-brand-500/20 active:scale-95"
                >
                    <Plus className="w-4 h-4" />
                    Create Opening
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job) => (
                    <div key={job.id} className="card-premium p-8 group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-600 border border-slate-100 group-hover:bg-brand-50 group-hover:border-brand-200 transition-all shadow-sm">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-xl transition-all border border-transparent hover:border-slate-200">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>

                        <h3 className="text-xl font-black text-slate-950 mb-1 group-hover:text-brand-600 transition-colors italic tracking-tight leading-tight">{job.title}</h3>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1.5">{job.department}</p>

                        <div className="space-y-3.5 pt-6 mt-6 border-t border-slate-50">
                            <div className="flex items-center gap-3 text-[11px] font-black text-slate-500 uppercase tracking-tighter italic">
                                <Briefcase className="w-4 h-4 text-slate-300" />
                                {job.location}
                            </div>
                            <div className="flex items-center gap-3 text-[11px] font-black text-slate-500 uppercase tracking-tighter italic">
                                <Clock className="w-4 h-4 text-slate-300" />
                                {job.type}
                            </div>
                            <div className="flex items-center gap-3 text-[11px] font-black text-slate-500 uppercase tracking-tighter italic">
                                <Users className="w-4 h-4 text-slate-300" />
                                {job.candidateCount} Professional Applications
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                            <span className={`px-3 py-1 rounded-xl text-[10px] font-black italic tracking-widest border ${job.status === 'Open' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-100 text-slate-500 border-slate-200'
                                }`}>
                                {job.status.toUpperCase()}
                            </span>
                            <button className="text-[11px] font-black text-brand-600 hover:text-brand-700 uppercase tracking-widest transition-all italic underline-offset-4 hover:underline">
                                Process Pipeline
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
