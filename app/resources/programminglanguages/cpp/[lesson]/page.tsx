export const runtime = 'edge';

"use client"

import { useParams, useSearchParams } from "next/navigation";
import { lessonData } from "@/app/resources/data/cpp";
import { useEffect, useState } from "react";
import SmoothScroll from "@/components/smoothscroll";
import { Toaster } from "react-hot-toast";
import MainContent from "@/app/resources/_components/maincontent";
import PracticeQuestion from "@/app/resources/_components/practice";
import NextChapter from "@/app/resources/_components/nextchapter";
import { motion } from "framer-motion";
import FullScreenMessage from "@/components/spinners";

interface CurrentLessonProps {
    title: string;
    description: string;
    sections: {
        title: string;
        content: string;
        points?: string;
        code?: string;
    }[];
    practiceQuestions: {
        question: string;
        hint: string;
    }[];
    nextChapter: string;
}
export default function LessonPage() {
    const [currentLesson, setCurrentLesson] = useState<CurrentLessonProps | null>(null);
    const { lesson } = useParams();
    console.log(lesson);

    useEffect(() => {
        if (lesson) {
            // @ts-ignore or // @ts-expect-error
            setCurrentLesson(lessonData[lesson]);
        }
    }, [lesson])

    if (!currentLesson) return <div>
        <FullScreenMessage />
    </div>

    return (
        <SmoothScroll>
            <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
                <Toaster />
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto pt-10 md:pt-0"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">{currentLesson.title}</h1>
                    <p className="text-lg mb-8 text-center">{currentLesson.description}</p>

                    {currentLesson.sections.map((section, index) => (
                        <MainContent key={index} index={index} title={section.title} content={section.content} points={section.points} code={section?.code} />
                    ))}

                    <PracticeQuestion language='C++' practiceQuestions={currentLesson.practiceQuestions} />

                    <NextChapter language="C++" link={currentLesson.nextChapter} />
                </motion.div>
            </div>
        </SmoothScroll>
    )
}