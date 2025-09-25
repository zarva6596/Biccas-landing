import Image from "next/image";
import heroboy from "@/assets/images/hero-boy.png";
import unsplash from "@/assets/logos/unsplash.svg";
import notion from "@/assets/logos/notion.svg";
import intercom from "@/assets/logos/intercom.svg";
import descript from "@/assets/logos/descript.svg";
import grammarly from "@/assets/logos/grammarly.svg";
import playicon from "@/assets/icons/play.svg";

const heroData = {
  h1: "We’re here to Increase your Productivity",
  p: "Let's make your work more organized and easier using the Taskio Dashboard with many of the latest features in managing work every day.",
  h2: "More than 25,000 teams use Collabs",
};

const buttonText = {
  primary: "Try free trial",
  secondary: "View Demo",
};

const companies = [unsplash, notion, intercom, descript, grammarly];

export default function HomeSection() {
  return (
    <section className="px-[130px] py-10 lg:pt-[113px] lg:pb-32.5 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:basis-1/2">
            <h1 className="text-4xl lg:text-[80px] font-bold max-w-[555px] lg:leading-[90px] mt-0">
              {heroData.h1}
            </h1>

            <p className="mt-5 lg:mt-[106] font-medium mb-15 text-lg max-w-[461px] leading-[30px]">
              {heroData.p}
            </p>

            <div className="flex flex-row gap-5 lg:gap-10">
              <button className="px-4 lg:px-[30px] font-medium py-5 text-white bg-brand-green rounded-full 
                hover:bg-bg-hover transition-colors duration-150 hover:cursor-pointer">
                {buttonText.primary}
              </button>

              <button className="flex items-center justify-between gap-[14px] px-4 lg:px-[30px] text-main-text
               hover:cursor-pointer transform transition-transform duration-200 hover:scale-110 ">
                <Image 
                  src={playicon} 
                  alt="Play Icon" 
                />

                <p>{buttonText.secondary}</p>
              </button>
            </div>
          </div>

          <div className="flex items-start justify-center lg:basis-1/2">
            <div className="h-[526px] w-fit">
              <Image src={heroboy} alt="Boy" className="size-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[60px] max-w-[1076px] mx-auto mt-[130px]">
          <h2 className="text-[40px] font-bold mb-6">
            {heroData.h2}
          </h2>

          <div className="grid grid-cols-2 lg:flex flex-col items-center lg:flex-row justify-center gap-5 lg:gap-[50px]">
            {companies.map((logo, i) => (
              <div className="h-8 w-fit max-w-full" key={i} >
                <Image
                  src={logo}
                  alt={`company-${i}`}
                  className="size-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
