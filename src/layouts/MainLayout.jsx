import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
