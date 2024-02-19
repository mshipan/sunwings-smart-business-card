import "./Profile.css";
import { Link } from "react-router-dom";
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
import { useGetUserByUidQuery } from "../../redux/features/allApis/usersApi";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useGetAllEducationQuery } from "../../redux/features/allApis/educationApi";
import { useGetAllJobExperienceQuery } from "../../redux/features/allApis/jobExperienceApi";
import { Accordion } from "react-bootstrap";
const Profile = () => {
  const { user } = useContext(AuthContext);

  const { data: singleUser } = useGetUserByUidQuery(user?.uid);
  const { data: allEducations } = useGetAllEducationQuery();
  const { data: allExperiences } = useGetAllJobExperienceQuery();

  const singleUserEducations = allEducations?.filter(
    (edu) => edu.uid === singleUser?.uid
  );

  const singleUserExperiences = allExperiences?.filter(
    (exp) => exp.uid === singleUser?.uid
  );

  const formatDate = (date) => {
    if (!date) {
      return "Present";
    }
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "short" });
    const year = dateObj.getFullYear();

    // Determine the suffix for the day
    let suffix;
    if (day === 1 || day === 21 || day === 31) {
      suffix = "st";
    } else if (day === 2 || day === 22) {
      suffix = "nd";
    } else if (day === 3 || day === 23) {
      suffix = "rd";
    } else {
      suffix = "th";
    }

    return `${day}${suffix} ${month} ${year}`;
  };

  return (
    <section className="profile_demo1_area">
      <div className="container">
        <div className="our-team">
          {/* <!-- profile picture --> */}
          <div className="picture">
            <img
              src={singleUser?.profileImage}
              alt="User Photo"
              className="size-24 md:size-40 rounded-full"
            />
          </div>

          {/* <!-- team content --> */}
          <div className="team-content">
            <h3 className="name">{singleUser?.name}</h3>
            <h4 className="title">{singleUser?.designation}</h4>
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
            <p>{singleUser?.aboutMe}</p>
          </div>

          {/* <!-- start contact & skills --> */}
          <div className="row">
            <div className="col-lg-6">
              {/* <!-- Contact --> */}
              <div className="contact_info">
                <h2 className="text_26">Contact</h2>

                <div className="visiting_faq">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <FaPhone className="demo_icon" />
                        Phone 
                      </Accordion.Header>
                      <Accordion.Body>
                        +880 173 7351 549
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <FaEnvelope className="demo_icon" />
                        Email
                      </Accordion.Header>
                      <Accordion.Body>
                        example0000@gmail.com
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <FaFacebook className="demo_icon" />
                        Facebook
                      </Accordion.Header>
                      <Accordion.Body>
                        https://www.facebook.com
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <FaWhatsapp className="demo_icon" />
                        WhatsApp
                      </Accordion.Header>
                      <Accordion.Body>
                        https://www.whatsapp.com
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        <FaLinkedin className="demo_icon" />
                        Linkedin
                      </Accordion.Header>
                      <Accordion.Body>
                        https://www.linkedin.com
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        <FaTwitter className="demo_icon" />
                        Twitter
                      </Accordion.Header>
                      <Accordion.Body>
                        https://www.twitter.com
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        <FaInstagram className="demo_icon" />
                        Instagram
                      </Accordion.Header>
                      <Accordion.Body>
                        https://www.instagram.com
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        <FaYoutube className="demo_icon" />
                        YouTube
                      </Accordion.Header>
                      <Accordion.Body>
                        https://www.YouTube.com
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                        <FaTiktok className="demo_icon" />
                        Tiktok
                      </Accordion.Header>
                      <Accordion.Body>
                        https://www.Tiktok.com
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="9">
                      <Accordion.Header>
                        <FaSnapchat className="demo_icon" />
                        Snapchat
                      </Accordion.Header>
                      <Accordion.Body>
                        https://www.Snapchat.com
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="10">
                      <Accordion.Header>
                        <TbWorldWww className="demo_icon" />
                        Website
                      </Accordion.Header>
                      <Accordion.Body>
                        https://www.Website.com
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="11">
                      <Accordion.Header>
                        <FaMapMarkerAlt className="demo_icon" />
                        Location
                      </Accordion.Header>
                      <Accordion.Body>
                        https://www..com
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
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
              {/* <!-- Education --> */}
              {singleUserEducations && singleUserEducations.length > 0 && (
                <div className="job_experience contact_info">
                  <h2 className="text_26">Education</h2>
                  <div className="flex flex-col gap-4">
                    {singleUserEducations?.map((education) => (
                      <ul key={education._id}>
                        <li>Degree : {education?.degree}</li>
                        <li>Institution : {education?.institution}</li>
                        <li>Duration : {education?.duration} Years</li>
                        <li>Passing Year : {education?.passingYear} </li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}

              {/* <!-- Job Experience --> */}
              {singleUserExperiences && singleUserExperiences.length > 0 && (
                <div className="job_experience contact_info">
                  <h2 className="text_26">Job Experience</h2>
                  <div className="flex flex-col gap-4">
                    {singleUserExperiences?.map((experience) => (
                      <ul key={experience._id}>
                        <li>Company : {experience?.companyName}</li>
                        <li>Designation : {experience?.designation}</li>
                        <li>Experience : {experience?.experience} </li>
                        <li>
                          Duration : {formatDate(experience?.startDate)} -{" "}
                          {experience.endDate &&
                          /\d{4}-\d{2}-\d{2}/.test(experience.endDate)
                            ? formatDate(experience.endDate)
                            : "Present"}{" "}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}
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
          <footer className="footer_profile_area">
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
