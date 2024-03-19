import { useGetServices } from "@/api/service.hook";
import ServiceCard from "@/components/ui/ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";
import { TService } from "@/types/eventType";

const AllServices = () => {
  const { data: services, isLoading, isError } = useGetServices();
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

  return (
    <div>
      <h1 className="text-center">All Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-4 items-center gap-4 justify-between mt-16">
        {services?.map((service: TService) => (
          <ServiceCard service={service as TService} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
