import Story from "./OurStorySection";
import Entrepreneur from "./EntrepreneurSection";

const ApplyBackgroundGradient = () => {
  const hsl1 = "288, 95%, 93%";
  const hsl2 = "0, 0%, 100%";
  const hsl3 = "208, 57%, 91%";

  return {
    background: `linear-gradient(to bottom right, hsl(${hsl1}) 0%, hsl(${hsl2}) 50%, hsl(${hsl3}) 100%)`,
  };
};

const DetailsContainer = () => {
  return (
    <div
      className="mt-16  max-w-[1440px] mx-auto py-10"
      style={ApplyBackgroundGradient()}>
      <Story />
      <Entrepreneur />
    </div>
  );
};

export default DetailsContainer;
