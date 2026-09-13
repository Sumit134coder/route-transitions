import GalleryImageCard from "@/components/UI/GalleryImageCard";
import {
  formatSearchQuery,
  getInitials,
  sortFilterResults,
} from "@/lib/helpers";
import PhotosCount from "@/components/UI/PhotosCount";
import BackToGallery from "@/components/layout/BackToGallery";
import { PHOTOGRAPHERS } from "@/lib/constants/data";
import Link from "next/link";

export const generateMetadata = async ({ params }: any) => {
  const { photographer } = await params;

  return {
    title: `${photographer} | Gallery`,
  };
};

export default async function Collection({ params }: any) {
  const { photographer } = await params;

  const filteredResults = await sortFilterResults({
    photographer,
    searchQueries: {},
  });

  return (
    <>
      {/* Controls */}
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-4 border-b border-stone-100">
        <PhotosCount count={filteredResults.length} />
      </div>

      {/* Masonry-style grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredResults.map((photo, i) => (
            <GalleryImageCard galleryImage={photo} path={i} key={i} />
          ))}
        </div>

        {filteredResults.length == 0 && (
          <div className="py-24 text-center text-muted text-sm">
            No photos for this photographer yet.
          </div>
        )}
      </div>
    </>
  );
}
