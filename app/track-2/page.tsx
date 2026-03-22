import Link from "next/link";

export default function TrackTwoPage() {
  return (
    <section className="mx-auto max-w-3xl rounded-xl border border-[#272a38] bg-[#13151c] p-8 text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[#ffd166]">
        Track 2
      </p>
      <h1 className="mb-4 text-4xl font-semibold">Coming Soon</h1>
      <p className="mb-8 text-[#c4cce5]">
        Track 2 content will be published after the session materials are
        released.
      </p>
      <Link
        href="/"
        className="inline-block rounded border border-[#5b8fff]/30 bg-[#5b8fff]/10 px-5 py-2.5 text-sm font-medium text-[#d8e0f0] hover:bg-[#5b8fff]/20"
      >
        Back to Home
      </Link>
    </section>
  );
}
