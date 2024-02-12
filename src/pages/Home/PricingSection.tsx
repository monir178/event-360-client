import Container from "@/components/Container";
import Price1 from "@/components/ui/Price1";

const PricingSection = () => {
  return (
    <Container className="mt-32">
      <h1 className="text-center my-4">Explore our pricing plans </h1>
      <p className="mt-4 text-textcolor text-center">
        Explore our comprehensive range of services tailored to elevate your
        events, exclusively at Event 360.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Price1 />
      </div>
    </Container>
  );
};

export default PricingSection;
