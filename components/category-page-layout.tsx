import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "./header"
import Footer from "./footer"
import ProjectGrid from "./project-grid"
import type { Project } from "@/lib/projects-data"

interface CategoryPageLayoutProps {
    title: string
    description: string
    icon: React.ReactNode
    projects: Project[]
    accentColor?: string
}

export default function CategoryPageLayout({
    title,
    description,
    icon,
    projects,
    accentColor = "#c4a747",
}: CategoryPageLayoutProps) {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            <Header />

            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to all work</span>
                    </Link>

                    {/* Page Header */}
                    <div className="mb-16">
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                            style={{ backgroundColor: `${accentColor}20` }}
                        >
                            <div style={{ color: accentColor }}>{icon}</div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
                        <p className="text-gray-400 text-lg max-w-2xl">{description}</p>
                        <div className="mt-4 text-sm text-gray-500">
                            {projects.length} project{projects.length !== 1 ? "s" : ""}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <ProjectGrid projects={projects} />
                </div>
            </section>

            <Footer />
        </main>
    )
}
