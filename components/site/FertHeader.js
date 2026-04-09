import { navigationLinks, shared } from "@/data/siteContent";

export default function FertHeader({ transparent = false }) {
  return (
    <header className={`fert-header ${transparent ? "is-transparent" : "is-solid"}`}>
      <div className="fert-wrap fert-header-row">
        <a href="/en/home/" className="fert-logo-link" aria-label="Fertinyc home">
          <img src={shared.logo} alt="Fertinyc logo" />
        </a>

        <nav aria-label="Main menu">
          <ul className="fert-nav-list">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label.toUpperCase()}</a>
              </li>
            ))}
            <li>
              <a href="/en/home/">ENGLISH</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
