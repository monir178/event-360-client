import Container from "@/components/Container";
import companyLogo1 from "@/assets/company/Company logo1.png";
import companyLogo2 from "@/assets/company/Company logo2.png";
import companyLogo3 from "@/assets/company/Company logo3.png";
import companyLogo4 from "@/assets/company/Company logo4.png";
import companyLogo5 from "@/assets/company/Company logo5.png";
import companyLogo6 from "@/assets/company/Company logo6.png";
import companyLogo7 from "@/assets/company/Company logo7.png";
import companyLogo8 from "@/assets/company/Company logo8.png";
import companyLogo9 from "@/assets/company/Company logo9.png";
import companyLogo10 from "@/assets/company/Company logo10.png";

const ClientSection = () => {
  return (
    <Container className="my-16">
      <h1 className="text-center mb-20">Our Valuable client</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-20 justify-between">
        <img src={companyLogo1} alt="" />
        <img src={companyLogo2} alt="" />
        <img src={companyLogo3} alt="" />
        <img src={companyLogo4} alt="" />
        <img src={companyLogo5} alt="" />
        <img src={companyLogo6} alt="" />
        <img src={companyLogo7} alt="" />
        <img src={companyLogo8} alt="" />
        <img src={companyLogo9} alt="" />
        <img src={companyLogo10} alt="" />
      </div>
    </Container>
  );
};

export default ClientSection;
