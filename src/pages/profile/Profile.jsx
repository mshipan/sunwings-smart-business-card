import "./Profile.css";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/demo/vismo-1.jpeg";
import img1 from "../../assets/images/demo/5.jpeg";
import img2 from "../../assets/images/demo/6.jpeg";
import img3 from "../../assets/images/demo/7.jpeg";
import img4 from "../../assets/images/demo-card/4.jpeg";
import img5 from "../../assets/images/demo/vismo.jpeg";
import img6 from "../../assets/images/demo/5.jpeg";
import img7 from "../../assets/images/demo-card/5.jpeg";
import img8 from "../../assets/images/demo/5.jpeg";
import img9 from "../../assets/images/demo/6.jpeg";
import img10 from "../../assets/images/demo/7.jpeg";

import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSnapchat,
  FaMapMarkerAlt,
  FaRegStar,
} from "react-icons/fa";

import { TbWorldWww } from "react-icons/tb";
const Profile = () => {
  return (
    <section className="profile_demo1_area">
      <div className="container">
        <div className="our-team">
          {/* <!-- profile picture --> */}
          <div className="picture">
            <img className="img-fluid" src={profileImage} />
          </div>

          {/* <!-- team content --> */}
          <div className="team-content">
            <h3 className="name">Vismo Dev</h3>
            <h4 className="title">Expert Web Designer</h4>
          </div>

          {/* <!-- star social icon --> */}
          <ul className="social">
            <li>
              <Link to="https://www.facebook.com/" target="_blank">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/" target="_blank">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link to="https://web.whatsapp.com/" target="_blank">
                <FaWhatsapp />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/" target="_blank">
                <FaTwitter />
              </Link>
            </li>
          </ul>
          {/* <!-- end social icon --> */}

          {/* <!-- about --> */}
          <div className="about_text">
            <h2 className="text_26">About</h2>
            <p>
              I&apos;m Front End Developer, Working with Frontend 3+ years
              experience, I Love to help others. My Great skills in HTML5, CSS3,
              Bootstrap 5, JavaScript, jQuery, php, MySQL and Laravel. My code
              fully Responsive, Cross Browser Supported and 100% W3C Validated.
              I would love to do creative ideas to implement in the real world.
            </p>
          </div>

          {/* <!-- start contact & skills --> */}
          <div className="row">
            <div className="col-lg-6">
              {/* <!-- Contact --> */}
              <div className="contact_info">
                <h2 className="text_26">Contact</h2>
                <ul className="contact">
                  <li>
                    <Link to="javascript:void(0)">
                      <div className="flex flex-row items-center">
                        <FaPhone className="demo_icon" />
                        +880-1737-300000
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://mail.google.com/mail/" target="_blank">
                      <div className="flex flex-row items-center">
                        <FaEnvelope className="demo_icon" />
                        example0000@gmail.com
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.facebook.com/" target="_blank">
                      <div className="flex flex-row items-center">
                        <FaFacebook className="demo_icon" />
                        Facebook
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://web.whatsapp.com/" target="_blank">
                      <div className="flex flex-row items-center">
                        <FaWhatsapp className="demo_icon" />
                        WhatsApp
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/" target="_blank">
                      <div className="flex flex-row items-center">
                        <FaLinkedin className="demo_icon" />
                        Linkedin
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/" target="_blank">
                      <div className="flex flex-row items-center">
                        <FaTwitter className="demo_icon" />
                        Twitter
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/" target="_blank">
                      <div className="flex flex-row items-center">
                        <FaInstagram className="demo_icon" />
                        Instagram
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/" target="_blank">
                      <div className="flex flex-row items-center">
                        <FaYoutube className="demo_icon" />
                        YouTube
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.tiktok.com/" target="_blank">
                      <div className="flex flex-row items-center">
                        <FaTiktok className="demo_icon" />
                        Tiktok
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://accounts.snapchat.com/" target="_blank">
                      <div className="flex flex-row items-center">
                        <FaSnapchat className="demo_icon" />
                        Snapchat
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://accounts.snapchat.com/" target="_blank">
                      <div className="flex flex-row items-center">
                        <TbWorldWww className="demo_icon" />
                        Website
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://accounts.snapchat.com/" target="_blank">
                      <div className="flex flex-row items-center">
                        <FaMapMarkerAlt className="demo_icon" />
                        Location
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              {/* <!-- skills --> */}
              <div className="skills">
                <h2 className="text_26">Skills</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>javaScript</li>
                  <li>Bootstrap</li>
                  <li>php</li>
                  <li>MySQL</li>
                  <li>Git</li>
                </ul>
              </div>
              {/* <!-- Job Experience --> */}
              <div className="job_experience contact_info">
                <h2 className="text_26">Job Experience</h2>
                <ul>
                  <li>Company : SunWings Tours and Travels</li>
                  <li>Designation : Expert Web Designer</li>
                  <li>Duration : Jan 2023 - Jul 2024</li>
                </ul>
              </div>
              {/* <!-- Job Experience --> */}
              <div className="job_experience contact_info">
                <ul>
                  <li>Company : ABC Company</li>
                  <li>Designation : Expert Web Designer</li>
                  <li>Duration : Jan 2021 - Jul 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- end contact & skills --> */}

          {/* <!-- start Gallery images --> */}
          <div className="gallery contact_info">
            <h2 className="text_26">Gallery Images</h2>
            {/* <!-- all card gallery --> */}
            <div className="all_card_gallery">
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a href="assets/images/demo/5.jpeg" data-fancybox="gallery">
                  <img className="image-1" src={img1} />
                </a>
              </div>
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a href="assets/images/demo/6.jpeg" data-fancybox="gallery">
                  <img className="image-1" src={img2} />
                </a>
              </div>
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a href="assets/images/demo/7.jpeg" data-fancybox="gallery">
                  <img className="image-1" src={img3} />
                </a>
              </div>
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a
                  href="assets/images/demo-card/4.jpeg"
                  data-fancybox="gallery"
                >
                  <img className="image-1" src={img4} />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- end Gallery images --> */}

          {/* <!-- start Testimonials --> */}
          <div className="testimonials skills">
            <h2 className="text_26 mb-5">Testimonials</h2>
            {/* <!-- Swiper --> */}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial_contain">
                    <img src={img5} alt="" />
                    <ul>
                      <li>
                        <FaRegStar />
                      </li>
                      <li>
                        <FaRegStar />
                      </li>
                      <li>
                        <FaRegStar />
                      </li>
                      <li>
                        <FaRegStar />
                      </li>
                      <li>
                        <FaRegStar />
                      </li>
                    </ul>
                    <h2>Testimonials</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Incidunt accusantium officia odit vel, sequi ut,
                      laboriosam exercitationem
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial_contain">
                    <img src={img6} alt="" />
                    <ul>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                    </ul>
                    <h2>Testimonials</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Incidunt accusantium officia odit vel, sequi ut,
                      laboriosam exercitationem quis et eaque
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial_contain">
                    <img src={img7} alt="" />
                    <ul>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                    </ul>
                    <h2>Testimonials</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Incidunt accusantium officia odit vel, sequi ut,
                      laboriosam exercitationem quis et eaque voluptatibus
                      nesciunt{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          {/* <!-- end Testimonials --> */}

          {/* <!-- start Products --> */}
          <div className="Products contact_info">
            <h2 className="text_26">Products</h2>

            {/* <!-- start products wraper --> */}
            <div className="products_wraper">
              {/* <!-- product single item --> */}
              <div className="product_single_item">
                <img src={img8} alt="" />
                <div className="product_contain">
                  <h2>Branded Card</h2>
                  <p>
                    You can buy now our Standard Digital Visiting Card from our
                    website. Please click the link below to order now
                  </p>
                  <div className="btn_product">
                    <a href="index.html">More Details</a>
                  </div>
                </div>
              </div>
              {/* <!-- product single item --> */}
              <div className="product_single_item">
                <img src={img9} alt="" />
                <div className="product_contain">
                  <h2>Standard Card</h2>
                  <p>
                    You can buy now our Standard Digital Visiting Card from our
                    website. Please click the link below to order now
                  </p>
                  <div className="btn_product">
                    <a href="index.html">More Details</a>
                  </div>
                </div>
              </div>
              {/* <!-- product single item --> */}
              <div className="product_single_item">
                <img src={img10} alt="" />
                <div className="product_contain">
                  <h2>Premium Card</h2>
                  <p>
                    You can buy now our Standard Digital Visiting Card from our
                    website. Please click the link below to order now
                  </p>
                  <div className="btn_product">
                    <a href="index.html">More Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end Products --> */}

          {/* <!-- start footre area --> */}
          <footer className="footer_area">
            <p>
              Copyright © 2024 |{" "}
              <a href="index.html">Sun Wings Smart Business Card</a>
            </p>
          </footer>
          {/* <!-- end footre area --> */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
