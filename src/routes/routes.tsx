import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import Home from "@/pages/Home";
import About from "@/pages/aboutUs/About";

import AddService from "@/pages/admin/addService/AddService";
import AllServices from "@/pages/admin/manageService/AllServices";
import EditService from "@/pages/admin/manageService/EditService";
import Contact from "@/pages/contact/Contact";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/all-services" />,
      },
      {
        path: "/admin/add-service",
        element: <AddService />,
      },
      {
        path: "/admin/all-services",
        element: <AllServices />,
      },
      {
        path: "/admin/edit-service",
        element: <EditService />,
      },
    ],
  },
]);

export default router;
