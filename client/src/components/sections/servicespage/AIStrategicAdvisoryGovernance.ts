import type { ServicePageContent } from "./ServicePageTemplate";

export const aiStrategicAdvisoryGovernanceContent: ServicePageContent = {
  badge: "AI Strategic Advisory & Governance",
  heroTitle: [
    "You have AI tools.",
    "What's missing is",
    "the layer above them.",
  ],
  heroDescription:
    "Who owns each tool. What it's supposed to deliver. How leadership knows if it's working.",
  heroEmphasis: "That's what we come in to build.",
  heroStats: [
    {
      value: "41+",
      label: "Enterprise implementations delivered",
    },
    {
      value: "42%",
      label: "Average gain in operational efficiency",
    },
    {
      value: "15+",
      label:
        "Industries. Every recommendation comes from real enterprise environments — not frameworks sold off a shelf.",
    },
  ],
  situationHeading: {
    prefix: "The environment we walk into",
    highlight: "most often",
  },
  situationTools: ["Claude", "Open AI", "Gemini", "Internal Agents"],
  situationSummary:
    "No shared framework. No accountability chain. When something goes wrong no clear path to resolution.",
  situationCards: [
    {
      title: "Different teams, different tools no shared framework.",
      description:
        "Claude, OpenAI, Gemini, internal agents running in parallel with zero orchestration.",
    },
    {
      title: "No one's measuring output.",
      description:
        "Tools are running but leadership can't tell what they're delivering or where value is leaking.",
    },
    {
      title: "No clear accountability.",
      description:
        "When something goes wrong, there's no chain to follow. Risk sits invisible until it surfaces publicly.",
    },
  ],
  buildHeading: [
    "A governance structure built",
    "around real business outcomes",
  ],
  buildCards: [
    {
      label: "01 — Environment Audit",
      title: "Full AI Deployment Assessment",
      description:
        "We assess everything currently running in your environment. Every tool, every team, every integration — catalogued, mapped, and evaluated for redundancy, risk, and opportunity.",
    },
    {
      label: "02 — Governance Framework",
      title: "Tool Orchestration & Risk Controls",
      description:
        "Ownership structures, risk controls, and ROI reporting dashboards your leadership team can actually use. No more flying blind on what AI is doing inside your organization.",
    },
  ],
  prioritizationLabel: "03 — AI Roadmap",
  prioritizationTitle: ["Use cases ranked by ROI,", "not vendor hype"],
  prioritizationDescription:
    "Phased by what your organization can realistically execute. Aligned to how your leadership team actually makes decisions — not what a consulting firm thinks looks good in a deck.",
  prioritizationItems: [
    { rank: "#1", label: "Contract Review Agent", badge: "+34% ROI" },
    { rank: "#2", label: "Support Triage Automation", badge: "+28% ROI" },
    { rank: "#3", label: "Sales Intelligence Layer", badge: "+21% ROI" },
    { rank: "#4", label: "Compliance Monitoring", badge: "+18% ROI" },
  ],
  stepsIntro:
    "Each phase builds on the last. We don't hand you a strategy doc and disappear — we stay through deployment and activation, measuring what's working at every stage.",
  steps: [
    {
      id: "01",
      title: "Mobilize",
      description:
        "Align leaders, catalogue all AI deployments, map every active process and integration across the org.",
    },
    {
      id: "02",
      title: "Prepare",
      description:
        "Assess opportunities, define ROI benchmarks, design your phased AI roadmap with leadership buy-in.",
    },
    {
      id: "03",
      title: "Implementation",
      description:
        "Deploy technology, transform roles and processes, embed the governance framework into daily operations.",
    },
    {
      id: "04",
      title: "Implementation",
      description:
        "Activate reporting, measure outcomes against baseline, and systematically scale what's delivering results.",
    },
  ],
  deliverables: [
    {
      title: "Complete AI Environment Map",
      description:
        "A clear picture of every AI tool in your org — where the gaps are, where the overlap is, and where you're exposed to risk.",
    },
    {
      title: "Governance Framework",
      description:
        "Tool orchestration rules, risk control protocols, and ROI reporting structures built for how your leadership team operates.",
    },
    {
      title: "Phased AI Roadmap",
      description:
        "Use cases ranked by business value, sequenced by what your organization can realistically execute quarter by quarter.",
    },
    {
      title: "Cross-Functional Alignment",
      description:
        "IT, operations, and business leadership on the same page — knowing what gets built, when it ships, and who owns it.",
    },
  ],
  footerStatValue: "41+",
  footerStatLabel: "Implementations",
  footerDescription:
    "Every recommendation we make comes from having done this inside real enterprise environments — not from a framework we sell off a shelf. When we walk into your organization, we've already solved most of what you're facing.",
};
