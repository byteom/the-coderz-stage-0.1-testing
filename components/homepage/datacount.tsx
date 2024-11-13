"use client";
import React from 'react';
import { Users, School, Code, BookOpen, LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StatsCardProps {
    icon: LucideIcon;
    number: string;
    description: string;
    bgColor: string;
}

const StatsCard = ({ icon: Icon, number, description, bgColor }: StatsCardProps) => (
    <Card className={`p-6 text-center ${bgColor} transition-transform hover:scale-105 duration-300`}>
        <div className="flex justify-center mb-4">
            <Icon size={40} className="text-gray-800" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{number}</h3>
        <p className="text-sm text-gray-700">{description}</p>
    </Card>
);

interface StatData {
    icon: LucideIcon;
    number: string;
    description: string;
    bgColor: string;
}

const stats: StatData[] = [
    {
        icon: Users,
        number: "50,000+",
        description: "Active Student Developers",
        bgColor: "bg-purple-200"
    },
    {
        icon: Code,
        number: "1,000+",
        description: "Open Source Projects",
        bgColor: "bg-green-200"
    },
    {
        icon: BookOpen,
        number: "2,500+",
        description: "Learning Resources",
        bgColor: "bg-yellow-200"
    },
    {
        icon: School,
        number: "100+",
        description: "Partner Universities",
        bgColor: "bg-blue-200"
    }
];

const StatsSection = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mt-16 mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-purple-500">
                        Our Growing Community Impact
                    </h2>
                    <p className="text-gray-600 dark:text-white max-w-2xl mx-auto mb-8">
                        Connect with fellow developers, contribute to open-source projects,
                        access curated learning resources, and grow your skills with our
                        supportive community.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatsCard
                            key={index}
                            icon={stat.icon}
                            number={stat.number}
                            description={stat.description}
                            bgColor={stat.bgColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;