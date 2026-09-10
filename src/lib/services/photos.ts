import { galleryData } from "../constants/data";

const getAllPhotos = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve(galleryData);
    }, 200);
  } catch {
    const errorResponse = {
      message: "Something Went Wrong",
    };
    reject(errorResponse);
  }
});

