"use client";

import { Clock, CheckCircle2, Zap } from "lucide-react";
import FadeIn from "../../ui/FadeIn";
import CalEmbed from "../../ui/CalEmbed";

const checklist = [
	{
		icon: Clock,
		title: "Current AI Landscape",
		description: "Understand where your AI environment stands today and identify critical gaps.",
	},
	{
		icon: CheckCircle2,
		title: "Governance Framework",
		description: "See what an AI governance framework looks like for your organization, tools, and risk profile.",
	},
	{
		icon: Zap,
		title: "Action Plan",
		description: "Get a prioritized roadmap with clear next steps on where to start.",
	},
];

export default function ContactHero() {
	return (
		<section className="min-h-screen bg-[#f8f9fa] px-6 pb-16 pt-32 lg:pb-24 lg:pt-40 text-[#101828] lg:px-20">
			<div className="mx-auto flex w-full max-w-[960px] flex-col items-center">
				{/* Badge */}
				<div className="flex items-center gap-2 rounded-full bg-[#e2e8f0] px-4 py-1.5 text-[12px] uppercase tracking-[0.05em] text-[#475569]">
					<span className="h-[12px] w-[12px] rounded-full bg-[#0035D6]" />
					Free Consultation
				</div>

				<FadeIn className="mt-6 max-w-[780px] text-center">
					<h1 className="text-[48px] md:text-[48px] lg:text-[44px] font-bold leading-[1.2] text-[#1e293b]">
						Book Your Free AI Strategy Session
					</h1>
				</FadeIn>

				{/* Subtitle */}
				<p className="mt-5 max-w-[640px] text-center text-[16px] leading-[1.6] text-[#64748b]">
					See exactly where your AI stands. Leave with a plan to move forward. Most enterprises already have AI
					tools in place. The gap is governance, data readiness, and strategy. This call is where we close that
					gap together.
				</p>

				{/* Two-column body */}
				<div className="mt-16 grid w-full gap-12 lg:grid-cols-[1fr_420px] lg:gap-20 items-center">
					{/* ── LEFT: Avatar + checklist ── */}
					<div className="flex flex-col gap-10">
						{/* Avatar + name (Centered) */}
						<FadeIn delay={0.1} className="flex flex-col items-center gap-3 text-center">
							<div className="h-[100px] w-[100px] overflow-hidden rounded-full -mt-8 shadow-md">
								<img
									src="/assets/contactUs/image.webp"
									alt="Kevin Young"
									className="h-full w-full object-cover transition-transform hover:scale-110"
								/>
							</div>
							<div>
								<p className="text-[20px] text-[#1e293b]">Kevin Young</p>
								<p className="text-[14px] text-[#7A7A7A] mt-0.5">Founder, Intrinsic Mind AI Solutions</p>
							</div>
						</FadeIn>

						{/* Checklist */}
						<div className="flex w-full flex-col gap-6">
							{checklist.map((item, index) => {
								const Icon = item.icon;
								return (
									<FadeIn key={item.title} delay={0.2 + index * 0.1}>
										<div className="flex items-start gap-4 transition-transform hover:translate-x-1">
											<div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#eef2ff]">
												<Icon className="h-[25px] w-[25px] text-[#6366f1]" />
											</div>
											<div className="pt-0.5">
												<p className="text-[18px] text-[#2D2D2D]">{item.title}</p>
												<p className="mt-1 text-[14px] leading-[1.6] text-[#64748b]">{item.description}</p>
											</div>
										</div>
									</FadeIn>
								);
							})}
						</div>
					</div>

					{/* ── RIGHT: Cal.com Booking Embed ── */}
					<FadeIn delay={0.3} className="rounded-[24px] bg-[#f1f5f9] p-0 shadow-sm overflow-hidden">
						<CalEmbed />
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
