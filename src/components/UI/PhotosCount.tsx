import React from "react";

const PhotosCount = ({ count = 0 }) => {
  return (
    <div className="border-b border-muted/20">
      <p className=" py-6 text-muted text-sm">
        <span>{count} </span>
        Photos
      </p>
    </div>
  );
};

export default PhotosCount;
