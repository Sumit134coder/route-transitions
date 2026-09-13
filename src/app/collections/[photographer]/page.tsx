import GalleryImageCard from "@/components/UI/GalleryImageCard";
import { formatSearchQuery, getInitials, sortFilterResults } from "@/lib/helpers";
import PhotosCount from "@/components/UI/PhotosCount";
import BackToGallery from "@/components/layout/BackToGallery";
import { PHOTOGRAPHERS } from "@/lib/constants/data";
import Link from "next/link";

export const generateMetadata = async({ params }: any) =>{
  const { photographer } = await params;

  return {
    title : `${photographer} | Gallery`
  }
}

export default async function Collection({ params }: any) {
  const { photographer } = await params;

  const filteredResults = await sortFilterResults({ photographer , searchQueries : {} });

  return (
    <div className="min-h-screen bg-background pt-14">
      {/* Controls */}
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-4 border-b border-stone-100">
        <BackToGallery />
        <h2 className="text-secondary font-bold text-2xl">Photographers</h2>
        <div className="flex item-center gap-4">
            {
                PHOTOGRAPHERS.map((person) => {
                    const hrefSlug = formatSearchQuery(person)
                    const isActive = hrefSlug == photographer
                
                return <Link
                  key={person}
                  href={`/collections/${hrefSlug}`}
                  className={`flex items-center gap-1.5 px-3 py-1 bg-secondary-foreground border  rounded-full cursor-pointer ${isActive ? 'border-accent' : 'border-border' } hover:border-accent transition-colors`}
                >
                  <span
                    className=" rounded-full  text-[9px] font-semibold "
                  >
                    {getInitials(person)}
                  </span>
                  <span className="text-[12px] text-secondary">{person}</span>
                </Link>} )
            }
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
