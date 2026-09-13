import Image from "next/image";

type PhotoPlaceholderProps = {
  imageSrc: string;
  className?: string;
};

const PhotoPlaceholder = ({ imageSrc, className }: PhotoPlaceholderProps) => {
  return (
    <div className="mx-auto w-full place-items-center">
      <Image
        priority
        alt="Test image"
        src={imageSrc}
        height={280}
        width={600}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,..."
        className="h-auto max-h-[60vh] w-auto rounded-lg"
      />
    </div>
  );
};

export default PhotoPlaceholder;
