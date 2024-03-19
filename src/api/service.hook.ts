import { useQuery } from "@tanstack/react-query";
import { getServices } from './service.api';
import { TService } from "@/types/eventType";


export const useGetServices = () => {
    const servicesData = useQuery({
        queryKey: ["services"],
        queryFn: getServices,

        refetchInterval: 3000,
        staleTime: 10000,

        select: (data) => {
            const services = data?.data?.data?.map((service: TService) => ({
                _id: service._id,
                serviceName: service.serviceName,
                imageUrl: service.imageUrl,
                features: service.features,
            }));
            return services;
        },

    });
    return servicesData;
}
