import HeroSection from "components/hero";
import { FeaturesComp } from "components/features";
import { PricingComp } from "components/pricing";
import { HowWorkComponent } from "components/how-work";
import { StatsSection } from "components/stats";
import { Footer } from "components/footer";
import { ContactComponet } from "components/contact";
import { MyHeader } from "components/header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // Importación correcta

export default function MyPage() {
  return (
    <div>
      <HeroSection />
      <FeaturesComp />
      <HowWorkComponent />
      <StatsSection />
      <PricingComp />
      <ContactComponet />
      <Footer />
    </div>
  );
}

// Obtenemos las traducciones del servidor para el idioma seleccionado
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
