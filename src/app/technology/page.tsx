import type { Metadata } from "next";
import { PartnershipCta } from "@/components/sections/partnership-cta";
import { ClaimBadge } from "@/components/ui/claim-badge";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/site";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore Carboryn's proposed circular mineralization pathway and technical validation priorities.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="A circular mineralization platform, not a single additive."
        description="Carboryn develops the process layer between calcium-rich industrial residue, captured CO2, and useful mineral products."
        aside="The chemistry is established. Recovery efficiency, process economics, purity, and product performance are the work now."
      />

      <section className="light-section">
        <div className="shell process-grid process-grid--page">
          {processSteps.map((step) => (
            <article className="process-card process-card--large" key={step.id}>
              <div className="process-card__top">
                <span>{step.status}</span>
              </div>
              <h2>{step.title}</h2>
              <p className="process-card__subtitle">{step.subtitle}</p>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section">
        <div className="shell technical-grid">
          <SectionHeading
            eyebrow="Chemistry"
            title="A fixed ceiling. A real engineering challenge."
            description="The molecular ratio is clear. Industrial conversion efficiency depends on feedstock composition, recovery, reaction conditions, and downstream specifications."
          />
          <div className="technical-equation">
            <div>
              <span>56</span>
              <p>kg CaO</p>
            </div>
            <b>+</b>
            <div>
              <span>44</span>
              <p>kg CO2</p>
            </div>
            <b>→</b>
            <div>
              <span>100</span>
              <p>kg CaCO3</p>
            </div>
          </div>
          <div className="technical-note">
            <ClaimBadge status="Verified chemistry" />
            <p>
              The 0.79 kg/kg figure is a theoretical maximum for pure,
              completely converted CaO. Real feedstock performance must be
              measured.
            </p>
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Validation priorities"
            title="What the next industrial batch must answer."
          />
          <div className="question-grid">
            {[
              [
                "Feedstock",
                "How much recoverable calcium exists, and which impurities affect processing?",
              ],
              [
                "Recovery",
                "What energy, reagents, yield, and cost are required to expose reactive calcium?",
              ],
              [
                "Carbonation",
                "What conversion rate is repeatable beyond a laboratory-scale sample?",
              ],
              [
                "Product",
                "Does the output meet purity, durability, and performance requirements?",
              ],
              [
                "Lifecycle",
                "Do avoided impacts exceed transport and processing emissions?",
              ],
              [
                "Economics",
                "Can the full loop compete before carbon-credit revenue is counted?",
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
      <PartnershipCta />
    </>
  );
}
