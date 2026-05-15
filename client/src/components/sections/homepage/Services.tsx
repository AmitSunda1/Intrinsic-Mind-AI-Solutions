"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import FadeIn from "../../ui/FadeIn";
import SplitCtaButton from "../../ui/SplitCtaButton";
import { primaryServicePath, serviceLinks } from "../servicespage/serviceLinks";

const assets = {
  serviceImageOne: "/assets/home/services/image1.webp",
  serviceImageTwo: "/assets/home/services/image2.webp",
  serviceImageThree: "/assets/home/services/image3.webp",
  serviceImageFour: "/assets/home/services/image4.webp",
};

const services = [
  {
    href: serviceLinks[0].href,
    title: "AI Strategic Advisory & Governance",
    description:
      "Multiple AI tools, no structure around any of them. We build the governance layer - oversight, risk controls, and clear measurement of what each tool delivers.",
    images: [{ src: assets.serviceImageOne, className: "left-1/2 top-0 h-full w-full -translate-x-1/2" }],
  },
  {
    href: serviceLinks[1].href,
    title: "Data Foundation Readiness",
    description:
      "AI is only as good as the data it runs on. We assess, restructure, and govern your data infrastructure - so when you deploy AI, it actually works.",
    images: [{ src: assets.serviceImageTwo, className: "left-1/2 top-0 h-full w-full -translate-x-1/2" }],
  },
  {
    href: serviceLinks[2].href,
    title: "Chat & Automation Agents",
    description:
      "We deploy AI agents that handle the workflows slowing your teams down. Faster turnaround. Fewer errors. 42% more efficiency, documented.",
    images: [{ src: assets.serviceImageThree, className: "left-1/2 top-0 h-full w-full -translate-x-1/2" }],
  },
  {
    href: primaryServicePath,
    title: "Prompt Cycle for ServiceNow (Coming Soon)",
    description:
      "Eliminate form bottlenecks and manual workflow management inside ServiceNow - through simple, structured prompts.",
    images: [{ src: assets.serviceImageFour, className: "left-1/2 top-0 h-full w-full -translate-x-1/2" }],
  },
];

export default function Services() {
  const renderCard = (service: any) => (
    <div className="flex w-full h-full min-h-[480px] flex-col justify-between rounded-[20px] bg-[#eff3ff] transition-transform md:hover:-translate-y-2 md:hover:shadow-lg">
      <div className="px-6 md:px-10 pb-4 pt-6">
        <div className="relative h-[240px] w-full overflow-hidden">
          {service.images.map((image: any) => (
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
      <div className="flex items-center justify-center pb-6 md:pb-4">
        <SplitCtaButton
          href={service.href}
          label="See where our AI goes"
          size="sm"
          className="bg-[#dde0ff]"
        />
      </div>
    </div>
  );

  return (
    <section className="bg-white px-6 py-16 md:py-24 lg:px-20 overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 md:gap-10">
        <FadeIn className="text-center">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#0a1314]">
            Four ways we help enterprise teams ship <span className="text-[#0036d6]">AI that actually delivers.</span>
          </h2>
          <p className="mt-2 text-[18px] md:text-[20px] text-[#717171]">Built around your setup. Measured against real outcomes.</p>
        </FadeIn>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.2 + index * 0.1} className="h-full">
              {renderCard(service)}
            </FadeIn>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden w-full">
          <FadeIn delay={0.2}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1.05}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: ".services-pagination",
              }}
              onSlideChange={(swiper) => {}}
              className="w-full !overflow-visible"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="!h-auto flex pb-12">
                  {renderCard(service)}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="services-pagination flex justify-center !w-auto" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
