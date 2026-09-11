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
  }
];

const active = "/";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 z-50 backdrop-blur-md border-b border-primary shadow bg-background text-accent">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="frames-logo flex items-center gap-2 text-xl font-bold tracking-tight text-foreground bg-transparent border-none cursor-pointer hover:text-stone-600 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-30 inline-block mb-px" />
          Frames
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-0.5 list-none">
          {navLinks.map(({ title, href }) => (
            <li key={href} className="relative">
              <Link
                href={href}
                className={`text-xs md:text-sm px-1 md:px-3 py-1.5 rounded-md transition-all border-none cursor-pointer font-[inherit] ${
                  active === href
                    ? "text-accent font-medium bg-transparent"
                    : "text-accent bg-transparent "
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

      
      </div>
    </nav>
  );
};

export default Navbar;
