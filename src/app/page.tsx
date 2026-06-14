import Link from "next/link";
import { PartnershipCta } from "@/components/sections/partnership-cta";
import { AchievementsShowcase } from "@/components/sections/achievements-showcase";
import { TeamShowcase } from "@/components/sections/team-showcase";
import { MineralizationLoader } from "@/components/three/mineralization-loader.client";
import { ClaimBadge } from "@/components/ui/claim-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  claims,
  pilotMilestones,
  processSteps,
} from "@/content/site";

const storyStages = [
  {
    eyebrow: "Industrial residue",
    title: "Start with what industry leaves behind.",
    description:
      "Calcium-rich silicate waste is treated as a feedstock opportunity, not a permanent disposal problem.",
    label: "Calcium-rich industrial residue",
  },
  {
    eyebrow: "Material recovery",
    title: "Expose the reactive mineral value.",
    description:
      "Carboryn's first technical challenge is recovering useful calcium efficiently from site-specific waste.",
    label: "Recovery pathway",
  },
  {
    eyebrow: "Controlled carbon stream",
    title: "Bring captured CO2 into the loop.",
    description:
      "A controlled emissions stream reacts with recovered calcium. This is mineralization, not passive atmospheric capture.",
    label: "Captured carbon stream",
  },
  {
    eyebrow: "Mineralization",
    title: "Turn gaseous carbon into a stable solid.",
    description:
      "The reaction forms calcium carbonate, permanently binding carbon into a material with industrial value.",
    label: "CaO + CO2 → CaCO3",
  },
  {
    eyebrow: "Verified product pathway",
    title: "Manufacture with the carbon you measure.",
    description:
      "Sensor-backed batch records connect material production with measurable carbon uptake and quality control.",
    label: "Mineral product + data",
  },
] as const;

export default function Home() {
  return (
    <>
      <section id="mineralization-story" className="story">
        <MineralizationLoader />
        <div className="story__rail" aria-hidden="true">
          <span>Carboryn mineralization</span>
          <span>SCROLL TO REACT</span>
        </div>
        <div className="story__status" aria-hidden="true">
          <span className="story__status-light" />
          <span>
            <b>Material intelligence</b>
            Live reaction visualization
          </span>
          <span>
            <b>44 : 56</b>
            CO2 to CaO molecular mass
          </span>
        </div>
        <div className="story__stages shell">
          {storyStages.map((stage, index) => (
            <article
              className={`story-stage ${index === 0 ? "story-stage--hero" : ""}`}
              key={stage.eyebrow}
            >
              <div className="story-stage__copy">
                <p className="eyebrow">{stage.eyebrow}</p>
                {index === 0 ? (
                  <h1>
                    Stop managing CO2.
                    <span>Start manufacturing with it.</span>
                  </h1>
                ) : (
                  <h2>{stage.title}</h2>
                )}
                <p>{stage.description}</p>
                {index === 0 ? (
                  <div className="hero-actions">
                    <Link className="button" href="/pilot">
                      Explore the pilot <span aria-hidden="true">↗</span>
                    </Link>
                    <Link className="text-link" href="/evidence">
                      View the evidence
                    </Link>
                  </div>
                ) : null}
              </div>
              <div className="story-stage__label">
                <span className="signal-dot" />
                {stage.label}
              </div>
            </article>
          ))}
        </div>
        <p className="visualization-note">
          Simplified visualization of Carboryn&apos;s proposed industrial
          mineralization pathway.
        </p>
      </section>

      <section className="light-section">
        <div className="shell split-intro">
          <SectionHeading
            eyebrow="One reaction. Three outcomes."
            title="Close the loop where emissions and waste meet."
            description="The cement and materials sector cannot decarbonize through clean energy alone. Carboryn develops a circular pathway for the process emissions and mineral residues that remain."
          />
          <div className="equation-card">
            <span className="micro-label">Core reaction · fixed chemistry</span>
            <p>
              CaO <span>+</span> CO2 <span>→</span> CaCO3
            </p>
            <ClaimBadge status="Verified chemistry" />
          </div>
        </div>
        <div className="shell process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.id}>
              <div className="process-card__top">
                <span>{step.status}</span>
              </div>
              <h3>{step.title}</h3>
              <p className="process-card__subtitle">{step.subtitle}</p>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section evidence-preview">
        <div className="shell">
          <SectionHeading
            eyebrow="Evidence before adjectives"
            title="Every number carries its evidence status."
            description="Carboryn separates established chemistry, internal measurements, modeled impact, and future targets so partners can see exactly what is known today."
          />
          <div className="claims-grid">
            {claims.map((claim) => (
              <article className="claim-card" key={claim.value + claim.title}>
                <ClaimBadge status={claim.status} />
                <p className="claim-card__value">{claim.value}</p>
                <h3>{claim.title}</h3>
                <p>{claim.detail}</p>
              </article>
            ))}
          </div>
          <Link className="text-link text-link--light" href="/evidence">
            Open the evidence framework
          </Link>
        </div>
      </section>

      <section className="light-section data-layer">
        <div className="shell data-layer__grid">
          <div className="sensor-panel" aria-label="Illustrative batch reading">
            <div className="sensor-panel__header">
              <span>Carboryn sensor node</span>
              <span className="live-label">
                <span className="signal-dot" /> Internal measurement
              </span>
            </div>
            <div className="sensor-panel__reading">
              <span className="micro-label">Illustrative mass-gain signal</span>
              <strong>+0.786</strong>
              <span>kg CO2 / kg CaO theoretical ceiling</span>
            </div>
            <div className="sensor-panel__chart" aria-hidden="true">
              {Array.from({ length: 32 }, (_, index) => (
                <span
                  key={index}
                  style={{ height: `${18 + Math.pow(index / 31, 1.8) * 72}%` }}
                />
              ))}
            </div>
            <div className="sensor-panel__meta">
              <span>ESP32 + precision load cell</span>
              <span>Calibration and controls required</span>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Measurement layer"
              title="Make the reaction legible, batch by batch."
              description="Mass-gain sensing can support process control and traceability. It does not replace material characterization or third-party carbon verification, so the platform is designed to connect those layers over time."
            />
            <ul className="feature-list">
              <li>
                <span className="signal-dot" aria-hidden="true" />
                Live batch-level process signal
              </li>
              <li>
                <span className="signal-dot" aria-hidden="true" />
                Calibration and traceable records
              </li>
              <li>
                <span className="signal-dot" aria-hidden="true" />
                Future integration with independent verification
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pilot-preview">
        <div className="shell">
          <SectionHeading
            eyebrow="Pilot pathway · 2026"
            title="From a laboratory signal to an industrial reference case."
            description="The next phase is built around proving feedstock recovery, repeatable carbonation, and construction-material performance under controlled conditions."
          />
          <div className="timeline">
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

      <AchievementsShowcase />
      <TeamShowcase />

      <PartnershipCta />
    </>
  );
}
