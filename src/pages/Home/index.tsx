import BackgroundGradient from "@/components/ui/BackgroundGradient";
import AboutUsSection from "./AboutUsSection";
import ClientSection from "./ClientSection";
import RecentEventSection from "./RecentEventSection";
import ServiceSection from "./ServiceSection";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ClientSection />
      <ServiceSection />
      <BackgroundGradient />
      <AboutUsSection />
      <RecentEventSection />
    </div>
  );
};

export default Home;
