import BackToGallery from "@/components/layout/BackToGallery";
import DotNavigation from "@/components/layout/DotNavigation";
import { galleryData } from "@/lib/constants/data";

export const generateStaticParams = () => {
  return galleryData.map((_, i) => ({ slug: i.toString() }));
};

const PhotoDetailsLayout = async ({ children, params }: any) => {
  const { slug } = await params;
  return (
    <div className="min-h-screen bg-background pt-14 flex flex-col">
      <div className="max-w-6xl mx-auto px-6 py-4 w-full space-y-6">
        <BackToGallery />
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsLayout;
