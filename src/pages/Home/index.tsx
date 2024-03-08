import BackgroundGradient from "@/components/ui/BackgroundGradient";

import ClientSection from "./ClientSection";
import RecentEventSection from "./RecentEventSection";
import ServiceSection from "./ServiceSection";
import HeroSection from "./HeroSection";
import ClientTalkSection from "./ClientTalkSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ClientSection />
      <ServiceSection />
      <BackgroundGradient />
      <ClientTalkSection />
      <RecentEventSection />
    </div>
  );
};

export default Home;
