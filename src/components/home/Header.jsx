import { Link } from "react-router-dom";
import logo from "../../assets/images/info_card_logo.png";
import banner from "../../assets/images/banner-1.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <div className="container-fluid">
          {/* header top logo */}
          <div className="header_top_logo mb-3">
            <Link href="index.html">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {/* header banner */}
          <div className="header_banner">
            <img src={banner} alt="banner-1" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
