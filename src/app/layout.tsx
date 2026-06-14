import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PointerLight } from "@/components/ui/pointer-light.client";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Carboryn — Manufacturing with captured carbon",
    template: "%s — Carboryn",
  },
  description:
    "Carboryn transforms calcium-rich industrial waste and captured CO2 into useful mineral products with sensor-backed batch data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PointerLight />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
