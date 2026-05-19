"use client";

import { useEffect, useState } from "react";
import { Mail, Instagram, Linkedin, Dribbble, Github } from "lucide-react";
import { NAV, STUDIO } from "@/lib/content";

function useStudioClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Colombo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    tick();
    const id = setInterval(tick, 30 * 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Footer() {
  const localTime = useStudioClock();

  return (
    <footer
      data-theme="dark"
      className="relative px-6 md:px-10 pt-16 pb-10"
      style={{
        background: "var(--bg-dark)",
        color: "var(--fg-dark)",
        borderTop: "1px solid var(--rule-dark)",
      }}
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 mb-12 md:mb-16">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--fg-dark)" }}
              />
              <span className="label font-medium">PIXELNOVA</span>
            </div>
            <p
              className="text-lg md:text-2xl leading-snug max-w-md"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              A small studio. Built around the work.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="label mb-4 md:mb-5" style={{ color: "var(--muted-dark)" }}>
              Navigate
            </div>
            <ul className="space-y-3 text-sm">
              {NAV.map((it) => (
                <li key={it.label}>
                  <a href={it.href} className="underline-anim focus-ring rounded">
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="label mb-4 md:mb-5" style={{ color: "var(--muted-dark)" }}>
              Social
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={STUDIO.social.instagram} className="underline-anim inline-flex items-center gap-2 focus-ring rounded">
                  <Instagram size={13} /> Instagram
                </a>
              </li>
              <li>
                <a href={STUDIO.social.linkedin} className="underline-anim inline-flex items-center gap-2 focus-ring rounded">
                  <Linkedin size={13} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={STUDIO.social.dribbble} className="underline-anim inline-flex items-center gap-2 focus-ring rounded">
                  <Dribbble size={13} /> Dribbble
                </a>
              </li>
              <li>
                <a href={STUDIO.social.github} className="underline-anim inline-flex items-center gap-2 focus-ring rounded">
                  <Github size={13} /> GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <div className="label mb-4 md:mb-5" style={{ color: "var(--muted-dark)" }}>
              Get in touch
            </div>
            <a
              href={`mailto:${STUDIO.email}`}
              className="text-sm underline-anim inline-flex items-center gap-2 mb-3 focus-ring rounded break-all"
            >
              <Mail size={13} className="shrink-0" /> {STUDIO.email}
            </a>
            <div
              className="label mt-3 flex flex-wrap items-center gap-x-3 gap-y-1"
              style={{ color: "var(--muted-dark)" }}
            >
              <span>{STUDIO.location}</span>
              <span
                aria-hidden="true"
                className="pulse-dot inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--fg-dark)" }}
              />
              <span className="mono" style={{ color: "var(--fg-dark)" }}>
                {localTime || "—"}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-10" />

        <div
          className="flex flex-col md:flex-row justify-between gap-4 label"
          style={{ color: "var(--muted-dark)" }}
        >
          <span>© {new Date().getFullYear()} {STUDIO.name}</span>
        </div>
      </div>
    </footer>
  );
}
