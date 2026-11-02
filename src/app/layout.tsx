import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";
import PageTransitionWrapper from "@/components/ui/PageTransitionWrapper";
import GlobalClientLayers from "@/components/GlobalClientLayers";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Caleb Oluwapelumi | Marketing & Sales Strategist in Nigeria",
  description:
    "Caleb Oluwapelumi helps businesses grow through marketing strategy, sales strategy, brand positioning, paid advertising, web development, video editing, and digital solutions.",
  keywords: [
    "Marketing strategist in Nigeria",
    "Marketing consultant Nigeria",
    "Sales strategist Nigeria",
    "Digital marketing consultant",
    "Brand positioning consultant",
    "Marketing strategy consultant",
    "Paid advertising Nigeria",
    "Web development Nigeria",
    "Video editing for businesses",
    "Business consultant Nigeria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${outfit.variable} font-sans bg-[#F7F6F2] text-[#182230] antialiased`}
      >
        {/* Global browser-only scroll indicator */}
        <GlobalClientLayers />

        {/* Page content with ViewTransition wrapper */}
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
      </body>
    </html>
  );
}
