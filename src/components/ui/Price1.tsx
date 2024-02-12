import { Check, MoveRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Price1 = () => {
  return (
    <div className="p-4 shadow-md border-t-4 border-pink-500 bg-white rounded-2xl">
      <div className="my-4 flex justify-between items-center ">
        <Package
          size={45}
          className="text-pink-500 rounded-md bg-pink-100     p-2"
        />
        <h5 className="text-pink-500 text-4xl font-bold">$21</h5>
      </div>
      <h5 className="text-xl font-bold mb-2">Standard</h5>
      <p className="text-textcolor">
        Upgrade your social portfopo with a stunning profile & enhanced shots.
      </p>

      <Button
        className="my-4 mb-8 text-blue-500 border-blue-400 border-2 rounded-lg"
        variant="outline">
        Get This Package
        <span className="ms-2">
          <MoveRight />
        </span>
      </Button>

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
          <p className="line-through text-gray-300">Basic customer support</p>
        </div>
        <div className="flex flex-row gap-2 mb-4 items-center ">
          <Check
            size={30}
            strokeWidth={3}
            className="text-green-400 rounded-full bg-green-100 p-1"
          />
          <p className="line-through text-gray-300">Featured ads</p>
        </div>
        <div className="flex flex-row gap-2 mb-4 items-center ">
          <Check
            size={30}
            strokeWidth={3}
            className="text-green-400 rounded-full bg-green-100 p-1"
          />
          <p className="line-through text-gray-300">Special ads badge</p>
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
    </div>
  );
};

export default Price1;
