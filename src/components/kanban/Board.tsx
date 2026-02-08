import React, { useState } from 'react';
import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import type { DragStartEvent, DragOverEvent, DragEndEvent } from '@dnd-kit/core';
import {
    sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { Column } from './Column';
import { CandidateCard } from './CandidateCard';
import { useJobs } from '../../context/JobContext';
import type { Candidate, CandidateStage } from '../../types';

const STAGES: CandidateStage[] = ['Applied', 'Screening', 'Interview', 'Technical Test', 'Offer', 'Hired'];

interface BoardProps {
    onCandidateClick: (candidate: Candidate) => void;
}

export const Board: React.FC<BoardProps> = ({ onCandidateClick }) => {
    const { candidates, moveCandidate } = useJobs();
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragOver = (event: DragOverEvent) => {
        const { active, over } = event;
        if (!over) return;

        const activeCandidate = candidates.find(c => c.id === active.id);
        const overId = over.id as string;

        if (STAGES.includes(overId as CandidateStage)) {
            if (activeCandidate && activeCandidate.stage !== overId) {
                moveCandidate(activeCandidate.id, overId as CandidateStage);
            }
        }
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) {
            setActiveId(null);
            return;
        }

        const overId = over.id as string;
        const activeCandidate = candidates.find(c => c.id === active.id);

        if (activeCandidate && STAGES.includes(overId as CandidateStage)) {
            if (activeCandidate.stage !== overId) {
                moveCandidate(activeCandidate.id, overId as CandidateStage);
            }
        }

        setActiveId(null);
    };

    const activeCandidate = activeId ? candidates.find(c => c.id === activeId) : null;

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            <div className="flex gap-6 overflow-x-auto pb-4 items-start min-h-[calc(100vh-250px)]">
                {STAGES.map((stage) => (
                    <Column
                        key={stage}
                        id={stage}
                        title={stage}
                        candidates={candidates.filter(c => c.stage === stage)}
                        onCandidateClick={onCandidateClick}
                    />
                ))}
            </div>

            <DragOverlay>
                {activeCandidate ? (
                    <CandidateCard candidate={activeCandidate} isOverlay />
                ) : null}
            </DragOverlay>
        </DndContext>
    );
};
