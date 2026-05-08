import HeroServices from "../../components/sections/servicespage/HeroServices";
import Situation from "../../components/sections/servicespage/Situation";
import WhatweBuild from "../../components/sections/servicespage/WhatweBuild";
import Steps from "../../components/sections/servicespage/Steps";
import WhatyouGet from "../../components/sections/servicespage/WhatyouGet";
import Footer from "../../components/layout/Footer";

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col bg-[#00162a]">
      <HeroServices />
      <Situation />
      <WhatweBuild />
      <Steps />
      <WhatyouGet />
      <Footer />
    </div>
  );
}
