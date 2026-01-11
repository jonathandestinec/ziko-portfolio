"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects, Category } from "@/lib/projects-data"

const categories: Category[] = ["All", "Graphic Design", "Web Development", "Mobile Apps"]

const categoryUrls: Record<Category, string> = {
    All: "/#work",
    "Graphic Design": "/work/graphic-design",
    "Web Development": "/work/web-development",
    "Mobile Apps": "/work/mobile-apps",
}

export default function Work() {
    const [activeCategory, setActiveCategory] = useState<Category>("All")

    const filteredProjects =
        activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

    return (
        <section id="work" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Selected </span>
                        <span className="text-white">Work</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of graphic design, web development, and mobile app projects from Ziko Dev and Zikographik
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm transition-colors ${activeCategory === category ? "bg-white text-black" : "bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {activeCategory !== "All" && (
                    <div className="flex justify-center mb-8">
                        <Link
                            href={categoryUrls[activeCategory]}
                            className="inline-flex items-center gap-2 text-[#c4a747] hover:text-white transition-colors text-sm"
                        >
                            View all {activeCategory} projects
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                )}

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            <div className="relative aspect-4/3 overflow-hidden rounded-lg mb-4">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div>
                                <span className="text-[#c4a747] text-xs uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-lg font-semibold text-white mt-1">{project.title}</h3>
                                <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                                {project.client && (
                                    <p className="text-gray-500 text-sm mt-2">
                                        <span className="text-gray-400">Client: </span>
                                        {project.client}
                                    </p>
                                )}
                                {project.tech && (
                                    <p className="text-gray-500 text-sm mt-2">
                                        <span className="text-gray-400">Tech: </span>
                                        {project.tech}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800">
                    <h3 className="text-center text-gray-400 text-sm mb-6">Browse by category</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/work/graphic-design"
                            className="px-6 py-3 bg-[#1a1a1a] rounded-lg text-white hover:bg-[#2a2a2a] transition-colors flex items-center gap-2"
                        >
                            Graphic Design
                            <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/work/web-development"
                            className="px-6 py-3 bg-[#1a1a1a] rounded-lg text-white hover:bg-[#2a2a2a] transition-colors flex items-center gap-2"
                        >
                            Web Development
                            <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/work/mobile-apps"
                            className="px-6 py-3 bg-[#1a1a1a] rounded-lg text-white hover:bg-[#2a2a2a] transition-colors flex items-center gap-2"
                        >
                            Mobile Apps
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
