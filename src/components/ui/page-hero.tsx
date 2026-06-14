type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: PageHeroProps) {
  return (
    <section className="page-hero shell">
      <div className="page-hero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__lede">{description}</p>
      </div>
      <aside className="page-hero__aside">
        <span className="signal-dot" />
        <p>{aside}</p>
      </aside>
    </section>
  );
}
