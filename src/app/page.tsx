import { PHOTOGRAPHERS } from "@/lib/constants/footer";
import SortOptions from "@/components/UI/SortOptions";
import PhotographerFilter from "@/components/UI/PhotographerFilter";
import GalleryImageCard from "@/components/UI/GalleryImageCard";
import SearchInput from "@/components/inputs/SearchInput";
import { sortFilterResults } from "@/lib/helpers";

export default async function Home({ params , searchParams } : any) {

  const searchQueries = await searchParams;

  const filteredResults =  sortFilterResults({ searchQueries });

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Controls */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 border-b border-stone-100">
        {/* Photographer filter */}
        <div className="flex flex-wrap items-center gap-4">
        <SearchInput />
        <PhotographerFilter />

        </div>

        {/* Sort */}
        <SortOptions />
      </div>

      {/* Masonry-style grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredResults.map((photo, i) => (
            <GalleryImageCard galleryImage={photo} path={i} key={i} />
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
