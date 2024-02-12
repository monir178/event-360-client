import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type TService = {
  _id: string;
  name: string;
  image: string;
  features: string[];
};

interface ServiceCardProps {
  service: TService;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  //   console.log(service);
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        filter: "brightness(0.95)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
      className="w-full border-none rounded-md p-4">
      <img className="rounded-md h-60 w-96" src={service.image} />
      <div
        className="card-body"
        style={{ flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
        <h3 className="card-title my-3">{service.name}</h3>

        <div
          className="flex flex-col gap-2 mb-4"
          style={{ flex: "1", overflowY: "auto" }}>
          {service.features.map((feature, index) => (
            <p key={index} className="flex gap-2">
              <Check
                size={28}
                strokeWidth={3}
                className="text-green-400 rounded-full bg-white  p-1 "
              />
              <span>{feature}</span>
            </p>
          ))}
        </div>

        <div className="mt-auto">
          <Button className="font-medium w-full">Check it out</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
