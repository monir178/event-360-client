import EventSection from "@/pages/Home/EventSection";
import GallerySection from "@/pages/Home/GallerySection";
import PricingSection from "@/pages/Home/PricingSection";

const ApplyBackgroundGradient = () => {
  const hsl1 = "288, 95%, 93%";
  const hsl2 = "0, 0%, 100%";
  const hsl3 = "176, 80%, 90%";

  return {
    background: `linear-gradient(to bottom right, hsl(${hsl1}) 0%, hsl(${hsl2}) 50%, hsl(${hsl3}) 100%)`,
  };
};

const BackgroundGradient = () => {
  return (
    <div
      className="max-w-[1440px] w-full overflow-hidden mx-auto pb-10 mt-32"
      style={ApplyBackgroundGradient()}>
      <EventSection />
      <PricingSection />
      <GallerySection />
    </div>
  );
};

export default BackgroundGradient;
