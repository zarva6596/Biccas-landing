import Image from "next/image";
import publishing from "@/assets/icons/publishing.svg";
import analytics from "@/assets/icons/analytics.svg";
import engagement from "@/assets/icons/engagement.svg";
import fiveStars from "@/assets/icons/5-stars.svg";
import fourStars from "@/assets/icons/4-stars.svg";

export default function HowWeSupport() {
  return (
    <section className="flex flex-row items-center justify-between gap-8 w-[1440px] bg-[#F9F8FE] px-[130px] py-15 ">
      <div className="flex flex-col justify-between gap-[30px] max-w-[644px]">
        <h1 className="text-5xl font-semibold">
          How we support our partners all over the world
        </h1>

        <p className="text-base font-medium leading-[30px] text-[#A6A6A6]">
          SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software
        </p>

        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col gap-[18px]">
            <Image src={fiveStars} alt="5 Stars" />
            <span className="text-lg font-medium leading-[30px]">
              <b>4.9</b> / 5 rating
            </span>
            <span className="text-lg font-bold leading-[30px] text-[#A6A6A6]">
              databricks
            </span>
          </div>

          <div className="flex flex-col gap-[18px]">
            <Image src={fourStars} alt="4 Stars" />
            <span className="text-lg font-medium leading-[30px]">
              <b>4.9</b> / 5 rating
            </span>
            <span className="text-lg font-bold leading-[30px] text-[#A6A6A6]">
              Chainalysis
            </span>
          </div>
        </div>
      </div>

        <ul className="flex flex-col max-w-[509px] gap-[30px]">
          <li className="flex flex-row items-start gap-5">
            <Image className="flex-shrink-0"
            src={publishing} alt="Publishing" />
            <div>
            <h3 className="text-[28px] font-bold">Publishing</h3>
            <p className="text-lg font-medium leading-[30px] text-[#A6A6A6]">
              Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.
            </p>
            </div>
          </li>
          <li className="flex flex-row items-start gap-5">
            <Image className="flex-shrink-0"
            src={analytics} alt="Analytics" />
            <div>
            <h3 className="text-[28px] font-bold">Analytics</h3>
            <p className="text-lg font-medium leading-[30px] text-[#A6A6A6]">
              Analyze your performance and create gorgeous reports.
            </p>
          </div>
          </li>
          <li className="flex flex-row items-start gap-5">
            <Image className="flex-shrink-0"
            src={engagement} alt="Engagement" />
            <div>
            <h3 className="text-[28px] font-bold">Engagement</h3>
            <p className="text-lg font-medium leading-[30px] text-[#A6A6A6]">
              Quickly navigate you and engage with your audience.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
