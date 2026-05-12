import type { ServicePageContent } from "./ServicePageTemplate";

export const chatAutomationAgentsContent: ServicePageContent = {
  badge: "Chat & Automation Agents",
  heroTitle: [
    "Your team was not hired",
    "to copy data between systems.",
    "But that is where the day is going.",
  ],
  heroDescription:
    "The same workflows keep eating hours: intake, approvals, routing, service requests, and answers that should already be available inside the tools your team uses.",
  heroEmphasis: "That is what we come in to fix.",
  heroStats: [
    {
      value: "14%",
      label:
        "more issues resolved per hour with AI assistance in a large NBER field study.",
    },
    {
      value: "9%",
      label: "less time spent per customer issue when agents used AI support.",
    },
    {
      value: "34%",
      label:
        "productivity improvement for newer and lower-skilled workers in the same study.",
    },
  ],
  situationHeading: {
    prefix: "The workflow bottlenecks teams keep",
    highlight: "living with",
  },
  situationTools: ["ServiceNow", "Salesforce", "Approvals", "Service Requests"],
  situationSummary:
    "Too many handoffs. Too many queues. Too many tasks your team should never have been doing manually.",
  situationCards: [
    {
      title: "The same high-friction tasks repeat every day.",
      description:
        "Risk assessments, approvals, form chains, and service requests keep moving through the same manual steps with no meaningful leverage.",
    },
    {
      title: "Answers are trapped behind tools and inboxes.",
      description:
        "Teams wait on another person or another system for information that should be returned instantly in context.",
    },
    {
      title: "Nobody wants to automate the wrong thing first.",
      description:
        "The real challenge is knowing where to start without breaking the rest of the process or losing the human checkpoints that still matter.",
    },
  ],
  buildHeading: [
    "Agents built around",
    "the workflows eating your hours",
  ],
  buildCards: [
    {
      label: "01 — Workflow Selection",
      title: "High-Friction Process Identification",
      description:
        "We pinpoint the workflows consuming the most time and map where delay, manual handoff, and repetitive work are dragging teams down.",
    },
    {
      label: "02 — Embedded Chat Agents",
      title: "Answers Inside the Tools Teams Already Use",
      description:
        "Chat agents return answers directly from the live systems your team already runs, without another app, another queue, or another wait.",
    },
  ],
  prioritizationLabel: "03 — Automation Agents",
  prioritizationTitle: ["End-to-end workflow", "execution"],
  prioritizationDescription:
    "Automation agents take over the chain from intake to routing to resolution, built directly into the environment already running in your organization.",
  prioritizationItems: [
    { rank: "#1", label: "Intake and triage", badge: "Queue drain" },
    { rank: "#2", label: "Approval routing", badge: "Human-in-loop" },
    { rank: "#3", label: "Service resolution", badge: "End-to-end" },
    { rank: "#4", label: "Output reporting", badge: "Leadership view" },
  ],
  stepsIntro:
    "We start where friction is highest, keep people in the loop where needed, and expand only after the first workflow is live and measured.",
  steps: [
    {
      id: "01",
      title: "Mobilize",
      description:
        "Identify the highest-friction workflows and align stakeholders on what gets automated first and what success should look like.",
    },
    {
      id: "02",
      title: "Prepare",
      description:
        "Map the workflow end-to-end, define where the agent acts, and preserve the human checkpoints that still need to stay in place.",
    },
    {
      id: "03",
      title: "Enable",
      description:
        "Build and deploy into the live environment with integrations, testing, and baseline tracking attached from day one.",
    },
    {
      id: "04",
      title: "Enhance",
      description:
        "Measure output, close the remaining gaps, and expand the model to the next workflow once the first one proves its value.",
    },
  ],
  deliverables: [
    {
      title: "Measured Workflow Automation",
      description:
        "Specific processes moved off your team’s plate, documented clearly and tracked against tangible before-and-after output.",
    },
    {
      title: "Embedded Chat Agents",
      description:
        "Instant answers delivered inside the tools your team already uses, without switching contexts or waiting in queues.",
    },
    {
      title: "End-to-End Automation Agents",
      description:
        "Agents handling intake, approvals, routing, and resolution with the right human checkpoints still in place.",
    },
    {
      title: "Clear Leadership Reporting",
      description:
        "Output reporting that shows what changed, where time was saved, and what the automation is worth in production.",
    },
  ],
  footerStatValue: "42%",
  footerStatLabel: "Avg. Time Saved",
  footerDescription:
    "The work your team was hired to do should not stay buried under workflows that should have been automated years ago. We fix that.",
};
