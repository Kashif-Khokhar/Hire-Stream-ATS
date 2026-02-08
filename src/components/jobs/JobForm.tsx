import React from 'react';
import { useForm } from 'react-hook-form';
import { useJobs } from '../../context/JobContext';
import { X, Save } from 'lucide-react';

interface JobFormData {
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    description: string;
}

interface JobFormProps {
    onClose: () => void;
}

export const JobForm: React.FC<JobFormProps> = ({ onClose }) => {
    const { addJob } = useJobs();
    const { register, handleSubmit, formState: { errors } } = useForm<JobFormData>();

    const onSubmit = (data: JobFormData) => {
        addJob({
            ...data,
            status: 'Draft',
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h2 className="text-lg font-bold text-slate-900">Create New Job</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Job Title</label>
                        <input
                            {...register("title", { required: true })}
                            placeholder="e.g. Senior Frontend Engineer"
                            className={`w-full bg-white border ${errors.title ? 'border-red-300' : 'border-slate-200'} rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all`}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Department</label>
                            <select
                                {...register("department", { required: true })}
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all appearance-none"
                            >
                                <option value="Engineering">Engineering</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Sales">Sales</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Type</label>
                            <select
                                {...register("type", { required: true })}
                                className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all appearance-none"
                            >
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Location</label>
                        <input
                            {...register("location", { required: true })}
                            placeholder="e.g. Remote or San Francisco, CA"
                            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Description</label>
                        <textarea
                            {...register("description", { required: true })}
                            placeholder="Outline the responsibilities and requirements..."
                            rows={4}
                            className="w-full bg-white border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all resize-none"
                        />
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 bg-slate-50 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2.5 bg-brand-500 text-white font-bold rounded-xl hover:bg-brand-600 shadow-lg shadow-brand-500/20 transition-all flex items-center justify-center gap-2"
                        >
                            <Save className="w-4 h-4" />
                            Save Draft
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
