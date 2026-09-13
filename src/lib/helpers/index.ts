import { galleryData } from "../constants/data";

export const sortFilterResults = ({ searchQueries }: any) => {
  console.log(searchQueries);
  const { search, sort } = searchQueries;

  return galleryData.filter((galleryImage: any) => {
    if (search?.length) {
      let matchFound = false;
      const searchFields = [
        "title",
        "longDiscription",
        "place",
        "miniDiscription",
        "photographer",
      ];
      let searchIndex = 0;

      while (!matchFound && searchIndex < searchFields.length) {
        const field = searchFields[searchIndex];
        if (galleryImage[field].toLowerCase().includes(search.toLowerCase())) {
          matchFound = true;

          break;
        }

        searchIndex++;
      }
      return matchFound;
    }

    return true;
  });
};
