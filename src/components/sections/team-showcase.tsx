import Image from "next/image";
import { team } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function TeamShowcase({ compact = false }: { compact?: boolean }) {
  const members = compact ? team.slice(0, 3) : team;

  return (
    <section className="light-section team-showcase">
      <div className="shell">
        <SectionHeading
          eyebrow="The Carboryn team"
          title="Five disciplines shaping one industrial system."
          description="Chemistry, hardware, software, AI, and business strategy meet around a single objective: turning measured carbon into useful material."
        />
        <div className={`team-grid ${compact ? "team-grid--compact" : ""}`}>
          {members.map((member) => (
            <a
              aria-label={`Open ${member.name}'s LinkedIn profile`}
              href={member.linkedin}
              key={member.name}
              rel="noreferrer"
              target="_blank"
            >
              <div className="team-card__portrait">
                <Image
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes={compact ? "(max-width: 720px) 100vw, 33vw" : "(max-width: 720px) 100vw, 30vw"}
                  src={member.image}
                />
                <span className="team-card__portrait-light" aria-hidden="true" />
              </div>
              <div className="team-card__content">
                <div className="team-card__top">
                  <span className="signal-dot" aria-hidden="true" />
                  <span>{member.code}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p>{member.focus}</p>
                <span className="team-card__linkedin">LinkedIn ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
