import Image from "next/image";
import { PHOTOGRAPHERS } from "@/lib/constants/footer";
import { galleryData } from "@/lib/constants/data";
import SortOptions from "@/components/UI/SortOptions";
import PhotographerFilter from "@/components/UI/PhotographerFilter";
import Link from "next/link";
import { ViewTransition } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Controls */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 border-b border-stone-100">
        {/* Photographer filter */}
        <PhotographerFilter />

        {/* Sort */}
        <SortOptions />
      </div>

      {/* Masonry-style grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryData.map((photo, i) => (
            <div key={photo.imgSrc} className="break-inside-avoid">
              <Link
                href={`/photos/${i}`}
                className="group w-full text-left block"
              >
                <ViewTransition name={`photo-${i}`}>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={photo.imgSrc}
                      alt={photo.title}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-white text-sm font-medium drop-shadow">
                        {photo.place}
                      </div>
                      <div className="mt-2 px-1">
                        <p className="font-serif text-stone-900 font-semibold text-sm leading-tight">
                          {photo.title}
                        </p>
                        <p className="text-stone-400 text-xs mt-0.5">
                          {photo.photographer} · {photo.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </ViewTransition>
              </Link>
            </div>
          ))}
        </div>

        {/* {sorted.length === 0 && (
          <div className="py-24 text-center text-stone-400 text-sm">
            No photos for this photographer yet.
          </div>
        )} */}
      </div>
    </div>
  );
}
