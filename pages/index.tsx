import HeroSection from "components/hero";
import { FeaturesComp } from "components/features";
import { PricingComp } from "components/pricing";

export default function MyPage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturesComp></FeaturesComp>
      <PricingComp></PricingComp>
    </div>
  );
}
