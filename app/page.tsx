import AboutSection from "@/components/AboutSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import Quote from "@/components/Quote";
import ServicesSection from "@/components/ServicesSection";
import Stats from "@/components/Stats";
import TitlePage from "@/components/TitlePage";

export default function Home() {
  return (
    <>
      <TitlePage />
      <div className="mt-[-5rem]">
        <Quote />
      </div>
      <AboutSection />
      <div className="relative z-10"> {/* Ensure higher z-index if needed */}
        <Stats />
      </div>
      <div className="relative z-0"> {/* Lower z-index if needed */}
        <ServicesSection />
      </div>
      <ChooseUsSection />
    </>
  );
}
