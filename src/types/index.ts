export type CandidateStage = 'Applied' | 'Screening' | 'Interview' | 'Technical Test' | 'Offer' | 'Hired' | 'Rejected';

export interface Candidate {
    id: string;
    name: string;
    email: string;
    role: string;
    appliedDate: string;
    stage: CandidateStage;
    rating: number; // 0-5
    avatar?: string;
    resumeUrl?: string;
    notes: Note[];
}

export interface Note {
    id: string;
    author: string;
    content: string;
    createdAt: string;
}

export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    status: 'Open' | 'Closed' | 'Draft';
    candidateCount: number;
    description: string;
}
