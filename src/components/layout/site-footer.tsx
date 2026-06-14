import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <Link className="brand brand--footer" href="/">
            <Image
              alt=""
              className="brand__logo brand__logo--footer"
              height={64}
              src="/carboryn-logo.png"
              width={64}
            />
            <span>Carboryn</span>
          </Link>
          <p className="site-footer__statement">
            Turning industrial residue and captured carbon into useful mineral
            products.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-footer__contact">
          <p className="micro-label">Baku, Azerbaijan</p>
          <a href="mailto:hesenovfizuli2020@gmail.com">
            hesenovfizuli2020@gmail.com
          </a>
          <a href="tel:+994507370700">+994 50 737 07 00</a>
          <a
            href="https://www.linkedin.com/company/carboryn-az"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <span>© 2026 Carboryn</span>
        <span>Prototype validated · Pilot pathway active</span>
      </div>
    </footer>
  );
}
