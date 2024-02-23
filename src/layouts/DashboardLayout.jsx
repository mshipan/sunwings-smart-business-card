import logo from "../assets/images/info_card_logo.png";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdDashboard, MdMenu } from "react-icons/md";
import {
  FaAddressCard,
  FaShareAltSquare,
  FaImage,
  FaBriefcase,
  FaUserGraduate,
} from "react-icons/fa";
import { LuImagePlus, LuReceipt } from "react-icons/lu";
import { RiProfileFill } from "react-icons/ri";
import { BsQrCode } from "react-icons/bs";
import { FaPersonCircleQuestion, FaMoneyCheckDollar } from "react-icons/fa6";
import { TiEdit } from "react-icons/ti";
import "./DashboardLayout.css";
import { useContext, useState } from "react";
import vismo from "../assets/images/vismo.jpg";
import MobileBottomNav from "../components/shared/MobileBottomNav";
import { AuthContext } from "../providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [sidebarHidden, setSidebarHidden] = useState(true);
  const navigate = useNavigate();
  const dasboardRoute = window.location.pathname;
  const topMenuItems = (
    <>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <MdDashboard />
            <span>Dashboard</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="add-images"
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <LuImagePlus />
            <span>Add Images</span>
          </div>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="all-cards"
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <FaAddressCard />
            <span>All Cards</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`edit-profile/${user?.uid}`}
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <RiProfileFill />
            <span>Edit Profile</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`education/${user?.uid}`}
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <FaUserGraduate />
            <span>Education</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`job-experiences/${user?.uid}`}
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <FaBriefcase />
            <span>Job Experience</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`edit-qr-code/${user?.uid}`}
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <BsQrCode />
            <span>QR Code</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`social-media/${user?.uid}`}
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <FaShareAltSquare />
            <span>Social Media</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="user-inquiries"
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <FaPersonCircleQuestion />
            <span>User Inquiry</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="themes"
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <TiEdit />
            <span>Themes</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="gallery"
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <FaImage />
            <span>Gallery</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="plans"
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <FaMoneyCheckDollar />
            <span>Plans</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="transactions"
          className={({ isActive }) => isActive && "topNavActive"}
        >
          <div className="flex items-center gap-2">
            <LuReceipt />
            <span>Transactions</span>
          </div>
        </NavLink>
      </li>
    </>
  );

  const handleSidebarToggle = () => {
    setSidebarHidden(!sidebarHidden);
  };

  if (dasboardRoute === "/dashboard") {
    return (
      <>
        {/* <!-- SIDEBAR --> */}
        <section id="sidebar" className={sidebarHidden ? "hidden" : ""}>
          <Link to="/" className="brand">
            <div className="flex items-center justify-center">
              <img src={logo} alt="Website Logo" className="w-40" />
            </div>
          </Link>
          <ul className="side-menu top ml-2">{topMenuItems}</ul>

          {/* <ul className="side-menu">
            <li>
              <a href="#">
                <i className="bx bxs-cog"></i>
                <span className="text">Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="logout">
                <i className="bx bxs-log-out-circle"></i>
                <span className="text">Logout</span>
              </a>
            </li>
          </ul> */}
        </section>
        {/* <!-- SIDEBAR --> */}

        {/* <!-- CONTENT --> */}
        <section id="content" className={sidebarHidden ? "expanded" : ""}>
          {/* <!-- NAVBAR --> */}
          <nav className="flex items-center justify-between z-10">
            <MdMenu
              className="bx bx-menu text-4xl md:text-2xl"
              onClick={handleSidebarToggle}
            />
            {/* <a href="#" className="nav-link">
              Categories
            </a>
            <form action="#">
              <div className="form-input">
                <input type="search" placeholder="Search..." />
                <button type="submit" className="search-btn">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden />
            <label htmlFor="switch-mode" className="switch-mode"></label>
            <a href="#" className="notification">
              <i className="bx bxs-bell"></i>
              <span className="num">8</span>
            </a> */}
            <a href="#" className="profile">
              <img src={vismo} />
            </a>
          </nav>
          {/* <!-- NAVBAR --> */}

          {/* <!-- MAIN --> */}
          <main>
            <div className="head-title">
              <div className="left">
                <h1>Dashboard</h1>
                <ul className="breadcrumb">
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                  </li>
                  <li>
                    <a className="active" href="#">
                      Home
                    </a>
                  </li>
                </ul>
              </div>
              <a href="#" className="btn-download">
                <i className="bx bxs-cloud-download"></i>
                <span className="text">Download PDF</span>
              </a>
            </div>

            <ul className="box-info">
              <li>
                <i className="bx bxs-calendar-check"></i>
                <span className="text">
                  <h3>1020</h3>
                  <p>New Order</p>
                </span>
              </li>
              <li>
                <i className="bx bxs-group"></i>
                <span className="text">
                  <h3>2834</h3>
                  <p>Visitors</p>
                </span>
              </li>
              <li>
                <i className="bx bxs-dollar-circle"></i>
                <span className="text">
                  <h3>$2543</h3>
                  <p>Total Sales</p>
                </span>
              </li>
            </ul>

            <div className="table-data">
              <div className="order">
                <div className="head">
                  <h3>Recent Orders</h3>
                  <i className="bx bx-search"></i>
                  <i className="bx bx-filter"></i>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Date Order</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="img/people.png" />
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span className="status completed">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="img/people.png" />
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span className="status pending">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="img/people.png" />
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span className="status process">Process</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="img/people.png" />
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span className="status pending">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="img/people.png" />
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span className="status completed">Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="todo">
                <div className="head">
                  <h3>Todos</h3>
                  <i className="bx bx-plus"></i>
                  <i className="bx bx-filter"></i>
                </div>
                <ul className="todo-list">
                  <li className="completed">
                    <p>Todo List</p>
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </li>
                  <li className="completed">
                    <p>Todo List</p>
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </li>
                  <li className="not-completed">
                    <p>Todo List</p>
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </li>
                  <li className="completed">
                    <p>Todo List</p>
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </li>
                  <li className="not-completed">
                    <p>Todo List</p>
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </li>
                </ul>
              </div>
            </div>
          </main>

          {/* <!-- MAIN --> */}
        </section>
        {/* <!-- CONTENT --> */}
        <MobileBottomNav />
      </>
    );
  }
  return (
    <>
      {/* <!-- SIDEBAR --> */}
      <section id="sidebar" className={sidebarHidden ? "hidden" : ""}>
        <Link to="/" className="brand">
          <div className="flex items-center justify-center">
            <img src={logo} alt="Website Logo" className="w-40" />
          </div>
        </Link>
        <ul className="side-menu top ml-2">{topMenuItems}</ul>

        {/* <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-cog"></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul> */}
      </section>
      {/* <!-- SIDEBAR --> */}

      {/* <!-- CONTENT --> */}
      <section id="content" className={sidebarHidden ? "expanded" : ""}>
        {/* <!-- NAVBAR --> */}
        <nav className="flex items-center justify-between">
          <MdMenu
            className="bx bx-menu text-4xl md:text-2xl"
            onClick={handleSidebarToggle}
          />
          {/* <a href="#" className="nav-link">
            Categories
          </a> */}
          {/* <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search"></i>
              </button>
            </div>
          </form> */}
          {/* <input type="checkbox" id="switch-mode" hidden /> */}
          {/* <label htmlFor="switch-mode" className="switch-mode"></label> */}
          {/* <a href="#" className="notification">
            <i className="bx bxs-bell"></i>
            <span className="num">8</span>
          </a> */}
          <a href="#" className="profile">
            <img src={vismo} />
          </a>
        </nav>
        {/* <!-- NAVBAR --> */}

        {/* <!-- MAIN --> */}

        <main>
          <Outlet />
        </main>
        {/* <!-- MAIN --> */}
      </section>
      {/* <!-- CONTENT --> */}
      <MobileBottomNav />
    </>
  );
};

export default DashboardLayout;
