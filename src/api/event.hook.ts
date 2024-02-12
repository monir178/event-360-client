import { useQuery } from "@tanstack/react-query"
import { getEvents } from "./event.api";
import { TEvent } from '../types/eventType';


export const useGetEvents = () => {
    const eventsData = useQuery({
        queryKey: ["events"],
        queryFn: getEvents,
        select: (data) => {
            const events = data?.data?.data?.map((event: TEvent) => ({
                id: event._id,
                name: event.name,
                imageUrl: event.imageUrl,
            }));
            return events;
        }
    });
    return eventsData;
}