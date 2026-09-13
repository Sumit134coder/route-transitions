import { formatDateTime } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";

const GalleryImageCard = ({ galleryImage , path }: any) => {
  return (
    <div key={galleryImage.imgSrc} className="break-inside-avoid">
      <Link href={`/photos/${path}`} className="group w-full text-left block">
        <ViewTransition name={`photo-${path}`}>
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={galleryImage.imgSrc}
              alt={galleryImage.title}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg group-hover:scale-120 transition-transform duration-300"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 group-hover:bg-linear-to-t from-foreground/50 to-foreground/10 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-background text-sm font-medium drop-shadow">
                {galleryImage.place}
              </div>
              <div className="mt-2">
                <p className="text-background font-semibold text-sm leading-tight">
                  {galleryImage.title}
                </p>
                <p className="text-background text-xs mt-0.5">
                  {galleryImage.photographer} · {formatDateTime(galleryImage.date)}
                </p>
              </div>
            </div>
          </div>
        </ViewTransition>
      </Link>
    </div>
  );
};

export default GalleryImageCard;
