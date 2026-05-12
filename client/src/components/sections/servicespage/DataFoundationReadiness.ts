import type { ServicePageContent } from "./ServicePageTemplate";

export const dataFoundationReadinessContent: ServicePageContent = {
  badge: "Data Foundation Readiness",
  heroTitle: [
    "You already know",
    "your data is not ready.",
    "What is missing is the path to fix it.",
  ],
  heroDescription:
    "Which systems hold what. What is clean, what is duplicated, what is missing entirely. And how to sequence it so AI can actually run on it.",
  heroEmphasis: "That is what we come in to build.",
  heroStats: [
    {
      value: "43%",
      label:
        "of chief operations officers say data quality issues are their top data priority.",
    },
    {
      value: "5M+",
      label:
        "annual losses reported by more than a quarter of organizations due to poor data quality.",
    },
    {
      value: "13M",
      label:
        "average annual cost of poor data quality cited by Gartner via IBM.",
    },
  ],
  situationHeading: {
    prefix: "The foundation enterprises hit before AI can",
    highlight: "start",
  },
  situationTools: ["ERP", "CRM", "Data Lake", "Master Records"],
  situationSummary:
    "Broken references. Missing fields. No governance. You cannot automate what you cannot trust.",
  situationCards: [
    {
      title: "The infrastructure is not structured for AI.",
      description:
        "Records are inconsistent across systems, and the core model behind them is not reliable enough for automation or agents.",
    },
    {
      title: "Governance does not exist where it matters.",
      description:
        "Field requirements, reference integrity, and mandatory standards are either missing or applied unevenly.",
    },
    {
      title: "Readiness breaks before deployment begins.",
      description:
        "Teams want AI, but the load sequence and upstream dependencies are unclear, so projects stall before they deliver value.",
    },
  ],
  buildHeading: [
    "A data foundation built around",
    "what AI needs to work",
  ],
  buildCards: [
    {
      label: "01 — Environment Audit",
      title: "Structure, Quality & Completeness Review",
      description:
        "We assess your current data environment across every core system, showing what is clean, what is broken, and what is missing before AI is introduced.",
    },
    {
      label: "02 — Dependency Mapping",
      title: "Load Sequence & Readiness Design",
      description:
        "We define what must exist first, which systems depend on each other, and how the remediation sequence needs to run so downstream AI does not fail.",
    },
  ],
  prioritizationLabel: "03 — Remediation Blueprint",
  prioritizationTitle: ["Governed foundation", "built to spec"],
  prioritizationDescription:
    "The result is a structured plan to clean, restructure, and govern the data foundation so AI deployments can run reliably on top of it.",
  prioritizationItems: [
    { rank: "#1", label: "Core system audit", badge: "First pass" },
    { rank: "#2", label: "Reference integrity fixes", badge: "Required" },
    { rank: "#3", label: "Governance rule rollout", badge: "Standards" },
    { rank: "#4", label: "Deployment readiness validation", badge: "Go / No-Go" },
  ],
  stepsIntro:
    "Each phase builds on the last, from audit to validation. We do not rush to deployment until the data foundation can actually support what comes next.",
  steps: [
    {
      id: "01",
      title: "Assess",
      description:
        "Audit existing data across systems for structure, quality, completeness, and the failure points that will affect automation.",
    },
    {
      id: "02",
      title: "Map",
      description:
        "Define dependencies, load sequences, and the upstream conditions that must be true before AI can run safely.",
    },
    {
      id: "03",
      title: "Remediate",
      description:
        "Clean, restructure, and govern the data foundation to the agreed operating standard across the environment.",
    },
    {
      id: "04",
      title: "Validate",
      description:
        "Confirm readiness against mandatory criteria before any AI deployment begins, so production does not inherit avoidable failures.",
    },
  ],
  deliverables: [
    {
      title: "Full Data Environment Audit",
      description:
        "A complete view of what is clean, what is broken, and what is missing across the systems AI will depend on.",
    },
    {
      title: "Structured Remediation Plan",
      description:
        "A sequenced path to fix the foundation, including dependencies, load order, and the work required before AI goes live.",
    },
    {
      title: "Cross-Layer Governance Rules",
      description:
        "Field requirements, reference integrity standards, and mandatory controls applied consistently across the data stack.",
    },
    {
      title: "Validated AI-Ready Foundation",
      description:
        "A data environment that has been checked against readiness criteria and can support agents and automation reliably.",
    },
  ],
  footerStatValue: "41+",
  footerStatLabel: "Implementations",
  footerDescription:
    "Data problems do not announce themselves. They surface when a workflow breaks or an agent fails. We find them before that happens.",
};
