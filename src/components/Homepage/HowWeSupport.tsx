import Image from "next/image";
import publishing from "@/assets/icons/publishing.svg";
import analytics from "@/assets/icons/analytics.svg";
import engagement from "@/assets/icons/engagement.svg";
import fiveStars from "@/assets/icons/5-stars.svg";
import fourStars from "@/assets/icons/4-stars.svg";
import SupportListPoint from "@/components/Homepage/SupportListPoint";

const heroData = {
  h1: "How we support our partners all over the world",
  p: "SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software",
};

const companyRatings = [
  {
    img: fiveStars,
    rating: "4.9",
    company: "databricks",
    alt: "5 Stars",
  },
  {
    img: fourStars,
    rating: "4.8",
    company: "Chainalysis",
    alt: "4 Stars",
  },
];

const supportListData = [
  {
    img: publishing,
    title: "Publishing",
    subtitle:
      "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.",
    alt: "Publishing",
  },
  {
    img: analytics,
    title: "Analytics",
    subtitle: "Analyze your performance and create gorgeous reports.",
    alt: "Analytics",
  },
  {
    img: engagement,
    title: "Engagement",
    subtitle: "Quickly navigate you and engage with your audience.",
    alt: "Engagement",
  },
];

export default function HowWeSupport() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-[1440px] bg-bg-secondary mx-auto px-6 lg:px-[130px] py-10 lg:py-15 ">
      <div className="flex flex-col justify-between gap-10 lg:gap-[30px] max-w-[644px]">
        <h1 className="text-2xl lg:text-5xl font-semibold">
          {heroData.h1}
        </h1>

        <p className="text-base font-medium text-text-secondary-grey lg:text-lg lg:leading-[30px]">
          {heroData.p}
        </p>

        <div className="flex flex-row  items-center gap-6 lg:gap-10">
          {companyRatings.map((item) => (
            <div
              key={item.company}
              className="flex flex-col gap-2 lg:gap-[18px] items-start"
            >
              <Image src={item.img} alt={item.alt} />

              <span className="text-base lg:text-lg font-medium lg:leading-[30px]">
                <b>{item.rating}</b> / 5 rating
              </span>

              <span className="text-base lg:text-lg font-bold lg:leading-[30px] text-text-secondary-grey">
                {item.company}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ul className="flex flex-col gap-3 max-w-[509px] lg:gap-[30px]">
        {supportListData.map((item) => (
          <SupportListPoint
            key={item.title}
            icon={<Image src={item.img} 
            alt={item.alt} 
            className="object-contain" />}
            title={item.title}
            description={item.subtitle}
          />
        ))}
      </ul>
    </section>
  );
}
