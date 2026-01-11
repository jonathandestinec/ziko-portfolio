import Image from "next/image"
import type { Project } from "@/lib/projects-data"

interface ProjectGridProps {
    projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div key={project.id} className="group cursor-pointer">
                    <div className="relative aspect-4/3 overflow-hidden rounded-lg mb-4 bg-[#1a1a1a]">
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
    )
}
