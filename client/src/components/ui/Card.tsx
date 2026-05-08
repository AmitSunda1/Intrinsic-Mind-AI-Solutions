import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
	variant?: "base" | "soft" | "dark";
};

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
	base: "bg-white",
	soft: "bg-[#eff3ff]",
	dark: "bg-[#001c34] text-white",
};

export default function Card({
	className = "",
	variant = "base",
	children,
	...props
}: CardProps) {
	return (
		<div className={`${variantStyles[variant]} rounded-2xl ${className}`.trim()} {...props}>
			{children}
		</div>
	);
}
