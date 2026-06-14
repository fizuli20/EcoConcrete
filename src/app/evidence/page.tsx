import type { Metadata } from "next";
import { PartnershipCta } from "@/components/sections/partnership-cta";
import { ClaimBadge } from "@/components/ui/claim-badge";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { claims, type ClaimStatus } from "@/content/site";

export const metadata: Metadata = {
  title: "Evidence",
  description:
    "See how Carboryn separates established chemistry, internal measurements, modeled impact, and future targets.",
};

const evidenceLevels: { status: ClaimStatus; description: string }[] = [
  {
    status: "Verified chemistry",
    description:
      "Supported by established chemical principles and stoichiometric relationships.",
  },
  {
    status: "Internally measured",
    description:
      "Observed by Carboryn using internal equipment and methods; not yet independently verified.",
  },
  {
    status: "Modeled estimate",
    description:
      "Calculated from assumptions that require validation through measured lifecycle data.",
  },
  {
    status: "Target",
    description:
      "A future performance or commercial objective, not a current result.",
  },
  {
    status: "Upcoming milestone",
    description:
      "A planned activity with a defined intended outcome that has not yet been completed.",
  },
];

export default function EvidencePage() {
  return (
    <>
      <PageHero
        eyebrow="Evidence"
        title="Credibility begins with saying what is not proven yet."
        description="Carboryn uses a visible evidence-status system so scientific certainty, internal progress, modeled impact, and future goals never blur together."
        aside="Sensor-backed is not the same as independently verified. The platform is being built to connect those layers."
      />

      <section className="light-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Evidence framework"
            title="Five statuses. No hidden assumptions."
          />
          <div className="evidence-levels">
            {evidenceLevels.map((level) => (
              <article key={level.status}>
                <span className="signal-dot" aria-hidden="true" />
                <ClaimBadge status={level.status} />
                <p>{level.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Current claim register"
            title="The important numbers, with their limits attached."
          />
          <div className="claim-register">
            {claims.map((claim) => (
              <article key={claim.value + claim.title}>
                <p className="claim-register__value">{claim.value}</p>
                <div>
                  <ClaimBadge status={claim.status} />
                  <h3>{claim.title}</h3>
                  <p>{claim.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="shell split-intro">
          <SectionHeading
            eyebrow="Prototype measurement"
            title="Mass gain is a useful signal, not the entire proof."
            description="A precision load cell can indicate CO2 uptake during carbonation. Reliable quantification also requires blanks, moisture controls, calibrated instrumentation, feedstock composition, and material characterization."
          />
          <div className="verification-stack">
            {[
              "Calibrated mass-gain measurement",
              "Controlled blank samples",
              "Feedstock purity and composition",
              "XRD or TGA material confirmation",
              "Repeatability and uncertainty reporting",
              "Independent review and lifecycle assessment",
            ].map((item) => (
              <div key={item}>
                <span className="signal-dot" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PartnershipCta />
    </>
  );
}
