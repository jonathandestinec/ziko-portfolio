import { Smartphone } from "lucide-react"
import CategoryPageLayout from "@/components/category-page-layout"
import { getProjectsByCategory } from "@/lib/projects-data"

export const metadata = {
    title: "Mobile Apps | Ziko Dev",
    description:
        "A showcase of mobile app projects from Ziko Dev - powerful applications that work flawlessly across iOS and Android.",
}

export default function MobileAppsPage() {
    const projects = getProjectsByCategory("Mobile Apps")

    return (
        <CategoryPageLayout
            title="Mobile Apps"
            description="Creating powerful mobile applications that work flawlessly across iOS and Android platforms. Delivering exceptional user experiences in your pocket."
            icon={<Smartphone size={32} />}
            projects={projects}
            accentColor="#10b981"
        />
    )
}
