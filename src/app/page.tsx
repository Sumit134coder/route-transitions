import { PHOTOGRAPHERS } from "@/lib/constants/footer";
import SortOptions from "@/components/UI/SortOptions";
import PhotographerFilter from "@/components/UI/PhotographerFilter";
import GalleryImageCard from "@/components/UI/GalleryImageCard";
import SearchInput from "@/components/inputs/SearchInput";
import { sortFilterResults } from "@/lib/helpers";
import PhotosCount from "@/components/UI/PhotosCount";

export const metadata = {
  title: "Art Gallery | Discover Inspiring Art & Photography",
  description:
    "Explore a curated collection of inspiring artwork and photography from talented artists and photographers around the world.",
};

export default async function Home({ searchParams }: any) {
  const searchQueries = await searchParams;

  const filteredResults = await sortFilterResults({ searchQueries });

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Controls */}
      <div className="max-w-6xl mx-auto px-6 py-6 ">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100">
        {/* Photographer filter */}
        <div className="flex flex-wrap items-center gap-4">
          <SearchInput />
          <PhotographerFilter />
        </div>

        {/* Sort */}
        <SortOptions />
        </div>
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
    </div>
  );
}
