"use client";

import Slider from "react-slick";
import { ArrowUpRight, CircleCheck, CircleX } from "lucide-react";
import FadeIn from "../../ui/FadeIn";
import Link from "next/link";
import { primaryServicePath } from "../servicespage/serviceLinks";

const partnerLogos = [
  { src: "/assets/home/content/ServiceNow.webp", className: "w-[190px]" },
  { src: "/assets/home/content/AtomicWork.webp", className: "w-[190px]" },
  { src: "/assets/home/content/Flexera.webp", className: "w-[110px]" },
  { src: "/assets/home/content/Jira.webp", className: "w-[105px]" },
  { src: "/assets/home/content/ProcessUnity.webp", className: "w-[190px]" },
  { src: "/assets/home/content/OneTrust.webp", className: "w-[165px]" },
  { src: "/assets/home/content/Genesys.webp", className: "w-[185px]" },
  { src: "/assets/home/content/Claude.webp", className: "w-[185px]" },
  { src: "/assets/home/content/OpenAI.webp", className: "w-[185px]" },
  { src: "/assets/home/content/n8n.webp", className: "w-[185px]" },
];

const logoSlides = [...partnerLogos, ...partnerLogos];

const logoSliderSettings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 15000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  swipeToSlide: false,
  draggable: false,
  touchMove: false,
};

const stats = [
  {
    value: "42%",
    label: "Average efficiency gain after go-live.",
  },
  {
    value: "40+",
    label: "Enterprise AI implementations delivered",
  },
  {
    value: "15+",
    label: "Years inside large enterprises and federal agencies",
  },
];

const oldWay = [
  "Multiple AI tools running with no oversight, accountability, or measurement.",
  "AI adoption stalled because your data isn't ready, and no one knows how to fix it.",
  "Manual workflows eating hours across risk, approvals, and form submissions.",
  "No AI strategy. Just reacting to vendor pitches with no direction.",
];

const newWay = [
  "A governance framework that orchestrates every tool, tracks output, and keeps you protected.",
  "A structured data foundation process so your teams move forward with confidence.",
  "AI agents handling those workflows. 42%+ efficiency gain, documented.",
  "A tailored AI roadmap aligned to your goals, risk profile, and environment.",
];

export default function Content() {
  return (
    <>
      <section className="relative mt-120 flex z-0 flex-col items-center gap-16 py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 text-center grid-cols-1 sm:grid-cols-3 -mt-20 md:-mt-30">
          {stats.map((item, index) => (
            <FadeIn key={item.value} delay={index * 0.1} className="space-y-3">
              <p className="text-[40px] font-bold text-[#323c9a]">{item.value}</p>
              <p className="text-[16px] text-black md:text-base">{item.label}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2} fullWidth className="flex w-full flex-col items-center gap-10">
          <p className="text-center font-display text-[20px] text-[#5d5e63]">
            Deployed inside the tools your teams already run.
          </p>
          <div className="w-full overflow-hidden">
            <div className="w-full px-2 sm:px-6">
              <Slider {...logoSliderSettings} className="w-full">
                {logoSlides.map((logo, index) => (
                  <div key={`${logo.src}-${index}`} className="px-10">
                    <div className="flex h-12 items-center justify-center">
                      <img
                        alt={`Partner logo ${index + 1}`}
                        className={`h-auto max-h-10 object-contain ${logo.className}`}
                        src={logo.src}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="bg-[#001c34] px-6 py-16 md:py-24 text-white lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12">
          <FadeIn className="text-center">
            <h2 className="max-w-[980px] text-[32px] font-medium leading-[1.35] text-[#efefef]">
              <span className="block">Most enterprises are adopting AI.</span>
              <span className="block">
                <span className="text-[#efefef]">Very few are </span>
                <span className="text-[#0036d6]">doing it right.</span>
              </span>
            </h2>
            <p className="mt-3 text-[16px] md:text-[20px] text-[#b7b7b7]">
              The difference between AI that creates liability and AI that creates value.
            </p>
          </FadeIn>
          <div className="grid w-full items-stretch gap-8 md:gap-12 lg:grid-cols-[1fr_auto_1fr]">
            <FadeIn delay={0.2} className="flex flex-col gap-4">
              <div className="flex h-[100px] md:h-[120px] items-center rounded-[22px] border border-[#ff6868] bg-[linear-gradient(168deg,_#ffffff_9%,_#ffcdcd_116%)] p-6 shadow-[0px_0px_24px_rgba(255,199,199,0.38)] transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[28px] md:text-[32px] font-medium leading-none text-[#da0000]">OLD WAY</p>
              </div>
              {oldWay.map((item) => (
                <div
                  key={item}
                  className="flex h-[112px] items-center gap-3 rounded-[22px] border border-[#ff6868] bg-[linear-gradient(171deg,_#ffffff_9%,_#ffcdcd_116%)] px-5 text-[#5b5b5b] shadow-[0px_0px_24px_rgba(255,199,199,0.38)] transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-6 w-6 items-center justify-center text-[#da0000]">
                    <CircleX className="h-[22px] w-[22px]" />
                  </span>
                  <p className="text-[16px] leading-[1.4]">{item}</p>
                </div>
              ))}
            </FadeIn>
            <div className="hidden flex-col items-center py-2 lg:flex">
              <div className="w-px flex-1 bg-white/20" />
              <div className="flex size-[64px] items-center justify-center rounded-full border border-[rgba(0,22,88,0.2)] bg-[#f1f1f1]">
                <span className="text-[20px] font-semibold italic text-[#0036d6]">Vs</span>
              </div>
              <div className="w-px flex-1 bg-white/20" />
            </div>
            <FadeIn delay={0.4} className="relative flex flex-col gap-4">
              {/* <Sparkles className="absolute right-7 top-7 h-9 w-9 text-[#0036d6]" /> */}
              <div className="flex h-[100px] md:h-[120px] items-center rounded-[22px] border border-[#56c4ff] bg-[#f0f0ff] p-6 shadow-[0px_0px_20px_rgba(230,228,255,0.24)] transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[28px] md:text-[32px] font-medium leading-[1.3] text-[#0036d6]">
                  <span className="text-[#5882ff]">NEW WAY</span>
                  <span className="block text-[20px] md:text-[32px] font-bold text-[#0036d6]">WITH INTRENSIC MIND</span>
                </p>
              </div>
              {newWay.map((item) => (
                <div
                  key={item}
                  className="flex h-[112px] items-center gap-3 rounded-[22px] border border-[#56c4ff] bg-[#f0f0ff] px-5 text-black shadow-[0px_0px_20px_rgba(230,228,255,0.24)] transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-6 w-6 items-center justify-center text-[#0036d6]">
                    <CircleCheck className="h-[22px] w-[22px]" />
                  </span>
                  <p className="text-[16px] leading-[1.4]">{item}</p>
                </div>
              ))}
            </FadeIn>
          </div>
          <FadeIn delay={0.6} className="flex justify-center">
            <Link href={primaryServicePath} className="group flex h-[48px] items-center justify-center rounded-full bg-[#dde0ff] p-1 transition-transform hover:scale-105">
              <div className="flex h-10 items-center justify-center rounded-full bg-[#626ee3] px-5 text-[16px] font-medium text-white transition-colors group-hover:bg-[#505bcf]">
                See where our AI goes
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#626ee3] transition-colors group-hover:bg-[#505bcf]">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
