import Image from "next/image";

type PhotoPlaceholderProps = {
  imageSrc: string ;
  className?: string;
};

const PhotoPlaceholder = ({ imageSrc, className }: PhotoPlaceholderProps) => {

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${className}`}
    >
      <Image alt="Test image" src={imageSrc} height={280} width={600}/>
    </div>
  );
};

export default PhotoPlaceholder;
