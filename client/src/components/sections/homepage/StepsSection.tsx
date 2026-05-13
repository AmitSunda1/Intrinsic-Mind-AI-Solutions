"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "../../ui/FadeIn";

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We map your AI environment, identify the gaps, and decide where to start.",
  },
  {
    step: "02",
    title: "Gap Assessment",
    description:
      "We analyze your operations, data readiness, and AI maturity - and tell you exactly where to move first.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "We build and deploy - governance frameworks, data foundation work, AI agents, automation workflows. All measured against real outcomes. ROI tracked from day one. Systems optimized as you scale.",
  },
];

const assets = {
  topIcon: "/assets/home/stepssection/Image.webp",
};

export default function StepsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const cardOneX = useTransform(scrollYProgress, [0, 1], ["120px", "0px"]);
  const cardOneRotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);

  const cardTwoRotate = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const cardTwoScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  const cardThreeX = useTransform(scrollYProgress, [0, 1], ["-120px", "0px"]);
  const cardThreeRotate = useTransform(scrollYProgress, [0, 1], [8, 0]);

  return (
    <section className="relative bg-[#001c34] px-6 pb-16 pt-16 md:pb-24 md:pt-20 text-white lg:px-20">
      <img
        alt=""
        aria-hidden
        className="absolute left-1/2 top-0 h-[72px] w-[132px] -translate-x-1/2 object-contain opacity-70"
        src={assets.topIcon}
      />
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12">
        <FadeIn className="pt-14 text-center">
          <p className="text-[16px] md:text-[20px] text-[#b7b7b7]">Three steps from first conversation to measurable results.</p>
          <h2 className="text-[28px] md:text-[36px] font-medium text-[#efefef]">Getting started is straightforward</h2>
        </FadeIn>
        {/* Cards row — relative wrapper so the dotted line can be absolutely positioned behind */}
        <div
          ref={sectionRef}
          className="relative flex w-full flex-col items-center justify-center gap-6 lg:flex-row"
        >

          <motion.div
            className="flex items-center gap-6"
            style={{ zIndex: 10, position: "relative", x: cardOneX, rotate: cardOneRotate }}
          >
            <div className="min-h-[350px] w-full max-w-[302px] rounded-[16px] border border-[#f0f0f0] bg-[linear-gradient(135deg,_#fefeff_5%,_#f7f8f8_24%,_#f1f2f2_66%,_#ccd8ff_102%)] p-6 text-black shadow-[0px_4px_5px_rgba(212,214,215,0.17)] transition-transform hover:-translate-y-2 hover:shadow-xl">
              <p className="text-[32px] md:text-[40px] font-bold">{steps[0].step}</p>
              <div className="mt-4 space-y-3">
                <p className="text-[24px] md:text-[28px] font-medium text-[#0036d6]">{steps[0].title}</p>
                <p className="text-[15px] md:text-[16px] text-[#5d5e63]">{steps[0].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            style={{
              zIndex: 10,
              position: "relative",
              rotate: cardTwoRotate,
              scale: cardTwoScale,
            }}
          >
            <div className="min-h-[350px] w-full max-w-[302px] rounded-[16px] border border-[#f0f0f0] bg-[linear-gradient(135deg,_#fefeff_5%,_#f7f8f8_24%,_#f1f2f2_66%,_#ccd8ff_102%)] p-6 text-black shadow-[0px_4px_5px_rgba(212,214,215,0.17)] transition-transform hover:-translate-y-2 hover:shadow-xl">
              <p className="text-[32px] md:text-[40px] font-bold">{steps[1].step}</p>
              <div className="mt-4 space-y-3">
                <p className="text-[24px] md:text-[28px] font-medium text-[#0036d6]">{steps[1].title}</p>
                <p className="text-[15px] md:text-[16px] text-[#5d5e63]">{steps[1].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            style={{ zIndex: 10, position: "relative", x: cardThreeX, rotate: cardThreeRotate }}
          >
            <div className="min-h-[350px] w-full max-w-[302px] rounded-[16px] border border-[#f0f0f0] bg-[linear-gradient(135deg,_#fefeff_5%,_#f7f8f8_24%,_#f1f2f2_66%,_#ccd8ff_102%)] p-6 text-black shadow-[0px_4px_5px_rgba(212,214,215,0.17)] transition-transform hover:-translate-y-2 hover:shadow-xl">
              <p className="text-[32px] md:text-[40px] font-bold">{steps[2].step}</p>
              <div className="mt-4 space-y-3">
                <p className="text-[24px] md:text-[28px] font-medium text-[#0036d6]">{steps[2].title}</p>
                <p className="text-[15px] md:text-[16px] text-[#5d5e63]">{steps[2].description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
