import Image from "next/image";

type PhotoPlaceholderProps = {
  imageSrc: string ;
  className?: string;
};

const PhotoPlaceholder = ({ imageSrc, className }: PhotoPlaceholderProps) => {

  return (
    <div className="mx-auto w-full place-items-center">
      <Image alt="Test image" src={imageSrc} height={280} width={600} className="w-auto h-auto max-h-[60vh] rounded-lg"/>
</div>
  );
};

export default PhotoPlaceholder;
