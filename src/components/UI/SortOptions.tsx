"use client";
import { useRouter, useSearchParams } from "next/navigation";
const sortOptions = ["Title", "Year", "Photographer"];
const SortOptions = ({ sort = "" }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.replace(`?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="flex items-center gap-2">
      {" "}
      <span className="text-xs font-medium uppercase tracking-wide text-stone-400">
        {" "}
        Sort:{" "}
      </span>{" "}
      {sortOptions.map((s) => (
        <button
          key={s}
          onClick={() => handleSort(s)}
          className={`rounded px-2 py-1 text-xs transition-all ${sort === s ? "font-semibold text-stone-900" : "text-stone-400 hover:text-stone-700"} cursor-pointer`}
        >
          {" "}
          {s}{" "}
        </button>
      ))}{" "}
    </div>
  );
};
export default SortOptions;
