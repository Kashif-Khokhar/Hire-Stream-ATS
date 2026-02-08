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
        <div className="flex flex-col w-80 flex-shrink-0 bg-slate-200/30 rounded-[2.5rem] p-4 h-full max-h-[calc(100vh-250px)] border border-slate-200/50">
            <div className="flex items-center justify-between mb-6 px-4">
                <div className="flex items-center gap-3">
                    <h3 className="font-black text-slate-900 text-sm tracking-tight italic uppercase">{title}</h3>
                    <span className="bg-white text-slate-600 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs border border-slate-100">
                        {candidates.length}
                    </span>
                </div>
                <button className="text-slate-400 hover:text-slate-600 p-1.5 hover:bg-white rounded-xl transition-all border border-transparent hover:border-slate-100">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>

            <div
                ref={setNodeRef}
                className="flex-1 flex flex-col gap-4 min-h-[100px] overflow-y-auto no-scrollbar pb-4"
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
                </SortableContext>
            </div>
        </div>
    );
};
