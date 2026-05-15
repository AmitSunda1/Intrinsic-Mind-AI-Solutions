import FadeIn from "../../ui/FadeIn";
import SplitCtaButton from "../../ui/SplitCtaButton";

const heroAssets = {
	videoThumb: "/assets/home/hero/video-thumb.webp",
	vector: "/assets/home/hero/Vector.webp",
};

export default function Hero() {
	return (
		<section className="relative z-20 overflow-visible bg-[#00162a] pb-0 pt-[140px] md:pt-[120px] lg:pt-[180px] text-white">
			<div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[32px] md:gap-[48px] lg:gap-[64px] px-6 lg:px-16">
				<FadeIn delay={0.1} direction="none" className="flex flex-col items-center gap-8 text-center relative z-10">
					<div className="flex w-fit flex-wrap justify-center items-center gap-2 sm:gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 sm:px-5 py-2 text-[11px] sm:text-[13px] uppercase tracking-[0.1em] sm:tracking-[0.18em] text-white/90 backdrop-blur-sm">
						<span>42% Average Efficiency Gain</span>
						<span className="h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-[#626ee3]" />
						<span>15+ Years</span>
						<span className="h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-[#626ee3]" />
						<span>30+ Enterprise Clients</span>
					</div>

					<h1 className="max-w-[974px] text-[36px] sm:text-[32px] font-semibold leading-[1.3] tracking-[-0.96px] text-[#efefef] md:text-[48px] lg:text-[48px]">
						Eliminate AI chaos and gain operational <br className="hidden md:block" />
						efficiency with AI Orchestration
					</h1>

					<div className="relative flex w-full justify-center">
						<p className="relative max-w-[620px] text-[18px]   md:text-[18px] text-[#b7b7b7] tracking-[0.54px]">
							AI Chat & Automation Agents tailored for your business
						</p>
					</div>
				</FadeIn>

				<FadeIn delay={0.3} direction="none" className="flex flex-col items-center gap-2 relative z-10">
					<SplitCtaButton
						href="/contactus"
						label="Book a Free Consultation"
						className="bg-white/20 backdrop-blur-[0.5px]"
					/>
					<p className="text-[16px] text-[#b7b7b7]">See where your AI gaps are.</p>
				</FadeIn>

				<div aria-hidden className="pointer-events-none absolute left-1/2 top-[230px] z-0 w-full max-w-[1350px] -translate-x-1/2">
					<img alt="" className="h-auto w-full object-contain opacity-95" src={heroAssets.vector} />
				</div>

				<div className="relative z-[60] -mb-[100px] md:-mb-[100px] lg:-mb-[200px] flex w-full max-w-[1062px] translate-y-1/2 justify-center">
					<FadeIn delay={0.5} fullWidth className="relative z-[70] h-[300px] sm:h-[400px]  lg:h-[600px] lg:-mt-50 w-full overflow-hidden rounded-[20px] lg:rounded-[28px] border-2 border-[#abd6ff66]">
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
