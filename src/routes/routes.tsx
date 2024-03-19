import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import Home from "@/pages/Home";

import AddService from "@/pages/admin/addService/AddService";
import AllServices from "@/pages/admin/manageService/AllServices";
import EditService from "@/pages/admin/manageService/EditService";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
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
