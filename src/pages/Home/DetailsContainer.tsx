import Story from "./OurStorySection";
import Entrepreneur from "./EntrepreneurSection";

const DetailsContainer = () => {
  return (
    <div className="mt-16 bg-gradient-to-tr max-w-[1440px] mx-auto from-blue-100 to-pink-50  py-10">
      <Story />
      <Entrepreneur />
    </div>
  );
};

export default DetailsContainer;
