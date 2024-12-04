import HeroSection from "components/hero";
import { FeaturesComp } from "components/features";
import { PricingComp } from "components/pricing";
import { StatsSection } from "components/stats";
import { Footer } from "components/footer";

export default function MyPage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturesComp></FeaturesComp>
      <PricingComp></PricingComp>
      <StatsSection></StatsSection>
      <Footer></Footer>
    </div>
  );
}
