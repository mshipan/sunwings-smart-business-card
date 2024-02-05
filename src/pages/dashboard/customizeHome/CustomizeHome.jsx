import "./CustomizeHome.css";

import LogoSection from "../../../components/dashboard/customizeHome/LogoSection";
import BannerSection from "../../../components/dashboard/customizeHome/BannerSection";

const CustomizeHome = () => {
  return (
    <div>
      <h1 className="text_db_36">Customize home</h1>
      {/* Logo Section */}
      <LogoSection />

      {/* Banner Section */}
      <BannerSection />
    </div>
  );
};

export default CustomizeHome;
