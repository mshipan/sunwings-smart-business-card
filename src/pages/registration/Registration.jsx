import "./Registration.css";

const Registration = () => {

  return (
    <div>
      <div class="registration">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
              <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2 class="text_36 mb-3 text-white">প্রোফাইল তৈরি করুন</h2>
                <form>
                  <fieldset class="p-4">
                    <div class="form-card">
                      <label class="fieldlabels">Full Name: *</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                      />
                      <label class="fieldlabels">Email: *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                      <label class="fieldlabels">Alternet Email: *</label>
                      <input
                        type="email"
                        name="alternetEmail"
                        placeholder="Alternet Email Address"
                      />
                      <label class="fieldlabels">Contact No.: *</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Contact No."
                      />
                      <label class="fieldlabels">
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
                      class="next action-button"
                      value="Next"
                    />
                  </fieldset>
                  <fieldset class="p-4">
                    <div class="form-card">
                      <label class="fieldlabels">Address: *</label>
                      <input type="text" name="address" placeholder="Address" />
                      <label class="fieldlabels">Date Of Birth: *</label>
                      <input
                        type="date"
                        name="dob"
                        placeholder="Date Of Birth"
                      />
                      <label class="fieldlabels">Prefered Language: *</label>
                      <select name="preferedLanguage">
                        <option value="select one"></option>
                        <option value="bangla">Bangla</option>
                        <option value="english">English</option>
                      </select>
                      <label class="fieldlabels">Gender: *</label>
                      <select name="preferedLanguage">
                        <option value="select one"></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <label class="fieldlabels">Social Media: *</label>
                      <input
                        type="text"
                        name="socialMedia"
                        placeholder="Social Media"
                      />
                    </div>
                    <input
                      type="button"
                      name="next"
                      class="next action-button"
                      value="Next"
                    />
                    <input
                      type="button"
                      name="previous"
                      class="previous action-button-previous"
                      value="Previous"
                    />
                  </fieldset>
                  <fieldset class="p-4">
                    <div class="form-card">
                      <label class="fieldlabels">User Name: *</label>
                      <input
                        type="text"
                        name="userName"
                        placeholder="User Name eg. vismo123"
                      />
                      <label class="fieldlabels">Password: *</label>
                      <input
                        type="password"
                        name="pwd"
                        placeholder="Password"
                      />
                      <label class="fieldlabels">Confirm Password: *</label>
                      <input
                        type="password"
                        name="cpwd"
                        placeholder="Confirm Password"
                      />
                      <label class="fieldlabels">Upload Your Photo:</label>
                      <input type="file" name="pic" accept="image/*" />
                      <div class="form-group">
                        <div class="custom-control custom-checkbox chackbox_input">
                          <input
                            type="checkbox"
                            name="agree"
                            class="custom-control-input"
                            id="agree_regi"
                            checked=""
                          />
                          <label class="custom-control-label" for="agree_regi">
                            I agree to the terms and conditions
                          </label>
                        </div>
                      </div>
                    </div>
                    <input
                      type="button"
                      name="next"
                      class="next action-button"
                      value="Submit"
                    />
                    <input
                      type="button"
                      name="previous"
                      class="previous action-button-previous"
                      value="Previous"
                    />
                  </fieldset>
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
