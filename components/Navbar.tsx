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
    <header className="sticky top-0 z-50 border-b border-[#2a3042]/80 bg-[#0b0c10]/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-full border border-[#5b8fff]/30 bg-[#5b8fff]/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#cfe0ff]"
        >
          Gen AI Academy APAC 2026
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-[#2a3042] bg-[#151a27]/75 px-3 py-1.5 text-xs text-[#d8e0f0] transition hover:-translate-y-0.5 hover:border-[#5b8fff]/40 hover:bg-[#1a2132]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
