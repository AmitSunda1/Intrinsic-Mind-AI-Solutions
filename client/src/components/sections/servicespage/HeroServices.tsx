import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "../../ui/Button";
import Header from "../../layout/Header";
import FadeIn from "../../ui/FadeIn";
import Link from "next/link";

const stats = [
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
    label: "Industries. Every recommendation comes from real enterprise environments — not frameworks sold off a shelf.",
  },
];

export default function HeroServices() {
  return (
    <section
      className="relative overflow-hidden bg-[#00162a] pb-20 md:pb-28 pt-[120px] lg:pt-[180px] text-white"
      style={{
        backgroundImage: "url('/assets/services/Frame.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-20">

        {/* LEFT — heading + cta */}
        <FadeIn className="flex flex-col gap-6">

          {/* Badge */}
          <div className="flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[13px] uppercase tracking-[0.18em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#626ee3]" />
            AI Strategic Advisory &amp; Governance
          </div>

          {/* Heading */}
          <h1 className="text-[32px] md:text-[50px] lg:text-[54px] font-bold leading-[1.2] tracking-[-1px] text-white">
            <span className="block">You have AI tools.</span>
            <span className="block">What&apos;s missing is</span>
            <span className="block italic text-[#7aa2ff]">the layer above them.</span>
          </h1>

          {/* Body */}
          <p className="max-w-[440px] text-[16px] leading-[1.6] text-white/65">
            Who owns each tool. What it&apos;s supposed to deliver. How leadership knows if it&apos;s working.{" "}
            <span className="font-semibold text-white">That&apos;s what we come in to build.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Link href="/contactus" className="group flex h-10 items-center justify-center rounded-full bg-white/20 p-1 backdrop-blur-[0.5px] transition-transform hover:scale-105">
              <span className="flex h-8 items-center justify-center rounded-full bg-[#626ee3] px-5 text-[16px] font-medium text-white transition-colors group-hover:bg-[#505bcf]">
                Book Consultation
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#626ee3] transition-colors group-hover:bg-[#505bcf]">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </span>
            </Link>
            <button className="flex items-center gap-2 text-[16px] text-white/60 transition-colors hover:text-white/90">
              See how we work
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </FadeIn>

        {/* RIGHT — stat cards */}
        <div className="flex flex-col gap-4">
          {/* Top row — two cards side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.slice(0, 2).map((stat, index) => (
              <FadeIn
                key={stat.value}
                delay={0.2 + index * 0.1}
                className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm transition-transform hover:-translate-y-1"
              >
                <p className="text-[28px] md:text-[32px] font-extrabold leading-none text-[#7aa2ff]">{stat.value}</p>
                <p className="mt-2 text-[13px] leading-[1.4] text-white/55">{stat.label}</p>
              </FadeIn>
            ))}
          </div>

          {/* Bottom row — full-width card */}
          <FadeIn delay={0.4} className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm transition-transform hover:-translate-y-1">
            <p className="text-[28px] md:text-[32px] font-extrabold leading-none text-[#7aa2ff]">{stats[2].value}</p>
            <p className="mt-2 text-[13px] leading-[1.4] text-white/55">{stats[2].label}</p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
