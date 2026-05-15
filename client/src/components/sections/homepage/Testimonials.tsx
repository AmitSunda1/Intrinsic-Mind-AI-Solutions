"use client";

import FadeIn from "../../ui/FadeIn";
import MarqueeSwiper from "../../ui/MarqueeSwiper";

const testimonials = [
  {
    quote: "Absolutely outstanding. Surpasses every competitor. I'd suggest this product to novices and experts alike.",
    name: "Evelyn Carter",
    role: "Content Strategist",
  },
  {
    quote: "A fantastic pick for anyone aiming to boost productivity. The interface is clear and easy to navigate.",
    name: "Liam Johnson",
    role: "UX Designer",
  },
  {
    quote: "Using this platform has streamlined our workflow significantly. It's intuitive and user-friendly!",
    name: "Johny Bairstow",
    role: "Operations Director",
  },
  {
    quote: "I am amazed at how much time this tool saves me daily. Truly a game changer for productivity!",
    name: "Emma Wong",
    role: "Marketing Specialist",
  },
  {
    quote: "A game changer in my workflow! The user-friendly interface makes it easy for anyone to jump right in.",
    name: "Jordan Lee",
    role: "UX Designer",
  },
  {
    quote: "Impressive results. It has transformed the way we collaborate and track our projects.",
    name: "Alex Chen",
    role: "Project Manager",
  },
  {
    quote: "The best tool I've used this year. Seamless integration with our systems has been a major plus.",
    name: "Sofia Martinez",
    role: "Software Engineer",
  },
  {
    quote:
      "An essential addition to our toolkit. The analytics features have provided invaluable insights into our performance.",
    name: "Emma Thompson",
    role: "Data Analyst",
  },
];

export default function Testimonials() {
  const topItems = testimonials.slice(0, 4);
  const bottomItems = testimonials.slice(4);
  
  // Duplicate items to ensure there are enough slides for continuous Swiper looping
  const topRow = [...topItems, ...topItems, ...topItems, ...topItems];
  const bottomRow = [...bottomItems, ...bottomItems, ...bottomItems, ...bottomItems];

  return (
    <section className="bg-[#f7f8fb] py-16 md:py-24 text-[#0a1314]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10">
        <FadeIn className="text-center">
          <p className="text-[16px] md:text-[20px] text-[#5d5e63]">Testimonials</p>
          <h2 className="text-[28px] md:text-[36px] font-medium text-[#0a1314]">
            Hear it from our <span className="text-[#0036d6]">Partners</span>
          </h2>
        </FadeIn>
      </div>
      <div className="mt-12 w-full space-y-8">
        <MarqueeSwiper
          items={topRow}
          speed={12000}
          slideClassName="px-3"
          renderItem={(item) => (
            <div className="h-[260px] w-[300px] max-w-[300px] rounded-[12px] border border-[rgba(0,54,214,0.12)] bg-white p-6 shadow-[0px_10px_30px_rgba(15,23,42,0.06)]">
              <div className="flex h-full flex-col gap-6">
                <p className="text-[18px] font-medium text-black">"{item.quote}"</p>
                <div className="h-px w-full bg-[#d8dce3]" />
                <div className="mt-auto">
                  <p className="text-[16px] font-medium text-black">{item.name}</p>
                  <p className="text-[14px] text-[#5d5e63]">{item.role}</p>
                </div>
              </div>
            </div>
          )}
        />
        <MarqueeSwiper
          items={bottomRow}
          speed={12000}
          reverseDirection
          slideClassName="px-3"
          renderItem={(item) => (
            <div className="h-[260px] w-[300px] max-w-[300px] rounded-[12px] border border-[rgba(0,54,214,0.12)] bg-white p-6 shadow-[0px_10px_30px_rgba(15,23,42,0.06)]">
              <div className="flex h-full flex-col gap-6">
                <p className="text-[18px] font-medium text-black">"{item.quote}"</p>
                <div className="h-px w-full bg-[#d8dce3]" />
                <div className="mt-auto">
                  <p className="text-[16px] font-medium text-black">{item.name}</p>
                  <p className="text-[14px] text-[#5d5e63]">{item.role}</p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}
