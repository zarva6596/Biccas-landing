import Image from "next/image";
import approveIcon from "@/assets/icons/approved.svg";
import laptop from "@/assets/images/laptop.png";
import msg from "@/assets/images/msg.png";
import moneyTransfer from "@/assets/images/money-transfer-msg.png";
import picIcon from "@/assets/icons/pic-icon.svg"
import totalIncome from "@/assets/images/total-icome.png"


const benefitData = {
  h2: "What Benefit Will You Get",
};

  const benefits = [
    {
      icon: approveIcon,
      alt: "ApprovedIcon",
      texts: [
        "Free Consulting With Experet Saving Money",
        "Online Banking",
        "Investment Report Every Month",
        "Saving Money For The Future",
        "Online Transaction",
      ],
    },
  ];

export default function BenefitSection() {
  return (
    <section className="flex flex-row items-center gap-[259px] max-w-[1440px] bg-bg px-[130px] mt-[130px] ">
      <div className="flex flex-col gap-[50px] max-w-[471px]">
        <h2 className="text-[50px] font-bold">{benefitData.h2}</h2>

        <ul className="list-none flex flex-col gap-[30px]">
          {benefits[0].texts.map((text, index) => (
            <li key={index} className="flex justify-start flex-col gap-[30px]">
              <div className="flex flex-row items-center gap-5">
                <Image
                  src={benefits[0].icon}
                  alt={benefits[0].alt}
                  width={32}
                  height={32}
                />

                <span className="text-[18px] font-medium leading-[30px]">
                  {text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <Image
          src={laptop}
          alt="benefit-image"
          width={450}
          height={529}
          className="rounded-[20px] object-cover shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        />

        <div className="absolute top-[36px] left-[-140px] flex items-center gap-3 bg-white 
          rounded-xl  px-5 py-3 shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)]">
          <Image 
            src={msg} 
            alt="msg-icon" 
            width={304} 
            height={82} />
        </div>

        <div className="absolute left-[-60px] top-1/2 p-2">
          <Image
            src={picIcon}
            alt="picture-icon"
            width={40}
            height={40}
          />
        </div>

        <div className="absolute bottom-[-30px] left-[-110px]">
          <Image
          src={moneyTransfer}
          alt="noney-transfering-picture"
          width={302}
          height={68}
          />
        </div>

        <div className="absolute top-[121px] right-[-60px] ">
          <Image
          src={totalIncome}
          alt="total-income-message"
          width={137}
          height={70}
          />
        </div>
      </div>
    </section>
  );
}
