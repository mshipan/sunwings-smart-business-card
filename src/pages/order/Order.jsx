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
import visaCard from "../../assets/images/paymentGateway/visa.png";
import { FaShieldHalved } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import Select from "react-select";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import districts from "../../assets/districts.json";
import { useCreateOrderMutation } from "../../redux/features/allApis/orderApi";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useGetUserByUidQuery } from "../../redux/features/allApis/usersApi";
import { RxSlash } from "react-icons/rx";

const Order = () => {
  const { user } = useContext(AuthContext);
  const { data: singleUser } = useGetUserByUidQuery(user?.uid);

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
      value: "visa",
      label: (
        <div className="flex items-center gap-3 my-1">
          <img src={visaCard} alt="selectCard" className="w-8" />

          <h2 className="text-lg">ভিসা কার্ড</h2>
        </div>
      ),
    },
  ];

  const districtOptions = districts?.districts?.map((district) => ({
    value: district.name,
    label: district.bn_name,
    bnName: district.bn_name,
  }));

  const months = [
    { value: "", label: "Select One" },
    { value: "01", label: "জানুয়ারি" },
    { value: "02", label: "ফেব্রুয়ারি" },
    { value: "03", label: "মার্চ" },
    { value: "04", label: "এপ্রিল" },
    { value: "05", label: "মে" },
    { value: "06", label: "জুন" },
    { value: "07", label: "জুলাই" },
    { value: "08", label: "আগস্ট" },
    { value: "09", label: "সেপ্টেম্বর" },
    { value: "10", label: "অক্টোবর" },
    { value: "11", label: "নভেম্বর" },
    { value: "12", label: "ডিসেম্বর" },
  ];

  const years = [
    { value: "", label: "Select One" },
    { value: "20", label: "২০২০" },
    { value: "21", label: "২০২১" },
    { value: "22", label: "২০২২" },
    { value: "23", label: "২০২৩" },
    { value: "24", label: "২০২৪" },
    { value: "25", label: "২০২৫" },
    { value: "26", label: "২০২৬" },
    { value: "27", label: "২০২৭" },
    { value: "28", label: "২০২৮" },
    { value: "29", label: "২০২৯" },
    { value: "30", label: "২০৩০" },
    { value: "31", label: "২০৩১" },
    { value: "32", label: "২০৩২" },
    { value: "33", label: "২০৩৩" },
    { value: "34", label: "২০৩৪" },
    { value: "35", label: "২০৩৫" },
    { value: "36", label: "২০৩৬" },
    { value: "37", label: "২০৩৭" },
    { value: "38", label: "২০৩৮" },
    { value: "39", label: "২০৩৯" },
    { value: "40", label: "২০৪০" },
    { value: "41", label: "২০৪১" },
    { value: "42", label: "২০৪২" },
    { value: "43", label: "২০৪৩" },
    { value: "44", label: "২০৪৪" },
    { value: "45", label: "২০৪৫" },
    { value: "46", label: "২০৪৬" },
    { value: "47", label: "২০৪৭" },
    { value: "48", label: "২০৪৮" },
    { value: "49", label: "২০৪৯" },
    { value: "50", label: "২০৫০" },
  ];

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
                    {/* name */}
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        {...register("name", { required: true })}
                        defaultValue={singleUser ? singleUser?.name : ""}
                        aria-describedby="emailHelp"
                        placeholder="নাম লিখুন *"
                      />
                      <label htmlFor="name">আপনার সম্পূর্ন নাম লিখুন *</label>
                      {errors.name && (
                        <span className="text-red-600 text-sm italic">
                          ** Name is required. **
                        </span>
                      )}
                    </div>

                    {/* address */}
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="village"
                        name="address"
                        {...register("address", { required: true })}
                        aria-describedby="emailHelp"
                        placeholder="আপনার ঠিকানা লিখুন *"
                      />
                      <label htmlFor="village">আপনার ঠিকানা লিখুন *</label>
                      {errors.address && (
                        <span className="text-red-600 text-sm italic">
                          ** Address is required. **
                        </span>
                      )}
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="example12"
                        name="phone"
                        {...register("phone", { required: true })}
                        aria-describedby="emailHelp"
                        placeholder="আপনার মোবাইল নাম্বারটি লিখুন *"
                      />
                      {/* যে মোবাইল নাম্বার থেকে পেমেন্ট করেছেন সেটা লিখুন  */}
                      <label htmlFor="example12">
                        আপনার মোবাইল নাম্বার লিখুন *
                      </label>
                      {errors.phone && (
                        <span className="text-red-600 text-sm italic">
                          ** Phone is required. **
                        </span>
                      )}
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
                      {errors.district && (
                        <span className="text-red-600 text-sm italic">
                          ** জেলা নির্বাচন করা আবশ্যক **
                        </span>
                      )}
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
                      {errors.payment && (
                        <span className="text-red-600 text-sm italic">
                          ** পেমেন্ট গেটওয়ে নির্বাচন করা আবশ্যক **
                        </span>
                      )}
                    </div>

                    {selectedPaymentOption &&
                      selectedPaymentOption.value === "bkash" && (
                        <>
                          <div className="form-floating mb-3">
                            <table className="table">
                              <tbody>
                                <tr className="border-b-transparent">
                                  <td>
                                    <img
                                      src={bkash}
                                      alt="bkash"
                                      className="w-12"
                                    />
                                  </td>
                                  <td>
                                    <p>01622543390</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="example12"
                              name="bkashPhone"
                              {...register("bkashPhone", { required: true })}
                              aria-describedby="emailHelp"
                              placeholder="যে মোবাইল নাম্বার থেকে পেমেন্ট করেছেন সেটা লিখুন  *"
                            />

                            <label htmlFor="example12">
                              যে মোবাইল নাম্বার থেকে পেমেন্ট করেছেন সেটি লিখুন *
                            </label>
                            {errors.bkashPhone && (
                              <span className="text-red-600 text-sm italic">
                                ** Phone Number is required. **
                              </span>
                            )}
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="transactionId"
                              {...register("transactionId", { required: true })}
                              placeholder="ট্রানজেকশন আইডি"
                            />
                            <label htmlFor="village">ট্রানজেকশন আইডি *</label>
                            {errors.transactionId && (
                              <span className="text-red-600 text-sm italic">
                                ** Transaction Id is required. **
                              </span>
                            )}
                          </div>
                        </>
                      )}

                    {selectedPaymentOption &&
                      selectedPaymentOption.value === "nagad" && (
                        <>
                          <div className="form-floating mb-3">
                            <table className="table">
                              <tbody>
                                <tr className="border-b-transparent">
                                  <td>
                                    <img
                                      src={nagad}
                                      alt="nagad"
                                      className="w-12"
                                    />
                                  </td>
                                  <td>
                                    <p>01622543390</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="example12"
                              name="nagadPhone"
                              {...register("nagadPhone", { required: true })}
                              aria-describedby="emailHelp"
                              placeholder="যে মোবাইল নাম্বার থেকে পেমেন্ট করেছেন সেটা লিখুন  *"
                            />

                            <label htmlFor="example12">
                              যে মোবাইল নাম্বার থেকে পেমেন্ট করেছেন সেটি লিখুন *
                            </label>
                            {errors.nagadPhone && (
                              <span className="text-red-600 text-sm italic">
                                ** Phone Number is required. **
                              </span>
                            )}
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="transactionId"
                              {...register("transactionId", { required: true })}
                              placeholder="ট্রানজেকশন আইডি"
                            />
                            <label htmlFor="village">ট্রানজেকশন আইডি *</label>
                            {errors.transactionId && (
                              <span className="text-red-600 text-sm italic">
                                ** Transaction Id is required. **
                              </span>
                            )}
                          </div>
                        </>
                      )}

                    {selectedPaymentOption &&
                      selectedPaymentOption.value === "rocket" && (
                        <>
                          <div className="form-floating mb-3">
                            <table className="table">
                              <tbody>
                                <tr className="border-b-transparent">
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
                              </tbody>
                            </table>
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="number"
                              className="form-control"
                              id="example12"
                              name="rocketPhone"
                              {...register("rocketPhone", { required: true })}
                              aria-describedby="emailHelp"
                              placeholder="যে মোবাইল নাম্বার থেকে পেমেন্ট করেছেন সেটা লিখুন  *"
                            />

                            <label htmlFor="example12">
                              যে মোবাইল নাম্বার থেকে পেমেন্ট করেছেন সেটি লিখুন *
                            </label>
                            {errors.rocketPhone && (
                              <span className="text-red-600 text-sm italic">
                                ** Phone Number is required. **
                              </span>
                            )}
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="transactionId"
                              {...register("transactionId", { required: true })}
                              placeholder="ট্রানজেকশন আইডি"
                            />
                            <label htmlFor="village">ট্রানজেকশন আইডি *</label>
                            {errors.transactionId && (
                              <span className="text-red-600 text-sm italic">
                                ** Transaction Id is required. **
                              </span>
                            )}
                          </div>
                        </>
                      )}

                    {selectedPaymentOption &&
                      selectedPaymentOption.value === "visa" && (
                        <>
                          <div className="form-floating mb-3">
                            <table className="table">
                              <tbody>
                                <tr className="border-b-transparent">
                                  <td>
                                    <img
                                      src={visaCard}
                                      alt="visa card"
                                      className="w-8"
                                    />
                                  </td>
                                  <td>
                                    <p>1111 1111 1111 1111</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="visaCardHolderName"
                              {...register("visaCardHolderName", {
                                required: true,
                              })}
                              placeholder="কার্ড হোল্ডারের নাম *"
                            />
                            <label htmlFor="visaCardHolderName">
                              কার্ড হোল্ডারের নাম *
                            </label>
                            {errors.visaCardHolderName && (
                              <span className="text-red-600 text-sm italic">
                                ** Card Holder Name is required. **
                              </span>
                            )}
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="visaCardNumber"
                              {...register("visaCardNumber", {
                                required: true,
                                pattern: {
                                  value: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
                                  message: "Invalid Visa Card Number",
                                },
                              })}
                              placeholder="কার্ড নাম্বার *"
                            />
                            <label htmlFor="visaCardNumber">
                              কার্ড নাম্বার *
                            </label>
                            {errors.visaCardNumber &&
                              errors.visaCardNumber.type === "required" && (
                                <span className="text-red-600 text-sm italic">
                                  ** Card Number is required. **
                                </span>
                              )}
                            {errors.visaCardNumber &&
                              errors.visaCardNumber.type === "pattern" && (
                                <span className="text-red-600 text-sm italic">
                                  ** {errors.visaCardNumber.message} **
                                </span>
                              )}
                          </div>
                          <div className="flex flex-row items-end justify-between gap-2">
                            <div>
                              <label htmlFor="visaCardExpire" className="mb-2">
                                মেয়াদ (মাস/বছর) *
                              </label>
                              <div className="flex flex-row items-center gap-2 mb-3">
                                <div>
                                  <select
                                    name="visaCardExpireMonth"
                                    className="form-control"
                                    {...register("visaCardExpireMonth", {
                                      required: true,
                                    })}
                                    placeholder="মাস *"
                                  >
                                    {months?.map((month, i) => (
                                      <option
                                        key={i}
                                        value={month?.value}
                                        disabled={month.value === ""}
                                      >
                                        {month?.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <RxSlash />
                                <div>
                                  <select
                                    name="visaCardExpireYear"
                                    className="form-control"
                                    {...register("visaCardExpireYear", {
                                      required: true,
                                    })}
                                    placeholder="বছর *"
                                  >
                                    {years?.map((year, i) => (
                                      <option
                                        key={i}
                                        value={year?.value}
                                        disabled={year.value === ""}
                                      >
                                        {year?.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              {errors.visaCardExpireMonth ||
                                (errors.visaCardExpireYear && (
                                  <span className="text-red-600 text-sm italic">
                                    ** Expiration is required. **
                                  </span>
                                ))}
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="visaSecurityCode"
                                className="mb-2"
                              >
                                সিকিউরিটি কোড *
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="visaSecurityCode"
                                {...register("visaSecurityCode", {
                                  required: true,
                                })}
                                placeholder="সিকিউরিটি কোড *"
                              />

                              {errors.visaSecurityCode && (
                                <span className="text-red-600 text-sm italic">
                                  ** Security Code is required. **
                                </span>
                              )}
                            </div>
                          </div>
                        </>
                      )}

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        placeholder="স্পেশাল কোন দিক নির্দেশনা থাকলে এখানে লিখুন"
                        id="textarea"
                        name="specialNote"
                        {...register("specialNote", { required: true })}
                        rows="3"
                      ></textarea>
                      <label htmlFor="textarea">
                        স্পেশাল দিক নির্দেশনা থাকলে লিখুন
                      </label>
                      {errors.specialNote && (
                        <span className="text-red-600 text-sm italic">
                          ** Special Note Id is required. **
                        </span>
                      )}
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
                                className="form-check-input radio-primary"
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
                                className="form-check-input radio-primary"
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
                        {!shippingCost && (
                          <span className="text-red-600 text-sm italic">
                            ** Please select a shipping option to Place Order.
                            **
                          </span>
                        )}
                        <div className="totalAmount">
                          <div className="subtotalContain mt-1">
                            <p>Total</p>
                            <span>{calculateTotal()} ৳</span>
                          </div>
                        </div>
                      </div>
                      <button
                        disabled={shippingCost === 0 || !selectedOption?.price}
                        type="submit"
                        className="btn3 disabled:opacity-50"
                      >
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
