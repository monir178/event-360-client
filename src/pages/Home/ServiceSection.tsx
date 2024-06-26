import Container from "@/components/Container";

import ServiceCard from "@/components/ui/ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";
import { TService } from "@/types/eventType";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface LimitedServicesResponse {
  data: TService[]; // Assuming data is an array of TService objects
}

const ApplyBackgroundGradient = () => {
  const hsl1 = "288, 95%, 93%";
  const hsl2 = "0, 0%, 100%";
  const hsl3 = "176, 80%, 90%";

  return {
    background: `linear-gradient(to right, hsl(${hsl1}) 0%, hsl(${hsl2}) 50%, hsl(${hsl3}) 100%)`,
  };
};

const ServiceSection = () => {
  const {
    data: limitedServices,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      axios.get<LimitedServicesResponse>(
        "https://frontend-assignment-5-server.vercel.app/api/v1/limit-services"
      ),
  });

  // console.log(services);
  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3 ">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }
  if (isError) {
    return <p>Something is missing</p>;
  }

  const services = limitedServices?.data.data;
  console.log(services);

  return (
    <div
      className="max-w-[1440px] w-full overflow-hidden mx-auto pb-10"
      style={ApplyBackgroundGradient()}>
      <Container className="mt-12">
        <h1 className="text-center mb-4">Our Services</h1>
        <p className="text-textcolor text-center">
          Explore our comprehensive range of services tailored to elevate your
          events, exclusively at Event 360.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 justify-between mt-16">
          {services?.map((service: TService) => (
            <ServiceCard key={service._id} service={service as TService} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServiceSection;
