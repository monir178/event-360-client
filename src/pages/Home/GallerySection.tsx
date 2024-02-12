import Container from "@/components/Container";
import GalleryImages from "@/components/ui/GalleryImages";
import { Check } from "lucide-react";
import star from "../../assets/gallery/Star.png";

const GallerySection = () => {
  return (
    <div className="relative mt-24 grid grid-cols-1 lg:grid-cols-2 place-content-center items-center">
      <Container>
        <div>
          <h1 className="my-6">Gallery</h1>
          <p className="text-textcolor mb-6 max-w-[50ch]">
            Step into the vibrant world of Event 360 through our captivating
            gallery. From intimate gatherings to grand celebrations, our
            carefully curated collection of photos brings each event to life.
            Explore the essence of our occasions and find inspiration for your
            next unforgettable event.
          </p>
          <div className="space-y-2 mt-8">
            <div className="flex flex-row gap-2  items-center ">
              <Check
                size={20}
                strokeWidth={3}
                className="text-green-400 rounded-full bg-gray-200 p-1"
              />
              <p>One day pass access all lectures</p>
            </div>
            <div className="flex flex-row gap-2  items-center ">
              <Check
                size={20}
                strokeWidth={3}
                className="text-green-400 rounded-full bg-gray-200 p-1"
              />
              <p>Lunch and Snack</p>
            </div>
            <div className="flex flex-row gap-2 mb-4 items-center ">
              <Check
                size={20}
                strokeWidth={3}
                className="text-green-400 rounded-full bg-gray-200 p-1"
              />
              <p>Meet Event Speaker</p>
            </div>
            <div className="flex flex-row gap-2 mb-4 items-center ">
              <Check
                size={20}
                strokeWidth={3}
                className="text-green-400 rounded-full bg-gray-200 p-1"
              />
              <p>Front Seat</p>
            </div>
            <div className="flex flex-row gap-2 mb-4 items-center ">
              <Check
                size={20}
                strokeWidth={3}
                className="text-green-400 rounded-full bg-gray-200 p-1"
              />
              <p>One day pass access all lectures</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 top-[440px] lg:top-[-50px] left-60 flex justify-center items-start">
          <img src={star} alt="" />
        </div>
      </Container>
      <div className="relative z-10 mt-8 lg:mt-0">
        <GalleryImages />
      </div>
    </div>
  );
};

export default GallerySection;
