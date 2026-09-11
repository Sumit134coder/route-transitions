import PhotoDetailsInfo from "@/components/UI/PhotoDetailsInfo";
import PhotoPlaceholder from "@/components/UI/PhotoPlaceholder";
import { galleryData } from "@/lib/constants/data";
import { ViewTransition } from "react";

type PhotoDetailsPageProps = {
  params: Promise<{
    slug: string | number | undefined;
  }>;
};

const PhotoDetails = async ({ params }: PhotoDetailsPageProps) => {
  const { slug } = await params;

  const activeImage = galleryData[Number(slug)];

  return (
    <>
      <div className="relative w-full max-w-4xl flex item-center justify-between border-b border-b-muted/10 py-4">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-9 h-9 rounded-full bg-background border border-muted hover:bg-muted-foreground/20 backdrop-blur flex items-center justify-center text-foreground transition-all hover:-translate-x-14 hover:top-1/2">
          ←
        </button>

        <ViewTransition name={`photo-${slug}`}>
          <PhotoPlaceholder
            imageSrc={activeImage?.imgSrc}
            className="max-h-[60vh] w-auto"
          />
        </ViewTransition>

        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-9 h-9 rounded-full bg-background border border-muted hover:bg-muted-foreground/20 backdrop-blur flex items-center justify-center text-foreground transition-all hover:translate-x-14 hover:top-1/2">
          →
        </button>
      </div>

      <PhotoDetailsInfo photoDetails={activeImage} />
    </>
  );
};

export default PhotoDetails;
