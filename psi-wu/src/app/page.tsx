import { HeroSection } from "@/components/Home/heroSection";
import { AboutSection } from "@/components/Home/aboutSection";
import DepoimentoSection from "@/components/Home/depoimentos";
import PsicoterapiaSection from "@/components/Home/psicoOnline";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DepoimentoSection />
      <PsicoterapiaSection />
    </>
  );
}
