import { useState } from "react";
import banner from "../../assets/images/banner-1.webp";
import user from "../../assets/images/vismo.jpg";
import { AiOutlineCamera } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [selectedCover, setSelectedCover] = useState(null);
  const [selectedProfileImg, setSelectedProfileImg] = useState(null);

  const handleCoverPhotoChange = (event) => {
    setSelectedCover(event.target.files[0]);
  };
  const handleProfilPhotoChange = (event) => {
    setSelectedProfileImg(event.target.files[0]);
  };
  console.log(selectedCover);
  console.log(selectedProfileImg);
  return (
    <div className="h-screen">
      <div>
        <div>
          <div className="relative">
            <img src={banner} alt="Cover Photo" className="h-48 md:h-72" />
            {/* <div className="absolute bottom-1 right-1">
              <label
                htmlFor="fileInput"
                className="flex items-center justify-center cursor-pointer bg-gray-300 p-2 md:px-3 md:py-2"
              >
                <AiOutlineCamera className="md:mr-2" />
                <span className="hidden md:block">Edit Cover Photo</span>
              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="hidden"
                onChange={handleCoverPhotoChange}
              />
            </div> */}
            <div className="absolute left-0 -bottom-14 md:-bottom-20 px-3 md:px-8 z-10">
              <div className="p-2 bg-gray-500 rounded-full">
                <img
                  src={user}
                  alt="User Photo"
                  className="size-24 md:size-40 rounded-full"
                />
                {/* <div className="absolute bottom-4 right-4">
                  <label
                    htmlFor="filePInput"
                    className="flex items-center justify-center cursor-pointer bg-gray-300 p-3 rounded-full"
                  >
                    <AiOutlineCamera size={20} />
                  </label>
                  <input
                    type="file"
                    id="filePInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilPhotoChange}
                  />
                </div> */}
              </div>
            </div>
            <div className="absolute pl-36 md:pl-56 pr-8 py-2 md:py-3 w-full flex items-end justify-between z-0">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">Vismo Dev</h1>
                <h2>Designation</h2>
              </div>
              <div>
                <button className="bg-gray-500 px-3 py-2">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 mx-4 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About Me */}
          <div className="border-2 border-gray-500 w-full h-fit rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              About Me:
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              quibusdam voluptatem repellat officiis minima asperiores incidunt
              doloremque temporibus obcaecati odio!
            </p>
          </div>
          {/* Info Table */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4 md:col-span-2">
            <h1 className="underline underline-offset-4 leading-3">
              Basic Info:
            </h1>
            <div className="w-[99%] md:w-full overflow-x-auto">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Full Name</td>
                    <td>: Vismo Dev</td>
                    <td>Phone</td>
                    <td>: 01622543390</td>
                  </tr>
                  <tr>
                    <td>Father Name</td>
                    <td>: Vismo Dev</td>
                    <td>Alternate Phone</td>
                    <td>: 01622543390</td>
                  </tr>
                  <tr>
                    <td>Mother Name</td>
                    <td>: Vismo Dev</td>
                    <td>Email</td>
                    <td>: vismo@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Date of Birth</td>
                    <td>: 01/10/2024</td>
                    <td>Alternate Email</td>
                    <td>: vismo@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Present Address</td>
                    <td>: Mirpur 1, Dhaka 1207, Bangladesh</td>
                    <td>Permanent Address</td>
                    <td>: Mirpur 1, Dhaka 1207, Bangladesh</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>: Bangla</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* job experience */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Job Experiences:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="bg-white p-2 rounded-md flex flex-col gap-1">
                <h1 className="text-sm">Company: Sunwings Tours and Travels</h1>
                <h1 className="text-sm">Designation: Web Developer</h1>
                <h1 className="text-sm">Experience: 2 Years</h1>
                <h1 className="text-sm">Duration: Feb 2024 - Present</h1>
              </div>

              <div className="bg-white p-2 rounded-md flex flex-col gap-1">
                <h1 className="text-sm">Company: Sunwings Tours and Travels</h1>
                <h1 className="text-sm">Designation: Web Developer</h1>
                <h1 className="text-sm">Experience: 2 Years</h1>
                <h1 className="text-sm">Duration: Feb 2024 - Present</h1>
              </div>
            </div>
          </div>
          {/* Education */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Education:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="bg-white p-2 rounded-md flex flex-col gap-1">
                <h1 className="text-sm">
                  Degree: BSc in Computer Science & Engineering
                </h1>
                <h1 className="text-sm">
                  Institution: Daffodil International University
                </h1>
                <h1 className="text-sm">Duration: 4 Years</h1>
                <h1 className="text-sm">Passing Year: Apr 2019</h1>
              </div>
              <div className="bg-white p-2 rounded-md flex flex-col gap-1">
                <h1 className="text-sm">
                  Degree: BSc in Computer Science & Engineering
                </h1>
                <h1 className="text-sm">
                  Institution: Daffodil International University
                </h1>
                <h1 className="text-sm">Duration: 4 Years</h1>
                <h1 className="text-sm">Passing Year: Apr 2019</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* facebook */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Facebook Profiles:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaFacebook className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.facebook...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaFacebook className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.facebook...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaFacebook className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.facebook...</Link>
                </div>
              </div>
            </div>
          </div>
          {/* twitter */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Twitter Profiles:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaTwitter className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.twitter...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaTwitter className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.twitter...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaTwitter className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.twitter...</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Instagram */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Instagram Profiles:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaInstagram className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.twitter...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaInstagram className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.twitter...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaInstagram className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.twitter...</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
