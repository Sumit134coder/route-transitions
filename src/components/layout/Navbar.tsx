import Link from "next/link";

const navLinks = [
  {
    title: "Gallery",
    href: "/",
  },
  {
    title: "Photographers",
    href: "/photographers",
  },
  {
    title: "Collections",
    href: "/collections",
  },
  {
    title: "About",
    href: "/about",
  },
];

const active = "/";

const Navbar = () => {
  return (
    <nav className="frames-nav sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="frames-logo flex items-center gap-2 text-xl font-bold tracking-tight text-stone-900 bg-transparent border-none cursor-pointer hover:text-stone-600 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-stone-900 opacity-30 inline-block mb-px" />
          Frames
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-0.5 list-none">
          {navLinks.map(({ title, href }) => (
            <li key={href} className="relative">
              <Link
                href={href}
                className={`text-sm px-3 py-1.5 rounded-md transition-all border-none cursor-pointer font-[inherit] ${
                  active === href
                    ? "text-stone-900 font-medium bg-transparent"
                    : "text-stone-500 bg-transparent hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                {title}
              </Link>
              {active === href && (
                <span className="absolute bottom-0 left-3 right-3 h-px bg-stone-900 rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="w-[34px] h-[34px] rounded-md border border-stone-200 bg-transparent flex items-center justify-center text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-all cursor-pointer"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button className="h-[34px] px-3.5 rounded-md bg-stone-900 text-white text-[13px] font-medium border-none cursor-pointer hover:opacity-85 transition-opacity font-[inherit]">
            Submit work
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
