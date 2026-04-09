import { navigationLinks } from "@/data/siteContent";

export default function Header() {
  return (
    <header className="site-header">
      <div className="layout-shell header-row">
        <a className="brand-mark" href="#home" aria-label="FertiNYC homepage">
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

        <a className="button-solid button-small" href="#about">
          What makes us different?
        </a>
      </div>
    </header>
  );
}
