import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

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

  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/admin">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

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

        <motion.ul className="space-x-3 hidden md:flex md:space-x-6  font-semibold text-base">
          {menuItems}
        </motion.ul>
        <div className="lg:hidden">
          {isAdminPage && (
            <label htmlFor="dashboard-drawer">
              <ChevronRight />
            </label>
          )}
        </div>

        <div className="md:hidden">
          <Menu
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {menuOpen && (
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <ul className="space-y-2 sticky right-0 z-[999] border-2 flex flex-col bg-white ml-auto py-6 rounded-lg px-4 w-2/5 text-end">
            {menuItems}
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
