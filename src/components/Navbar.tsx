import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, PRODUCT_NAME } from "../lib/constants";
import { useScrolled } from "../hooks/useScrollSpy";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-border bg-background/95"
          : "bg-background/80"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="inline-flex">
          <Logo size="sm" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="#pricing">Get {PRODUCT_NAME}</Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted hover:bg-white/[0.04] hover:text-text md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#pricing" className="w-full">
              Get {PRODUCT_NAME}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
