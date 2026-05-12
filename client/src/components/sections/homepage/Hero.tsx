import { ArrowUpRight, Circle } from "lucide-react";
import Header from "../../layout/Header";
import FadeIn from "../../ui/FadeIn";
import Link from "next/link";

const heroAssets = {
	videoThumb: "/assets/home/hero/video-thumb.webp",
	vector: "/assets/home/hero/Vector.webp",
};

export default function Hero() {
	return (
		<section className="relative z-20 overflow-visible bg-[#00162a] pb-0 pt-[120px] lg:pt-[180px] text-white">
			<Header />
			<div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[40px] lg:gap-[64px] px-6 lg:px-16">
				<FadeIn delay={0.1} className="flex flex-col items-center gap-8 text-center">
					<div className="flex flex-wrap justify-center items-center gap-2 px-5 py-3 sm:gap-3 sm:px-8 rounded-full bg-[rgba(1,2,7,0.1)] text-sm text-[#efefef] ">
						<span>42% Average Efficiency Gain</span>
						<Circle className="h-2.5 w-2.5 text-[#6c6eea]" fill="currentColor" />
						<span>15+ Years</span>
						<Circle className="h-2.5 w-2.5 text-[#6c6eea]" fill="currentColor" />
						<span>30+ Enterprise Clients</span>
					</div>
					<h1 className="max-w-[974px] text-[28px] sm:text-[32px] font-semibold leading-[1.3] tracking-[-0.96px] text-[#efefef] md:text-[48px] lg:text-[48px]">
						<span className="block">How enterprise CIOs eliminate AI chaos and</span>
						<span className="block">gain 42% more operational efficiency</span>
						<span className="block">without replacing a single tool.</span>
					</h1>
					<div className="relative flex w-full justify-center">
						<p className="relative max-w-[620px] text-[10px] md:text-[18px] text-[#b7b7b7] tracking-[0.54px]">
							Most enterprises have the tools. What's missing is governance,
							data readiness, and strategy.That's what we build. 41 times over.
						</p>
					</div>
				</FadeIn>
				<FadeIn delay={0.3} className="flex flex-col items-center gap-2">
					<Link href="/contactus" className="group flex h-[48px] items-center justify-center rounded-full bg-white/20 p-1 backdrop-blur-[0.5px] transition-transform hover:scale-105">
						<div className="flex h-10 items-center justify-center rounded-full bg-[#626ee3] px-5 text-[16px] font-medium text-white transition-colors group-hover:bg-[#505bcf]">
							Book a Free Consultation
						</div>
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#626ee3] transition-colors group-hover:bg-[#505bcf]">
							<ArrowUpRight className="h-5 w-5 text-white" />
						</div>
					</Link>
					<p className="text-[16px] text-[#b7b7b7]">See where your AI gaps are.</p>
				</FadeIn>
				<div aria-hidden className="pointer-events-none absolute left-1/2 top-[230px] -z-0 w-full max-w-[1350px] -translate-x-1/2">
					<img alt="" className="h-auto w-full object-contain opacity-95" src={heroAssets.vector} />
				</div>
				<div className="relative z-[60] -mb-[100px] lg:-mb-[200px] flex w-full max-w-[1062px] translate-y-1/2 justify-center">

					<FadeIn delay={0.5} fullWidth className="relative z-[70] -mt-50 h-[300px] sm:h-[400px] lg:h-[600px] w-full overflow-hidden rounded-[20px] lg:rounded-[28px] border-2 border-[#abd6ff66] shadow-[0px_30px_60px_rgba(0,0,0,0.4)]">
						<img
							alt="Video thumbnail"
							className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
							src={heroAssets.videoThumb}
							loading="eager"
						/>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
