const toolPills = ["Claude", "Open AI", "Gemini", "Internal Agents"];

const situationCards = [
	{
		title: "Different teams, different tools no shared framework.",
		description:
			"Claude, OpenAI, Gemini, internal agents running in parallel with zero orchestration.",
	},
	{
		title: "No one\'s measuring output.",
		description: "Tools are running but leadership can\'t tell what they\'re delivering or where value is leaking.",
	},
	{
		title: "No clear accountability.",
		description: "When something goes wrong, there\'s no chain to follow. Risk sits invisible until it surfaces publicly.",
	},
];

export default function Situation() {
	return (
		<section className="relative bg-white px-6 py-24 text-[#101828] lg:px-20">
			<div className="relative mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
				<img
					alt=""
					aria-hidden
					className="pointer-events-none absolute left-1/2 top-[140px] w-full max-w-[560px] -translate-x-1/2 opacity-80"
					src="/assets/services/Vector.webp"
					style={{ zIndex: 0, maxWidth: "304px", marginTop:"15px" }}
				/>
				{/* <div
					aria-hidden
					className="pointer-events-none absolute left-1/2 top-[240px] h-[520px] w-px -translate-x-1/2 border-l-2 border-dashed border-[#8aa2ff]/70"
					style={{ zIndex: 0 }}
				/> */}
				<p className="text-[20px] text-[#5D5E63]">The Situation</p>
				<h2 className="mt-3 text-[28px] font-semibold text-[#0a1314] md:text-[36px]">
					The environment we walk into <span className="text-[#0036d6]">most often</span>
				</h2>

				<div className="relative z-10 mt-8 ml-10 flex flex-wrap items-center justify-center gap-8">
					{toolPills.map((tool) => (
						<span
							key={tool}
							className="rounded-lg border border-[#e0e7ff] bg-[#eef3ff] px-4 py-2 text-[14px] font-medium text-[#1f2937] shadow-[0px_6px_14px_rgba(15,23,42,0.06)]"
						>
							{tool}
						</span>
					))}
				</div>

				<div className="relative z-10 mt-6 w-full max-w-[760px]">
					<div className="rounded-md  bg-white px-6 py-3 text-[18px] text-[#000000] ">
						No shared framework. No accountability chain. When something goes wrong no clear path to resolution.
					</div>
				</div>

					<div className="relative z-10 mt-8 w-full  max-w-[842px]">
					<div className="grid gap-5">
						{situationCards.map((card) => (
							<div
								key={card.title}
								className="flex gap-20 max-h-[104px] rounded-2xl border border-[#dde0ff] bg-[#eff3ff] px-6 py-5 text-left text-[#0a1314] "
							>
									<div className="flex h-[78px] w-[89px] items-center justify-center rounded-xl  ">
										<img alt="" className="h-full w-full object-contain" src="/assets/services/Icon.webp" />
								</div>
								<div >
									<p className="text-[16px] font-semibold text-[#0a1314]">{card.title}</p>
									<p className="mt-1 text-[14px] text-[#5d5e63]">{card.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
