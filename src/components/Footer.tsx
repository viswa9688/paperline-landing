import { NAV_LINKS, PRODUCT_NAME, ROADMAP_URL, SECTION_IDS } from "../lib/constants";
import { Logo } from "./Logo";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: `#${SECTION_IDS.features}` },
    { label: "Pricing", href: `#${SECTION_IDS.pricing}` },
    { label: "Our Story", href: `#${SECTION_IDS.story}` },
    { label: "FAQ", href: `#${SECTION_IDS.faq}` },
  ],
  Resources: [
    { label: "Roadmap", href: `#${SECTION_IDS.roadmap}` },
    { label: "Feature requests", href: ROADMAP_URL },
    { label: "Support", href: "mailto:hello@paperline.app" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "License", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo size="md" showTagline />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Send documents you&apos;re proud of. Keep every record on your
              computer.
            </p>
            <p className="mt-6 text-xs text-subtle">
              Independent software. No subscription.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-sm font-medium text-text">{group}</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-150 hover:text-text"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-subtle md:flex-row">
          <p>© {new Date().getFullYear()} {PRODUCT_NAME}. All rights reserved.</p>
          <nav className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-150 hover:text-muted"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
