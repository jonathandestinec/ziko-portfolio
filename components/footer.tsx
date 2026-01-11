import Image from "next/image"
import { Instagram, Linkedin, Github, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    {/* Logo & Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Image
                                src="https://static.readdy.ai/image/c1cfe564f3251cf95b36f61d53cebf1d/3402c51c811ece3a39e40be450c9ed36.jpeg"
                                alt="Ziko Dev Logo"
                                width={24}
                                height={24}
                                className="rounded"
                            />
                            <span className="font-semibold text-white">Ziko Dev</span>
                        </div>
                        <p className="text-gray-500 text-sm">Web Designer, Mobile Developer & Graphic Designer</p>
                        <p className="text-gray-500 text-sm mt-1 w-full break-all">arinzezikora772@gmail.com | 07036113772</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 break-all w-full">
                        <a
                            href="#"
                            className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter size={18} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-right">
                        <p className="text-gray-500 text-sm">© 2026 Ziko Dev. All rights reserved</p>
                        <p className="text-gray-500 text-sm mt-1">
                            Designed & Built by <span className="text-white">Arinze Zikora Chimaroke</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
