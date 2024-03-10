import Container from "@/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clientData } from "@/lib/clientData";

const ClientTalkSection = () => {
  return (
    <Container className="my-24 max-w-[1440px]">
      <h1 className="mb-24 ms-0 xl:ms-[80px]">What Our Client Said About Us</h1>
      <Carousel className="w-full">
        <CarouselContent className="p-4 ms-0 xl:ms-[80px] flex gap-10">
          {clientData.map((client, index) => (
            <CarouselItem
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              key={index}
              className="p-8 rounded-3xl bg-blue-50 hover:bg-blue-600 transition-all hover:text-white md:basis-3/5 lg:basis-2/5">
              <div className="flex  items-center gap-4 mb-10 ">
                <img src={client.img} alt="" />
                <div>
                  <h3>{client.name}</h3>
                  <p>{client.title}</p>
                </div>
              </div>
              <p>{client.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default ClientTalkSection;
