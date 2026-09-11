"use client"

import Link from "next/link";

const BackToGallery = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-secondary hover:text-muted transition-colors text-sm group"
    >
      <span className="group-hover:-translate-x-1 transition-transform">←</span>
      Gallery
    </Link>
  );
};

export default BackToGallery;
