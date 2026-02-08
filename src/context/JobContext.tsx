import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Candidate, Job, CandidateStage } from '../types';

interface JobContextType {
    candidates: Candidate[];
    jobs: Job[];
    moveCandidate: (candidateId: string, newStage: CandidateStage) => void;
    addCandidate: (candidate: Omit<Candidate, 'id' | 'notes'>) => void;
    addJob: (job: Omit<Job, 'id' | 'candidateCount'>) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

const initialCandidates: Candidate[] = [
    {
        id: '1',
        name: 'Sarah Connor',
        email: 'sarah.c@tech.io',
        role: 'Senior React Developer',
        appliedDate: '2026-02-01',
        stage: 'Interview',
        rating: 4.5,
        notes: [
            { id: 'n1', author: 'John Doe', content: 'Strong technical skills in React and TypeScript.', createdAt: '2026-02-02' }
        ]
    },
    {
        id: '2',
        name: 'Marcus Wright',
        email: 'marcus.w@cyber.net',
        role: 'Frontend Engineer',
        appliedDate: '2026-02-03',
        stage: 'Applied',
        rating: 3.8,
        notes: []
    },
    {
        id: '3',
        name: 'Kyle Reese',
        email: 'kyle.r@resistance.org',
        role: 'Senior React Developer',
        appliedDate: '2026-02-05',
        stage: 'Technical Test',
        rating: 4.2,
        notes: []
    }
];

const initialJobs: Job[] = [
    {
        id: 'j1',
        title: 'Senior React Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        status: 'Open',
        candidateCount: 12,
        description: 'We are looking for a Senior React Developer to lead our frontend team...'
    },
    {
        id: 'j2',
        title: 'Product Designer',
        department: 'Design',
        location: 'New York, NY',
        type: 'Full-time',
        status: 'Open',
        candidateCount: 8,
        description: 'Join our design team to create beautiful and intuitive user experiences...'
    }
];

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
    const [jobs, setJobs] = useState<Job[]>(initialJobs);

    const moveCandidate = (candidateId: string, newStage: CandidateStage) => {
        setCandidates(prev => prev.map(c =>
            c.id === candidateId ? { ...c, stage: newStage } : c
        ));
    };

    const addCandidate = (candidate: Omit<Candidate, 'id' | 'notes'>) => {
        const newCandidate: Candidate = {
            ...candidate,
            id: Math.random().toString(36).substr(2, 9),
            notes: []
        };
        setCandidates(prev => [...prev, newCandidate]);
    };

    const addJob = (job: Omit<Job, 'id' | 'candidateCount'>) => {
        const newJob: Job = {
            ...job,
            id: Math.random().toString(36).substr(2, 9),
            candidateCount: 0
        };
        setJobs(prev => [...prev, newJob]);
    };

    return (
        <JobContext.Provider value={{ candidates, jobs, moveCandidate, addCandidate, addJob }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobs = () => {
    const context = useContext(JobContext);
    if (context === undefined) {
        throw new Error('useJobs must be used within a JobProvider');
    }
    return context;
};
