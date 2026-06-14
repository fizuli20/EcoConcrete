import type { Metadata } from "next";
import { PartnershipCta } from "@/components/sections/partnership-cta";
import { AchievementsShowcase } from "@/components/sections/achievements-showcase";
import { TeamShowcase } from "@/components/sections/team-showcase";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Meet the multidisciplinary Carboryn team building a circular mineralization platform in Baku, Azerbaijan.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="A multidisciplinary team for a cross-disciplinary problem."
        description="Carboryn combines chemistry, hardware, software, AI, and business strategy to connect industrial material science with measurable climate value."
        aside="Founded in Baku. Building for the Caucasus, CIS, and other markets where practical decarbonization infrastructure is still emerging."
      />

      <TeamShowcase />
      <AchievementsShowcase />

      <section className="light-section mission-section">
        <div className="shell">
          <p className="eyebrow">Mission</p>
          <blockquote>
            Carbon should not only be managed as a liability. It can become a
            measured industrial input.
          </blockquote>
        </div>
      </section>
      <PartnershipCta />
    </>
  );
}
