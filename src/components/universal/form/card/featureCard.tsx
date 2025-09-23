import Image, { StaticImageData } from "next/image";


type FeatureCardProps = { 
  img: StaticImageData | string;
  title: string; 
  subtitle: string; 
  alt: string; 
};

export default function FeatureCard({ img,  alt, title, subtitle, }: FeatureCardProps) {
  return (
  <div className="flex flex-col gap-[30px]">
      <Image 
        src={img} 
        alt={alt || ""} 
        width={364} 
        height={430} 
        className="w-[364px] h-[430px] object-cover"
      />

      <div className="flex flex-col justify-center  gap-4 ">
        <h3 className="text-3xl font-medium leading-[30px]">{title}</h3>
        <p className="text-lg leading-[30px] text-[#A6A6A6] text-left">
          {subtitle}
        </p>
      </div>
    </div>
  );
}