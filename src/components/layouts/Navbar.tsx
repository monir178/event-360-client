import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const animateNav = {
    hidden: {
      opacity: 0,
      y: -60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        ease: "linear",
      },
    },
  };

  return (
    <motion.header
      variants={animateNav}
      initial="hidden"
      animate="visible"
      className="h-24 w-full">
      <nav className="max-w-[1300px] px-[20px]  w-full mx-auto h-full flex justify-between items-center">
        <p className="font-bold text-3xl">
          Event <span className="text-primary">360</span>
        </p>
        <motion.ul className="space-x-3 md:space-x-6  font-semibold text-base">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
