
type PhotoPlaceholderProps = {
  photo: {
    gradient?: string;
  };
  className?: string;
};

const PhotoPlaceholder = ({ photo, className }: PhotoPlaceholderProps) => {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${photo?.gradient} ${className}`}
    >
      <div className="absolute inset-0 flex items-end justify-start p-4 opacity-20">
        <svg viewBox="0 0 100 60" className="w-full opacity-30" fill="none">
          <circle cx="30" cy="25" r="12" fill="white" />
          <path
            d="M0 45 Q25 20 50 38 Q75 55 100 30 L100 60 L0 60Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default PhotoPlaceholder;
