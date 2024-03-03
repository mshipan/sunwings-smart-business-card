import './Theme3.css'
import profile_pik from '../../../../assets/images/theme3/profil.jpeg'
import banner from '../../../../assets/images/theme3/banner.jpeg'
import footer from '../../../../assets/images/theme3/footer.jpeg'
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Theme3 = () => {
  return (
    <div>
        
      <header className="header_area">
        <div className="container">
          <div className="header_bg_img">
            <div className="header_contain">
              <div className="header_img_left">
                <img src={profile_pik} alt=""/>
              </div>
              <div className="header_right_item">
                <h2 className="theme_text_40">MD SHOHEL RANA </h2>
                <h4 className="them_text_26">Chief Executive Officer</h4>
              <div className="header_con d-flex gap-2 mt-2">
                <h5 className="them_text_16">01793457630</h5>
                <a href="#" className="save_btn">Save</a>
              </div>
                <div className="header_social_icon">
                  <Link><FaFacebook className='theme3_icon icon_facebook'/></Link>
                  <Link><FaWhatsapp className='theme3_icon icon_whatsapp'/></Link>
                  <Link><FaLinkedin className='theme3_icon icon_linkedin'/></Link>
                  <Link><FaTwitter className='theme3_icon icon_twitter'/></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="contact_area">
        <div className="container">

          <div className="theme_chart">
            <ul>
              <li className='message_bg'><Link target="_blank" to="http://wa.me/+8801793457630">Whats App</Link></li>
              <li><Link>Messages</Link></li>
            </ul>
          </div>

          <div className="social_icon">
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.facebook.com/sunwingtourstravels/" target="_blank" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/@SunwingsToursTravels" target="_blank" className="icon"><i className="fa-brands fa-youtube"></i></a>
          </div>

          <div className="contact_info">
            <div className="info_icon_single mt-3">
              <i className="fa_icon fa-solid fa-user"></i>
              <h5 className="theme_text_18">01708117280</h5>
            </div>
            <div className="info_icon_single mt-3">
              <i className="fa_icon fa-solid fa-envelope"></i>
              <h5 className="theme_text_18">shoheltanvir31@gamil.com</h5>
            </div>
            <div className="info_icon_single mt-3">
              <i className="fa_icon fa-solid fa-globe"></i>
              <h5 className="theme_text_18">www.mdshohelrana.info</h5>
            </div>
            <div className="info_icon_single mt-3">
              <i className="fa_icon fa-solid fa-location-dot"></i>
              <h5 className="theme_text_18">Mirpur 10 Dhaka Bangladesh</h5>
            </div>
          </div>

          <div className="chart mt-3">
            <a className="save_btn what_btn" href="#">Oder New Card</a>
            <a className="them_text_16 what_btn" href="#">Login Admin</a>
          </div>
        </div>
      </section>

      <section className="contact_us">
          <div className="container">
          
          </div>
      </section>

      <footer className="footer_area">
        <div className="container">
          <div className="footer_bg_img">
              <h2 className="them_text_36">Product by: <br/> 64EAB & Sunwings</h2>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Theme3;