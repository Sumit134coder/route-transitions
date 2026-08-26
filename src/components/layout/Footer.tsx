import Link from "next/link";
import { FooterLinks } from "@/types/footer";
import { FOOTER_LINKS , SOCIAL_LINKS , PHOTOGRAPHERS } from "@/lib/constants/footer";

export default function FramesFooter() {
  return (
    <footer className="frames-footer bg-stone-50 border-t border-stone-100 pt-12 pb-7">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-stone-100">
          {/* Brand column */}
          <div>
            <div className="frames-footer-logo flex items-center gap-2 text-xl font-bold text-stone-900 mb-3">
              <span className="w-2 h-2 rounded-full bg-stone-900 opacity-30 inline-block" />
              Frames
            </div>
            <p className="text-[13.5px] leading-relaxed text-stone-500 max-w-[220px] mb-5">
              A curated photography gallery exploring light, place, and time.
            </p>

            {/* Newsletter */}
            <div className="flex gap-1.5 mb-5">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email for newsletter"
                className="flex-1 h-[34px] px-2.5 text-[13px] bg-white text-stone-900 border border-stone-200 rounded-md"
                style={{ fontFamily: "inherit" }}
              />
              <button
                className="h-[34px] px-3 bg-stone-900 text-white text-[13px] font-medium rounded-md border-none cursor-pointer hover:opacity-85 transition-opacity whitespace-nowrap"
                style={{ fontFamily: "inherit" }}
              >
                Subscribe
              </button>
            </div>

            {/* Photographer pills */}
            <div
              className="flex flex-wrap gap-2"
              aria-label="Featured photographers"
            >
              {PHOTOGRAPHERS.map((p) => (
                <button
                  key={p.name}
                  className="flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 bg-white border border-stone-200 rounded-full cursor-pointer hover:border-stone-400 transition-colors"
                  style={{ fontFamily: "inherit" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-semibold flex-shrink-0"
                    style={{ background: p.color }}
                  >
                    {p.initials}
                  </span>
                  <span className="text-[12px] text-stone-500">{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.keys(FOOTER_LINKS).map((heading) => {
            const sectionLinks = FOOTER_LINKS[heading as keyof FooterLinks];

            return (
              <div key={heading}>
                <h4 className="text-[11px] font-semibold tracking-widest uppercase text-stone-400 mb-3.5">
                  {heading}
                </h4>
                <ul className="list-none space-y-2.5">
                  {sectionLinks.map(({ title, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-[13.5px] text-stone-500 bg-transparent border-none cursor-pointer p-0 hover:text-stone-900 transition-colors"
                        style={{ fontFamily: "inherit" }}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <span className="text-[12.5px] text-stone-400">
            © 2025 Frames. All rights reserved.
          </span>

          <div className="flex gap-4 flex-wrap">
            {["Privacy policy", "Terms of use", "Cookie settings"].map(
              (label) => (
                <button
                  key={label}
                  className="text-[12.5px] text-stone-400 bg-transparent border-none cursor-pointer p-0 hover:text-stone-600 transition-colors"
                  style={{ fontFamily: "inherit" }}
                >
                  {label}
                </button>
              ),
            )}
          </div>

          <div className="flex items-center gap-1.5" aria-label="Social links">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-md border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-all no-underline"
              >
                <s.icon className="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
