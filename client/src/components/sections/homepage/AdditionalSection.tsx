import { ArrowUpRight } from "lucide-react";
import FadeIn from "../../ui/FadeIn";
import Link from "next/link";

const assets = {
  outcomeImageOne: "/assets/home/additionalsection/image1.webp",
  outcomeImageTwo: "/assets/home/additionalsection/image2.webp",
  outcomeImageThree: "/assets/home/additionalsection/image3.webp",
  outcomeImageFour: "/assets/home/additionalsection/image4.webp",
  outcomeImageFive: "/assets/home/additionalsection/image5.webp",
  outcomeImageSix: "/assets/home/additionalsection/image6.webp",
};

const outcomes = [
  {
    title: "42% average gain in operational efficiency",
    description: "AI agents replacing the manual workflows slowing your teams down.",
    media: (
      <div className="relative flex h-[140px] md:h-full w-[140px] md:w-[193px] shrink-0 items-center justify-center rounded-3xl bg-white">
        <img alt="" className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] object-contain" src={assets.outcomeImageOne} />
      </div>
    ),
  },
  {
    title: "A governance framework built for your environment",
    description: "Every AI tool - governed, orchestrated, measured. No more flying blind.",
    media: (
      <div className="flex h-[140px] md:h-full w-[140px] md:w-[193px] shrink-0 items-center justify-center rounded-3xl bg-[#e9edf0]">
        <img alt="" className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] object-contain" src={assets.outcomeImageTwo} />
      </div>
    ),
  },
  {
    title: "Data that's actually ready for AI",
    description: "We fix the data foundation problem before it becomes your AI problem.",
    media: (
      <div className="flex h-[140px] md:h-full w-[140px] md:w-[193px] shrink-0 items-center justify-center rounded-3xl bg-white">
        <img alt="" className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] object-contain" src={assets.outcomeImageThree} />
      </div>
    ),
  },
  {
    title: "We know the platforms you're running",
    description: "ServiceNow, Salesforce, cloud infrastructure, modern AI frameworks. No learning curve on our end.",
    media: (
      <div className="relative flex h-[140px] md:h-full w-[140px] md:w-[193px] shrink-0 items-center justify-center rounded-3xl bg-[#e9edf0]">
        <img alt="" className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] object-contain" src={assets.outcomeImageFour} />
      </div>
    ),
  },
  {
    title: "15+ years inside real enterprise environments",
    description: "Large enterprises, federal agencies, global operations. We know what actually holds up.",
    media: (
      <div className="relative flex h-[140px] md:h-full w-[140px] md:w-[193px] shrink-0 items-center justify-center rounded-3xl bg-white">
        <img alt="" className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] object-contain" src={assets.outcomeImageFive} />
      </div>
    ),
  },
  {
    title: "Strategy that becomes measurable results",
    description: "40+ implementations. Every recommendation comes from execution - not a whiteboard.",
    media: (
      <div className="relative flex h-[140px] md:h-full w-[140px] md:w-[193px] shrink-0 items-center justify-center rounded-3xl bg-[#e9edf0]">
        <img alt="" className="h-[100px] md:h-[150px] w-[100px] md:w-[150px] object-contain" src={assets.outcomeImageSix} />
      </div>
    ),
  },
];

export default function AdditionalSection() {
  return (
    <section className="px-6 py-16 md:py-24 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12">
        <FadeIn className="text-center">
          <h2 className="text-[28px] md:text-[36px] font-medium text-[#0a1314]">Here's what changes when you implement AI the right way.</h2>
          <p className="mt-2 text-[16px] md:text-[20px] text-[#5d5e63]">Documented Outcomes from 41+ enterprise implementations.</p>
        </FadeIn>
        <div className="grid gap-x-6 gap-y-12 md:gap-y-20 md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <FadeIn key={outcome.title} delay={index * 0.1} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 transition-transform hover:-translate-y-1">
              {outcome.media}
              <div className="space-y-3">
                <p className="text-[18px] md:text-[20px] font-medium text-[#0a1314]">{outcome.title}</p>
                <p className="text-[14px] md:text-[16px] text-[#5d5e63]">{outcome.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4} className="flex justify-center">
          <Link href="/contactus" className="group flex h-[48px] items-center justify-center rounded-full bg-white/20 p-1 backdrop-blur-[0.5px] transition-transform hover:scale-105">
            <div className="flex h-10 items-center justify-center rounded-full bg-[#626ee3] px-5 text-[16px] font-medium text-white transition-colors group-hover:bg-[#505bcf]">
              Book a Free Consultation
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#626ee3] transition-colors group-hover:bg-[#505bcf]">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
