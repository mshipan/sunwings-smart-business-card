

const Profile = () => {
  return (
    <section class="profile_demo1_area">
    <div class="container">
      <div class="our-team">

        {/* <!-- profile picture --> */}
        <div class="picture">
          <img class="img-fluid" src="assets/images/demo/vismo-1.jpeg"/>
        </div>

        {/* <!-- team content --> */}
        <div class="team-content">
          <h3 class="name">Vismo Dev</h3>
          <h4 class="title">Expert Web Designer</h4>
        </div>

        {/* <!-- star social icon --> */}
        <ul class="social">
          <li>
            <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
          </li>
        </ul>
        {/* <!-- end social icon --> */}

        {/* <!-- about --> */}
        <div class="about_text">
          <h2 class="text_26">About</h2>
          <p>I'm Front End Developer, Working with Frontend 3+ years experience, I Love to help others. My Great skills in HTML5, CSS3, Bootstrap 5, JavaScript, jQuery, php, MySQL and Laravel. My code fully Responsive, Cross Browser Supported and 100% W3C Validated. I would love to do creative ideas to implement in the real world.</p>
        </div>
        
        {/* <!-- start contact & skills --> */}
        <div class="row">

          <div class="col-lg-6">
            {/* <!-- Contact --> */}
            <div class="contact_info">
              <h2 class="text_26">Contact</h2>
              <ul class="contact">
                <li>
                  <a href="javascript:void(0)"><i class="demo_icon fa-solid fa-phone"></i>+880-1737-300000</a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/" target="_blank"><i class="demo_icon fa-regular fa-envelope"></i>example0000@gmail.com</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank"><i class="demo_icon fa-brands fa-facebook-f"></i>Facebook</a>
                </li>
                <li>
                  <a href="https://web.whatsapp.com/" target="_blank"><i class="demo_icon fa-brands fa-whatsapp"></i>WhatsApp</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank"><i class="demo_icon fa-brands fa-linkedin-in"></i>Linkedin</a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank"><i class="demo_icon fa-brands fa-twitter"></i>Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank"><i class="demo_icon fa-brands fa-instagram"></i>Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank"><i class="demo_icon fa-brands fa-youtube"></i>YouTube</a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/" target="_blank"><i class="demo_icon fa-brands fa-tiktok"></i>Tiktok</a>
                </li>
                <li>
                  <a href="https://accounts.snapchat.com/" target="_blank"><i class="demo_icon fa-brands fa-snapchat"></i>Snapchat</a>
                </li>
                <li>
                  <a href="javascript:void(0)"><i class="demo_icon fa-solid fa-globe"></i></i>Website</a>
                </li>
                <li>
                  <a href="javascript:void(0)"><i class="demo_icon fa-solid fa-location-dot"></i>Location</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6">
            {/* <!-- skills --> */}
            <div class="skills">
              <h2 class="text_26">Skills</h2>
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
            <div class="job_experience contact_info">
              <h2 class="text_26">Job Experience</h2>
              <ul>
                <li>Company : SunWings Tours and Travels</li>
                <li>Designation : Expert Web Designer</li>
                <li>Duration : Jan 2023 - Jul 2024</li>
              </ul>
            </div>
            {/* <!-- Job Experience --> */}
            <div class="job_experience contact_info">
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
        <div class="gallery contact_info">
          <h2 class="text_26">Gallery Images</h2>
          {/* <!-- all card gallery --> */}
          <div class="all_card_gallery">

            {/* <!-- image wrapper --> */}
            <div class="image-wrapper">
              <a href="assets/images/demo/5.jpeg" data-fancybox="gallery">
                <img class="image-1" src="assets/images/demo/5.jpeg" />
              </a>
            </div>
            {/* <!-- image wrapper --> */}
            <div class="image-wrapper">
              <a href="assets/images/demo/6.jpeg" data-fancybox="gallery">
                <img class="image-1" src="assets/images/demo/6.jpeg" />
              </a>
            </div>
            {/* <!-- image wrapper --> */}
            <div class="image-wrapper">
              <a href="assets/images/demo/7.jpeg" data-fancybox="gallery">
                <img class="image-1" src="assets/images/demo/7.jpeg" />
              </a>
            </div>
            {/* <!-- image wrapper --> */}
            <div class="image-wrapper">
              <a href="assets/images/demo-card/4.jpeg" data-fancybox="gallery">
                <img class="image-1" src="assets/images/demo-card/4.jpeg" />
              </a>
            </div>

          </div>
        </div>
        {/* <!-- end Gallery images --> */}

        {/* <!-- start Testimonials --> */}
        <div class="testimonials skills">
          <h2 class="text_26 mb-5">Testimonials</h2>
          {/* <!-- Swiper --> */}
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial_contain">
                  <img src="assets/images/demo/vismo.jpeg" alt=""/>
                  <ul>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                  </ul>
                  <h2>Testimonials</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt accusantium officia odit vel, sequi ut, laboriosam exercitationem</p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testimonial_contain">
                  <img src="assets/images/demo/5.jpeg" alt=""/>
                  <ul>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                  </ul>
                  <h2>Testimonials</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt accusantium officia odit vel, sequi ut, laboriosam exercitationem quis et eaque</p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testimonial_contain">
                  <img src="assets/images/demo-card/5.jpeg" alt=""/>
                  <ul>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                  </ul>
                  <h2>Testimonials</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt accusantium officia odit vel, sequi ut, laboriosam exercitationem quis et eaque voluptatibus nesciunt </p>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        {/* <!-- end Testimonials --> */}

        {/* <!-- start Products --> */}
        <div class="Products contact_info">
          <h2 class="text_26">Products</h2>
          
          {/* <!-- start products wraper --> */}
          <div class="products_wraper">

            {/* <!-- product single item --> */}
            <div class="product_single_item">
              <img src="assets/images/demo/5.jpeg" alt=""/>
              <div class="product_contain">
                <h2>Branded Card</h2>
                <p>You can buy now our Standard Digital Visiting Card from our website. Please click the link below to order now</p>
                <div class="btn_product">
                  <a href="index.html">More Details</a>
                </div>
              </div>
            </div>
            {/* <!-- product single item --> */}
            <div class="product_single_item">
              <img src="assets/images/demo/6.jpeg" alt=""/>
              <div class="product_contain">
                <h2>Standard Card</h2>
                <p>You can buy now our Standard Digital Visiting Card from our website. Please click the link below to order now</p>
                <div class="btn_product">
                  <a href="index.html">More Details</a>
                </div>
              </div>
            </div>
            {/* <!-- product single item --> */}
            <div class="product_single_item">
              <img src="assets/images/demo/7.jpeg" alt=""/>
              <div class="product_contain">
                <h2>Premium Card</h2>
                <p>You can buy now our Standard Digital Visiting Card from our website. Please click the link below to order now</p>
                <div class="btn_product">
                  <a href="index.html">More Details</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <!-- end Products --> */}

        {/* <!-- start footre area --> */}
        <footer class="footer_area">
          <p>Copyright © 2024 | <a href="index.html">Sun Wings Smart Business Card</a></p>
        </footer>
        {/* <!-- end footre area --> */}

      </div>
    </div>
  </section>
  );
};

export default Profile;