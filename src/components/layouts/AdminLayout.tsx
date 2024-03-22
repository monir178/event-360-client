import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "../Container";

const AdminLayout = () => {
  return (
    <Container>
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="drawer lg:drawer-open lg:gap-8">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-4/6 md:w-80 min-h-full  text-lg bg-gradient-to-br from-blue-100 to-pink-100">
            <li>
              <Link to="/admin/add-service">Add a service</Link>
            </li>
            <li>
              <Link to="/admin/all-services">All Services</Link>
            </li>
            <li>
              <Link to="/admin/edit-service">Edit Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default AdminLayout;
