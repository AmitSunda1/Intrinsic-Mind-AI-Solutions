import FadeIn from "../../ui/FadeIn";

const deliverables = [
  {
    title: "Complete AI Environment Map",
    description:
      "A clear picture of every AI tool in your org — where the gaps are, where the overlap is, and where you're exposed to risk.",
  },
  {
    title: "Governance Framework",
    description:
      "Tool orchestration rules, risk control protocols, and ROI reporting structures built for how your leadership team operates.",
  },
  {
    title: "Phased AI Roadmap",
    description:
      "Use cases ranked by business value, sequenced by what your organization can realistically execute quarter by quarter.",
  },
  {
    title: "Cross-Functional Alignment",
    description:
      "IT, operations, and business leadership on the same page — knowing what gets built, when it ships, and who owns it.",
  },
];

export default function WhatyouGet() {
  return (
    <section className="bg-white px-6 py-16 md:py-20 text-[#101828] lg:px-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10">

        {/* Header */}
        <FadeIn>
          <p className="text-[16px] md:text-[20px] font-medium text-[#5d5e63]">What You Get</p>
          <h2 className="mt-2 text-[28px] md:text-[36px] font-bold leading-[1.2] text-[#0a1314] lg:text-[38px]">
            Concrete deliverables.
            <br />
            Not slide decks.
          </h2>
        </FadeIn>

        {/* 2×2 Card Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {deliverables.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={0.2 + index * 0.1}
              className="flex items-start gap-4 rounded-2xl  bg-[#eff3ff] px-6 py-5 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon image */}
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl bg-white/60">
                <img
                  src="/assets/services/Icon.webp"
                  alt=""
                  className="h-[60px] w-[60px] object-contain"
                />
              </div>

              {/* Text */}
              <div className="pt-1">
                <h3 className="text-[15px] font-bold text-[#0a1314]">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-[#5d5e63]">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats banner */}
        <FadeIn delay={0.4} className="mx-auto w-full max-w-[860px] rounded-2xl bg-[#0f1f35] px-8 py-7 text-white shadow-[0px_18px_40px_rgba(10,30,60,0.28)] transition-transform hover:scale-[1.02]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            {/* Stat */}
            <div className="flex flex-col gap-0.5 md:shrink-0">
              <span className="text-[52px] font-bold leading-none tracking-tight">
                41<span className="text-[#8CB0FF]">+</span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] ">
                Implementations
              </span>
            </div>

            {/* Vertical divider */}
            <div className="hidden h-14 w-px bg-white/20 md:block" />
            {/* Horizontal divider (mobile) */}
            <div className="block h-px w-full bg-white/10 md:hidden" />

            {/* Body text */}
            <p className="text-[14px] leading-[1.7] text-white">
              Every recommendation we make comes from having done this inside real enterprise
              environments — not from a framework we sell off a shelf. When we walk into your
              organization, we&apos;ve already solved most of what you&apos;re facing.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
