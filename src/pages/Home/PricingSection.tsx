import Container from "@/components/Container";
import Price1 from "@/components/ui/Price1";
import Price2 from "@/components/ui/Price2";
import Price3 from "@/components/ui/Price3";

const PricingSection = () => {
  return (
    <Container className="mt-28 ">
      <h1 className="text-center my-4">Explore our pricing plans </h1>
      <p className="mt-4 text-textcolor text-center">
        Explore our comprehensive range of services tailored to elevate your
        events, exclusively at Event 360.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-32">
        <Price1 />
        <Price2 />
        <Price3 />
      </div>
    </Container>
  );
};

export default PricingSection;
