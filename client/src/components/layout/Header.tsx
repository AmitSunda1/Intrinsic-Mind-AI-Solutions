"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "../ui/Logo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HeaderProps = {
	className?: string;
	logoVariant?: "dark" | "light";
};

export default function Header({ className = "", logoVariant = "dark" }: HeaderProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const headerBg = logoVariant === "dark" ? "bg-[#00162a]/70" : "bg-white/70";
	const headerBorder = logoVariant === "dark" ? "border-white/10" : "border-black/5";
	const menuIconColor = logoVariant === "dark" ? "text-white" : "text-[#00162a]";

	const mobileMenuBg = logoVariant === "dark" ? "bg-[#00162a]" : "bg-[#f8f9fa]";
	const mobileMenuText = logoVariant === "dark" ? "text-white" : "text-[#101828]";
	const mobileMenuBorder = logoVariant === "dark" ? "border-white/10" : "border-black/10";

	return (
		<header className={`fixed left-0 right-0 top-0 z-[999] ${className}`.trim()}>
			<div className={`flex w-full items-center justify-between border-b ${headerBorder} ${headerBg} px-6 py-5 backdrop-blur-md lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-20`}>
				<div className="flex items-center justify-start">
					<Link href="/">
						<Logo className="h-12 w-[148px] shrink-0" variant={logoVariant} />
					</Link>
				</div>
				<nav className="mx-auto hidden h-10 items-center gap-4 rounded-full bg-[rgba(229,229,229,0.66)] px-10 text-[16px] text-[#272727] backdrop-blur-md lg:flex">
					<Link className="px-2 py-2 font-medium" href="/">
						Home
					</Link>
					<Link className="px-2 py-2 font-medium" href="/servicesPage">
						Services
					</Link>
					<Link className="px-2 py-2 font-medium" href="/aboutus">
						About
					</Link>
					<Link className="px-2 py-2 font-medium" href="/contactus">
						Contact
					</Link>
				</nav>
				<div className="hidden items-center justify-end lg:flex">
					<Link href="/contactus" className="flex h-10 items-center justify-center rounded-full bg-white/20 p-1 backdrop-blur-[0.5px]">
						<span className="flex h-8 items-center justify-center rounded-full bg-[#626ee3] px-5 text-[16px] font-medium text-white">
							Book a Free Consultation
						</span>
						<span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#626ee3]">
							<ArrowUpRight className="h-4 w-4 text-white" />
						</span>
					</Link>
				</div>
				<button
					className={`flex items-center justify-center p-2 lg:hidden ${menuIconColor}`}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle navigation menu"
				>
					<AnimatePresence mode="wait">
						{isMobileMenuOpen ? (
							<motion.div
								key="close"
								initial={{ opacity: 0, rotate: -90 }}
								animate={{ opacity: 1, rotate: 0 }}
								exit={{ opacity: 0, rotate: 90 }}
								transition={{ duration: 0.2 }}
							>
								<X className="h-7 w-7" />
							</motion.div>
						) : (
							<motion.div
								key="menu"
								initial={{ opacity: 0, rotate: 90 }}
								animate={{ opacity: 1, rotate: 0 }}
								exit={{ opacity: 0, rotate: -90 }}
								transition={{ duration: 0.2 }}
							>
								<Menu className="h-7 w-7" />
							</motion.div>
						)}
					</AnimatePresence>
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className={`absolute left-0 right-0 top-full flex flex-col border-b ${mobileMenuBorder} ${mobileMenuBg} px-6 py-8 shadow-xl lg:hidden`}
					>
						<nav className={`flex flex-col gap-6 text-[20px] ${mobileMenuText}`}>
							<Link className="font-semibold" href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
							<Link className="font-semibold" href="/servicesPage" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
							<Link className="font-semibold" href="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
							<Link className="font-semibold" href="/contactus" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
						</nav>
						<div className="mt-10 flex">
							<Link href="/contactus" onClick={() => setIsMobileMenuOpen(false)} className="flex h-14 w-full items-center justify-center rounded-full bg-[#626ee3]/20 p-1">
								<span className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#626ee3] px-5 text-[18px] font-medium text-white transition-transform hover:scale-105">
									Book Consultation
								</span>
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
