import Image, { StaticImageData } from "next/image";

type FeatureCardProps = { 
  img: StaticImageData | string;
  title: string; 
  subtitle: string; 
  alt: string; 
};

export default function FeatureCard({ img,  alt, title, subtitle, }: FeatureCardProps) {
  return (
  <div className="flex flex-col gap-5 lg:gap-[30px] lg:hover:cursor-pointer lg:hover:scale-[1.02] transition-transform duration-200 ">
      <Image 
        src={img} 
        alt={alt || ""} 
        width={364} 
        height={430} 
        sizes="(min-width: 1024px) 364px, 100vw"
        className="w-full h-auto object-cover lg:w-[364px] lg:h-[430px]"
      />
      
      <div className="flex flex-col justify-center gap-4 ">
        <h3 className="text-2xl lg:text-3xl font-medium leading-[28px] lg:leading-[30px]">
          {title}
        </h3>

        <p className="text-base lg:text-lg leading-[28px] lg:leading-[30px] text-text-secondary-grey text-left">
          {subtitle}
        </p>
      </div>
    </div>
  );
}