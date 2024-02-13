import { Link } from 'react-router-dom';
import './DemoProfile.css';
import { FaCamera } from "react-icons/fa";
import coverImg from "../../../assets/images/banner-1.webp";
import profileImg from "../../../assets/images/vismo.jpg";
import { FaSquareFacebook, FaSquareXTwitter, FaTiktok } from "react-icons/fa6";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { FaInstagram, FaSnapchat, FaGlobe, FaWhatsappSquare } from "react-icons/fa";

const DemoProfile = () => {
  return (
    <div>
      <div className="container">
        <div className="demo_profile_containe">
          <div className="row">
            <div className="profile_cover_img">
              <img src={coverImg} alt="Cover-image"/>
            </div>
            <div className="profile_img">
              <img src={profileImg} alt="" className="rounded mb-2 img-thumbnail"/>
              <div className="">
                <h2 className='text_ph'>Vismo Dev</h2>
                <p className='text_p'>Expart Web Designer</p>
              </div>
            </div>
            <div className="col-lg-3 mt-4">
              <div className="text_contain text-gray-600">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quaerat tempora eos! Voluptate alias atque est nulla minus iure, corrupti distinctio ipsam maxime? Dignissimos exercitationem unde voluptate, earum natus temporibus!</p>
              </div>
            </div>
            <div className="col-lg-9 mt-4">
              <div className="text_title">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est animi delectus quos distinctio, temporibus odio a laboriosam id magnam? Ratione quas sunt tenetur voluptate beatae? A quod nobis aut.</p>
              </div>
              <div className="text_contain">
                <h2 className='text_ph text-gray-600'>About Me</h2>
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
                          <td>What's App</td>
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
                    <h2 className='text_ph text-gray-600'>Job Experience</h2>
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0 text-gray-600">
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
                        <div className="job_experience contact_info mt-0 text-gray-600">
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
                    <h2 className='text_ph text-gray-600'>Education</h2>
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0 text-gray-600">
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
                        <div className="job_experience contact_info mt-0 text-gray-600">
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
              <div className="text_contain">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className='text_ph text-gray-600'>Social Media</h2>
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul className=''>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <FaSquareFacebook className='text-3xl text-blue-600' />
                                  <span>https://www.facebook.com</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <FaSquareFacebook className='text-3xl text-blue-600' />
                                  <span>https://www.facebook.com</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <FaSquareXTwitter className='text-3xl text-black' />
                                  <span>https://www.twitter.com</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <FaSquareXTwitter className='text-3xl text-black' />
                                  <span>https://www.twitter.com</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <IoLogoLinkedin className='text-3xl text-blue-700' />
                                  <span>https://www.linkedin.com</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <IoLogoLinkedin className='text-3xl text-blue-700' />
                                  <span>https://www.linkedin.com</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <FaInstagram className='text-3xl gradient-instagram' />
                                  <span>https://www.instagram.com</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base mt-2 text-gray-600">
                                  <FaInstagram className='text-3xl gradient-instagram' />
                                  <span>https://www.instagram.com</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <FaWhatsappSquare className='text-3xl text-green-700' />
                                  <span>https://www.whatsapp.com</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base mt-2 text-gray-600">
                                  <FaWhatsappSquare className='text-3xl text-green-700' />
                                  <span>https://www.whatsapp.com</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h2 className='text_ph'></h2>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <FaTiktok className='text-2xl text-black' />
                                  <span>https://www.Tiktok.com</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base mt-2 text-gray-600">
                                  <FaTiktok className='text-2xl text-black' />
                                  <span>https://www.Tiktok.com</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <FaSnapchat className='text-3xl text-yellow-400' />
                                  <span>https://www.snapchat.com</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base mt-2 text-gray-600">
                                  <FaSnapchat className='text-3xl text-yellow-400' />
                                  <span>https://www.snapchat.com</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <FaGlobe className='text-3xl text-black' />
                                  <span>https://www.website.com</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base mt-2 text-gray-600">
                                  <FaGlobe className='text-3xl text-black' />
                                  <span>https://www.website.com</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base text-gray-600">
                                  <IoLogoYoutube className='text-3xl text-red-600' />
                                  <span>https://www.youtube.com</span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <div className="flex items-center gap-2 text-base mt-2 text-gray-600">
                                  <IoLogoYoutube className='text-3xl text-red-600' />
                                  <span>https://www.youtube.com</span>
                                </div>
                              </Link>
                            </li>
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