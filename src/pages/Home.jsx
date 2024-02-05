import CardGallery from "../components/home/CardGallery";
import Discount from "../components/home/Discount";
import FaqQuestions from "../components/home/FaqQuestions";
import Header from "../components/home/Header";
import Menu from "../components/home/Menu";
import NfcDemoCardProfile from "../components/home/NfcDemoCardProfile";
import NfcVideoCard from "../components/home/NfcVideoCard";
import StandardCard from "../components/home/StandardCard";
import StartFreeTrial from "../components/home/StartFreeTrial";
import StartNfcTechnology from "../components/home/StartNfcTechnology";
import TimeLineArea from "../components/home/TimeLineArea";
import VisitingInformation from "../components/home/VisitingInformation";
import WhatIsNfcCard from "../components/home/WhatIsNfcCard";
import WhatsApp from "../components/home/WhatsApp";

const Home = () => {
  return (
    <div>
      <Header />
      <Menu />
      <VisitingInformation />
      <NfcVideoCard />
      <WhatIsNfcCard />
      <StartFreeTrial />
      <StartNfcTechnology />
      <TimeLineArea />
      <Discount />
      <CardGallery />
      <WhatsApp />
      <NfcDemoCardProfile />
      <StandardCard />
      <WhatsApp />
      <FaqQuestions />
    </div>
  );
};

export default Home;
