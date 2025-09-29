'use client';

import { Label, Radio, RadioGroup } from "@headlessui/react";
import { Frequency } from "@/app/types/Frequency";
import { Plan } from "@/app/types/Plans";
import { useState } from "react";
import PricingPlanCard from "../universal/card/pricingPlanCard";

const data = {
  title: "Choose Plan",
  subtitle: "That’s Right For You",
  description: "Choose plan that works best for you, feel free to contact us",
};

const frequencies: Frequency[] = [
  { value: "monthly", label: "Bill Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Bill Annually", priceSuffix: "/year" },
];

const plans: Plan[] = [
  {
    name: "Free",
    id: "plan-free",
    href: "#",
    price: { monthly: 0, annually: 0 },
    description: "Have a go and test your superpowers",
    features: [
      "2 Users",
      "2 Files",
      "Public Share & Comments",
      "Chat Support",
      "New income apps",
    ],
    ctaLabel: "Signup for free",
  },
  {
    name: "Pro",
    id: "plan-pro",
    href: "#",
    price: { monthly: 8, annually: 96 },
    description: "Experiment the power of infinite possibilities",
    features: [
      "4 Users",
      "All apps",
      "Unlimited editable exports",
      "Folders and collaboration",
      "All incoming apps",
    ],
    ctaLabel: "Go to pro",
  },
  {
    name: "Business",
    id: "plan-business",
    href: "#",
    price: { monthly: 16, annually: 192 },
    description: "Unveil new superpowers and join the Design League",
    features: [
      "All the features of pro plan",
      "Account success Manager",
      "Single Sign-On (SSO)",
      "Co-conception program",
      "Collaboration — soon",
    ],
    ctaLabel: "Go to Business",
  },
];


export default function PricingSection() {
 const [frequency, setFrequency] = useState<Frequency>(frequencies[0]);
 const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[0]);

 const isSelected = (plan: Plan) => plan.id === selectedPlan.id;
 
 
 function calcSavings (monthly: number, annually: number) {
   const annualCost = monthly * 12;
   const savings = Math.max(annualCost - annually, 0);
   return savings > 0 ? savings : null;
  }

  return (
    <section className="flex flex-col items-center justify-center mt-[130px] text-center px-[130px] bg-transparent">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-[50px] font-bold leading-[73px] max-w-[492px]">
          {data.title} <br /> {data.subtitle}
        </h2>

      <p className="text-[18px] text-text-secondary-grey font-bold text-center">
        {data.description}
      </p>

      <div className="flex flex-row justify-center">
        <RadioGroup value={frequency} onChange={setFrequency} className="inline-grid grid-cols-2 gap-[9px] rounded-[10px]  
          bg-bg shadow-sm ring-1 ring-black/5 ">
          <Label className="sr-only">
            Payment frequency
          </Label>
          {frequencies.map((option) => (
            <Radio
              key={option.value}
              value={option}
              className={({ checked }) =>
                `cursor-pointer rounded-[10px] px-5 py-3 text-[18px] font-medium leading-[30px] 
              ${checked ? "bg-brand-green text-white shadow" : "text-black"}`
              }
            >
              {option.label}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      <div className="flex flex-row mx-auto gap-[29px] mt-16">
        {plans.map((plan) => {
          const price = frequency.value === "monthly" ? selectedPlan.price.monthly : selectedPlan.price.annually;
          const priceValue = plan.price[frequency.value];

          return (
            <PricingPlanCard
              key={plan.id}
              priceValue={priceValue}
              plan={plan}

              isSelected={isSelected(plan)}
              frequency={frequency}
              onClick={() => setSelectedPlan(plan)}
            />);
        })}
      </div>
    </div>
  </section>
);
}