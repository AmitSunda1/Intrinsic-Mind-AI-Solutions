import Header from "../../components/layout/Header";
import AboutHero from "../../components/sections/aboutus/Hero";
import Footer from "../../components/layout/Footer";

export default function AboutUsPage() {
  return (
    <div className="flex w-full flex-col bg-white">
      <Header logoVariant="light" />
      <AboutHero />
      <Footer />
    </div>
  );
}
