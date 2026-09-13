import { galleryData } from "../constants/data";

export const sortFilterResults = async ({
  searchQueries,
  photographer,
}: any) => {
  const { search, sort } = searchQueries;

  return galleryData.filter((galleryImage: any) => {
    if (photographer) {
      const formattedQuery = formatSearchQuery(photographer);
      const currPhotographer = formatSearchQuery(galleryImage.photographer);

      return formattedQuery === currPhotographer;
    }

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

export const formatSearchQuery = (query: string) => {
  // replace space with - and lowercase;
  return query.replace(" ", "-").toLowerCase();
};

export const formatDateTime = (dateString: any) => {
  return new Date(dateString).toDateString();
};

export const getInitials = (nameString : any) => {
  return nameString.split(" ").reduce((acc : any , curr : any) =>{
    return  acc + curr[0].toUpperCase()
  }, "")
}
