import { Code2 } from "lucide-react"
import CategoryPageLayout from "@/components/category-page-layout"
import { getProjectsByCategory } from "@/lib/projects-data"

export const metadata = {
    title: "Web Development | Ziko Dev",
    description:
        "A showcase of web development projects from Ziko Dev - responsive websites with clean code and seamless experiences.",
}

export default function WebDevelopmentPage() {
    const projects = getProjectsByCategory("Web Development")

    return (
        <CategoryPageLayout
            title="Web Development"
            description="Building responsive, modern websites with clean code and seamless user experiences through Ziko Dev. From e-commerce platforms to management systems."
            icon={<Code2 size={32} />}
            projects={projects}
            accentColor="#3b82f6"
        />
    )
}
