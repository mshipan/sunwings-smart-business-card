import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";

const Menu = () => {
  return (
    <section className="header_menu">
      <div className="container-fluid">
        <Row className="row">
          <Col lg={6}>
            <nav className="menu_area">
              <ul>
                <li>
                  <Link className="btn1" to="/demo-card">
                    <span className="flex items-center justify-center gap-2">
                      <FaAddressCard className="m_icon" />
                      ডেমো কার্ড ডিজাইন
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="btn1" to="order.html">
                    <span className="flex items-center justify-center gap-2">
                      <FaCartShopping className="m_icon" />
                      কার্ড অর্ডার করুন
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
          <div className="col-lg-6 menu_margin_t">
            <nav className="menu_area">
              <ul>
                <li>
                  <Link className="btn1" to="/registration">
                    <span className="flex items-center justify-center gap-2">
                      <FaAddressBook className="m_icon" />
                      প্রোফাইল তৈরি করুন
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="btn1" to="/login">
                    <span className="flex items-center justify-center gap-2">
                      <RiLoginBoxFill className="m_icon" />
                      লগইন করুন
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default Menu;
