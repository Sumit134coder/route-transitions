import { PHOTOGRAPHERS } from "@/lib/constants/footer";

const PhotographerFilter = ({filter = ""}) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {PHOTOGRAPHERS.map((p) => (
        <button
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            filter === p.name
              ? "bg-stone-900 text-white"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200"
          }`}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
};

export default PhotographerFilter;
