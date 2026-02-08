import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Candidate } from '../../types';
import { Star, MessageSquare, Paperclip, ExternalLink } from 'lucide-react';
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
        if (role.toLowerCase().includes('engineer')) return 'bg-brand-50 text-brand-600 border-brand-100';
        if (role.toLowerCase().includes('designer')) return 'bg-accent-50 text-accent-600 border-accent-100';
        if (role.toLowerCase().includes('manager')) return 'bg-emerald-50 text-emerald-600 border-emerald-100';
        return 'bg-slate-50 text-slate-600 border-slate-100';
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={() => onClick?.(candidate)}
            className={cn(
                "bg-white p-5 rounded-3xl border border-slate-200/60 shadow-clean transition-all duration-300 cursor-grab active:cursor-grabbing group select-none",
                isDragging && "opacity-40 grayscale",
                isOverlay ? "shadow-premium border-brand-200 ring-8 ring-brand-500/5 rotate-2 scale-105" : "hover:shadow-premium hover:border-brand-200 hover:-translate-y-1"
            )}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className="font-black text-slate-900 text-sm group-hover:text-brand-600 transition-colors italic tracking-tight">
                        {candidate.name}
                    </h4>
                    <div className={cn(
                        "mt-1.5 px-2 py-0.5 rounded-lg border text-[10px] font-black uppercase tracking-tight italic w-fit",
                        getRoleColor(candidate.role)
                    )}>
                        {candidate.role}
                    </div>
                </div>
                <div className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center text-[10px] font-black text-slate-500 border border-slate-100 group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:border-brand-200 transition-all shadow-sm">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                </div>
            </div>

            <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center text-amber-500 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100 shadow-xs">
                    <Star className="w-3 h-3 fill-current mr-1" />
                    <span className="text-[10px] font-black leading-none">{candidate.rating.toFixed(1)}</span>
                </div>
                <span className="text-slate-200 text-xs">/</span>
                <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                    {candidate.appliedDate}
                </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-600 transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-black">{candidate.notes.length}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-600 transition-colors">
                        <Paperclip className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-black">1</span>
                    </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg">
                    <ExternalLink className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    );
};
