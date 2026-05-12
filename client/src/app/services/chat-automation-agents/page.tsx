import ServicePageTemplate from "../../../components/sections/servicespage/ServicePageTemplate";
import { getServicePageContent } from "../../../components/sections/servicespage/servicePageRegistry";

export default function ChatAutomationAgentsPage() {
  return (
    <ServicePageTemplate
      content={getServicePageContent("chat-automation-agents")}
    />
  );
}
