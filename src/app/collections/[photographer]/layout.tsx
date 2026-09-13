import BackToGallery from "@/components/layout/BackToGallery";
import { PHOTOGRAPHERS } from "@/lib/constants/data";
import { formatSearchQuery } from "@/lib/helpers";
import Link from "next/link";


const CollectionLayout = async({ children , params }: any) => {

    const { photographer } = await params;

  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-4 border-b border-stone-100">
        <BackToGallery />
        <h2 className="text-secondary font-bold text-2xl">Photographers</h2>
        <div className="flex item-center gap-4">
          {PHOTOGRAPHERS.map((person) => {
            const hrefSlug = formatSearchQuery(person.name);
            const isActive = hrefSlug == photographer;

            return (
              <Link
                key={person.initials}
                href={`/collections/${hrefSlug}`}
                className={`flex items-center gap-1.5 px-3 py-1 bg-secondary-foreground border  rounded-full cursor-pointer ${isActive ? "border-accent" : "border-border"} hover:border-accent transition-colors`}
              >
                <span className={`rounded-full  text-[9px] font-semibold ${person.className} w-5 h-5 flex items-center justify-center flex-shrink-0 text-white  `}>
                  {person.initials}
                </span>
                <span className="text-[12px] text-secondary">{person.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
      {children}
    </div>
  );
};

export default CollectionLayout;
