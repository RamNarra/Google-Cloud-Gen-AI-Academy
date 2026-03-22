import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/intro", label: "Introductory Session" },
  { href: "/track-1", label: "Track 1" },
  { href: "/track-2", label: "Track 2" },
  { href: "/track-3", label: "Track 3" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#224022]/70 bg-[#060806]/95">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-full border border-[#43e8b0]/30 bg-[#43e8b0]/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#b8ffb8]"
        >
          Gen AI Academy APAC 2026
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-[#224022] bg-[#0d120d] px-3 py-1.5 text-xs text-[#d8ffd8] transition hover:border-[#43e8b0]/45 hover:bg-[#0f180f]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
