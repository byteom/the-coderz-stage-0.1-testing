"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Youtube, YoutubeIcon } from 'lucide-react';
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SlideInModal from "./slideinmodal";
import QuizAndContribute from "./quizcontribute";
import { useToast } from "@/hooks/use-toast";

interface Lesson {
    title: string;
    description: string;
    sections: {
        title: string;
        content: string;
        points?: string[];
        code?: string;
    }[];
    practiceQuestions: {
        question: string;
        hint: string;
    }[];
    nextChapter: string;
}

interface UnitLessonProps {
    name: string;
    lessonkey: string;
}
interface UnitAccordianSecondProps {
    title: string;
    youtube: string;
    quizlink: string;
    lessons: UnitLessonProps[];
}

interface UnitAccordionProps {
    unit: UnitAccordianSecondProps;
    unitIndex: number;
    lessonData: { [key: string]: any };
}

const UnitAccordion: React.FC<UnitAccordionProps> = ({ unit, unitIndex, lessonData }) => {
    const [expanded, setExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const { toast } = useToast();

    // Effect to handle scroll lock
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // Cleanup when the component unmounts or modal closes
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isModalOpen]);

    const handleLessonClick = (lesson: UnitLessonProps) => {
        const lessonKey = lesson.lessonkey;
        const detailedLessonData = lessonData[lessonKey];
        setSelectedLesson({ ...lesson, ...detailedLessonData });
        setIsModalOpen(true);
    };
    const handleQuizSelection = () => {
        toast({
            title: "Success",
            description: "We are creating an extensive list of quiz that will help you grasp the knowledge of the current topic. It will be available soon.",
        });
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: unitIndex * 0.1 }}
            className="w-full mt-2 overflow-hidden"
        >
            <Card className="bg-black dark:bg-white border-gray-700">
                <CardHeader
                    className="cursor-pointer flex flex-col sm:flex-row items-center gap-4 sm:gap-2 justify-between"
                >
                    <div
                        className="flex justify-between items-center w-full"
                        onClick={() => setExpanded(!expanded)}
                    >
                        <CardTitle className="text-md sm:text-xl font-semibold text-white dark:text-black">
                            {unit.title}
                        </CardTitle>
                    </div>
                    <div className="flex w-full justify-between sm:justify-end sm:gap-6">
                        <button
                            // href={unit.quizlink}
                            // target="_blank"
                            className="shadow-[0_0_0_3px_#000000_inset] flex items-center justify-center w-full sm:w-auto p-2 bg-transparent border border-white dark:border-white text-white dark:text-black rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400"
                            onClick={handleQuizSelection}
                        >
                            Quiz <ExternalLink className="ml-2 h-4 w-4" />
                        </button>
                        <Link
                            href={unit.youtube}
                            target="_blank"
                            className="flex items-center justify-center w-full sm:w-auto p-2 dark:text-white text-white font-semibold transform hover:-translate-y-1 transition duration-400"
                        >
                            <YoutubeIcon size={32} className="text-red-500" />
                        </Link>
                        <div
                            className="flex items-center space-x-2 w-24 sm:w-32"
                            onClick={() => setExpanded(!expanded)}
                        >
                            <Badge className="bg-gray-700 text-gray-300 w-2/3 text-center">
                                {unit.lessons.length} lessons
                            </Badge>
                            {expanded ? (
                                <ChevronUp className="text-gray-200 dark:text-gray-600" />
                            ) : (
                                <ChevronDown className="text-gray-200 dark:text-gray-600" />
                            )}
                        </div>
                    </div>
                </CardHeader>
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CardContent>
                                <div className="grid gap-4 mt-4">
                                    {
                                        unit.lessons.map((lesson, lessonIndex) => (
                                            <Card key={lessonIndex} className="bg-gray-700 w-[96%] mx-auto">
                                                <CardContent className="p-4 flex justify-between items-center">
                                                    <button
                                                        onClick={() => handleLessonClick(lesson)}
                                                        className="text-white hover:text-blue-300 text-left"
                                                    >
                                                        <span className="font-medium underline">{lesson.name}</span>
                                                    </button>
                                                </CardContent>
                                            </Card>
                                        ))
                                    }
                                </div>
                            </CardContent>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
            <SlideInModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lessonData={selectedLesson}
            />
        </motion.div>
    );
};

export default UnitAccordion;