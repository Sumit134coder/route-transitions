import { FooterLinks } from "@/types/footer";
import { Instagram, Rss, X, Pinterest } from "@/components/UI/icons";

const FOOTER_LINKS: FooterLinks = {
  Explore: [
    { title: "Gallery", href: "/gallery" },
    { title: "Photographers", href: "/photographers" },
    { title: "Collections", href: "/collections" },
    { title: "New arrivals", href: "/new-arrivals" },
    { title: "Editor's picks", href: "/editors-picks" },
  ],

  About: [
    { title: "Our story", href: "/our-story" },
    { title: "Submit your work", href: "/submit-your-work" },
    { title: "Licensing", href: "/licensing" },
    { title: "Press", href: "/press" },
    { title: "Contact", href: "/contact" },
  ],

  Support: [
    { title: "FAQ", href: "/faq" },
    { title: "Print orders", href: "/print-orders" },
    { title: "Returns", href: "/returns" },
    { title: "Accessibility", href: "/accessibility" },
    { title: "Sitemap", href: "/sitemap" },
  ],
};

const PHOTOGRAPHERS = [
  { initials: "MK", name: "Mia Kern", className: "bg-chart-1" },
  { initials: "SR", name: "Sam Rivera", className: "bg-chart-2" },
  { initials: "LC", name: "Lena Cho", className: "bg-chart-3" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "X",
    href: "#",
    icon: X,
  },
  {
    label: "Pinterest",
    href: "#",
    icon: Pinterest,
  },
  {
    label: "RSS",
    href: "#",
    icon: Rss,
  },
];

export { FOOTER_LINKS, PHOTOGRAPHERS, SOCIAL_LINKS };
