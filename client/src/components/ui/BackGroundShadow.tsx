type BackGroundShadowProps = {
	className?: string;
};

export default function BackGroundShadow({ className = "" }: BackGroundShadowProps) {
	return (
		<div
			aria-hidden
			className={`pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top,_rgba(98,110,227,0.35),_rgba(0,22,42,0)_60%)] ${className}`.trim()}
		/>
	);
}
