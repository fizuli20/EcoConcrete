import type { Metadata } from "next";
import { PartnershipCta } from "@/components/sections/partnership-cta";
import { ClaimBadge } from "@/components/ui/claim-badge";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { pilotMilestones } from "@/content/site";

export const metadata: Metadata = {
  title: "Pilot",
  description:
    "Explore Carboryn's 2026 pilot pathway for industrial feedstock characterization, batch carbonation, and sensor-backed data.",
};

export default function PilotPage() {
  return (
    <>
      <PageHero
        eyebrow="Pilot"
        title="Build the first industrial reference case in the region."
        description="The pilot is designed to convert a promising laboratory signal into defensible feedstock, process, product, and lifecycle data."
        aside="Norm Cement is identified as a pilot target. Active discussions do not yet constitute a formal partnership."
      />

      <section className="light-section">
        <div className="shell">
          <SectionHeading
            eyebrow="2026 pathway"
            title="Three milestones. One industrial proof point."
          />
          <div className="timeline timeline--page">
            {pilotMilestones.map((milestone) => (
              <article key={milestone.date}>
                <p className="timeline__date">{milestone.date}</p>
                <span className="timeline__node" aria-hidden="true" />
                <ClaimBadge status={milestone.status} />
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Partner contribution"
            title="What an industrial pilot partner brings."
          />
          <div className="partner-grid">
            {[
              ["Residue access", "Representative samples and process context."],
              [
                "Operating data",
                "Material volumes, current disposal path, and constraints.",
              ],
              [
                "Testing pathway",
                "Access to relevant quality and performance requirements.",
              ],
              [
                "Scale context",
                "A real facility against which process economics can be tested.",
              ],
            ].map(([title, description]) => (
              <article key={title}>
                <span className="signal-dot" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="shell split-intro">
          <SectionHeading
            eyebrow="Pilot outcome"
            title="A go-or-no-go decision built on measured evidence."
            description="The pilot should reveal whether the proposed loop can move toward industrial validation without depending on optimistic assumptions."
          />
          <div className="outcome-list">
            {[
              "Characterized and traceable waste feedstock",
              "Measured recovery and carbonation efficiency",
              "Material performance and purity results",
              "Preliminary lifecycle and cost model",
              "Requirements for the next scale-up stage",
            ].map((item) => (
              <p key={item}>
                <span className="signal-dot" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <PartnershipCta />
    </>
  );
}
