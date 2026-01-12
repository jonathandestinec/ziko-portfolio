import Header from "@/components/header"
import Hero from "@/components/hero"
import Work from "@/components/work"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackgroundBlob from "@/components/background-blob"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-8 relative">
      <Header />
      <Hero />
      <BackgroundBlob />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
