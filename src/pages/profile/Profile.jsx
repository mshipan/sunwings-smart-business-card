import "./Profile.css";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/demo/vismo-1.jpeg";

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
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link to="https://web.whatsapp.com/" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/" target="_blank">
                <i className="fa-brands fa-twitter"></i>
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
                    <a href="javascript:void(0)">
                      <i className="demo_icon fa-solid fa-phone"></i>
                      +880-1737-300000
                    </a>
                  </li>
                  <li>
                    <Link to="https://mail.google.com/mail/" target="_blank">
                      <i className="demo_icon fa-regular fa-envelope"></i>
                      example0000@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.facebook.com/" target="_blank">
                      <i className="demo_icon fa-brands fa-facebook-f"></i>
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="https://web.whatsapp.com/" target="_blank">
                      <i className="demo_icon fa-brands fa-whatsapp"></i>
                      WhatsApp
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/" target="_blank">
                      <i className="demo_icon fa-brands fa-linkedin-in"></i>
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/" target="_blank">
                      <i className="demo_icon fa-brands fa-twitter"></i>Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/" target="_blank">
                      <i className="demo_icon fa-brands fa-instagram"></i>
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/" target="_blank">
                      <i className="demo_icon fa-brands fa-youtube"></i>YouTube
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.tiktok.com/" target="_blank">
                      <i className="demo_icon fa-brands fa-tiktok"></i>Tiktok
                    </Link>
                  </li>
                  <li>
                    <Link to="https://accounts.snapchat.com/" target="_blank">
                      <i className="demo_icon fa-brands fa-snapchat"></i>
                      Snapchat
                    </Link>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="demo_icon fa-solid fa-globe"></i>Website
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="demo_icon fa-solid fa-location-dot"></i>
                      Location
                    </a>
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
                  <img className="image-1" src="assets/images/demo/5.jpeg" />
                </a>
              </div>
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a href="assets/images/demo/6.jpeg" data-fancybox="gallery">
                  <img className="image-1" src="assets/images/demo/6.jpeg" />
                </a>
              </div>
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a href="assets/images/demo/7.jpeg" data-fancybox="gallery">
                  <img className="image-1" src="assets/images/demo/7.jpeg" />
                </a>
              </div>
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a
                  href="assets/images/demo-card/4.jpeg"
                  data-fancybox="gallery"
                >
                  <img
                    className="image-1"
                    src="assets/images/demo-card/4.jpeg"
                  />
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
                    <img src="assets/images/demo/vismo.jpeg" alt="" />
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
                      laboriosam exercitationem
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial_contain">
                    <img src="assets/images/demo/5.jpeg" alt="" />
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
                    <img src="assets/images/demo-card/5.jpeg" alt="" />
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
                <img src="assets/images/demo/5.jpeg" alt="" />
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
                <img src="assets/images/demo/6.jpeg" alt="" />
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
                <img src="assets/images/demo/7.jpeg" alt="" />
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
