import Container from "@/components/Container";
import entrepreneur from "../../assets/Entrepreneur.png";

const Entrepreneur = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20">
      <div className="md:flex md:justify-center md:order-1">
        <img src={entrepreneur} alt="" />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:order-2 ">
        <h1 className="mb-4">Creating New Entrepreneurs</h1>
        <p className="text-justify text-xl">
          With our "Be an Entrepreneur" platform, we're not just facilitating
          transactions - we're fostering innovation. We invite individuals with
          bold ideas to share their visions with us, and we provide guidance,
          mentorship, and funding to help turn those ideas into reality. From
          concept to execution, we're here to support aspiring entrepreneurs
          every step of the way, because we believe that together, we can create
          positive change in the world
        </p>
      </div>
    </Container>
  );
};

export default Entrepreneur;
