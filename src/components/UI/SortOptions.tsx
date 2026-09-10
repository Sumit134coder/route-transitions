
const sortOptions = ["Title", "Year", "Photographer"];

const SortOptions = ({
  sort = ""
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-stone-400 font-medium tracking-wide uppercase">
        Sort:
      </span>
      {sortOptions.map((s) => (
        <button
          key={s}
          className={`text-xs px-2 py-1 rounded transition-all ${
            sort === s
              ? "text-stone-900 font-semibold"
              : "text-stone-400 hover:text-stone-700"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default SortOptions;
