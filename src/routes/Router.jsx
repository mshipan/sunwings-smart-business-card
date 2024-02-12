import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import CustomizeHome from "../pages/dashboard/customizeHome/CustomizeHome";
import AllCards from "../pages/dashboard/allCards/AllCards";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import Order from "../pages/order/Order";
import DemoCard from "../pages/DemoCard";
import Profile from "../pages/profile/Profile";
import EditProfile from "../pages/dashboard/EditProfile";
import DemoProfile from "../pages/profile/demo-profile/DemoProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/demo-card",
        element: <DemoCard />,
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
      {
        path: "edit-profile",
        element: <EditProfile />,
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
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/user-profile",
    element: <Profile />,
  },
  {
    path: "/demo-profile",
    element: <DemoProfile />,
  },
]);

export default router;
