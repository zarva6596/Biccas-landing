import { Plan } from "@/app/types/Plans";
import approved from "@/assets/icons/approved.svg";
import Image from "next/image";


type Props = {
  plan: Plan;
  priceValue: number;
  onClick: () => void;
  isSelected?: boolean;
};

export default function PricingPlanCard({ plan, priceValue, onClick, isSelected }: Props) {
  return (
    <div className={`flex flex-col items-center justify-between w-[374px] h-[640px] rounded-[20px] 
      shadow-[0_4px_9px_0_rgba(0,0,0,0.05)] bg-bg p-8 cursor-pointer transform hover:scale-[1.05] transition-transform 
        duration-200 ${isSelected ? "bg-brand-green text-white" : ""}`} onClick={onClick}>
      <div className="flex flex-col items-center gap-[13px]">
        <h3 className="text-3xl font-semibold">{plan.name}</h3>

        <p className={`text-lg text-text-secondary-grey ${isSelected ? "text-white" : "text-text-secondary-grey"}`}>
          {plan.description}
        </p>

        <p className="text-[50px] font-semibold leading-[30px]">{priceValue} $</p>
      </div>

      <div className={`flex flex-col justify-between bg-bg-secondary px-[20px] py-[25px] rounded-[10px] w-full
        ${isSelected ? "bg-white" : "bg-bg-secondary"}`}>
        <ul className="flex flex-col list-none gap-[22px] text-left ">
          {plan.features.map((feature) => (
            <li key={feature} className="text-lg font-medium text-main-text flex items-center gap-[10px]">
              <Image src={approved} alt="approved" className="h-[26px] w-[26px]" />
              {feature}
            </li>
          ))}
        </ul>

        <button className={`w-full h-16 rounded-[10px] text-lg font-semibold leading-[30px] mt-[27px]
           shadow-[0_4px_9px_0_rgba(0,0,0,0.05)] ${isSelected ? "text-bg bg-brand-green" : "text-brand-green bg-white"}`}>
          Go to {plan.name}
        </button>
      </div>
    </div>  
  );
}   