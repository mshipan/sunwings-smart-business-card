import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/home/Header";
import Menu from "../components/home/Menu";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
