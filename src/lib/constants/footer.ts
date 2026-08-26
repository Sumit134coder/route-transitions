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
  { initials: "MK", name: "Mia Kern", color: "#8a6e4a" },
  { initials: "SR", name: "Sam Rivera", color: "#4a6e8a" },
  { initials: "LC", name: "Lena Cho", color: "#6e4a8a" },
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
