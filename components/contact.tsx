"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MessageSquare, Send } from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
    }

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* CTA Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Let's Work </span>
                        <span className="text-white relative">
                            Together
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10C50 2 150 2 198 10" stroke="#c4a747" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mt-6">
                        Have a project in mind? Let's chat about how we can bring your vision to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                        <p className="text-gray-400 mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0">
                                    <Mail className="text-gray-400" size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Email</p>
                                    <a
                                        href="mailto:arinzezikora772@gmail.com"
                                        className="text-white hover:text-gray-300 transition-colors"
                                    >
                                        arinzezikora772@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0">
                                    <Phone className="text-gray-400" size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Phone</p>
                                    <a href="tel:+2347036113772" className="text-white hover:text-gray-300 transition-colors">
                                        07036113772
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center shrink-0">
                                    <MessageSquare className="text-gray-400" size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Social Media</p>
                                    <div className="flex items-center gap-2 text-white">
                                        <a href="#" className="hover:text-gray-300 transition-colors">
                                            LinkedIn
                                        </a>
                                        <span className="text-gray-500">•</span>
                                        <a href="#" className="hover:text-gray-300 transition-colors">
                                            Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
