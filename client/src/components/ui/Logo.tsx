const logoAssets = {
  dark: "/assets/logo-dark.webp",
  light: "/assets/Logo-light.webp",
};

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  return (
    <div className={`relative h-10 w-[107px] ${className}`.trim()} aria-label="Intrinsic Mind logo">
      <img alt="Intrinsic Mind" className="h-full w-full object-contain" src={logoAssets[variant]} />
    </div>
  );
}
