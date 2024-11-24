"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import QuizAndContribute from '../../_components/quizcontribute';
import UnitAccordion from '../../_components/unitaccordian';
import PageDescription from '../../_components/pagedesc';
import { lessonData, units } from '../../data/devopswithdocker';

const pageDescription = {
    title: "HTML/CSS Learning Path",
    description: "Master HTML/CSS with our comprehensive course covering everything from basics to advanced topics Perfect for beginners and experienced programmers looking to enhance their skills."
};

const DevopsWithDockerResources = () => {
    const router = useRouter();
    const [isEnrolled, setIsEnrolled] = useState(false);

    const handleEnroll = async () => {
        setIsEnrolled(c => !c);
    };

    return (
        <div className="min-h-screen overflow-hidden w-full py-32 flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-4xl mx-auto">
                <PageDescription title={pageDescription.title} description={pageDescription.description} onClick={handleEnroll} isEnrolled={isEnrolled} />
                {
                    units.map((unit, index) => (
                        <UnitAccordion key={index} unit={unit} unitIndex={index} lessonData={lessonData} />
                    ))
                }
                <QuizAndContribute contributelink="#" />
            </div>
        </div>
    );
};

export default DevopsWithDockerResources;
