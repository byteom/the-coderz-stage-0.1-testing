"use client"

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from 'framer-motion';
import SmoothScroll from '@/components/smoothscroll';
import Link from 'next/link';
import SupportSection from '@/components/homepage/supportsection';
import Ripple from '@/components/ui/ripple';

const categories = [
	{
		name: 'Programming Languages',
		icon: '💻',
		resources: [
			{
				name: 'Python',
				url: '/resources/programminglanguages/python',
				icon: '🐍',
				description: 'Known for its simplicity and wide range of applications, from web dev to data science.',
				color: 'from-green-500 to-green-300',
				status: "live"
			},
			{
				name: 'C',
				url: '/resources/programminglanguages/c',
				icon: 'C',
				description: 'A high-performance, compiled language that provides low-level memory management.',
				color: 'from-blue-500 to-blue-300',
				status: "live"
			},
			{
				name: 'C++/CPP',
				url: '/resources/programminglanguages/cpp',
				icon: 'C++',
				description: 'Widely used for system/application software, game development, and more.',
				color: 'from-blue-600 to-blue-400',
				status: "live"
			},
			{
				name: 'Java',
				url: '/resources/programminglanguages/java',
				icon: '☕',
				description: 'A popular language for building large-scale enterprise applications and Android apps.',
				color: 'from-red-500 to-red-300',
				status: "coming"
			},
			{
				name: 'PHP',
				url: '/resources/programminglanguages/php',
				icon: '',
				description: 'Develop dynamic web applications with PHP. Focus on backend development and database integration.',
				color: 'from-indigo-600 to-purple-400',
				categories: ['Backend', 'WordPress', 'MySQL', 'APIs']
			},
			{
				name: 'Go',
				url: '/resources/programminglanguages/go',
				icon: 'Go',
				description: 'A statically typed, compiled language designed for simplicity and efficiency.',
				color: 'from-cyan-500 to-cyan-300',
				status: "coming"
			},
			{
				name: 'Rust',
				url: '/resources/programminglanguages/rust',
				icon: '🦀',
				description: 'A systems programming language focused on safety, concurrency, and performance.',
				color: 'from-orange-500 to-orange-300',
				status: "coming"
			},
		]
	},
	{
		name: "Foundations",
		icon: '🌐',
		resources: [
			{
				name: 'HTML',
				url: '/resources/foundations/htmlcss',
				icon: '</>',
				description: 'The standard markup language for creating web pages and web applications.',
				color: 'from-orange-500 to-orange-300',
				status: "live"
			},
			{
				name: 'CSS',
				url: '/resources/foundations/htmlcss',
				icon: '🎨',
				description: 'A style sheet language used for describing the presentation of a document written in HTML.',
				color: 'from-blue-500 to-blue-300',
				status: "live"
			},
			{
				name: 'JavaScript',
				url: '/resources/foundations/javascript',
				icon: 'JS',
				description: 'A high-level, interpreted programming language that is a core technology of the World Wide Web.',
				color: 'from-yellow-500 to-yellow-300',
				status: "coming"
			},
			{
				name: 'TypeScript',
				url: '/resources/foundations/typescript',
				icon: 'TS',
				description: 'A typed superset of JavaScript that compiles to plain JavaScript.',
				color: 'from-blue-700 to-blue-500',
				status: "coming"
			},
		]
	},
	{
		name: 'Front-End Development',
		icon: '🖥️',
		resources: [
			{
				name: 'React',
				url: '/resources/frontend/react',
				icon: '⚛️',
				description: 'A JavaScript library for building user interfaces, particularly single-page applications.',
				color: 'from-cyan-500 to-cyan-300'
			},
			{
				name: 'Tailwind CSS',
				url: '/resources/tailwindcss',
				icon: '🎨',
				description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
				color: 'from-teal-500 to-teal-300',
				status: "coming"
			}
		]
	},
	{
		name: 'Back-End Development',
		icon: '⚙️',
		resources: [
			{
				name: 'Node.js',
				url: '/resources/nodejs',
				icon: '🟢',
				description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side programming.',
				color: 'from-green-500 to-green-300',
				status: "coming"
			},
			{
				name: 'Express.js',
				url: '/resources/expressjs',
				icon: '🚂',
				description: 'A minimal and flexible Node.js web application framework.',
				color: 'from-gray-500 to-gray-300',
				status: "coming"
			},
			{
				name: 'Django',
				url: '/resources/django',
				icon: '🐍',
				description: 'A high-level Python web framework that encourages rapid development and clean, pragmatic design.',
				color: 'from-green-700 to-green-500',
				status: "coming"
			},
			{
				name: 'Flask',
				url: '/resources/flask',
				icon: '🌶️',
				description: 'A lightweight WSGI web application framework in Python.',
				color: 'from-red-500 to-red-300',
				status: "coming"
			}
			// {
			// 	name: 'Ruby on Rails',
			// 	url: '/resources/rails',
			// 	icon: '🛤️',
			// 	description: 'A server-side web application framework written in Ruby.',
			// 	color: 'from-red-700 to-red-500'
			// },
			// {
			// 	name: 'Spring Boot',
			// 	url: '/resources/spring-boot',
			// 	icon: '🍃',
			// 	description: 'An extension of the Spring framework for creating stand-alone, production-grade Spring-based Applications.',
			// 	color: 'from-green-500 to-green-300'
			// },
			// {
			// 	name: 'ASP.NET Core',
			// 	url: '/resources/aspnet-core',
			// 	icon: '🔷',
			// 	description: 'A cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications.',
			// 	color: 'from-purple-500 to-purple-300'
			// },
		]
	},
	{
		name: 'Full Stack Web Development',
		icon: '🏗️',
		resources: [
			{
				name: 'MERN Stack',
				url: '/resources/mern',
				icon: '🌐',
				description: 'A JavaScript stack that includes MongoDB, Express.js, React, and Node.js.',
				color: 'from-green-500 to-green-300',
				status: "coming"
			},
			{
				name: 'Next.js',
				url: '/resources/nextjs',
				icon: '▲',
				description: 'A React framework that enables server-side rendering and generating static websites.',
				color: 'from-gray-300 to-gray-600',
				status: "coming"
			},
			// {
			// 	name: 'MEAN Stack',
			// 	url: '/resources/mean',
			// 	icon: '🅰️',
			// 	description: 'A JavaScript stack that includes MongoDB, Express.js, Angular, and Node.js.',
			// 	color: 'from-red-500 to-red-300'
			// },
			// {
			// 	name: 'Ruby on Rails',
			// 	url: '/resources/rails-fullstack',
			// 	icon: '💎',
			// 	description: 'A full-stack web application framework that includes everything needed to create database-backed web applications.',
			// 	color: 'from-red-700 to-red-500'
			// },
			// {
			// 	name: 'Django Full Stack',
			// 	url: '/resources/django-fullstack',
			// 	icon: '🐍',
			// 	description: 'A high-level Python web framework that encourages rapid development and clean, pragmatic design for full-stack applications.',
			// 	color: 'from-green-700 to-green-500'
			// }
		]
	},
	{
		name: 'DevOps',
		icon: '🛠️',
		resources: [
			{
				name: 'Docker',
				url: 'resources/devops/dockerr',
				icon: '🐳',
				description: 'A platform for developing, shipping, and running applications in containers.',
				color: 'from-blue-500 to-blue-300',
				status: "live"
			},
			{
				name: 'Kubernetes',
				url: '/resources/kubernetes',
				icon: '☸️',
				description: 'An open-source system for automating deployment, scaling, and management of containerized applications.',
				color: 'from-blue-700 to-blue-500',
				status: "coming"
			},
			{
				name: 'Jenkins',
				url: '/resources/jenkins',
				icon: '🤵',
				description: 'An open-source automation server that enables developers to build, test, and deploy their software.',
				color: 'from-red-500 to-red-300',
				status: "coming"
			},
			{
				name: 'GitLab CI/CD',
				url: '/resources/gitlab-cicd',
				icon: '🦊',
				description: 'A tool built into GitLab for software development through the continuous methodologies.',
				color: 'from-orange-500 to-orange-300',
				status: "coming"
			},
			// {
			// 	name: 'Ansible',
			// 	url: '/resources/ansible',
			// 	icon: '📚',
			// 	description: 'An open-source software provisioning, configuration management, and application-deployment tool.',
			// 	color: 'from-red-700 to-red-500'
			// },
			// {
			// 	name: 'Terraform',
			// 	url: '/resources/terraform',
			// 	icon: '🏗️',
			// 	description: 'An open-source infrastructure as code software tool that enables you to safely and predictably create, change, and improve infrastructure.',
			// 	color: 'from-purple-500 to-purple-300'
			// },
			// {
			// 	name: 'Prometheus',
			// 	url: '/resources/prometheus',
			// 	icon: '🔥',
			// 	description: 'An open-source systems monitoring and alerting toolkit.',
			// 	color: 'from-orange-500 to-orange-300'
			// },
		]
	}
]

function ResourceCard({ resource }: any) {
	return (
		<motion.div
			key={resource.title}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
		>
			<div className="p-6 flex flex-col justify-between h-full">
				<div>
					<h2 className="text-2xl font-bold mb-2">{resource.name}</h2>
					<p className="dark:text-gray-100 text-sm mb-4">{resource.description}</p>
				</div>
				{resource.status === "coming" ? (
					// Disabled button for coming soon resources
					<button
						disabled
						className={`w-full bg-gradient-to-r from-gray-400 to-gray-300 
                        text-gray-600 px-4 py-2 rounded-full text-center font-bold 
                        cursor-not-allowed opacity-70`}
					>
						Coming Soon
					</button>
				) : (
					// Active link for live resources
					<Link
						href={resource.url}
						className={`block w-full bg-gradient-to-r ${resource.color} 
                        text-black px-4 py-2 rounded-full text-center font-bold 
                        hover:opacity-90 transition-opacity`}
					>
						Explore resources
					</Link>
				)}
			</div>
		</motion.div>
	)
}

export default function ResourcesPage() {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredCategories, setFilteredCategories] = useState(categories);

	const [isDarkMode, setIsDarkMode] = useState(false);

	// List of icon slugs to be displayed in the cloud
	const iconSlugs = [
		'react', 'javascript', 'typescript', 'html5', 'css3', 'nodejs',
		'express', 'mongodb', 'postgresql', 'git', 'github', 'vscode',
		'npm', 'webpack', 'babel', 'sass', 'tailwindcss', 'bootstrap',
		'jest', 'docker', 'aws', 'firebase', 'redux', 'graphql'
	];

	const handleThemes = () => {
		setIsDarkMode(c => !c);
	}

	useEffect(() => {
		const filtered = categories.map(category => ({
			...category,
			resources: category.resources.filter(resource =>
				resource.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
		})).filter(category => category.resources.length > 0)
		setFilteredCategories(filtered)
	}, [searchTerm])

	return (
		<SmoothScroll>
			<div className="min-h-screen">
				<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-32">
					<AnimatePresence>
						<div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
							<h2 className="text-5xl font-extrabold mb-6 shadow-text text-center">Discover Resources</h2>
							<p className="text-xl text-center dark:text-gray-100 mb-8 max-w-3xl mx-auto shadow-text">
								Explore our curated collection of learning materials to enhance your skills in programming, web development, and DevOps.
							</p>
							<div className="max-w-md mx-auto relative z-20">
								<Input
									type="text"
									placeholder="Search resources..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full text-black dark:text-white border-gray-500 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-full py-3 px-6 pr-12 shadow-inner"
								/>
								<Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 dark:text-gray-100" />
								<BottomGradient />
							</div>
							<Ripple />
						</div>
					</AnimatePresence>

					<AnimatePresence>
						{filteredCategories.map((category, categoryIndex) => (
							<motion.section
								key={category.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
								className="mb-8"
							>
								<h2 className="text-3xl font-bold mb-4 flex items-center dark:text-gray-50">
									<span className="text-4xl mr-3">{category.icon}</span>
									{category.name}
								</h2>
								<div className="w-[90%] sm:w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
									{
										category.resources.map((resource, index) => (
											<ResourceCard key={resource.name} resource={resource} />
										))
									}
								</div>
							</motion.section>
						))}
					</AnimatePresence>
				</main>
				<SupportSection />
			</div>
		</SmoothScroll>
	)
};

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};