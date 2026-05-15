import AdditionalSection from "../components/sections/homepage/AdditionalSection";
import Content from "../components/sections/homepage/Content";
import FAQ from "../components/sections/homepage/FAQ";
import Hero from "../components/sections/homepage/Hero";
import Services from "../components/sections/homepage/Services";
import StepsSection from "../components/sections/homepage/StepsSection";
import Testimonials from "../components/sections/homepage/Testimonials";

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-[#f6f7f8]">
      <Hero />
      <Content />
      <Services />
      <AdditionalSection />
      <StepsSection />
      <Testimonials />
      <FAQ />
    </div>
  );
}
