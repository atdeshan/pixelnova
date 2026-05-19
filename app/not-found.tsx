import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-10 text-center"
      style={{ background: "#0A0A0A", color: "#FFFFFF" }}
    >
      <div className="max-w-2xl">
        <div
          className="label inline-flex items-center gap-3 mb-10"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <span className="block h-px w-10" style={{ background: "rgba(255,255,255,0.6)" }} />
          Error · 404
        </div>

        <h1
          className="font-bold uppercase leading-[0.92] tracking-tight mb-8"
          style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}
        >
          Lost in
          <br />
          Space.
        </h1>

        <p
          className="text-lg md:text-xl leading-relaxed mx-auto max-w-md mb-12"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          The page you&apos;re looking for drifted off. Let&apos;s get you back home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full label focus-ring"
            style={{ background: "#FFFFFF", color: "#0A0A0A" }}
          >
            ← Back home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full label focus-ring"
            style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#FFFFFF" }}
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </main>
  );
}
