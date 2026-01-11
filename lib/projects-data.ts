export type Category = "All" | "Graphic Design" | "Web Development" | "Mobile Apps"

export interface Project {
    id: number
    title: string
    description: string
    category: Category
    image: string
    client?: string
    tech?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Eid El Maulud Greeting",
        description: "Festive greeting card design for Solaviva Limited",
        category: "Graphic Design",
        image: "https://ucarecdn.com/637f4e0e-1536-4005-9d3b-ed7d31bb2049/-/format/auto/",
        client: "Solaviva Limited",
    },
    {
        id: 2,
        title: "JAPA Campaign - National Grid Collapse",
        description: "Social media awareness campaign for Solaviva Limited",
        category: "Graphic Design",
        image: "https://ucarecdn.com/571ecf2f-9fd5-4b47-9702-20e89a720c2d/-/format/auto/",
        client: "Solaviva Limited",
    },
    {
        id: 3,
        title: "Merry Christmas Greeting",
        description: "Festive Christmas card design for Solaviva Limited",
        category: "Graphic Design",
        image: "https://ucarecdn.com/e28858ba-052f-4fc7-baaa-fe6bf73824e0/-/format/auto/",
        client: "Solaviva Limited",
    },
    {
        id: 4,
        title: "Happy New Year 2025",
        description: "New Year celebration greeting for Solaviva Limited",
        category: "Graphic Design",
        image: "https://ucarecdn.com/657c3480-6845-4f59-9c31-b068e8ab9d38/-/format/auto/",
        client: "Solaviva Limited",
    },
    {
        id: 5,
        title: "Hello November Promotion",
        description: "Monthly promotional design for Solaviva Limited",
        category: "Graphic Design",
        image: "https://ucarecdn.com/f0aa0601-8980-44f4-94f6-8857f032fa49/-/format/auto/",
        client: "Solaviva Limited",
    },
    {
        id: 6,
        title: "Solar On-Grid Inverter Ad",
        description: "Product advertisement for solar inverter solutions",
        category: "Graphic Design",
        image: "https://ucarecdn.com/418d693e-946a-4b94-b220-71e021c904ba/-/format/auto/",
        client: "Solaviva Limited",
    },
    {
        id: 7,
        title: "Save More Spend Less Catalog",
        description: "Product catalog design showcasing solar solutions",
        category: "Graphic Design",
        image: "https://ucarecdn.com/eb9a05c6-53cb-4b8d-a58e-556df2f41cc3/-/format/auto/",
        client: "Solaviva Limited",
    },
    {
        id: 8,
        title: "Solar Solutions for Homes & Offices",
        description: "Promotional material for residential and commercial solar",
        category: "Graphic Design",
        image: "https://ucarecdn.com/3ace17b7-f6db-43fe-827d-db157ce130c6/-/format/auto/",
        client: "Solaviva Limited",
    },
    {
        id: 9,
        title: "Light Up Your Premises - Solar Street Lights",
        description: "Solar street lighting product advertisement",
        category: "Graphic Design",
        image: "https://ucarecdn.com/c3287d32-9f5c-4dbb-b0d1-537003dd4b55/-/format/auto/",
        client: "Solaviva Limited",
    },
    {
        id: 10,
        title: "WiFi Security Camera Features",
        description: "Product feature highlights for security cameras",
        category: "Graphic Design",
        image: "https://ucarecdn.com/6888255d-38a7-4e2b-8302-59e283a3acee/-/format/auto/",
        client: "Solaviva Limited",
    },
    {
        id: 11,
        title: "JO Styles Brand Logo",
        description: "Modern logo design for fashion boutique brand",
        category: "Graphic Design",
        image: "https://ucarecdn.com/5e61e7c4-17ce-4f5d-861c-a4016815bdb7/-/format/auto/",
        client: "JO Styles",
    },
    {
        id: 12,
        title: "E-Commerce Platform",
        description: "Full-featured online store with payment integration and admin dashboard",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop&auto=format&q=80",
        tech: "React, Node.js, Stripe",
    },
    {
        id: 13,
        title: "Real Estate Listing Website",
        description: "Property search platform with advanced filters and virtual tours",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format&q=80",
        tech: "Next.js, Maps API",
    },
    {
        id: 14,
        title: "Restaurant Management System",
        description: "Complete solution for menu management, orders, and reservations",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format&q=80",
        tech: "React, Firebase",
    },
    {
        id: 15,
        title: "Educational Learning Portal",
        description: "Interactive platform for online courses and student management",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&auto=format&q=80",
        tech: "React, Video API",
    },
    {
        id: 16,
        title: "Fitness Tracker App",
        description: "Health and fitness tracking with workout plans and progress charts",
        category: "Mobile Apps",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop&auto=format&q=80",
        tech: "React Native, Expo",
    },
    {
        id: 17,
        title: "Food Delivery App",
        description: "On-demand food delivery with real-time tracking and payments",
        category: "Mobile Apps",
        image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop&auto=format&q=80",
        tech: "React Native, Maps",
    },
    {
        id: 18,
        title: "Social Media App",
        description: "Photo sharing platform with stories, messaging, and notifications",
        category: "Mobile Apps",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&auto=format&q=80",
        tech: "React Native, Firebase",
    },
    {
        id: 19,
        title: "Budget Planner App",
        description: "Personal finance management with expense tracking and analytics",
        category: "Mobile Apps",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format&q=80",
        tech: "React Native, Charts",
    },
]

export const getProjectsByCategory = (category: Category) => {
    if (category === "All") return projects
    return projects.filter((project) => project.category === category)
}
