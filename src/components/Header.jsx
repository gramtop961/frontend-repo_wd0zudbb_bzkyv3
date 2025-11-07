import { Menu, X, LogIn, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Games", href: "#games" },
    { label: "Features/Platform", href: "#features" },
    {
      label: "About Us",
      href: "#about",
    },
    { label: "News/Blog", href: "#news" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <span className="font-semibold tracking-tight text-slate-900">Just Slots</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#client-area"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              <LogIn className="h-4 w-4" /> Client Area
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
            >
              Request a Demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#client-area"
                className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                Client Area
              </a>
              <a
                href="#contact"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
                onClick={() => setOpen(false)}
              >
                Request a Demo <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
