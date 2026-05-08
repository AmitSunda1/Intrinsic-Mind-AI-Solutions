"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../../ui/FadeIn";

const faqs = [
  {
    question: "We already have AI tools running. Can you still help?",
    answer: "Yes. Most enterprises already have AI tools in place. The gap is often governance, data readiness, and an overarching strategy that ties everything together. We help close that gap.",
  },
  {
    question: "What does the AI governance framework cover?",
    answer: "Our framework covers data privacy, security protocols, ethical AI usage, compliance with regulations, and establishing clear guidelines for your internal teams.",
  },
  {
    question: "How do you assess data readiness?",
    answer: "We evaluate your current data infrastructure, quality, accessibility, and security measures to determine if your organization is prepared to implement and scale AI solutions effectively.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience across various sectors, including healthcare, finance, retail, and manufacturing, tailoring our AI strategies to meet industry-specific challenges and compliance requirements.",
  },
  {
    question: "What does a typical engagement look like?",
    answer: "A typical engagement starts with an initial assessment, followed by collaborative strategy sessions, customized roadmap development, and ongoing support to ensure successful implementation and adoption.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-16 md:py-24 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row">
        <FadeIn delay={0.1} className="flex max-w-[340px] flex-col gap-8">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#0a1314]">Do you have a question?</h2>
          <div className="flex h-[48px] items-center rounded-full bg-transparent p-1 shadow-none transition-transform hover:scale-105">
            <div className="flex h-10 items-center justify-center rounded-full bg-[#626ee3] px-5 text-[16px] font-medium text-white shadow-none">
              Ask Us Directly
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#626ee3] shadow-none">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="flex flex-1 flex-col gap-6">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-[#e6e6e6] pb-6">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left group"
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
              >
                <span className="text-[18px] md:text-[20px] text-[#0a1314] pr-4 transition-colors group-hover:text-[#2f6ff6]">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#0a1314] transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-[16px] text-[#5d5e63]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
