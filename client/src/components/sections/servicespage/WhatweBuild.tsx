const buildCards = [
	{
		label: "01 — Environment Audit",
		title: "Full AI Deployment Assessment",
		description:
			"We assess everything currently running in your environment. Every tool, every team, every integration — catalogued, mapped, and evaluated for redundancy, risk, and opportunity.",
	},
	{
		label: "02 — Governance Framework",
		title: "Tool Orchestration & Risk Controls",
		description:
			"Ownership structures, risk controls, and ROI reporting dashboards your leadership team can actually use. No more flying blind on what AI is doing inside your organization.",
	},
];

const prioritizationItems = [
	{ rank: "#1", label: "Contract Review Agent", roi: "+34% ROI" },
	{ rank: "#2", label: "Support Triage Automation", roi: "+28% ROI" },
	{ rank: "#3", label: "Sales Intelligence Layer", roi: "+21% ROI" },
	{ rank: "#4", label: "Compliance Monitoring", roi: "+18% ROI" },
];

export default function WhatweBuild() {
	return (
		<section className="bg-[#f3f5fb] px-6 py-24 text-[#101828] lg:px-20">
			<div className="mx-auto flex w-full max-w-[1020px] flex-col items-center text-center">
				<p className="text-[20px] font-medium text-[#6b7280]">What We Build</p>
				<h2 className="mt-2 max-w-[720px] text-[32px] font-bold leading-[1.3] text-[#101828] md:text-[36px]">
					<span className="block">A governance structure built</span>
					<span className="block">
						around <span className="text-[#2f6ff6]">real business outcomes</span>
					</span>
				</h2>

				<div className="mt-12 grid w-1280px gap-6 md:grid-cols-2">
					{buildCards.map((card) => (
						<div
							key={card.label}
							className="rounded-3xl bg-white p-8 text-left shadow-sm"
						>
							<p className="text-[16px] font-bold text-[#2f6ff6]">
								{card.label}
							</p>
							<h3 className="mt-10 text-[20px] font-bold text-[#101828]">
								{card.title}
							</h3>
							<p className="mt-2 text-[14px] leading-[1.6] text-[#4b5563]">
								{card.description}
							</p>
						</div>
					))}
				</div>

				<div className="mt-6 w-full">
					<div className="grid gap-12 rounded-3xl bg-white p-8 text-left shadow-sm lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:p-10">
						<div className="flex flex-col justify-between">
							<div>
								<p className="text-[16px] font-bold text-[#2f6ff6]">03 — AI Roadmap</p>
								<h3 className="mt-24 text-[20px] font-bold leading-[1.2] text-[#101828]">
									<span className="block">Use cases ranked by ROI,</span>
									<span className="block">not vendor hype</span>
								</h3>
								<p className="mt-3 text-[14px] leading-[1.6] text-[#4b5563]">
									Phased by what your organization can realistically execute. Aligned to how your leadership team actually makes decisions — not what a consulting firm thinks looks good in a deck.
								</p>
							</div>
						</div>

						<div className="flex flex-col justify-end">
							<p className="mb-4 text-[16px] font-medium uppercase tracking-[0.05em] text-[#6b7280]">
								Sample Prioritization
							</p>
							<div className="grid gap-3">
								{prioritizationItems.map((item) => (
									<div
										key={item.rank}
										className="flex items-center justify-between rounded-xl bg-[#f0f4f9] px-4 py-3 text-[16px] text-[#101828]"
									>
										<div className="flex items-center gap-3">
											<span className="font-bold text-[#101828]">{item.rank}</span>
											<span className="font-medium text-[#101828]">{item.label}</span>
										</div>
										<span className="rounded-full bg-[#FAFEF4] px-2.5 py-1 text-[11px] text-[#0B9F00]">
											{item.roi}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
