import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Hero() {
    return (
        <section className="min-h-screen pt-20">
            <div className="max-w-7xl mx-auto w-full md:flex md:mr-auto ml-auto md:items-center md:justify-between md:gap-12">

                {/* Intro stuff */}
                <div className="">
                    <div className="mb-10">
                        <span className="text-gray-400 text-sm md:text-base">Hello, I&apos;m a Designer & Developer 👋</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
                        <span className="inline-block mb-6">
                            <span className="text-white">I&apos;m </span>
                            <span className="relative inline-block">
                                <span className="text-white">Arinze</span>
                                <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 200 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M3 17C30 5 70 3 100 7C130 11 170 15 197 7"
                                        stroke="#c4a747"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        fill="none"
                                    />
                                </svg>
                            </span>
                        </span>
                        <br />
                        <span className="text-white">Zikora Chimaroke</span>
                    </h1>

                    <p className="text-gray-400 max-w-2xl mb-2 text-sm md:text-base">
                        Web Designer, Mobile Developer & Graphic Designer specializing in crafting stunning digital experiences
                        through <span className="text-white font-medium">Ziko Dev</span> and{" "}
                        <span className="text-white font-medium">Zikographik</span>.
                    </p>

                    <p className="text-gray-500 max-w-2xl mb-8 text-sm md:text-base">
                        Graduate from Chukwuemeka Odumegu Ojukwu University, bringing your vision to life with beautiful websites,
                        mobile apps, and creative designs.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <Link
                            href="#work"
                            className="px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-white hover:text-black transition-colors text-sm"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="#contact"
                            className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors text-sm"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center items-center mb-8 p-0 m-0 w-max ml-auto mr-auto">
                    <div className="">
                        <Image
                            src="https://static.readdy.ai/image/c1cfe564f3251cf95b36f61d53cebf1d/3402c51c811ece3a39e40be450c9ed36.jpeg"
                            alt="Zikodev Logo"
                            width={400}
                            height={400}
                            className="rounded-lg m-0 p-0"
                        />
                    </div>
                </div>
            </div>
            {/* Scroll indicator */}
            <div className="flex flex-col items-center text-gray-500 text-sm">
                <span>Scroll to explore</span>
                <ChevronDown className="animate-bounce mt-2" size={20} />
            </div>
        </section>
    )
}
