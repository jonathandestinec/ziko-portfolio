"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [workDropdownOpen, setWorkDropdownOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="https://static.readdy.ai/image/c1cfe564f3251cf95b36f61d53cebf1d/3402c51c811ece3a39e40be450c9ed36.jpeg"
                        alt="Ziko Dev Logo"
                        width={32}
                        height={32}
                        className="rounded"
                    />
                    <span className="font-semibold text-lg text-white">Ziko Dev</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <div
                        className="relative"
                        onMouseEnter={() => setWorkDropdownOpen(true)}
                        onMouseLeave={() => setWorkDropdownOpen(false)}
                    >
                        <Link
                            href="/#work"
                            className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-1"
                        >
                            Work
                            <ChevronDown size={14} className={`transition-transform ${workDropdownOpen ? "rotate-180" : ""}`} />
                        </Link>
                        {workDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a1a] rounded-lg shadow-xl border border-gray-800 overflow-hidden">
                                <Link
                                    href="/#work"
                                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#2a2a2a] hover:text-white transition-colors"
                                >
                                    All Work
                                </Link>
                                <Link
                                    href="/work/graphic-design"
                                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#2a2a2a] hover:text-white transition-colors"
                                >
                                    Graphic Design
                                </Link>
                                <Link
                                    href="/work/web-development"
                                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#2a2a2a] hover:text-white transition-colors"
                                >
                                    Web Development
                                </Link>
                                <Link
                                    href="/work/mobile-apps"
                                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#2a2a2a] hover:text-white transition-colors"
                                >
                                    Mobile Apps
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                        About
                    </Link>
                    <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                        Contact
                    </Link>
                    <Link
                        href="/#contact"
                        className="px-4 py-2 border border-gray-600 rounded-full text-sm text-white hover:bg-white hover:text-black transition-colors"
                    >
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800 px-4 py-4">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/#work"
                            className="text-gray-300 hover:text-white transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Work
                        </Link>
                        <div className="pl-4 flex flex-col gap-2">
                            <Link
                                href="/work/graphic-design"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Graphic Design
                            </Link>
                            <Link
                                href="/work/web-development"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Web Development
                            </Link>
                            <Link
                                href="/work/mobile-apps"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Mobile Apps
                            </Link>
                        </div>
                        <Link
                            href="/#about"
                            className="text-gray-300 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/#contact"
                            className="text-gray-300 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/#contact"
                            className="px-4 py-2 border border-gray-600 rounded-full text-sm text-white hover:bg-white hover:text-black transition-colors text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get in Touch
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
