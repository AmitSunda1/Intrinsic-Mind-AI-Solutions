"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../../ui/FadeIn";
import SplitCtaButton from "../../ui/SplitCtaButton";

const faqs = [
  {
    question: "We already have AI tools running. Can you still help?",
    answer: "Yes - this is the most common situation we walk into. Most enterprises have the tools. What's missing is the governance layer. We assess what's running, identify the gaps, and build the framework to manage it.",
  },
  {
    question: "What does the AI governance framework cover?",
    answer: "Three areas: how tools are orchestrated, how risk is managed, and how value from each tool is measured and reported to leadership. Tailored to your org - not a generic template.",
  },
  {
    question: "How do you assess data readiness?",
    answer: "A structured assessment - how your data is organized, governed, and accessible across systems. We identify what needs to change and build the remediation plan.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "Mid-market and large enterprises - with deep experience in federal agencies, financial services, and retail. Our frameworks adapt to your regulatory and operational environment.",
  },
  {
    question: "What does a typical engagement look like?",
    answer: "Discovery and gap assessment in the first two weeks. First AI agents or governance framework live within 60–90 days. We'll map your specific timeline on the call.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-16 md:py-24 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row">
        <FadeIn delay={0.1} className="flex max-w-[340px] flex-col gap-8">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#0a1314]">Do you have a question?</h2>
          <SplitCtaButton
            href="/contactus"
            label="Ask Us Directly"
            className="bg-transparent shadow-none"
            labelClassName="shadow-none"
            iconWrapperClassName="shadow-none"
            withHoverFill={false}
          />
        </FadeIn>
        <FadeIn delay={0.2} className="flex flex-1 flex-col gap-6">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-[#e6e6e6] pb-6">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left group"
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
              >
                <span className="text-[18px] md:text-[20px] text-[#0a1314] pr-4 transition-colors ">{faq.question}</span>
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
