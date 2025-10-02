import FeatureCard from "@/components/universal/card/featureCard";
import collab from '@/assets/images/collab-teams.png';
import cloudStorage from '@/assets/images/cloud-storage.png';
import dailyAnalytics from '@/assets/images/daily-analytics.png';
import React from "react";

const ourFeaturesData = {
  h2: "Our Features you can get",
  paragraph: "We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily",
  buttonText: "Get Started",
};

const features = [
  {
    img: collab,
    alt: "collaboration-teams",
    title: "Collaboration Teams",
    subtitle: "Here you can handle projects together with team virtually",
  },
  {
    img: cloudStorage,
    alt: "cloud-storage",
    title: "Cloud Storage",
    subtitle: "No need to worry about storage because we provide storage up to 2 TB",
  },
  {
    img: dailyAnalytics,
    alt: "daily-analytics",
    title: "Daily Analytics",
    subtitle: "We always provide useful information to make it easier for you every day",
  },
];

export default function OurFeatures() {
  return (
    <section className="flex flex-col items-center gap-10 lg:gap-[74px] max-w-[1440px] mx-auto bg-transparent px-6 lg:px-[130px] mt-12 lg:mt-[130px] ">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-[113px]">
        <h2 className="text-2xl lg:text-5xl font-semibold lg:max-w-[331px]">
          {ourFeaturesData.h2}
        </h2>

        <p className="text-base lg:text-lg font-medium leading-[30px] text-[#A6A6A6] lg:max-w-[461px] text-left">
          {ourFeaturesData.paragraph}
        </p>

        <button className="self-start px-5 lg:px-[31px] py-4 lg:py-[18px] bg-[#54BD95] text-base lg:text-lg leading-[30px] text-white rounded-full hover:bg-[#4DAE88] hover:cursor-pointer transition-colors duration-150">
          {ourFeaturesData.buttonText}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[41px]">
       {features.map((feature, index) => (
         <FeatureCard 
           key={index}
           img={feature.img}
           alt={feature.alt}
           title={feature.title}
           subtitle={feature.subtitle}
         />
       ))}
      </div>
    </section>
  );
}