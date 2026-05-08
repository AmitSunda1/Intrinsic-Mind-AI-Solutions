import FadeIn from "../../ui/FadeIn";

const steps = [
	{
		id: "01",
		title: "Mobilize",
		description:
			"Align leaders, catalogue all AI deployments, map every active process and integration across the org.",
	},
	{
		id: "02",
		title: "Prepare",
		description:
			"Assess opportunities, define ROI benchmarks, design your phased AI roadmap with leadership buy-in.",
	},
	{
		id: "03",
		title: "Implementation",
		description:
			"Deploy technology, transform roles and processes, embed the governance framework into daily operations.",
	},
	{
		id: "04",
		title: "Implementation",
		description:
			"Activate reporting, measure outcomes against baseline, and systematically scale what's delivering results.",
	},
];

export default function Steps() {
	return (
		<section className="relative overflow-hidden bg-[#001c34] px-6 pb-24 pt-10 text-white lg:px-20">
			{/* Floating image centered at the top edge */}
			<img
				src="/assets/services/Image.webp"
				alt=""
				aria-hidden
				className="absolute left-1/2 top-0 h-[40px] w-[80px] -translate-x-1/2 object-contain opacity-70"
			/>

			<div className="relative mx-auto mt-12 flex w-full max-w-[1280px] flex-col gap-12">

				{/* Header row */}
				<FadeIn className="mx-auto flex w-fit flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
					<h2 className="shrink-0 text-left text-[36px] font-bold leading-[1.3] tracking-[-0.02em]">
						<span className="block text-white">Four phases.</span>
						<span className="block text-[#7aa2ff]">Zero guesswork.</span>
					</h2>
					<p className="max-w-[600px] text-left text-[16px] leading-[1.7] text-[#b7b7b7]">
						Each phase builds on the last. We don&apos;t hand you a strategy doc and disappear — we stay
						through deployment and activation, measuring what&apos;s working at every stage.
					</p>
				</FadeIn>

				{/* 4-column step cards */}
				<div className="relative w-full">
					{/* Continuous dashed line spanning full width behind the cards */}
					<div
						aria-hidden
						className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 border-t border-dashed border-[#FFFFFF] opacity-20 lg:block"
						style={{ zIndex: 0 }}
					/>

					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 relative" style={{ zIndex: 10 }}>
						{steps.map((step, index) => (
							<FadeIn
								key={step.id}
								delay={0.2 + index * 0.1}
								className="flex flex-col gap-3 rounded-2xl p-6 shadow-[0px_20px_48px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-2"
								style={{
									background:
										"linear-gradient(139deg, #FEFFFF 5%, rgba(247,248,248,0.94) 24%, rgba(241,242,242,0.88) 66%, #CCD8FF 101%)",
								}}
							>
								{/* Step number */}
								<p className="text-[28px] font-bold text-[#0a1314]">{step.id}</p>

								{/* Title */}
								<h3 className="text-[18px] font-semibold text-[#2f6ff6]">{step.title}</h3>

								{/* Description */}
								<p className="text-[13px] leading-[1.65] text-[#4b5563]">{step.description}</p>
							</FadeIn>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
