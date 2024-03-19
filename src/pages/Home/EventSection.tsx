import { useGetEvents } from "@/api/event.hook";
import Container from "@/components/Container";
import EventCard from "@/components/ui/EventCard";
import { Skeleton } from "@/components/ui/skeleton";
import { TEvent } from "@/types/eventType";

const EventSection = () => {
  const { data: events, isLoading, isError } = useGetEvents();

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
    return <p className="text-center text-xl font-bold">Something is wrong</p>;
  }

  if (!events) {
    return (
      <p className="text-center text-xl font-bold">
        Please Check your Internet Connection
      </p>
    );
  }

  return (
    <Container>
      <h1 className="text-center my-4 mt-8">Event Items </h1>
      <p className="text-textcolor text-center">
        Explore our comprehensive range of services tailored to elevate your
        events, exclusively at Event 360.
      </p>
      <div className="grid gap-4 lg:grid-cols-12 mt-16">
        <div className="col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-4">
          <div>
            <EventCard event={events[0] as TEvent} />
          </div>
          <div className="flex flex-row gap-4 mt-4 ">
            {events.slice(1, 3).map((event: TEvent) => (
              <div key={event._id} className="md:w-1/2">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-4">
          <div className="flex flex-col gap-4">
            {events.slice(3, 5).map((event: TEvent) => (
              <div key={event._id}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-4 sm:col-span-4">
          {events.slice(5).map((event: TEvent) => (
            <div key={event._id}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EventSection;
