import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="header_menu">
      <div className="container-fluid">
        <Row className="row">
          <Col lg={6}>
            <nav className="menu_area">
              <ul>
                <li>
                  <Link className="btn1" to="order.html">
                    কার্ড অর্ডার করুন
                  </Link>
                </li>
                <li>
                  <Link className="btn1" to="javascript:void(0)">
                    <i className="m_icon fa-regular fa-address-book"></i>
                    প্রোফাইল তৈরি করুন
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
          <div className="col-lg-6 menu_margin_t">
            <nav className="menu_area">
              <ul>
                <li>
                  <Link className="btn1" to="demo-card.html">
                    <i className="m_icon fa-solid fa-id-card"></i>
                    ডেমো কার্ড ডিজাইন
                  </Link>
                </li>
                <li>
                  <Link className="btn1" to="javascript:void(0)">
                    <i className="m_icon fa-regular fa-address-book"></i>
                    প্রোফাইল তৈরি করুন
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
