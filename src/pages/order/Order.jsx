import "./Order.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/info_card_logo.png"
import Footer from "../../components/shared/Footer";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Order = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-56" />
        </Link>
      </div>
      <section class="enter_your_information">
        <div class="container">

          <div class="your_informatin_heading">
            <h2 class="text_36">দয়া করে শতভাগ নিশ্চিত হয়ে অর্ডার টি কনফার্ম করুন।</h2>
            <p class="text_20">অর্ডার টি সফলভাবে প্লেস হওয়ার পর আমাদের একজন প্রতিনিধি আপনার দেওয়া মোবাইল নম্বর অথবা হোয়াটসঅ্যাপ এর মাধ্যেমে আপনার সাথে যোগাযোগ করবে ও আপনার কার্ড ডিজাইন কনফার্ম করবে</p>
            <div class="secured_checkout">
              <div class="single_checkout_box">
                <i class="fa-solid fa-shield-halved"></i>
                সিকিউরড চেকআউট
              </div>
              <div class="single_checkout_box">
                <i class="fa-solid fa-headset"></i>
                ২৪/৭ ফ্রি সাপোর্ট
              </div>
            </div>
          </div>

          <div class="your_information_contack">
            <div class="row">
              <div class="col-lg-6">
                <h5 class="text_26 mb-4">আপনার তথ্য দিন</h5>
                <form>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="নাম লিখুন *"/>
                    <label for="name">আপনার সম্পূর্ন নাম লিখুন *</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="example12" aria-describedby="emailHelp" placeholder="মোবাইল নাম্বার লিখুন *"/>
                    <label for="example12">মোবাইল নাম্বার লিখুন *</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="number-whatsapp" aria-describedby="emailHelp" placeholder="আপনার সচল হোয়াটসঅ্যাপ নাম্বার টি লিখুন"/>
                    <label for="number-whatsapp">আপনার হোয়াটসঅ্যাপ নাম্বার লিখুন</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="village" aria-describedby="emailHelp" placeholder="বাসা নম্বর, গ্রাম/এলাকা, উপজেলা *"/>
                    <label for="village">বাসা নম্বর, গ্রাম/এলাকা, উপজেলা *</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option selected>Dhaka</option>
                      <option value="1">Bagerhat</option>
                      <option value="2">Bandarban</option>
                      <option value="3">Barguna</option>
                      <option value="3">Barishal</option>
                      <option value="3">Bhola</option>
                      <option value="3">Bogura</option>
                      <option value="3">Brahmanbaria</option>
                      <option value="3">Chandpur</option>
                      <option value="3">Chattogram</option>
                      <option value="3">Chuadanga</option>
                      <option value="3">Cox's Bazar</option>
                    </select>
                    <label for="floatingSelect">জেলা</label>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="স্পেশাল কোন দিক নির্দেশনা থাকলে এখানে লিখুন" id="textarea" rows="3"></textarea>
                    <label for="textarea">স্পেশাল দিক নির্দেশনা থাকলে লিখুন</label>
                  </div>
                </form>
              </div>
              <div class="col-lg-6 your_order_top">
                <h5 class="text_26 mb-4">আপনার অর্ডার</h5>
                <div class="your_order_contain">
                  <div class="your_order_item">
                    <img src="assets/images/demo-card/1.jpeg" alt=""/>
                    <div class="order_text">
                      <h2 class="text">প্রিমিয়াম কার্ড ডিজাইন</h2>
                      <span>৯৯৯ টাকা</span>
                    </div>
                  </div>
                  <div class="your_order_item">
                    <h2 class="text">Subtotal</h2>
                    <div class="order_text">
                      <h2 class="text">প্রিমিয়াম কার্ড ডিজাইন</h2>
                      <span>৯৯৯ টাকা</span>
                    </div>
                  </div>
                  <button type="submit" class="btn3">অর্ডার কনফার্ম করুন  ৳ 10,344.00</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div>
        <Footer />
      </div>
      <div class="mobile_bottom_nav d-md-none">
    <div class="bottom_manu">
      <div class="single_bottom_item">
        <Link to="/order">
          <FaCartShopping className="fa-brands"/>
          অর্ডার করুন
        </Link>
      </div>
      <div class="single_bottom_item">
        <Link to="javascript:void(0)">
          <MdCall className="fa-brands"/>
          কল করুন
        </Link>
      </div>
      <div class="single_bottom_item">
        <Link to="https://wa.me/+8801793457630">
          <FaWhatsapp className="fa-brands"/>
          হোয়াটসঅ্যাপ
        </Link>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Order;