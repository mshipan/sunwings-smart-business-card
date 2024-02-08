import { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/info_card_logo.png";
import Footer from "../../components/shared/Footer";
const Registration = () => {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const nextStep = () => {
    handleSubmit((data) => {
      if (Object.keys(errors).length === 0) {
        setStep(step + 1);
      }
    })();
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-56" />
        </Link>
        <h3 className="text_36">
          দয়া করে শতভাগ নিশ্চিত হয়ে প্রোফাইল তৈরি করুন।
        </h3>
      </div>
      <div className="registration mt-0">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mb-2">
              <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2 className="text_26 mb-3 text-white">Registration Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {step === 1 && (
                    <fieldset className="p-4">
                      <div className="form-card">
                        {/* full name */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="fullName" className="fieldlabels">
                            Full Name:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.fullName && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>

                          <input
                            type="text"
                            name="fullName"
                            {...register("fullName", { required: true })}
                            placeholder="Full Name"
                          />
                        </div>
                        {/* email */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="email" className="fieldlabels">
                            Email: <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.email && (
                                <span className="text-red-600 text-sm italic">
                                  {errors.email.type === "required"
                                    ? "This field is required."
                                    : "Invalid email address"}
                                </span>
                              )}
                            </span>
                          </label>

                          <input
                            type="email"
                            name="email"
                            {...register("email", {
                              required: true,
                              pattern: /^\S+@\S+\.\S+$/,
                            })}
                            placeholder="Email Address"
                          />
                        </div>
                        {/* phone */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="phone" className="fieldlabels">
                            Contact No.:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.phone && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>

                          <input
                            type="text"
                            name="phone"
                            {...register("phone", { required: true })}
                            placeholder="Contact No."
                          />
                        </div>

                        {/* what's app number */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="whatsAppNo" className="fieldlabels">
                            What&apos;s App No.:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.whatsAppNo && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>

                          <input
                            type="text"
                            name="whatsAppNo"
                            {...register("whatsAppNo", { required: true })}
                            placeholder="What's App No."
                          />
                        </div>
                      </div>
                      <input
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next"
                        onClick={nextStep}
                      />
                    </fieldset>
                  )}

                  {step === 2 && (
                    <fieldset className="p-4">
                      <div className="form-card">
                        {/* address */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="address" className="fieldlabels">
                            Address:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.address && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="text"
                            name="address"
                            {...register("address", { required: true })}
                            placeholder="Address"
                          />
                        </div>
                        {/* date of birth */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="dob" className="fieldlabels">
                            Date Of Birth:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.dob && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="date"
                            name="dob"
                            {...register("dob", { required: true })}
                            placeholder="Date Of Birth"
                          />
                        </div>
                        {/* prefered language */}
                        <div className="form-control border-0 p-0 ">
                          <label
                            htmlFor="preferedLanguage"
                            className="fieldlabels"
                          >
                            Prefered Language:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.preferedLanguage && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <select
                            name="preferedLanguage"
                            {...register("preferedLanguage", {
                              required: true,
                            })}
                            className="p-2 border"
                          >
                            <option value="">Select One</option>
                            <option value="bangla">Bangla</option>
                            <option value="english">English</option>
                          </select>
                        </div>
                        {/* gender */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="gender" className="fieldlabels">
                            Gender: <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.gender && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <select
                            name="gender"
                            {...register("gender", {
                              required: true,
                            })}
                            className="p-2 border"
                          >
                            <option value="">Select One</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        {/* social media */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="socialMedia" className="fieldlabels">
                            Social Media:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.socialMedia && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="text"
                            name="socialMedia"
                            {...register("socialMedia", {
                              required: true,
                            })}
                            placeholder="Social Media"
                          />
                        </div>
                      </div>
                      <input
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next"
                        onClick={nextStep}
                      />
                      <input
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        value="Previous"
                        onClick={prevStep}
                      />
                    </fieldset>
                  )}

                  {step === 3 && (
                    <fieldset className="p-4">
                      <div className="form-card">
                        {/* user name */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="userName" className="fieldlabels">
                            User Name:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.userName && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="text"
                            name="userName"
                            {...register("userName", {
                              required: true,
                            })}
                            placeholder="User Name eg. vismo123"
                          />
                        </div>
                        {/* password */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="pwd" className="fieldlabels">
                            Password:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.pwd && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="password"
                            name="pwd"
                            {...register("pwd", {
                              required: true,
                            })}
                            placeholder="Password"
                          />
                        </div>
                        {/* confirm password */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="cpwd" className="fieldlabels">
                            Confirm Password:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.cpwd && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="password"
                            name="cpwd"
                            {...register("cpwd", { required: true })}
                            placeholder="Confirm Password"
                          />
                        </div>
                        {/* profile image */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="profileImage" className="fieldlabels">
                            Upload Your Photo:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.profileImage && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="file"
                            name="profileImage"
                            {...register("profileImage", { required: true })}
                            accept="image/*"
                          />
                        </div>
                        {/* checkbox of terms and condition and privacy policy */}
                        <div className="form-group">
                          {errors.agree && (
                            <span className="text-red-600 text-sm italic">
                              This field is required.
                            </span>
                          )}
                          <div className="custom-control custom-checkbox chackbox_input">
                            <input
                              type="checkbox"
                              name="agree"
                              {...register("agree", { required: true })}
                              className="custom-control-input"
                              id="agree_regi"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="agree_regi"
                            >
                              I agree to the{" "}
                              <span className="text-[#ff7c15] hover:underline">
                                <Link to="/">privacy policy</Link>
                              </span>
                              <span> and </span>
                              <span className="text-[#ff7c15] hover:underline">
                                <Link to="/">terms and conditions.</Link>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <input
                        type="submit"
                        className="next action-button"
                        value="Submit"
                      />
                      <input
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        value="Previous"
                        onClick={prevStep}
                      />
                    </fieldset>
                  )}
                </form>
                <div className="my-1">
                  <p className="text-lg">
                    Already have an account? Please{" "}
                    <span className="text-white underline">
                      <Link to="/login">Login.</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Registration;
