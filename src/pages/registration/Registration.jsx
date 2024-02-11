import { useContext, useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import logo from "../../assets/images/info_card_logo.png";
import Footer from "../../components/shared/Footer";
import { AuthContext } from "../../providers/AuthProvider";
import { FaXmark } from "react-icons/fa6";
import { BiSolidPlusCircle } from "react-icons/bi";
import countryData from "../../assets/country_dial_info.json";
import Swal from "sweetalert2";
import { useCreateAuserMutation } from "../../redux/features/allApis/usersApi";
import { BeatLoader } from "react-spinners";
import MobileBottomNav from "../../components/shared/MobileBottomNav";

const Registration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const img_host_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
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

  const [createAUser] = useCreateAuserMutation();

  const onSubmit = async (data) => {
    const fullNumber = data.countryCode + data.phone;
    data.phone = fullNumber;

    try {
      const formData = new FormData();
      formData.append("image", data.profileImage[0]);
      formData.append("key", img_host_token);
      setLoading(true);

      const response = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();
        const profileImageUrl = imgResponse?.data?.display_url;

        if (profileImageUrl) {
          data.profileImage = profileImageUrl;
        }

        // Register user with Firebase authentication
        createUser(data.email, data.pwd)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.fullName, data.profileImage, data.phone)
              .then(() => {
                const newUser = {
                  name: data.fullName,
                  email: data.email,
                  phone: data.phone,
                  whatsAppNo: data.whatsAppNo,
                  address: data.address,
                  dob: data.dob,
                  preferedLanguage: data.preferedLanguage,
                  gender: data.gender,
                  socialMedia: data.socialMedia,
                  userName: data.userName,
                  pwd: data.pwd,
                  profileImage: profileImageUrl,
                  agree: data.agree,
                };

                // Save user data to database
                createAUser(newUser)
                  .then((result) => {
                    if (result.data) {
                      // Success message
                      Swal.fire({
                        title: "Registration Successful!",
                        text: "Press OK to continue",
                        icon: "success",
                        confirmButtonText: "OK",
                      });
                      reset(); // Reset form fields
                      setLoading(false);
                      navigate("/");
                    } else {
                      // Handle database save failure
                      Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Error saving user data to database.",
                        text: "Please try again later.",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  })
                  .catch((error) => {
                    console.error("Error saving user data to database:", error);
                    // Handle database save failure
                    Swal.fire({
                      position: "center",
                      icon: "error",
                      title: "Error saving user data to database.",
                      text: "Please try again later.",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  });
              })
              .catch((error) => {
                console.error("Error updating user profile:", error);
                // Handle updating user profile failure
              });
          })
          .catch((error) => {
            console.error("Error registering user:", error);
            // Handle registering user failure
          });
      }
    } catch (error) {
      console.log(error);
      // Handle any errors
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error registering user.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const {
    fields: socialMediaFields,
    append: appendSocialMedia,
    remove: removeSocialMedia,
  } = useFieldArray({
    control,
    name: "socialMedia",
  });

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
                                  {errors.phone.type === "required" &&
                                    "This field is required."}
                                  {errors.phone.type === "pattern" &&
                                    "Invalid phone number format."}
                                </span>
                              )}
                            </span>
                            <br />
                            <span className="text-xs leading-3 text-red-500 italic">
                              Be carefull ! Double check your phone number
                              before submit.
                            </span>
                          </label>
                          <div className="flex items-center w-full">
                            <select
                              id="country"
                              name="countryCode"
                              {...register("countryCode", { required: true })}
                              className="countrySelect"
                            >
                              <option value="">Select Country</option>
                              {countryData.map((country) => (
                                <option
                                  key={country.isoCode}
                                  value={country.dialCode}
                                >
                                  {country.isoCode} ({country.dialCode})
                                </option>
                              ))}
                            </select>

                            <input
                              type="text"
                              name="phone"
                              {...register("phone", {
                                required: true,
                                pattern: {
                                  value:
                                    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/i,
                                },
                              })}
                              placeholder="Contact No."
                              className="countryInput"
                            />
                          </div>
                        </div>

                        {/* what's app number */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="whatsAppNo" className="fieldlabels">
                            What&apos;s App No.:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.whatsAppNo && (
                                <span className="text-red-600 text-sm italic">
                                  {errors.whatsAppNo.type === "required" &&
                                    "This field is required."}
                                  {errors.whatsAppNo.type === "pattern" &&
                                    `${errors.whatsAppNo.message}`}
                                </span>
                              )}
                            </span>
                          </label>

                          <input
                            type="text"
                            name="whatsAppNo"
                            {...register("whatsAppNo", {
                              required: true,
                              pattern: {
                                value: /^\d{10,}$/,
                                message: "Invalid WhatsApp number format.",
                              },
                            })}
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

                        {/* social media */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="socialMedia" className="fieldlabels">
                            Social Media Links:{" "}
                            <span className="text-red-600 mr-1">*</span>
                          </label>

                          {/* {errors.socialMedia && errors.socialMedia[0] && (
                            <span className="text-red-600 text-sm italic">
                              This field is required.
                            </span>
                          )} */}

                          {errors.socialMedia && errors.socialMedia[0] && (
                            <span className="text-red-600 text-sm italic">
                              {errors.socialMedia[0]?.link?.type ===
                                "required" && "This field is required."}
                            </span>
                          )}

                          {errors.socialMedia &&
                            errors.socialMedia[0]?.link?.type === "pattern" && (
                              <span className="text-red-600 text-sm italic">
                                Invalid URL format
                              </span>
                            )}

                          <div className="flex items-center gap-2 mb-1">
                            <input
                              type="text"
                              name={`socialMedia[0].link`}
                              placeholder={`SocialMedia 1`}
                              {...register(`socialMedia[0].link`, {
                                required: true,
                                pattern: {
                                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                                  message: "Invalid URL format",
                                },
                              })}
                              className="m-0"
                            />

                            {/* Button to remove the first social media input field (disabled initially) */}
                            <button
                              type="button"
                              onClick={() => removeSocialMedia(0)}
                              className="border border-[#131D4E] p-2 "
                              title="Remove"
                              disabled={socialMediaFields.length === 1} // Disable if there's only one social media field
                            >
                              <FaXmark className="text-[#131D4E] text-lg" />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 gap-1 form-control border-0 p-0">
                            {socialMediaFields.slice(1).map((field, index) => (
                              <div key={field.id}>
                                {errors.socialMedia &&
                                  errors.socialMedia[index] && (
                                    <span className="text-red-600 text-sm italic">
                                      This field is required.
                                    </span>
                                  )}

                                <div className="flex flex-col justify-between gap-3">
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="text"
                                      name={`socialMedia[${index + 1}].link`}
                                      placeholder={`SocialMedia ${index + 2}`}
                                      defaultValue={field.socialMedia}
                                      className="m-0"
                                      {...register(
                                        `socialMedia[${index + 1}].link`,
                                        {
                                          required: true,
                                          pattern: {
                                            value:
                                              /^(ftp|http|https):\/\/[^ "]+$/,
                                            message: "Invalid URL format",
                                          },
                                        }
                                      )}
                                    />

                                    <button
                                      type="button"
                                      onClick={() =>
                                        removeSocialMedia(index + 1)
                                      }
                                      className="border border-[#131D4E] p-2 "
                                      title="Remove"
                                    >
                                      <FaXmark className="text-[#131D4E] text-lg" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => appendSocialMedia({ link: "" })}
                          className="p-1 mt-3 bg-[#ff7c15] hover:bg-[#e47d2d] text-white"
                          title="Add more"
                        >
                          <BiSolidPlusCircle className="text-black text-lg inline-block" />{" "}
                          Add more
                        </button>
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
                                  {errors.pwd.type === "required" &&
                                    "This field is required"}
                                  {errors.pwd.type === "minLength" &&
                                    "Password must be at least 6 characters long"}
                                  {errors.pwd.type === "pattern" &&
                                    "Password must contain at least one uppercase, one lowercase letter, one number and one special character"}
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="password"
                            name="pwd"
                            {...register("pwd", {
                              required: true,
                              minLength: 6,
                              pattern:
                                /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
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
                                  {errors.cpwd.type === "required" &&
                                    "This field is required"}
                                  {errors.cpwd.type === "validate" &&
                                    errors.cpwd.message}
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="password"
                            name="cpwd"
                            {...register("cpwd", {
                              required: true,
                              validate: (value) =>
                                value === watch("pwd") ||
                                "Password do not match",
                            })}
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
                              <span className="text-[#ff7c15] hover:underline font-semibold">
                                <Link to="/">privacy policy</Link>
                              </span>
                              <span> and </span>
                              <span className="text-[#ff7c15] hover:underline font-semibold">
                                <Link to="/">terms and conditions.</Link>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="next action-button"
                        disabled={loading}
                      >
                        {loading ? (
                          <BeatLoader color="#ffff" size={15} />
                        ) : (
                          "Submit"
                        )}
                      </button>

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
        <MobileBottomNav />
      </div>
    </div>
  );
};

export default Registration;
