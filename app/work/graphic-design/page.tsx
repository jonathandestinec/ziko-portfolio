import { Palette } from "lucide-react"
import CategoryPageLayout from "@/components/category-page-layout"
import { getProjectsByCategory } from "@/lib/projects-data"

export const metadata = {
    title: "Graphic Design | Ziko Dev",
    description:
        "A showcase of graphic design projects from Zikographik - visual identities, branding materials, and creative designs.",
}

export default function GraphicDesignPage() {
    const projects = getProjectsByCategory("Graphic Design")

    return (
        <CategoryPageLayout
            title="Graphic Design"
            description="Crafting stunning visual identities, branding materials, and creative designs through Zikographik. Each project tells a unique story through thoughtful design."
            icon={<Palette size={32} />}
            projects={projects}
            accentColor="#c4a747"
        />
    )
}
