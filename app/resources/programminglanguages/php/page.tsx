export const runtime = 'edge';

"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import QuizAndContribute from '../../_components/quizcontribute';
import UnitAccordion from '../../_components/unitaccordian';
import PageDescription from '../../_components/pagedesc';
import { lessonData, units } from '../../data/php';

const pageDescription = {
    title: "PHP Learning Path",
    description: "Master PHP with our comprehensive course covering everything from basics to advanced topics Perfect for beginners and experienced programmers looking to enhance their skills."
}

const CppResourcePage = () => {
    const router = useRouter();
    const [isEnrolled, setIsEnrolled] = useState(false);

    const handleEnroll = async () => {
        setIsEnrolled(c => !c);
    }

    return (
        <div className="min-h-screen overflow-hidden w-full py-32 flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-4xl mx-auto">
                <PageDescription title={pageDescription.title} description={pageDescription.description} onClick={handleEnroll} isEnrolled={isEnrolled} />
                {
                    units.map((unit, index) => (
                        <div className="" key={index}>
                            <UnitAccordion unit={unit} unitIndex={index} lessonData={lessonData} />
                        </div>
                    ))
                }
                <QuizAndContribute contributelink='#' />
            </div>
        </div>
    );
};

export default CppResourcePage;