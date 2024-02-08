import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import CustomizeHome from "../pages/dashboard/customizeHome/CustomizeHome";
import AllCards from "../pages/dashboard/allCards/AllCards";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "add-images",
        element: <CustomizeHome />,
      },
      {
        path: "all-cards",
        element: <AllCards />,
      },
    ],
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
