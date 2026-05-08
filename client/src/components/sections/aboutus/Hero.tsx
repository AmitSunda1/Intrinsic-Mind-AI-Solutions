import FadeIn from "../../ui/FadeIn";

const expertiseCards = [
	{
		title: "AI Governance & Strategy",
		description: "15+ years architecting enterprise AI solutions with focus on compliance and security.",
	},
	{
		title: "Digital Transformation",
		description: "Led 30+ Fortune 500 companies through successful technology modernization.",
	},
	{
		title: "Data Architecture",
		description: "Built scalable data infrastructure for organizations processing billions of records.",
	},
	{
		title: "Executive Leadership",
		description: "Former VP of Engineering at major tech companies, now helping CIOs navigate AI.",
	},
];

const milestones = [
	{
		year: "2010",
		title: "Started in Enterprise Tech",
		description: "Joined leading cloud platform as Solutions Architect",
	},
	{
		year: "2015",
		title: "VP of Engineering",
		description: "Led 200+ person engineering team at Fortune 100 company.",
	},
	{
		year: "2020",
		title: "AI Transformation Expert",
		description: "Advised C-suite on AI strategy across multiple industries.",
	},
	{
		year: "2024",
		title: "Founded Consulting Practice",
		description: "Launched specialized AI governance consultancy for enterprises.",
	},
];

const stats = [
	"15+ Years Enterprise Experience",
	"30+ Enterprise Clients",
	"42% Avg Efficiency Improvement",
];

export default function AboutHero() {
	return (
		<section className="bg-white px-6 pb-16 pt-32 lg:pb-24 lg:pt-40 text-[#101828] lg:px-20">
			<div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 ">
				<div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
					<FadeIn className="space-y-6">
						<div className="space-y-4">
							<h1 className="text-[28px] font-semibold leading-[1.2] text-[#101828] md:text-[36px] ">
								From Enterprise Architect to AI Transformation Leader
							</h1>
						</div>

						<div className="space-y-4 text-[16px] leading-[1.7] text-[#4b5563]">
							<p>
								I&apos;ve spent the last 16 years in the trenches of enterprise technology - building systems, leading
								teams, and solving the kinds of problems that keep CIOs up at night.
							</p>
							<p>
								After leading engineering organizations at Fortune 100 companies and watching countless AI initiatives
								fail despite massive budgets, I recognized a pattern: <span className="text-[#2f6ff6] font-semibold">companies don&apos;t have a technology problem - they have a governance, strategy, and data readiness problem.</span>
							</p>
							<p>
								That realization led me to focus exclusively on AI transformation consulting. Not the kind that sells
								you more tools, but the kind that helps you actually use what you already have - with proper governance,
								clear metrics, and a strategy that aligns with your business goals.
							</p>
							<p>
								Today, I work with enterprise CIOs to cut through the AI chaos, establish clear governance frameworks,
								and unlock measurable efficiency gains. No fluff, no vendor bias - just strategic guidance backed by
								real-world experience.
							</p>
						</div>
					</FadeIn>

					<FadeIn delay={0.2} className="flex justify-center lg:justify-start">
						<div className="w-full max-w-[320px] rounded-3xl bg-white mx-auto lg:ml-10 transition-transform hover:scale-[1.02]">
							<div className="">
								<div className="">
									<img alt="" className="rounded-xl object-contain" src="/assets/aboutus/image.webp" />
								</div>
							</div>
							<div className="space-y-4 p-6 -ml-5">
								<div>
									<p className="text-[24px] font-semibold text-[#101828]">Kevin Young</p>
									<p className="text-[16px] text-[#2f6ff6]">Founder, Intrinsic Mind AI Solutions</p>
								</div>
								<div className="space-y-3 text-[14px] text-[#4b5563]">
									{stats.map((stat) => (
										<div key={stat} className="flex items-center gap-3">
											<span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eef3ff] text-[#2f6ff6]">
												•
											</span>
											<span>{stat}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</FadeIn>
				</div>

				<div className="space-y-8 max-w-[800px] text-center mt-8 lg:-mt-30">
					<FadeIn className="text-center">
						<h2 className="text-center text-[28px] md:text-[36px] font-semibold text-[#101828]">Core Expertise</h2>
					</FadeIn>
					<div className="grid gap-4 sm:grid-cols-2">
						{expertiseCards.map((card, index) => (
							<FadeIn key={card.title} delay={index * 0.1} className="rounded-2xl border border-[#e6ebff] bg-[#f4f7ff] p-5 transition-transform hover:-translate-y-1 hover:shadow-md">
								<p className="text-[18px] font-semibold text-[#2f6ff6]">{card.title}</p>
								<p className="mt-2 text-[14px] text-[#4b5563]">{card.description}</p>
							</FadeIn>
						))}
					</div>
				</div>

				<div className="space-y-6">
					<FadeIn>
						<h2 className="text-[28px] md:text-[36px] font-semibold text-[#101828]">Journey &amp; Milestones</h2>
					</FadeIn>
					<div className="relative" style={{ paddingLeft: "60px" }}>
						{/* Vertical connecting line — centered on the 40px badge */}
						<div
							className="absolute top-5 bg-[#5A5FBF]/30"
							style={{
								left: "19px",
								width: "1px",
								bottom: "-40px",
							}}
						/>
						<div className="space-y-12">
							{milestones.map((item, index) => (
								<FadeIn key={item.year} delay={index * 0.1} className="relative flex gap-6">
									{/* Blue circular badge — 40×40px, padding 13.46px, full border-radius */}
									<div
										className="absolute flex items-center justify-center bg-[#5A5FBF] text-white font-medium shrink-0 shadow-sm"
										style={{
											width: "40px",
											height: "40px",
											borderRadius: "26843500px",
											paddingLeft: "13.46px",
											paddingRight: "13.46px",
											fontSize: "12px",
											left: "-60px",
											top: "0px",
										}}
									>
										{item.year.slice(-2)}
									</div>

									{/* Milestone text */}
									<div className="py-1">
										<div className="flex items-baseline gap-3">
											{index === milestones.length - 1 ? (
												<>
													<span className="text-[18px] font-semibold text-[#101828]">{item.title}</span>
													<span className="text-[18px] font-medium text-[#5A5FBF]">{item.year}</span>
												</>
											) : (
												<>
													<span className="text-[18px] font-medium text-[#5A5FBF]">{item.year}</span>
													<span className="text-[18px] font-semibold text-[#101828]">{item.title}</span>
												</>
											)}
										</div>
										<p className="mt-1 text-[14px] text-[#9ca3af]">{item.description}</p>
									</div>
								</FadeIn>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
