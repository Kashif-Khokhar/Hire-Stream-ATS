import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CandidateCard } from './CandidateCard';
import type { Candidate } from '../../types';
import { MoreHorizontal } from 'lucide-react';

interface ColumnProps {
    id: string;
    title: string;
    candidates: Candidate[];
    onCandidateClick: (candidate: Candidate) => void;
}

export const Column: React.FC<ColumnProps> = ({ id, title, candidates, onCandidateClick }) => {
    const { setNodeRef } = useDroppable({
        id: id,
    });

    return (
        <div className="flex flex-col w-85 flex-shrink-0 bg-slate-100/40 rounded-[3rem] p-5 h-full max-h-[calc(100vh-250px)] border border-white relative group/column overflow-hidden transition-all duration-500 hover:bg-slate-100/60">
            <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-8 px-4 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500 shadow-lg shadow-brand-500/50 group-hover/column:scale-125 transition-transform" />
                    <h3 className="font-black text-slate-950 text-sm tracking-widest italic uppercase group-hover/column:text-brand-600 transition-colors">{title}</h3>
                    <span className="bg-white/80 backdrop-blur-sm text-slate-900 shadow-sm border border-slate-200/50 text-[10px] font-black px-2.5 py-1 rounded-lg">
                        {candidates.length}
                    </span>
                </div>
                <button className="text-slate-400 hover:text-slate-950 p-2 hover:bg-white rounded-xl transition-all border border-transparent hover:border-slate-200 hover:shadow-premium group/btn">
                    <MoreHorizontal className="w-5 h-5 group-hover/btn:rotate-90 transition-transform" />
                </button>
            </div>

            <div
                ref={setNodeRef}
                className="flex-1 flex flex-col gap-5 min-h-[100px] overflow-y-auto no-scrollbar pb-6 relative z-10"
            >
                <SortableContext
                    id={id}
                    items={candidates.map(c => c.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {candidates.map((candidate) => (
                        <CandidateCard
                            key={candidate.id}
                            candidate={candidate}
                            onClick={onCandidateClick}
                        />
                    ))}
                    {candidates.length === 0 && (
                        <div className="flex-1 flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-200 rounded-[2.5rem] opacity-40">
                            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                                <span className="text-xl font-black text-slate-300">?</span>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Empty Stage</p>
                        </div>
                    )}
                </SortableContext>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-2 bg-linear-to-t from-slate-200/10 to-transparent pointer-events-none" />
        </div>
    );
};

