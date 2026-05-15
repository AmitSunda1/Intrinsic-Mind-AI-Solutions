"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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

  const renderCard = (stepObj: any, isMobile = false) => (
    <div className={`min-h-[350px] w-full max-w-[302px] mx-auto rounded-[16px] border border-[#f0f0f0] bg-[linear-gradient(135deg,_#fefeff_5%,_#f7f8f8_24%,_#f1f2f2_66%,_#ccd8ff_102%)] p-6 text-black shadow-[0px_4px_5px_rgba(212,214,215,0.17)] transition-transform lg:hover:-translate-y-2 lg:hover:shadow-xl ${isMobile ? "flex flex-col h-full" : ""}`}>
      <p className="text-[32px] md:text-[40px] font-bold">{stepObj.step}</p>
      <div className={`mt-4 space-y-3 ${isMobile ? "flex-1" : ""}`}>
        <p className="text-[24px] md:text-[28px] font-medium text-[#0036d6]">{stepObj.title}</p>
        <p className="text-[15px] md:text-[16px] text-[#5d5e63]">{stepObj.description}</p>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-[#001c34] px-6 pb-16 pt-16 md:pb-24 md:pt-20 text-white lg:px-20">
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
        
        {/* Desktop View with Animations */}
        <div
          ref={sectionRef}
          className="relative hidden w-full lg:flex flex-row items-center justify-center gap-6"
        >
          <motion.div
            className="flex items-center gap-6"
            style={{ zIndex: 10, position: "relative", x: cardOneX, rotate: cardOneRotate }}
          >
            {renderCard(steps[0])}
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
            {renderCard(steps[1])}
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            style={{ zIndex: 10, position: "relative", x: cardThreeX, rotate: cardThreeRotate }}
          >
            {renderCard(steps[2])}
          </motion.div>
        </div>

        {/* Mobile View with Carousel */}
        <div className="block lg:hidden w-full">
          <FadeIn delay={0.2}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: ".steps-pagination",
              }}
              onSlideChange={(swiper) => {}}
              className="w-full !overflow-visible pb-4 pt-4"
            >
              {steps.map((stepObj, index) => (
                <SwiperSlide key={index} className="!h-auto flex pb-12">
                  {renderCard(stepObj, true)}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="steps-pagination flex justify-center !w-auto" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
