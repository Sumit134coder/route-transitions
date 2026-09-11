import { galleryData } from "@/lib/constants/data";

const DotNavigation = ({activeIndex} : any) => {
  return (
    <div className="flex items-center gap-1.5 mt-6">
      {galleryData.map((p, index) => (
        <button
          key={p.title}
          className={`rounded-full transition-all ${
            index == activeIndex
              ? "w-4 h-1.5 bg-white"
              : "w-1.5 h-1.5 bg-stone-600 hover:bg-stone-400"
          }`}
        />
      ))}
    </div>
  );
};

export default DotNavigation;
