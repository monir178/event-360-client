import Container from "@/components/Container";
import heroImg from "../../assets/images/hero.png";
import Navbar from "@/components/layouts/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { motion } from "framer-motion";
import star from "../../assets/images/Star 6.png";
import softStar from "../../assets/images/Soft Star.png";
import { Heart } from "lucide-react";

const ApplyBackgroundGradient = () => {
  const hsl1 = "50, 78%, 87%";
  const hsl2 = "247, 35%, 95%";

  return {
    background: `linear-gradient(to bottom right, hsl(${hsl1}) 0%, hsl(${hsl2}) 70%)`,
  };
};

const ApplyGradientStyleText = () => {
  const hsl1 = "260, 99%, 40%";
  const hsl2 = "32, 100%, 50%";

  return {
    background: `linear-gradient(to left, hsl(${hsl1}) 0%, hsl(${hsl2}) 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };
};

const animateText = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 1,
      type: "spring",
      ease: "linear",
    },
  },
};
const animateButton = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      ease: "linear",
    },
  },
};

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={ApplyBackgroundGradient()}
      className="max-w-[1440px] w-full overflow-hidden mx-auto pb-10">
      <Navbar />
      <Container className="grid grid-cols-1 lg:grid-cols-2 place-content-center items-center ">
        <div className="mb-16 lg:mb-0">
          <h1 data-aos="fade-down">
            Brand New <br /> event Packages
          </h1>
          <h2
            data-aos="fade-right"
            style={ApplyGradientStyleText()}
            className="font-extrabold text-[56px]">
            For Winter
          </h2>
          <motion.p
            variants={animateText}
            initial="hidden"
            animate="visible"
            className="max-w-[60ch] mt-4 mb-8">
            Discover our new winter event packages, meticulously crafted to
            elevate your gatherings. From cozy soirées to grand celebrations,
            delight in themed decor, gourmet delights, and bespoke touches that
            will make your event truly magical.
          </motion.p>
          <motion.div
            variants={animateButton}
            initial="hidden"
            animate="visible">
            <Button>Explore</Button>
          </motion.div>

          {/* /***** Transparent Cards are here *******/}
          <div className="flex gap-4 mt-10 w-full">
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                opacity: 0.7,
                overflow: "hidden",
              }}
              className="border-4 border-white w-[224px] h-[170px] rounded-3xl">
              <div className="p-4 flex flex-col gap-8">
                <Heart
                  style={{
                    backgroundColor: "rgba(104, 95, 212, 0.35)",
                    color: "rgba(104, 95, 212, 1)",
                    fill: "rgba(104, 95, 212, 1)",
                    borderRadius: "50%",
                    height: "48px",
                    width: "48px",
                    padding: "10px",
                  }}
                />
                <p className="text-xs font-light overflow-hidden whitespace-nowrap">
                  Elevate your events with our winter packages. Enjoy themed
                  decor and gourmet.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                opacity: 0.7,
                overflow: "hidden",
              }}
              className="border-4 border-white w-[224px] h-[170px] rounded-3xl">
              <div className="p-4 flex flex-col gap-8">
                <Heart
                  style={{
                    backgroundColor: "rgba(242, 201, 76, 0.35)",
                    color: "rgba(242, 201, 76, 1)",
                    fill: "rgba(242, 201, 76, 1)",
                    borderRadius: "50%",
                    height: "48px",
                    width: "48px",
                    padding: "10px",
                  }}
                />
                <p className="text-xs font-light overflow-hidden whitespace-nowrap">
                  Winter event perfection awaits. From intimate to extravagant.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                opacity: 0.7,
                overflow: "hidden",
              }}
              className="border-4 border-white w-[224px] h-[170px] rounded-3xl">
              <div className="p-4 flex flex-col gap-8">
                <Heart
                  style={{
                    backgroundColor: "rgba(138, 178, 220, 0.35)",
                    color: "rgba(138, 178, 220, 1)",
                    fill: "rgba(138, 178, 220, 1)",
                    borderRadius: "50%",
                    height: "48px",
                    width: "48px",
                    padding: "10px",
                  }}
                />
                <p className="text-xs font-light overflow-hidden whitespace-nowrap">
                  Discover winter event magic. From cozy to grand, indulge in
                  themed decor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* /***** Hero Image and Stars *******/}
        <div className="flex justify-center items-center relative">
          <div className="relative">
            <div className="absolute top-0 md:top-14 lg:top-16">
              <img src={star} alt="" />
            </div>
            <div className="absolute top-80 bottom-0 md:top-auto  lg:bottom-0 right-2 ">
              <img src={softStar} alt="" />
            </div>
            <img
              className="rounded-full  border border-black p-12"
              src={heroImg}
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
