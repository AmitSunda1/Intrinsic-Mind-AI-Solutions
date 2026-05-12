import ServicePageTemplate from "../../../components/sections/servicespage/ServicePageTemplate";
import { getServicePageContent } from "../../../components/sections/servicespage/servicePageRegistry";

export default function DataFoundationReadinessPage() {
  return (
    <ServicePageTemplate
      content={getServicePageContent("data-foundation-readiness")}
    />
  );
}
