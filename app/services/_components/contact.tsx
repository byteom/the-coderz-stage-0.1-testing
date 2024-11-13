"use client";

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { RainbowButton } from '@/components/ui/rainbow-button'

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: '',
		service: '',
		budget: '',
		email: '',
		details: ''
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission here
		console.log(formData)
	}

	return (
		<section className="max-w-6xl mx-auto px-4 py-20">
			<h1 className="text-4xl md:text-6xl font-bold mb-12">
				Hello! Are you <span className="text-gray-400">ready</span><br />
				to <span className="text-blue-400">collaborate</span> <span className="text-purple-400">with us?</span>
			</h1>
			<form onSubmit={handleSubmit} className="space-y-8">
				<div>
					<label htmlFor="name" className="text-2xl md:text-3xl font-bold">
						My name is
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="border-b-2 border-gray-300 focus:border-black outline-none px-2 w-64 md:w-96"
							placeholder="First and Last Name"
							required
						/> and I&apos;m interested in
						<input
							type="text"
							id="service"
							name="service"
							value={formData.service}
							onChange={handleChange}
							className="border-b-2 border-gray-300 focus:border-black outline-none px-2 w-64 md:w-96"
							placeholder="Service or Project Type"
							required
						/>.
					</label>
				</div>
				<div>
					<label htmlFor="budget" className="text-2xl md:text-4xl font-bold">
						What is your project budget?
					</label>
					<div className="flex flex-wrap gap-4 mt-4">
						{['$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $20,000', '$20,000 - $50,000', 'Over $50,000'].map((option) => (
							<label key={option} className="inline-flex items-center cursor-pointer">
								<input
									type="radio"
									name="budget"
									value={option}
									checked={formData.budget === option}
									onChange={handleChange}
									className="sr-only"
								/>
								<span className={`px-4 py-2 rounded-full border ${formData.budget === option ? 'bg-green-500 text-white' : 'bg-white text-black'}`}>
									{option}
								</span>
							</label>
						))}
					</div>
				</div>
				<div>
					<label htmlFor="email" className="text-2xl md:text-4xl font-bold">
						You can reach me at
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="border-b-2 border-gray-300 focus:border-black outline-none px-2 w-64 md:w-96"
							placeholder="yourname@example.com"
							required
						/>.
					</label>
				</div>
				<div>
					<label htmlFor="details" className="text-2xl md:text-4xl font-bold">
						Additional Information:
					</label>
					<textarea
						id="details"
						name="details"
						value={formData.details}
						onChange={handleChange}
						className="mt-4 w-full border-2 focus:border-black rounded-xl bg-background outline-none p-2 h-32"
						placeholder="Please share any details about your project..."
					/>
				</div>
				<RainbowButton type="submit">Send Request</RainbowButton>
			</form>
		</section>
	)
}