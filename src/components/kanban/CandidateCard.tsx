import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Candidate } from '../../types';
import { Star, MessageSquare, Paperclip, ExternalLink, Calendar } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CandidateCardProps {
    candidate: Candidate;
    isOverlay?: boolean;
    onClick?: (candidate: Candidate) => void;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, isOverlay, onClick }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: candidate.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const getRoleColor = (role: string) => {
        if (role.toLowerCase().includes('engineer')) return 'bg-brand-50 text-brand-600 border-brand-100/50';
        if (role.toLowerCase().includes('designer')) return 'bg-indigo-50 text-indigo-600 border-indigo-100/50';
        if (role.toLowerCase().includes('manager')) return 'bg-emerald-50 text-emerald-600 border-emerald-100/50';
        return 'bg-slate-50 text-slate-600 border-slate-100/50';
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={() => onClick?.(candidate)}
            className={cn(
                "bg-white p-6 rounded-[2rem] border border-slate-200/60 shadow-sm transition-all duration-500 cursor-grab active:cursor-grabbing group select-none relative overflow-hidden",
                isDragging && "opacity-40 grayscale",
                isOverlay ? "shadow-premium border-brand-300 ring-8 ring-brand-500/5 rotate-2 scale-105" : "hover:shadow-premium hover:border-brand-200 hover:-translate-y-2"
            )}
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <ExternalLink className="w-12 h-12" />
            </div>

            <div className="flex justify-between items-start mb-5 relative z-10">
                <div className="flex-1">
                    <h4 className="font-black text-slate-950 text-sm group-hover:text-brand-600 transition-colors italic tracking-tight leading-none">
                        {candidate.name}
                    </h4>
                    <div className={cn(
                        "mt-2 px-2.5 py-1 rounded-lg border text-[9px] font-black uppercase tracking-widest italic w-fit shadow-xs",
                        getRoleColor(candidate.role)
                    )}>
                        {candidate.role}
                    </div>
                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[10px] font-black text-slate-500 border border-slate-100 group-hover:bg-white group-hover:border-brand-300 group-hover:text-brand-600 group-hover:rotate-6 transition-all shadow-sm">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                </div>
            </div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="flex items-center text-amber-500 bg-amber-50/50 px-2.5 py-1 rounded-lg border border-amber-100/50 shadow-xs">
                    <Star className="w-3 h-3 fill-current mr-1.5" />
                    <span className="text-[10px] font-black leading-none">{candidate.rating.toFixed(1)}</span>
                </div>
                <div className="h-4 w-px bg-slate-100"></div>
                <div className="flex items-center gap-2 text-slate-400 font-bold text-[9px] uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    {candidate.appliedDate}
                </div>
            </div>

            <div className="flex items-center justify-between pt-5 border-t border-slate-50 relative z-10">
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-900 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-[10px] font-black">{candidate.notes.length}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-900 transition-colors">
                        <Paperclip className="w-4 h-4" />
                        <span className="text-[10px] font-black">1</span>
                    </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-all p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-xl hover:rotate-12">
                    <ExternalLink className="w-4 h-4" />
                </button>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-500/0 group-hover:bg-brand-500/10 transition-colors" />
        </div>
    );
};

