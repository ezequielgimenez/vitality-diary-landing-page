import HeroSection from "components/hero";
import { FeaturesComp } from "components/features";
import { PricingComp } from "components/pricing";
import { HowWorkComponent } from "components/how-work";

export default function MyPage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturesComp></FeaturesComp>
      <PricingComp></PricingComp>
      <HowWorkComponent></HowWorkComponent>
    </div>
  );
}
