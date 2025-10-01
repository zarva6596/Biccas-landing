import BenefitSection from "@/components/Homepage/BenefitSection";
import PricingSection from "@/components/Homepage/PricingSection";
import HomeSection from "@/components/Homepage/HeroSection";
import HowWeSupport from "@/components/Homepage/HowWeSupport";
import OurFeatures from "@/components/Homepage/OurFeatures";
import PeopleAreSaying from "@/components/Homepage/PeopleAreSaying";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <HowWeSupport />
      <OurFeatures />
      <BenefitSection />
      <PricingSection />
      <PeopleAreSaying />
    </main>
  );
}
