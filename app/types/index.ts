// Types for the Request Body for the SignUp:
"use client";
export interface RequestBody {
    name: string;
    email: string;
    password: string;
}

// Types for the Project Page:
export interface Project {
    id: number;
    title: string;
    description: string;
    difficulty: string;
    category: string;
    tags: string[];
    guide: {
        description: string;
        learningOutcomes: string[];
        mobileImage?: string;
        desktopImage?: string;
        steps: string[];
    }
}
export interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: (project: Project) => void;
}
export interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

// Types for the Pathway Page:
export type Pathway = {
    title: string;
    description: string;
    color: string;
    niche: string;
    domain: string;
    careers: {
        title: string;
        description: string;
        skills: string;
        opportunities: string;
    }[],
    challenges: {
        title: string;
        description: string;
        opportunity: string;
    }[],
    skills: {
        name: string;
        description: string;
    }[],
    trends: {
        name: string;
        description: string;
    }[]
};
export interface PathwayDetailsProps {
    pathway: Pathway;
    onBack: () => void;
}