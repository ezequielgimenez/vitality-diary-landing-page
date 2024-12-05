import HeroSection from "components/hero";
import { FeaturesComp } from "components/features";
import { PricingComp } from "components/pricing";
import { HowWorkComponent } from "components/how-work";
import { StatsSection } from "components/stats";
import { Footer } from "components/footer";
import { ContactComponet } from "components/contact";

export default function MyPage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturesComp></FeaturesComp>
      <HowWorkComponent></HowWorkComponent>
      <StatsSection></StatsSection>
      <PricingComp></PricingComp>
      <ContactComponet></ContactComponet>
      <Footer></Footer>
    </div>
  );
}
