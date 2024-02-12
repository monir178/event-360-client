import { useQuery } from "@tanstack/react-query"
import { getServices } from './service.api';



export const useGetServices = () => {
    const servicesData = useQuery({
        queryKey: ["services"],
        queryFn: getServices,
        select: (data) => {
            const services = data?.data?.data?.map(service => ({
                id: service._id,
                name: service.serviceName,
                image: service.imageUrl,
                features: service.features,
            }));
            return services;
        }
    });
    return servicesData;
}