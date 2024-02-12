import { TEvent } from "@/types/eventType";

interface EventCardProps {
  event: TEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        filter: "brightness(0.95)",
        overflow: "hidden",
        height: "100%",
        width: "100%",
      }}
      className="w-full border-none rounded-md p-4">
      <img className="rounded-md w-full" src={event.imageUrl} />
      <h3 className="mt-4">{event.name}</h3>
    </div>
  );
};

export default EventCard;
