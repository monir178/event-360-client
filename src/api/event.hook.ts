import { useQuery } from "@tanstack/react-query"
import { getEvents } from "./event.api";


export const useGetEvents = () => {
    const eventsData = useQuery({
        queryKey: ["events"],
        queryFn: getEvents,
        select: (data) => {
            const events = data?.data?.data?.map(event => ({
                id: event._id,
                name: event.name,
                image: event.imageUrl,

            }));
            return events;
        }
    });
    return eventsData;
}