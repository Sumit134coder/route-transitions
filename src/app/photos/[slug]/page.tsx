import PhotoPlaceholder from "@/components/UI/PhotoPlaceholder"

const PhotoDetails = () => {
  return (
     <div className="min-h-screen bg-stone-950 pt-14 flex flex-col">
      {/* Back nav */}
      <div className="max-w-6xl mx-auto px-6 py-4 w-full">
        <button
          className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Gallery
        </button>
      </div>

      {/* Main image area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-6">
        {/* Image with prev/next controls */}
        <div className="relative w-full max-w-4xl">
          {/* Prev */}
        
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center text-white transition-all hover:-translate-x-14 hover:top-1/2"
            >
              ←
            </button>
          

          {/* Photo */}
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/60">
            <PhotoPlaceholder photo={{}} className="h-[55vh] w-full" />
          </div>

          {/* Next */}
         
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center text-white transition-all hover:translate-x-14 hover:top-1/2"
            >
              →
            </button>
          
        </div>

        {/* Photo info */}
        <div className="w-full max-w-4xl mt-6 flex items-end justify-between">
          <div>
            <h1 className="font-serif text-white text-3xl font-bold leading-tight">
              Test
            </h1>
            <p className="text-stone-400 mt-1 text-sm">Test</p>
          </div>
          <div className="text-right">
            <button className="text-stone-300 hover:text-white text-sm font-medium transition-colors underline underline-offset-4 decoration-stone-600 hover:decoration-stone-300">
              Test
            </button>
            <p className="text-stone-500 text-xs mt-0.5">1999</p>
          </div>
        </div>

        {/* Dot progress */}
        <div className="flex items-center gap-1.5 mt-6">
          {Array(10).fill("_").map((p , index) => (
            <button
              key={p}
              className={`rounded-full transition-all ${
                index === 2
                  ? "w-4 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-stone-600 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhotoDetails