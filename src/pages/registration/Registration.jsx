import { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <div className="registration">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
              <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2 className="text_36 mb-3 text-white">প্রোফাইল তৈরি করুন</h2>
                <form>
                  {step === 1 && (
                    <fieldset className="p-4">
                      <div className="form-card">
                        <label className="fieldlabels">Full Name: *</label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                        />
                        <label className="fieldlabels">Email: *</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                        <label className="fieldlabels">Alternet Email: *</label>
                        <input
                          type="email"
                          name="alternetEmail"
                          placeholder="Alternet Email Address"
                        />
                        <label className="fieldlabels">Contact No.: *</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Contact No."
                        />
                        <label className="fieldlabels">
                          Alternate Contact No.: *
                        </label>
                        <input
                          type="text"
                          name="alternatePhone"
                          placeholder="Alternate Contact No."
                        />
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
                        <label className="fieldlabels">Address: *</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address"
                        />
                        <label className="fieldlabels">Date Of Birth: *</label>
                        <input
                          type="date"
                          name="dob"
                          placeholder="Date Of Birth"
                        />
                        <div className="flex flex-col">
                          <label className="fieldlabels">
                            Prefered Language: *
                          </label>
                          <select
                            name="preferedLanguage"
                            className="p-2 border"
                          >
                            <option value="" disabled>
                              Select One
                            </option>
                            <option value="bangla">Bangla</option>
                            <option value="english">English</option>
                          </select>
                        </div>

                        <div className="flex flex-col">
                          <label className="fieldlabels">Gender: *</label>
                          <select
                            name="preferedLanguage"
                            className="p-2 border"
                          >
                            <option value="" disabled>
                              Select One
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>

                        <label className="fieldlabels">Social Media: *</label>
                        <input
                          type="text"
                          name="socialMedia"
                          placeholder="Social Media"
                        />
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
                        <label className="fieldlabels">User Name: *</label>
                        <input
                          type="text"
                          name="userName"
                          placeholder="User Name eg. vismo123"
                        />
                        <label className="fieldlabels">Password: *</label>
                        <input
                          type="password"
                          name="pwd"
                          placeholder="Password"
                        />
                        <label className="fieldlabels">
                          Confirm Password: *
                        </label>
                        <input
                          type="password"
                          name="cpwd"
                          placeholder="Confirm Password"
                        />
                        <label className="fieldlabels">
                          Upload Your Photo:
                        </label>
                        <input type="file" name="pic" accept="image/*" />
                        <div className="form-group">
                          <div className="custom-control custom-checkbox chackbox_input">
                            <input
                              type="checkbox"
                              name="agree"
                              className="custom-control-input"
                              id="agree_regi"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="agree_regi"
                            >
                              I agree to the{" "}
                              <span className="text-yellow-500 hover:underline">
                                <Link to="/">privacy policy</Link>
                              </span>
                              <span> and </span>
                              <span className="text-yellow-500 hover:underline">
                                <Link to="/">terms and conditions.</Link>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <input
                        type="button"
                        name="next"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
