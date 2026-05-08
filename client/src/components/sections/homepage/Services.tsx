import { ArrowUpRight } from "lucide-react";
import FadeIn from "../../ui/FadeIn";
import Link from "next/link";

const assets = {
  serviceImageOne: "/assets/home/services/image1.webp",
  serviceImageTwo: "/assets/home/services/image2.webp",
  serviceImageThree: "/assets/home/services/image3.webp",
  serviceImageFour: "/assets/home/services/image4.webp",
};

const services = [
  {
    title: "AI Strategic Advisory & Governance",
    description:
      "Multiple AI tools, no structure around any of them. We build the governance layer - oversight, risk controls, and clear measurement of what each tool delivers.",
    images: [{ src: assets.serviceImageOne, className: "left-1/2 top-0 h-full w-full -translate-x-1/2" }],
  },
  {
    title: "Data Foundation Readiness",
    description:
      "AI is only as good as the data it runs on. We assess, restructure, and govern your data infrastructure - so when you deploy AI, it actually works.",
    images: [{ src: assets.serviceImageTwo, className: "left-1/2 top-0 h-full w-full -translate-x-1/2" }],
  },
  {
    title: "Chat & Automation Agents",
    description:
      "We deploy AI agents that handle the workflows slowing your teams down. Faster turnaround. Fewer errors. 42% more efficiency, documented.",
    images: [{ src: assets.serviceImageThree, className: "left-1/2 top-0 h-full w-full -translate-x-1/2" }],
  },
  {
    title: "Prompt Cycle for ServiceNow (Coming Soon)",
    description:
      "Eliminate form bottlenecks and manual workflow management inside ServiceNow - through simple, structured prompts.",
    images: [{ src: assets.serviceImageFour, className: "left-1/2 top-0 h-full w-full -translate-x-1/2" }],
  },
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-16 md:py-24 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 md:gap-10">
        <FadeIn className="text-center">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#0a1314]">
            Four ways we help enterprise teams ship <span className="text-[#0036d6]">AI that actually delivers.</span>
          </h2>
          <p className="mt-2 text-[18px] md:text-[20px] text-[#717171]">Built around your setup. Measured against real outcomes.</p>
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.2 + index * 0.1} className="flex min-h-[480px] flex-col justify-between rounded-[20px] bg-[#eff3ff] transition-transform hover:-translate-y-2 hover:shadow-lg">
              <div className="px-10 pb-4 pt-6">
                <div className="relative h-[240px] w-full overflow-hidden">
                  {service.images.map((image) => (
                    <img
                      key={`${service.title}-${image.src}`}
                      alt=""
                      className={`absolute object-contain ${image.className}`}
                      src={image.src}
                    />
                  ))}
                </div>
                <h3 className="mt-4 text-[20px] font-semibold text-[#0a1314]">{service.title}</h3>
                <p className="mt-3 text-[16px] text-[#5d5e63]">{service.description}</p>
              </div>
              <div className="flex items-center justify-center pb-4">
                <Link href="/servicesPage" className="group flex h-[40px] items-center justify-center rounded-full bg-[#dde0ff] p-1 transition-transform hover:scale-105">
                  <div className="flex h-8 items-center justify-center rounded-full bg-[#626ee3] px-4 text-[14px] font-medium text-white transition-colors group-hover:bg-[#505bcf]">
                    See where our AI goes
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#626ee3] transition-colors group-hover:bg-[#505bcf]">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
