"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import FadeIn from "../../ui/FadeIn";
import SplitCtaButton from "../../ui/SplitCtaButton";

type HeroStat = {
  value: string;
  label: string;
};

type SituationCard = {
  title: string;
  description: string;
};

type BuildCard = {
  label: string;
  title: string;
  description: string;
};

type PriorityItem = {
  rank: string;
  label: string;
  badge: string;
};

type Deliverable = {
  title: string;
  description: string;
};

export type ServicePageContent = {
  badge: string;
  heroTitle: [string, string, string];
  heroDescription: string;
  heroEmphasis: string;
  heroStats: HeroStat[];
  situationHeading: {
    prefix: string;
    highlight: string;
  };
  situationTools: string[];
  situationSummary: string;
  situationCards: SituationCard[];
  buildHeading: [string, string];
  buildCards: BuildCard[];
  prioritizationLabel: string;
  prioritizationTitle: [string, string];
  prioritizationDescription: string;
  prioritizationItems: PriorityItem[];
  stepsIntro: string;
  steps: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  deliverables: Deliverable[];
  footerStatValue: string;
  footerStatLabel: string;
  footerDescription: string;
};

const renderStatValue = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    return <span className="text-white">{value}</span>;
  }

  const [, number, symbol] = match;

  return (
    <>
      <span className="text-white">{number}</span>
      <span className="text-[#8CB0FF]">{symbol}</span>
    </>
  );
};

export default function ServicePageTemplate({
  content,
}: {
  content: ServicePageContent;
}) {
  const stepsSectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: stepsSectionRef,
    offset: ["start end", "center center"],
  });

  const stepOneX = useTransform(scrollYProgress, [0, 1], ["120px", "0px"]);
  const stepOneRotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);

  const stepTwoX = useTransform(scrollYProgress, [0, 1], ["40px", "0px"]);
  const stepTwoRotate = useTransform(scrollYProgress, [0, 1], [-3, 0]);
  const stepTwoScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const stepThreeX = useTransform(scrollYProgress, [0, 1], ["-40px", "0px"]);
  const stepThreeRotate = useTransform(scrollYProgress, [0, 1], [3, 0]);
  const stepThreeScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const stepFourX = useTransform(scrollYProgress, [0, 1], ["-120px", "0px"]);
  const stepFourRotate = useTransform(scrollYProgress, [0, 1], [8, 0]);

  return (
    <div className="flex w-full flex-col bg-[#00162a]">
      <section
        className="relative overflow-hidden bg-[#00162a] pb-20 pt-[120px] text-white md:pb-28 lg:pt-[180px]"
        style={{
          backgroundImage: "url('/assets/services/Frame.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-20">
          <FadeIn className="flex flex-col gap-6">
            <div className="flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[13px] uppercase tracking-[0.18em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#626ee3]" />
              {content.badge}
            </div>

            <h1 className="text-[48px] font-bold leading-[1.2] tracking-[-1px] text-white md:text-[48px] lg:text-[48px]">
              <span className="block">{content.heroTitle[0]}</span>
              <span className="block">{content.heroTitle[1]}</span>
              <span className="block text-[#7aa2ff]">{content.heroTitle[2]}</span>
            </h1>

            <p className="max-w-[440px] text-[18px] leading-[1.6] text-white/65">
              {content.heroDescription}{" "}
              <span className="font-semibold text-white">{content.heroEmphasis}</span>
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <SplitCtaButton
                href="/contactus"
                label="Book Consultation"
                size="sm"
                labelClassName="px-5 text-[16px]"
                className="bg-white/20 backdrop-blur-[0.5px]"
              />
              <button className="flex items-center gap-2 text-[16px] text-white/60 transition-colors hover:text-white/90">
                See how we work
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {content.heroStats.slice(0, 2).map((stat, index) => (
                <FadeIn
                  key={`${stat.value}-${stat.label}`}
                  delay={0.2 + index * 0.1}
                  className="rounded-2xl border border-white/10 bg-white/[0.2] p-3 backdrop-blur-sm"
                >
                  <p className="text-[28px] font-extrabold leading-none md:text-[32px]">
                    {renderStatValue(stat.value)}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.4] text-white/55">
                    {stat.label}
                  </p>
                </FadeIn>
              ))}
            </div>

            <FadeIn
              delay={0.4}
              className="rounded-2xl border border-white/10 bg-white/[0.2] p-3 backdrop-blur-sm"
            >
              <p className="text-[28px] font-extrabold leading-none md:text-[32px]">
                {renderStatValue(content.heroStats[2].value)}
              </p>
              <p className="mt-2 text-[13px] leading-[1.4] text-white/55">
                {content.heroStats[2].label}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SITUATION SECTION ── */}
      <section className="relative bg-white px-6 py-24 text-[#101828] lg:px-20">
        <div className="relative mx-auto flex w-full max-w-[980px] flex-col items-center text-center">
          <p className="text-[20px] text-[#5D5E63]">The Situation</p>
          <h2 className="mt-3 text-[28px] font-semibold text-[#0a1314] md:text-[36px]">
            {content.situationHeading.prefix}{" "}
            <span className="text-[#0036d6]">{content.situationHeading.highlight}</span>
          </h2>

          {/* Tools pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {content.situationTools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-[#e0e7ff] bg-[#eef3ff] px-4 py-2 text-[14px] font-medium text-[#1f2937] shadow-[0px_6px_14px_rgba(15,23,42,0.06)]"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <div className="my-4 text-[20px] text-[#6b7280]">↓</div>

          {/* Summary box */}
          <div className="w-full max-w-[760px]">
            <div className="rounded-2xl border border-[#dde0ff] bg-[#eff3ff] px-6 py-4 text-[18px] text-[#000000]">
              {content.situationSummary}
            </div>
          </div>

          {/* Cards with arrows */}
          <div className="mt-0 w-full max-w-[842px]">
            <div className="grid">
              {content.situationCards.map((card) => (
                <div key={card.title}>
                  {/* Arrow before each card */}
                  <div className="my-4 text-[20px] text-[#6b7280]">↓</div>
                  <div className="flex gap-6 rounded-2xl border border-[#dde0ff] bg-[#eff3ff] px-6 py-5 text-left text-[#0a1314]">
                    <div className="flex h-[78px] w-[89px] shrink-0 items-center justify-center rounded-xl">
                      <img
                        alt=""
                        className="h-full w-full object-contain"
                        src="/assets/services/Icon.webp"
                      />
                    </div>
                    <div>
                      <p className="text-[16px] font-semibold text-[#0a1314]">
                        {card.title}
                      </p>
                      <p className="mt-1 text-[14px] text-[#5d5e63]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f5fb] px-6 py-24 text-[#101828] lg:px-20">
        <div className="mx-auto flex w-full max-w-[1020px] flex-col items-center text-center">
          <p className="text-[20px] font-medium text-[#6b7280]">What We Build</p>
          <h2 className="mt-2 max-w-[720px] text-[32px] font-bold leading-[1.3] text-[#101828] md:text-[36px]">
            <span className="block">{content.buildHeading[0]}</span>
            <span className="block">
              <span className="text-[#2f6ff6]">{content.buildHeading[1]}</span>
            </span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {content.buildCards.map((card) => (
              <div key={card.label} className="rounded-3xl bg-white p-8 text-left shadow-sm">
                <p className="text-[16px] font-bold text-[#2f6ff6]">{card.label}</p>
                <h3 className="mt-10 text-[20px] font-bold text-[#101828]">{card.title}</h3>
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
                  <p className="text-[16px] font-bold text-[#2f6ff6]">
                    {content.prioritizationLabel}
                  </p>
                  <h3 className="mt-24 text-[20px] font-bold leading-[1.2] text-[#101828]">
                    <span className="block">{content.prioritizationTitle[0]}</span>
                    <span className="block">{content.prioritizationTitle[1]}</span>
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#4b5563]">
                    {content.prioritizationDescription}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <p className="mb-4 text-[16px] font-medium uppercase tracking-[0.05em] text-[#6b7280]">
                  Sample Prioritization
                </p>
                <div className="grid gap-3">
                  {content.prioritizationItems.map((item) => (
                    <div
                      key={item.rank}
                      className="flex items-center justify-between gap-4 rounded-xl bg-[#f0f4f9] px-4 py-3 text-[16px] text-[#101828]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#101828]">{item.rank}</span>
                        <span className="font-medium text-[#101828]">{item.label}</span>
                      </div>
                      <span className="rounded-full bg-[#FAFEF4] px-2.5 py-1 text-[11px] text-[#0B9F00]">
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#001c34] px-6 pb-24 pt-10 text-white lg:px-20">
        <img
          src="/assets/services/Image.webp"
          alt=""
          aria-hidden
          className="absolute left-1/2 top-0 h-[40px] w-[80px] -translate-x-1/2 object-contain opacity-70"
        />

        <div className="relative mx-auto mt-12 flex w-full max-w-[1280px] flex-col gap-12">
          <FadeIn viewportMargin="200px" className="mx-auto flex w-fit flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
            <h2 className="shrink-0 text-left text-[36px] font-bold leading-[1.3] tracking-[-0.02em]">
              <span className="block text-white">Four phases.</span>
              <span className="block text-[#7aa2ff]">Zero guesswork.</span>
            </h2>
            <p className="max-w-[600px] text-left text-[16px] leading-[1.7] text-[#b7b7b7]">
              {content.stepsIntro}
            </p>
          </FadeIn>

          <div ref={stepsSectionRef} className="relative w-full">
            <div className="relative grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ zIndex: 0 }}>
              <motion.div
                className="relative h-full"
                style={{ x: stepOneX, rotate: stepOneRotate }}
              >
                <div
                  className="relative flex h-full flex-col gap-3 rounded-2xl p-6 shadow-[0px_20px_48px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-2"
                  style={{
                    background:
                      "linear-gradient(139deg, #FEFFFF 5%, rgba(247,248,248,0.94) 24%, rgba(241,242,242,0.88) 66%, #CCD8FF 101%)",
                    zIndex: 2,
                  }}
                >
                  <p className="text-[28px] font-bold text-[#0a1314]">{content.steps[0].id}</p>
                  <h3 className="text-[18px] font-semibold text-[#2f6ff6]">{content.steps[0].title}</h3>
                  <p className="text-[13px] leading-[1.65] text-[#4b5563]">
                    {content.steps[0].description}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative h-full"
                style={{ x: stepTwoX, rotate: stepTwoRotate, scale: stepTwoScale }}
              >
                <div
                  className="relative flex h-full flex-col gap-3 rounded-2xl p-6 shadow-[0px_20px_48px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-2"
                  style={{
                    background:
                      "linear-gradient(139deg, #FEFFFF 5%, rgba(247,248,248,0.94) 24%, rgba(241,242,242,0.88) 66%, #CCD8FF 101%)",
                    zIndex: 2,
                  }}
                >
                  <p className="text-[28px] font-bold text-[#0a1314]">{content.steps[1].id}</p>
                  <h3 className="text-[18px] font-semibold text-[#2f6ff6]">{content.steps[1].title}</h3>
                  <p className="text-[13px] leading-[1.65] text-[#4b5563]">
                    {content.steps[1].description}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative h-full"
                style={{ x: stepThreeX, rotate: stepThreeRotate, scale: stepThreeScale }}
              >
                <div
                  className="relative flex h-full flex-col gap-3 rounded-2xl p-6 shadow-[0px_20px_48px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-2"
                  style={{
                    background:
                      "linear-gradient(139deg, #FEFFFF 5%, rgba(247,248,248,0.94) 24%, rgba(241,242,242,0.88) 66%, #CCD8FF 101%)",
                    zIndex: 2,
                  }}
                >
                  <p className="text-[28px] font-bold text-[#0a1314]">{content.steps[2].id}</p>
                  <h3 className="text-[18px] font-semibold text-[#2f6ff6]">{content.steps[2].title}</h3>
                  <p className="text-[13px] leading-[1.65] text-[#4b5563]">
                    {content.steps[2].description}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative h-full"
                style={{ x: stepFourX, rotate: stepFourRotate }}
              >
                <div
                  className="relative flex h-full flex-col gap-3 rounded-2xl p-6 shadow-[0px_20px_48px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-2"
                  style={{
                    background:
                      "linear-gradient(139deg, #FEFFFF 5%, rgba(247,248,248,0.94) 24%, rgba(241,242,242,0.88) 66%, #CCD8FF 101%)",
                    zIndex: 2,
                  }}
                >
                  <p className="text-[28px] font-bold text-[#0a1314]">{content.steps[3].id}</p>
                  <h3 className="text-[18px] font-semibold text-[#2f6ff6]">{content.steps[3].title}</h3>
                  <p className="text-[13px] leading-[1.65] text-[#4b5563]">
                    {content.steps[3].description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-[#101828] md:py-20 lg:px-20">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10">
          <FadeIn>
            <p className="text-[16px] font-medium text-[#5d5e63] md:text-[20px]">
              What You Get
            </p>
            <h2 className="mt-2 text-[28px] font-bold leading-[1.2] text-[#0a1314] md:text-[36px] lg:text-[38px]">
              Concrete deliverables.
              <br />
              Not slide decks.
            </h2>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2">
            {content.deliverables.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={0.2 + index * 0.1}
                className="flex items-start gap-4 rounded-2xl bg-[#eff3ff] px-6 py-5 transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl bg-white/60">
                  <img
                    src="/assets/services/Icon.webp"
                    alt=""
                    className="h-[60px] w-[60px] object-contain"
                  />
                </div>

                <div className="pt-1">
                  <h3 className="text-[15px] font-bold text-[#0a1314]">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-[#5d5e63]">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn
            delay={0.4}
            className="mx-auto w-full max-w-[860px] rounded-2xl bg-[#0f1f35] px-8 py-7 text-white shadow-[0px_18px_40px_rgba(10,30,60,0.28)] transition-transform hover:scale-[1.02]"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="flex flex-col gap-0.5 md:shrink-0">
                <span className="text-[52px] font-bold leading-none tracking-tight">
                  {renderStatValue(content.footerStatValue)}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  {content.footerStatLabel}
                </span>
              </div>

              <div className="hidden h-14 w-px bg-white/20 md:block" />
              <div className="block h-px w-full bg-white/10 md:hidden" />

              <p className="text-[14px] leading-[1.7] text-white">
                {content.footerDescription}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}