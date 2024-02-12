import "./DemoProfile.css";
import coverImg from "../../../assets/images/banner-1.webp";
import profileImg from "../../../assets/images/vismo.jpg";

const DemoProfile = () => {
  return (
    <div>
      <div className="container">
        <div className="demo_profile_containe">
          <div className="row">
            <div className="profile_cover_img">
              <img src={coverImg} alt="Cover-image" />
            </div>
            <div className="profile_img">
              <img
                src={profileImg}
                alt=""
                className="rounded mb-2 img-thumbnail"
              />
              <div className="">
                <h2 className="text_ph">Vismo Dev</h2>
                <p className="text_p">Expart Web Designer</p>
              </div>
            </div>
            <div className="col-lg-3 mt-4">
              <div className="text_contain">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore quaerat tempora eos! Voluptate alias atque est nulla
                  minus iure, corrupti distinctio ipsam maxime? Dignissimos
                  exercitationem unde voluptate, earum natus temporibus!
                </p>
              </div>
            </div>
            <div className="col-lg-9 mt-4">
              <div className="text_title">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat est animi delectus quos distinctio, temporibus odio a
                  laboriosam id magnam? Ratione quas sunt tenetur voluptate
                  beatae? A quod nobis aut.
                </p>
              </div>
              <div className="text_contain">
                <h2 className="text_ph">About Me</h2>
                <div className="row mt-2">
                  <div className="col-md-6 table-responsive-sm">
                    <table className="table">
                      <tbody className="">
                        <tr>
                          <td>Full Name</td>
                          <td>: vismo dev</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>: vismodeb@gamil.com</td>
                        </tr>
                        <tr>
                          <td>Contact No</td>
                          <td>: 01737351549</td>
                        </tr>
                        <tr>
                          <td>What&apos;s App</td>
                          <td>: 01737351549</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td>: Dhaka, Bangladesh</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6 table-responsive-sm">
                    <table className="table">
                      <tbody className="">
                        <tr>
                          <td>Date Of Birth</td>
                          <td>: 12/06/2000</td>
                        </tr>
                        <tr>
                          <td>Language</td>
                          <td>: Bangla</td>
                        </tr>
                        <tr>
                          <td>User Name</td>
                          <td>: Vismo120</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>: Male</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="text_contain">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="text_ph">Job Experience</h2>
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>Company : SunWings Tours and Travels</li>
                            <li>Designation : Expert Web Designer</li>
                            <li>Duration : Jan 2023 - Jul 2024</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>Company : SunWings Tours and Travels</li>
                            <li>Designation : Expert Web Designer</li>
                            <li>Duration : Jan 2023 - Jul 2024</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h2 className="text_ph">Education</h2>
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>Certificate : Secoundary School Certificate</li>
                            <li>Institution : EUB</li>
                            <li>Passing Year : Jan 2023 - Jul 2024</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>Certificate : Secoundary School Certificate</li>
                            <li>Institution : EUB</li>
                            <li>Passing Year : Jan 2023 - Jul 2024</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoProfile;
