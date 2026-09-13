"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );

  const handleInputSearch = (e: any) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const params = new URLSearchParams(searchParams.toString());

    if (searchValue) {
      params.set("search", searchValue);
    } else {
      params.delete("search");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <input
        type="search"
        defaultValue={searchTerm}
        onChange={handleInputSearch}
        placeholder="Search"
        aria-label="Search for photos"
        className="flex-1 h-[34px] px-2.5 text-[13px] bg-white text-stone-900 border border-stone-200 rounded-md"
      />
    </div>
  );
};

export default SearchInput;
