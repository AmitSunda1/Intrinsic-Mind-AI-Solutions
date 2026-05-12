import {
  aiStrategicAdvisoryGovernanceContent,
} from "./AIStrategicAdvisoryGovernance";
import { chatAutomationAgentsContent } from "./ChatAutomationAgents";
import { dataFoundationReadinessContent } from "./DataFoundationReadiness";
import type { ServicePageContent } from "./ServicePageTemplate";

export const servicePageContentBySlug = {
  "ai-strategic-advisory-governance": aiStrategicAdvisoryGovernanceContent,
  "data-foundation-readiness": dataFoundationReadinessContent,
  "chat-automation-agents": chatAutomationAgentsContent,
} satisfies Record<string, ServicePageContent>;

export type ServicePageSlug = keyof typeof servicePageContentBySlug;

export function getServicePageContent(slug: ServicePageSlug): ServicePageContent {
  return servicePageContentBySlug[slug];
}
