import "./CustomizeHome.css";

import LogoSection from "../../../components/dashboard/customizeHome/LogoSection";
import BannerSection from "../../../components/dashboard/customizeHome/BannerSection";
import VisitingInformationSection from "../../../components/dashboard/customizeHome/visitingInformationSection/VisitingInformationSection";
import NfcVideoCardInfo from "../../../components/dashboard/customizeHome/nfcVideoCardInfo/NfcVideoCardInfo";

const CustomizeHome = () => {
  return (
    <div>
      <h1 className="text_db_36">Customize home</h1>
      {/* Logo Section */}
      <LogoSection />

      {/* Banner Section */}
      <BannerSection />

      {/* Visiting Information Section */}
      <VisitingInformationSection/>
      {/* NFC Card Ifo Section */}
      <NfcVideoCardInfo/>
    </div>
  );
};

export default CustomizeHome;
