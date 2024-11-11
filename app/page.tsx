import AboutSection from "@/components/AboutSection";
import ChooseUsSection from "@/components/ChooseUsSection";
//import Quote from "@/components/Quote";
import Reviews from "@/components/Reviews";
import ServicesSection from "@/components/ServicesSection";
import TitlePage from "@/components/HeroSection";
import TitleStats from "@/components/TitleStats";

export default function Home() {
  return (
    <>
      <TitlePage />
      {/*<div className="mt-[-15rem]">
        <Quote />
      </div>*/}
      <TitleStats />
      <AboutSection />
      <div className="relative z-0"> {/* Lower z-index if needed */}
        <ServicesSection />
      </div>
      <ChooseUsSection />
      <Reviews />
    </>
  );
}
