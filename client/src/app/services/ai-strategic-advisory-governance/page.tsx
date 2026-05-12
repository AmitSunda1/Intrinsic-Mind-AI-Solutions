import ServicePageTemplate from "../../../components/sections/servicespage/ServicePageTemplate";
import { getServicePageContent } from "../../../components/sections/servicespage/servicePageRegistry";

export default function AIStrategicAdvisoryGovernancePage() {
  return (
    <ServicePageTemplate
      content={getServicePageContent("ai-strategic-advisory-governance")}
    />
  );
}
