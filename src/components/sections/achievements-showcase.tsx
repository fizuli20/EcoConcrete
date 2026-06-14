import Image from "next/image";
import { programs } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function AchievementsShowcase() {
  return (
    <section className="dark-section achievements-showcase">
      <div className="shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition that creates momentum."
          description="Each program strengthens the network, discipline, and industrial pathway needed to move Carboryn from concept toward measurable validation."
        />
        <article className="greentech-feature">
          <div className="greentech-feature__copy">
            <span className="achievement-card__status">
              1st place · April 2026
            </span>
            <h3>GreenTech III Startup & Innovation Competition</h3>
            <p>
              Carboryn placed first in the Alternative Energy and Clean World
              category, competing among more than 100 teams.
            </p>
            <a
              className="greentech-feature__post-link"
              href="https://www.linkedin.com/posts/fizuli-hasanov_cleantech-sustainability-climatetech-ugcPost-7453814101648191488-PWcN/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFdJeuIBdsl71kNarCKcUIUhvvTYbQqLnZE"
              rel="noreferrer"
              target="_blank"
            >
              <span>View winning post</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="greentech-feature__media">
            <figure>
              <Image
                alt="GreenTech III first-place trophy"
                fill
                sizes="(max-width: 720px) 44vw, 240px"
                src="/achievements/greentech-trophy-clean.png"
              />
            </figure>
            <figure>
              <Image
                alt="GreenTech III first-place diploma"
                fill
                sizes="(max-width: 720px) 56vw, 340px"
                src="/achievements/greentech-diploma-clean.png"
              />
            </figure>
          </div>
        </article>
        <div className="achievement-grid">
          {programs.slice(1).map((program, index) => (
            <article key={program}>
              <span className="achievement-card__index">
                {String(index + 2).padStart(2, "0")}
              </span>
              <span className="achievement-card__light" aria-hidden="true" />
              <p>{program}</p>
              <span className="achievement-card__status">Recognized</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
