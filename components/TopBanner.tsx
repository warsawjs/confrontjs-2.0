import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

/**
 * Announcement strip above the nav, shown on every page.
 *
 * Currently points at Warsaw Glitch 2026 — the festival ConfrontJS/WarsawJS
 * co-organise. Change BANNER (or set `enabled: false`) to swap or retire it;
 * `id` doubles as the dismissal key, so bumping it re-shows the bar to people
 * who already closed the previous one.
 */
const BANNER = {
  id: "warsaw-glitch-2026",
  enabled: true,
  label: "Warsaw Glitch 2026",
  text: "International Digital Motion Festival · 28–30 August · Kinoteka, Palace of Culture and Science, Warsaw",
  cta: "See the festival",
  href: "https://warsawglitch.com/",
};

const STORAGE_KEY = `banner-dismissed:${BANNER.id}`;

export function TopBanner() {
  // Visible by default so the banner is in the server-rendered HTML (crawlers
  // and slow connections see it). Dismissal is applied right after hydration —
  // the brief flash for someone who already closed it beats never rendering it
  // server-side at all.
  const [visible, setVisible] = useState(BANNER.enabled);

  useEffect(() => {
    if (!BANNER.enabled) return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "1") setVisible(false);
    } catch {
      /* localStorage blocked — leave the banner up */
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore — dismissal just won't persist */
    }
  };

  if (!visible) return null;

  return (
    <div className="relative bg-tertiary text-white">
      <Link
        href={BANNER.href}
        target="_blank"
        rel="noopener"
        className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-1 px-12 py-3 text-center text-xs sm:text-sm hover:bg-black transition-colors duration-300"
      >
        <span className="font-bold uppercase tracking-wide text-secondary">
          {BANNER.label}
        </span>
        <span className="opacity-90">{BANNER.text}</span>
        <span className="font-bold underline whitespace-nowrap">
          {BANNER.cta} →
        </span>
      </Link>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={dismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
      >
        <AiOutlineClose className="w-4 h-4" />
      </button>
    </div>
  );
}

export default TopBanner;
