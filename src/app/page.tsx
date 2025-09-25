import BenefitSection from "@/sections/BenefitSection";
import ChoosePlanSection from "@/sections/ChoosePlanSection";
import HomeSection from "@/sections/HeroSection";
import HowWeSupport from "@/sections/HowWeSupport";
import OurFeatures from "@/sections/OurFeatures";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <HowWeSupport />
      <OurFeatures />
      <BenefitSection />
      <ChoosePlanSection />
    </main>
  );
}
