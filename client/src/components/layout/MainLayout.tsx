"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isLightLogoPage = pathname === "/aboutus" || pathname === "/contactus";
  const hideFooterHero = pathname === "/contactus";

  // For regular routes, render with Header and Footer
  return (
    <div className="relative min-h-screen">
      <Header logoVariant={isLightLogoPage ? "light" : "dark"} />
      {children}
      <Footer showHero={!hideFooterHero} />
    </div>
  );
}
