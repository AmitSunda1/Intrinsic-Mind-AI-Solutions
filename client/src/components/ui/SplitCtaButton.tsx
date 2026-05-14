import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

type SplitCtaButtonProps = {
	href: string;
	label: string;
	size?: "sm" | "md";
	className?: string;
	labelClassName?: string;
	iconWrapperClassName?: string;
	iconClassName?: string;
	hoverScale?: boolean;
	withHoverFill?: boolean;
};

const sizeStyles = {
	sm: {
		outer: "h-10",
		label: "h-8 px-4 text-[14px]",
		icon: "h-8 w-8",
		iconSize: "h-4 w-4",
	},
	md: {
		outer: "h-[48px]",
		label: "h-10 px-5 text-[16px]",
		icon: "h-10 w-10",
		iconSize: "h-5 w-5",
	},
} as const;

export default function SplitCtaButton({
	href,
	label,
	size = "md",
	className = "",
	labelClassName = "",
	iconWrapperClassName = "",
	iconClassName = "",
	hoverScale = true,
	withHoverFill = true,
}: SplitCtaButtonProps) {
	const sizeConfig = sizeStyles[size];
	const hoverScaleClasses = hoverScale ? "transition-transform hover:scale-105" : "";
	const fillClasses = withHoverFill ? "transition-colors group-hover:bg-[#505bcf]" : "";

	const outerClasses = `flex items-center justify-center gap-0 rounded-full p-1 ${sizeConfig.outer} ${hoverScaleClasses} ${className}`.trim();
	const labelClasses = `flex items-center justify-center rounded-full bg-[#626ee3] font-medium text-white ${sizeConfig.label} ${fillClasses} ${labelClassName}`.trim();
	const iconWrapperClasses = `flex items-center justify-center rounded-full bg-[#626ee3] ${sizeConfig.icon} ${fillClasses} ${iconWrapperClassName}`.trim();
	const iconClasses = `${sizeConfig.iconSize} text-white transition-transform duration-200 ease-in-out group-hover:rotate-45 ${iconClassName}`.trim();

	return (
		<Button asChild variant="none" size="none" className={outerClasses}>
			<Link href={href}>
				<span className={labelClasses}>{label}</span>
				<span className={iconWrapperClasses}>
					<ArrowUpRight className={iconClasses} />
				</span>
			</Link>
		</Button>
	);
}
