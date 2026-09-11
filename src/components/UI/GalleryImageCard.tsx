import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";

const GalleryImageCard = ({ galleryImage }: any) => {
  return (
    <div key={galleryImage.imgSrc} className="break-inside-avoid">
      <Link href={`/photos`} className="group w-full text-left block">
        <ViewTransition name={`photo-`}>
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={galleryImage.imgSrc}
              alt={galleryImage.title}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="text-white text-sm font-medium drop-shadow">
                {galleryImage.place}
              </div>
              <div className="mt-2 px-1">
                <p className="font-serif text-stone-900 font-semibold text-sm leading-tight">
                  {galleryImage.title}
                </p>
                <p className="text-stone-400 text-xs mt-0.5">
                  {galleryImage.photographer} · {galleryImage.date}
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
