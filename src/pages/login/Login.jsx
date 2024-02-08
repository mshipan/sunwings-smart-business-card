

const Login = () => {
  return (
    <div>

      <div class="registration">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
              <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2 class="text_36 mb-3 text-white">লগইন করুন</h2>
                <form>
                  <fieldset class="p-4">
                    <div class="form-card">
                      <label class="fieldlabels">Email: *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                      <label class="fieldlabels">Contact No.: *</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Contact No."
                      />
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
                    </div>
                    <input
                      type="button"
                      name="next"
                      class="next action-button"
                      value="Submit"
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

export default Login;