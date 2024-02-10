import AboutUsSection from "./AboutUsSection";
import ClientSection from "./ClientSection";
import EventSection from "./EventSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import PricingSection from "./PricingSection";
import RecentEventSection from "./RecentEventSection";
import ServiceSection from "./ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ClientSection />
      <ServiceSection />
      <EventSection />
      <PricingSection />
      <GallerySection />
      <AboutUsSection />
      <RecentEventSection />
    </div>
  );
};

export default Home;
