import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "soft" | "ghost";
	size?: "sm" | "md" | "lg";
	icon?: ReactNode;
	iconPosition?: "left" | "right";
};

const baseStyles =
	"inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#626ee3]/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
	primary: "bg-[#626ee3] text-white hover:bg-[#4f5bdd]",
	soft: "bg-[#dde0ff] text-[#1f2a7a] hover:bg-[#c9d0ff]",
	ghost: "bg-white/10 text-white hover:bg-white/20",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
	sm: "h-8 px-4 text-sm",
	md: "h-10 px-5 text-[15px]",
	lg: "h-12 px-6 text-[16px]",
};

export default function Button({
	className = "",
	variant = "primary",
	size = "md",
	icon,
	iconPosition = "right",
	children,
	...props
}: ButtonProps) {
	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
			{...props}
		>
			{icon && iconPosition === "left" ? <span className="flex size-5 items-center justify-center">{icon}</span> : null}
			{children}
			{icon && iconPosition === "right" ? <span className="flex size-5 items-center justify-center">{icon}</span> : null}
		</button>
	);
}
