import Container from "@/components/Container";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ApplyBackgroundGradient = () => {
  const hsl1 = "318, 53%, 82%"; // HSL color values

  return {
    background: `radial-gradient(circle, hsla(${hsl1}, 1), white)`,
  };
};

const RecentEventSection = () => {
  const {
    data: recentEvents,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recents"],
    queryFn: () => axios.get("http://localhost:5000/api/v1/recents"),
  });
  const recentEventsData = recentEvents?.data?.data;

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <div className="max-w-[1440px] w-full overflow-hidden mx-auto">
      <Container className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
        <div
          style={ApplyBackgroundGradient()}
          className="grid p-10 rounded-3xl  grid-cols-3 gap-4">
          {recentEventsData.map((event) => (
            <img className="" src={event.img} alt="" />
          ))}
        </div>
        <div className="space-y-8">
          <h1>Recent Events</h1>
          <p className="text-gray-600">
            Explore our comprehensive range of services tailored to elevate your
            events, exclusively at Event 360
          </p>
          <Button>Learn more</Button>
        </div>
      </Container>
    </div>
  );
};

export default RecentEventSection;
