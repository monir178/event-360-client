import Container from "@/components/Container";
import Navbar from "@/components/layouts/Navbar";
import { useFadeIn } from "@/hooks/useFadeIn";
import { motion } from "framer-motion";

const About = () => {
  const variants = useFadeIn();
  return (
    <Container>
      <motion.div variants={variants} initial="hidden" animate="visible">
        <Navbar />
        <h2>This is About us.</h2>
      </motion.div>
    </Container>
  );
};

export default About;
