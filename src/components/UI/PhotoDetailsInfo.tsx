const PhotoDetailsInfo = ({ photoDetails }: any) => {
  return (
    <div className="w-full max-w-4xl mt-10">
      <div>
        <h1 className=" text-secondary text-3xl font-bold leading-tight">
          {photoDetails.title}
        </h1>
        <p className="text-secondary mt-1 text-sm">{photoDetails.longDiscription}</p>
      </div>
      <div className="mt-4">
        <button className="text-secondary hover:accent text-sm font-medium transition-colors underline underline-offset-4 decoration-stone-600 hover:decoration-stone-300">
          {photoDetails.photographer}
        </button>
        <p className="text-muted text-xs mt-0.5">{photoDetails.date}</p>
      </div>
    </div>
  );
};

export default PhotoDetailsInfo;
