import type { ServicePageSlug } from "./servicePageRegistry";

export const primaryServiceSlug: ServicePageSlug =
  "ai-strategic-advisory-governance";

export const primaryServicePath = `/services/${primaryServiceSlug}`;

export const serviceLinks = [
  {
    slug: "ai-strategic-advisory-governance",
    href: "/services/ai-strategic-advisory-governance",
    label: "AI Strategic Advisory & Governance",
  },
  {
    slug: "data-foundation-readiness",
    href: "/services/data-foundation-readiness",
    label: "Data Foundation Readiness",
  },
  {
    slug: "chat-automation-agents",
    href: "/services/chat-automation-agents",
    label: "Chat & Automation Agents",
  },
] satisfies ReadonlyArray<{
  slug: ServicePageSlug;
  href: string;
  label: string;
}>;
