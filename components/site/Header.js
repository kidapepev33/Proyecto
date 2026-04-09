import { navigationLinks } from "@/data/siteContent";

export default function Header() {
  return (
    <header className="site-header">
      <div className="layout-shell header-row">
        <a className="brand-mark" href="#top" aria-label="Fertility clinic homepage">
          FertiNYC
        </a>

        <nav aria-label="Primary">
          <ul className="nav-list">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="button-solid button-small" href="#contact">
          Book Appointment
        </a>
      </div>
    </header>
  );
}
