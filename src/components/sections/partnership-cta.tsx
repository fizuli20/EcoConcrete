import Link from "next/link";

export function PartnershipCta() {
  return (
    <section className="cta-panel shell">
      <div className="cta-panel__signal">
        <span className="signal-dot" />
        Pilot pathway active
      </div>
      <div>
        <p className="eyebrow">Partner with Carboryn</p>
        <h2>Bring a waste stream. Leave with a measurable pathway.</h2>
      </div>
      <div className="cta-panel__actions">
        <Link className="button" href="/pilot">
          Explore the pilot <span aria-hidden="true">↗</span>
        </Link>
        <a className="text-link" href="mailto:hesenovfizuli2020@gmail.com">
          Contact the team
        </a>
        <a
          className="text-link"
          href="https://www.linkedin.com/company/carboryn-az"
          rel="noreferrer"
          target="_blank"
        >
          Follow on LinkedIn
        </a>
      </div>
    </section>
  );
}
