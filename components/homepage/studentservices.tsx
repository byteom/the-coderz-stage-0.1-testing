"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, BriefcaseIcon, Users, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import image1 from "@/components/homepage/image-1.jpeg";
import { RainbowButton } from '../ui/rainbow-button';
import Link from 'next/link';

const StudentServices = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-2 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Unlock Your Potential with Our Community 🚀
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Join thousands of students who are learning, growing, and building their future together
                </p>
            </div>

            <div className="space-y-6">
                <Card className="hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-colors duration-300">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
                            <div className="space-y-4 lg:w-2/3 flex flex-col">
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                                            <BookOpen className="text-purple-600 dark:text-purple-400 h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                                            <span className="text-purple-600 dark:text-purple-400">Learn</span> from Expert-Curated Resources
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                                        Access our carefully selected collection of learning materials, covering everything
                                        from coding fundamentals to advanced system design. Stay ahead with industry-relevant content.
                                    </p>
                                    <div className="flex flex-wrap gap-2 py-4">
                                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">500+ Tutorials</span>
                                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">Practice Problems</span>
                                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">Video Content</span>
                                    </div>
                                </div>
                                <Link href="/resources">
                                    <RainbowButton>
                                        Explore resources <ArrowRight className="ml-2 h-4 w-4" />
                                    </RainbowButton>
                                </Link>
                            </div>
                            <div className="lg:w-1/3">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-lg transform rotate-6">
                                        <Image
                                            src={image1}
                                            alt="Community networking"
                                            className="rounded-lg shadow-lg transform rotate-6"
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <Image
                                        src={image1}
                                        alt="Community networking"
                                        className="relative rounded-lg shadow-lg"
                                        height={300}
                                        width={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="p-4 hover:bg-yellow-50 dark:hover:bg-yellow-900/10 transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute -right-12 top-6 rotate-45">
                        <Badge className="bg-blue-600 dark:bg-blue-500 text-white px-12 py-1 text-sm font-medium">
                            Coming Soon
                        </Badge>
                    </div>
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
                            <div className="space-y-4 lg:w-2/3 flex flex-col">
                                <div className="">
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                                            <BriefcaseIcon className="text-yellow-600 dark:text-yellow-400 h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                                            <span className="text-yellow-600 dark:text-yellow-400">Earn</span> Through Opportunities
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                                        We&apos;re building partnerships with top companies to bring you exclusive internship
                                        and job opportunities. Get ready for a transformative career journey.
                                    </p>
                                    <div className="flex flex-wrap gap-2 py-4">
                                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">Premium Internships</span>
                                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">Career Mentoring</span>
                                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">Resume Reviews</span>
                                    </div>
                                </div>
                                <Link href="googleform">
                                    <RainbowButton>
                                        Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
                                    </RainbowButton>
                                </Link>
                            </div>
                            <div className="lg:w-1/3">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-lg transform rotate-6">
                                        <Image
                                            src={image1}
                                            alt="Community networking"
                                            className="rounded-lg shadow-lg transform rotate-6"
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <Image
                                        src={image1}
                                        alt="Community networking"
                                        className="relative rounded-lg shadow-lg"
                                        height={300}
                                        width={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors duration-300">
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
                            <div className="space-y-4 lg:w-2/3 flex flex-col">
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                                            <Users className="text-blue-600 dark:text-blue-400 h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                                            <span className="text-blue-600 dark:text-blue-400">Network</span> with Tech Community
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                                        Connect with a vibrant community of learners, mentors, and industry professionals.
                                        Participate in events, collaborate on projects, and grow together.
                                    </p>
                                    <div className="flex flex-wrap gap-2 py-4">
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm">Weekly Meetups</span>
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm">Project Collabs</span>
                                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm">Tech Events</span>
                                    </div>
                                </div>
                                <Link href="/communities">
                                    <RainbowButton>
                                        Join community <ArrowRight className="ml-2 h-4 w-4" />
                                    </RainbowButton>
                                </Link>
                            </div>
                            <div className="lg:w-1/3">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-lg transform rotate-6">
                                        <Image
                                            src={image1}
                                            alt="Community networking"
                                            className="rounded-lg shadow-lg transform rotate-6"
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <Image
                                        src={image1}
                                        alt="Community networking"
                                        className="relative rounded-lg shadow-lg"
                                        height={300}
                                        width={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default StudentServices;