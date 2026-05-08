import Header from "../../components/layout/Header";
import ContactHero from "../../components/sections/contactus/hero";
import FAQ from "../../components/sections/homepage/FAQ";
import Footer from "../../components/layout/Footer";

export default function ContactUsPage() {
  return (
    <div className="flex w-full flex-col bg-white">
      <Header logoVariant="light" />
      <ContactHero />
      <FAQ />
      <Footer showHero={false} />
    </div>
  );
}
