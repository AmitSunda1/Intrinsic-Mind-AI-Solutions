import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Logo from "../ui/Logo";
import Link from "next/link";
import CalEmbed from "../ui/CalEmbed";



type FooterProps = {
	showHero?: boolean;
};

export default function Footer({ showHero = true }: FooterProps) {
	return (
		<footer className="flex w-full flex-col">
			{showHero && (
				<div className="flex w-full items-center justify-center bg-[#ffffff] px-6 py-10 lg:py-16 lg:px-16">
					<div className="flex w-full max-w-[1280px] flex-col gap-10 rounded-3xl bg-[linear-gradient(102deg,_#001c34_2%,_#00539a_121%)] px-6 py-10 lg:px-10 lg:py-12 text-white lg:flex-row lg:items-center lg:justify-between">
						<div className="flex flex-1 flex-col gap-8">
							<div className="space-y-2 text-[28px] lg:text-[32px] leading-[1.3] tracking-[-0.64px]">
								<p className="font-light">Your AI strategy shouldn't be a guessing game.</p>
								<p className="font-semibold">Let's build one that works.</p>
							</div>
							<div className="space-y-4 text-[20px] text-white/90">
								<p>In our first call, we'll cover:</p>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<CheckCircle2 className="mt-1 h-[18px] w-[18px] text-[#6c6eea]" />
										<span>Where your AI environment stands and where the critical gaps are</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckCircle2 className="mt-1 h-[18px] w-[18px] text-[#6c6eea]" />
										<span>What a governance framework looks like for your organization</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckCircle2 className="mt-1 h-[18px] w-[18px] text-[#6c6eea]" />
										<span>A prioritized action plan</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex w-full max-w-sm flex-col gap-4 rounded-2xl bg-[#dfe5f0] p-4 lg:max-w-[328px]">
							<CalEmbed height="520px" id="footer-cal-embed" isFooter={true} />
						</div>
					</div>
				</div>
			)}
			<div className="bg-[#f0f9ff] px-6 py-10 lg:py-16 lg:px-20">
				<div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-10 lg:flex-row lg:items-start lg:justify-between">
					<Logo className="h-14 w-[160px] -ml-2" variant="light" />
					<div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-[16px] text-black">
						<div className="space-y-4">
							<p className="font-semibold">Company</p>
							<p className="cursor-pointer transition-colors hover:text-[#2f6ff6]">How it works</p>
							<p className="cursor-pointer transition-colors hover:text-[#2f6ff6]">Services</p>
							<p className="cursor-pointer transition-colors hover:text-[#2f6ff6]">About</p>
							<p className="cursor-pointer transition-colors hover:text-[#2f6ff6]">Contact us</p>
						</div>
						<div className="space-y-4">
							<p className="font-semibold">Legal</p>
							<p className="cursor-pointer transition-colors hover:text-[#2f6ff6]">Privacy Policy</p>
							<p className="cursor-pointer transition-colors hover:text-[#2f6ff6]">Terms of Service</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
