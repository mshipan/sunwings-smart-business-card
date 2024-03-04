import "./Order.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/info_card_logo.png";
import Footer from "../../components/shared/Footer";
import MobileBottomNav from "../../components/shared/MobileBottomNav";
import standardCard from "../../assets/images/demo-card/normal/1.jpeg";
import premiumCard from "../../assets/images/demo-card/1.jpeg";
import officeCard from "../../assets/images/offices-id/1.jpeg";
import bkash from "../../assets/images/paymentGateway/bkash.svg";
import nagad from "../../assets/images/paymentGateway/Nagad.svg";
import rocket from "../../assets/images/paymentGateway/rocket.svg";
import cardImg from "../../assets/images/paymentGateway/card.png";
import { FaShieldHalved } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import Select from "react-select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import districts from "../../assets/districts.json";
import { useCreateOrderMutation } from "../../redux/features/allApis/orderApi";
import Swal from "sweetalert2";

const Order = () => {
  const cardOptions = [
    {
      value: "standardCard",
      title: "স্ট্যান্ডার্ড সান উইংস স্মার্ট বিজনেস কার্ড ডিজাইন",
      label: (
        <div className="your_order_item">
          <img src={standardCard} alt="selectCard" />
          <div className="order_text">
            <h2 className="text">
              স্ট্যান্ডার্ড সান উইংস স্মার্ট বিজনেস কার্ড ডিজাইন
            </h2>
            <span>1250.00 ৳</span>
          </div>
        </div>
      ),
      price: 1250,
    },
    {
      value: "premiumCard",
      title: "প্রিমিয়াম সান উইংস স্মার্ট বিজনেস কার্ড ডিজাইন",
      label: (
        <div className="your_order_item">
          <img src={premiumCard} alt="selectCard" />
          <div className="order_text">
            <h2 className="text">
              প্রিমিয়াম সান উইংস স্মার্ট বিজনেস কার্ড ডিজাইন
            </h2>
            <span>1699.00 ৳</span>
          </div>
        </div>
      ),
      price: 1699,
    },
    {
      value: "officeIdCard",
      title: "প্রিমিয়াম স্মার্ট অফিস আইডি কার্ড",
      label: (
        <div className="your_order_item">
          <img src={officeCard} alt="selectCard" />
          <div className="order_text">
            <h2 className="text">প্রিমিয়াম স্মার্ট অফিস আইডি কার্ড</h2>
            <span>99.00 ৳</span>
          </div>
        </div>
      ),
      price: 99,
    },
  ];

  const paymentGateway = [
    {
      value: "cashOnDelivary",
      label: (
        <div className="my-2">
          <p>Cash On Delivary</p>
        </div>
      ),
    },
    {
      value: "bkash",
      label: (
        <div className="flex items-center gap-3 my-2">
          <img src={bkash} alt="selectCard" className="w-12" />

          <h2 className="text-lg">বিকাশ</h2>
        </div>
      ),
    },
    {
      value: "nagad",
      label: (
        <div className="flex items-center gap-3 my-2">
          <img src={nagad} alt="selectCard" className="w-12" />

          <h2 className="text-lg">নগদ</h2>
        </div>
      ),
    },
    {
      value: "rocket",
      label: (
        <div className="flex items-center gap-3 my-1">
          <img src={rocket} alt="selectCard" className="w-12" />

          <h2 className="text-lg">রকেট</h2>
        </div>
      ),
    },
    {
      value: "card",
      label: (
        <div className="flex items-center gap-3 my-1">
          <img src={cardImg} alt="selectCard" className="w-12" />

          <h2 className="text-lg">কার্ড</h2>
        </div>
      ),
    },
  ];

  const districtOptions = districts?.districts?.map((district) => ({
    value: district.name,
    label: district.bn_name,
    bnName: district.bn_name,
  }));

  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [selectedDistrictOption, setSelectedDistrictOption] = useState(null);
  const [shippingCost, setShippingCost] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleShippingChange = (cost) => {
    setShippingCost(cost);
  };

  const calculateTotal = () => {
    if (!selectedOption) return 0; // Return 0 if no card is selected
    return selectedOption.price + shippingCost;
  };

  const [createOrder] = useCreateOrderMutation();

  const onSubmit = async (data) => {
    data.payment = selectedPaymentOption?.value;
    data.cardTitle = selectedOption?.title;
    data.district = selectedDistrictOption?.value;
    data.cardCategory = selectedOption?.value;
    data.totalPrice = calculateTotal();
    try {
      setLoading(true);
      const result = await createOrder(data);
      if (result.data) {
        Swal.fire({
          title: "Your Order Placed Successfully!",
          html: `<div className='flex flex-col items-center gap-4'><p className='text-black'>For Inquiry Please Call</p> <button className='py-5 px-1 bg-blue-600 text-white'>01622543390</button></div>`,
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        setLoading(false);
      } else {
        Swal.fire({
          title: "Failed to Place Order.",
          text: "Press OK to continue",
          icon: "error",
          confirmButtonText: "OK",
        });
        setLoading(false);
      }
    } catch (error) {
      Swal.fire({
        title: "An unexpected error occurred",
        text: `${error}`,
        icon: "error",
        confirmButtonText: "OK",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-56" />
        </Link>
      </div>
      <section className="enter_your_information">
        <div className="container">
          <div className="your_informatin_heading">
            <h2 className="text_36">
              দয়া করে শতভাগ নিশ্চিত হয়ে অর্ডার টি কনফার্ম করুন।
            </h2>
            <p className="text_20">
              অর্ডার টি সফলভাবে প্লেস হওয়ার পর আমাদের একজন প্রতিনিধি আপনার দেওয়া
              মোবাইল নম্বর অথবা হোয়াটসঅ্যাপ এর মাধ্যেমে আপনার সাথে যোগাযোগ করবে
              ও আপনার কার্ড ডিজাইন কনফার্ম করবে
            </p>
            <div className="secured_checkout">
              <div className="single_checkout_box flex items-center gap-2">
                <FaShieldHalved />
                সিকিউরড চেকআউট
              </div>
              <div className="single_checkout_box  flex items-center gap-2">
                <FaHeadset />
                ২৪/৭ ফ্রি সাপোর্ট
              </div>
            </div>
          </div>

          <div className="your_information_contack">
            <div className="row w-full">
              <div className="col-lg-12 w-full">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col md:flex-row gap-4 md:gap-8"
                >
                  <div className="col-lg-6">
                    <h5 className="text_26 mb-4">আপনার তথ্য দিন</h5>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        {...register("name")}
                        aria-describedby="emailHelp"
                        placeholder="নাম লিখুন *"
                      />
                      <label htmlFor="name">আপনার সম্পূর্ন নাম লিখুন *</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="example12"
                        name="phone"
                        {...register("phone")}
                        aria-describedby="emailHelp"
                        placeholder="যে মোবাইল নাম্বার থেকে পেমেন্ট করেছেন সেটা লিখুন *"
                      />
                      <label htmlFor="example12">
                        যে মোবাইল নাম্বার থেকে পেমেন্ট করেছেন সেটা লিখুন *
                      </label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="village"
                        name="address"
                        {...register("address")}
                        aria-describedby="emailHelp"
                        placeholder="আপনার ঠিকানা লিখুন *"
                      />
                      <label htmlFor="village">আপনার ঠিকানা লিখুন *</label>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="floatingSelect">জেলা</label>
                      <Select
                        className="z-30"
                        id="floatingSelect"
                        name="district"
                        defaultValue={districtOptions[0]}
                        onChange={setSelectedDistrictOption}
                        options={districtOptions}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="floatingSelect">পেমেন্ট গেটওয়ে</label>
                      <Select
                        className="z-20"
                        id="floatingSelect"
                        name="payment"
                        defaultValue={paymentGateway[0]}
                        onChange={setSelectedPaymentOption}
                        options={paymentGateway}
                        isSearchable={false}
                      />
                    </div>

                    {selectedPaymentOption &&
                      (selectedPaymentOption.value === "bkash" ||
                        selectedPaymentOption.value === "nagad" ||
                        selectedPaymentOption.value === "rocket") && (
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="transactionId"
                            {...register("transactionId")}
                            placeholder="ট্রানজেকশন আইডি"
                          />
                          <label htmlFor="village">ট্রানজেকশন আইডি</label>
                        </div>
                      )}

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        placeholder="স্পেশাল কোন দিক নির্দেশনা থাকলে এখানে লিখুন"
                        id="textarea"
                        name="specialNote"
                        {...register("specialNote")}
                        rows="3"
                      ></textarea>
                      <label htmlFor="textarea">
                        স্পেশাল দিক নির্দেশনা থাকলে লিখুন
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <h5 className="text_26 mb-4">আপনার কার্ডটি সিলেক্ট করুন</h5>
                    <div className="flex flex-col gap-4">
                      <Select
                        defaultValue={cardOptions[0]}
                        onChange={setSelectedOption}
                        options={cardOptions}
                        isSearchable={false}
                      />
                      <div className="flex flex-col gap-3">
                        <div>
                          <h1 className="text_26 mb-0">পেমেন্ট ডিটেইলস</h1>
                          <p className="italic">
                            <small className="text-xs">
                              পেমেন্ট করার জন্য নিন্মক্ত তথ্য ব্যবহার করুন।
                            </small>
                          </p>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <img src={bkash} alt="bkash" className="w-12" />
                              </td>
                              <td>
                                <p>01622543390</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img src={nagad} alt="nagad" className="w-12" />
                              </td>
                              <td>
                                <p>01622543390</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src={rocket}
                                  alt="rocket"
                                  className="w-10"
                                />
                              </td>
                              <td>
                                <p>01622543390</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src={cardImg}
                                  alt="rocket"
                                  className="w-10"
                                />
                              </td>
                              <td>
                                <p>4111 1111 1111 1111</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="subtotalItem mb-3">
                        <div className="subtotalContain">
                          <p>Subtotal</p>
                          <div className="order_text ">
                            <span>
                              {selectedOption?.price
                                ? selectedOption?.price
                                : 0}
                              ৳
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start justify-between">
                          <p>Shipping</p>
                          <div>
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                onChange={() => handleShippingChange(120)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                <span>ঢাকার বাহিরে: </span>
                                <span>120.00 ৳</span>
                              </label>
                            </div>
                            <div className="form-check mt-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                onChange={() => handleShippingChange(60)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
                              >
                                <span>ঢাকার ভিতরে:</span>
                                <span>60.00 ৳</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="totalAmount">
                          <div className="subtotalContain mt-1">
                            <p>Total</p>
                            <span>{calculateTotal()} ৳</span>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn3">
                        {loading ? (
                          <span>Loading...</span>
                        ) : (
                          <span>অর্ডার প্লেস করুন ৳ {calculateTotal()}</span>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
      <MobileBottomNav />
    </div>
  );
};

export default Order;
