import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "../Container";

const AdminLayout = () => {
  return (
    <Container>
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu  p-4 w-80 min-h-full text-lg bg-gradient-to-br from-blue-100 to-pink-100">
            <li>
              <Link to="/admin/add-service">Add a service</Link>
            </li>
            <li>
              <Link to="/admin/all-services">Manage Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default AdminLayout;
