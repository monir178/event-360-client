import { Check, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Price1 = () => {
  return (
    <div className="p-4 shadow-md border-t-2 border-pink-500">
      <div className="my-4 flex justify-between items-center ">
        <Package
          size={45}
          className="text-pink-500 rounded-md bg-pink-200      p-2"
        />
        <h5 className="text-pink-500 text-4xl font-bold">$21</h5>
      </div>
      <h5 className="text-xl font-bold mb-2">Standard</h5>
      <p className="text-textcolor">
        Upgrade your social portfopo with a stunning profile & enhanced shots.
      </p>
      <Button
        className="my-4 text-blue-500 border-blue-400 border-2 rounded-lg"
        variant="outline">
        Get This Package
      </Button>
      <hr />
      <div className="flex flex-row gap-2 mb-4 items-center mt-4">
        <Check
          size={30}
          strokeWidth={3}
          className="text-green-400 rounded-full bg-white  p-1 "
        />
        <p>User Dashboard</p>
      </div>
      <Check /> <p>Post 3 Ads per week</p>
      <Check /> <p>Multiple images & videos</p>
      <Check /> <p>Basic customer support</p>
      <Check /> <p>Featured ads</p>
      <Check /> <p>Special ads badge</p>
      <Check /> <p>Call to Action in Every Ads</p>
      <Check /> <p>Max 12 team members</p>
    </div>
  );
};

export default Price1;
