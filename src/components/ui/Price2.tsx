import { Check, Layers, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Variants, motion } from "framer-motion";

const cardAnimate = {
  hidden: {
    boxShadow: "0px 15px 12px rgba(0, 120, 255)",
  },
  animate: {
    boxShadow: "0px 15px 12px rgba(0,0,0,0)",

    transition: {
      ease: "easeInOut",
      duration: 0.7,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Price2 = () => {
  return (
    <motion.div
      variants={cardAnimate as Variants}
      initial="hidden"
      animate="animate"
      className="p-4 relative shadow-md border-t-4 border-blue-500 bg-white rounded-2xl mt-5 md:mt-0 lg:mt-0">
      <div className="my-4 flex justify-between items-center ">
        <Layers
          size={45}
          className="text-blue-500 rounded-md bg-blue-100 p-2"
        />
        <h5 className="text-blue-500 text-4xl font-bold">$49</h5>
      </div>
      <h5 className="text-xl font-bold mb-2">Premium</h5>
      <p className="text-textcolor">
        Upgrade your social portfopo with a stunning profile & enhanced shots.
      </p>
      <div>
        <Button className="my-4 mb-8 rounded-lg">
          Get This Package
          <span className="ms-2">
            <MoveRight />
          </span>
        </Button>
      </div>
      <hr />
      <div className="space-y-2 mt-8">
        <div className="flex flex-row gap-2  items-center ">
          <Check
            size={30}
            strokeWidth={3}
            className="text-green-400 rounded-full bg-green-100 p-1"
          />
          <p>User Dashboard</p>
        </div>
        <div className="flex flex-row gap-2  items-center ">
          <Check
            size={30}
            strokeWidth={3}
            className="text-green-400 rounded-full bg-green-100 p-1"
          />
          <p>Post 3 Ads per week</p>
        </div>
        <div className="flex flex-row gap-2 mb-4 items-center ">
          <Check
            size={30}
            strokeWidth={3}
            className="text-green-400 rounded-full bg-green-100 p-1"
          />
          <p>Multiple images & videos</p>
        </div>
        <div className="flex flex-row gap-2 mb-4 items-center ">
          <Check
            size={30}
            strokeWidth={3}
            className="text-green-400 rounded-full bg-green-100 p-1"
          />
          <p>Basic customer support</p>
        </div>
        <div className="flex flex-row gap-2 mb-4 items-center ">
          <Check
            size={30}
            strokeWidth={3}
            className="text-green-400 rounded-full bg-green-100 p-1"
          />
          <p>Featured ads</p>
        </div>
        <div className="flex flex-row gap-2 mb-4 items-center ">
          <Check
            size={30}
            strokeWidth={3}
            className="text-green-400 rounded-full bg-green-100 p-1"
          />
          <p>Special ads badge</p>
        </div>
        <div className="flex flex-row gap-2 mb-4 items-center ">
          <Check
            size={30}
            strokeWidth={3}
            className="text-green-400 rounded-full bg-green-100 p-1"
          />
          <p className="line-through text-gray-300">
            Call to Action in Every Ads
          </p>
        </div>
        <div className="flex flex-row gap-2 mb-4 items-center ">
          <Check
            size={30}
            strokeWidth={3}
            className="text-green-400 rounded-full bg-green-100 p-1"
          />
          <p className="line-through text-gray-300">Max 12 team members</p>
        </div>
      </div>
      <div className="absolute top-[-32px] text-sm left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-1 px-4 rounded-t-xl uppercase">
        Recommended
      </div>
    </motion.div>
  );
};

export default Price2;
