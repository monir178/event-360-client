import Container from "@/components/Container";
import story from "../../assets/Story.png";

const Story = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20 my-16">
      <div className="md:flex md:justify-center md:order-2">
        <img src={story} alt="" />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:order-1">
        <h1 className="mb-4">Our Story</h1>
        <p className="text-justify text-xl">
          In a world where time is of the essence and convenience is paramount,
          we saw an opportunity to create a space where individuals could access
          a wide array of necessary items with ease. But we didn't stop there.
          We also envisioned a platform where aspiring entrepreneurs could turn
          their ideas into reality, with the support and resources they need to
          succeed. And thus, Event360 was born.
        </p>
      </div>
    </Container>
  );
};

export default Story;
