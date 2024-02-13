// import { useState } from "react";
import { useState } from "react";
import banner from "../../assets/images/banner-1.webp";
import user from "../../assets/images/vismo.jpg";
import { AiOutlineCamera } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaSnapchat,
  FaGlobe,
  FaEye,
  FaRegTrashAlt,
} from "react-icons/fa";
import { BiSolidPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { FaXmark } from "react-icons/fa6";
import { useFieldArray, useForm } from "react-hook-form";

const EditProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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

  const handlePhoneChange = (value) => {
    setPhone1(value);
  };
  const handlePhoneChange2 = (value) => {
    setPhone2(value);
  };
  const {
    fields: facebook,
    append: appendFacebook,
    remove: removeFacebook,
  } = useFieldArray({
    control,
    name: "facebook",
  });
  const {
    fields: twitter,
    append: appendTwitter,
    remove: removeTwitter,
  } = useFieldArray({
    control,
    name: "twitter",
  });
  const {
    fields: instagram,
    append: appendInstagram,
    remove: removeInstagram,
  } = useFieldArray({
    control,
    name: "instagram",
  });
  const {
    fields: whatsapp,
    append: appendWhatsapp,
    remove: removeWhatsapp,
  } = useFieldArray({
    control,
    name: "whatsapp",
  });
  const {
    fields: linkedin,
    append: appendLinkedin,
    remove: removeLinkedin,
  } = useFieldArray({
    control,
    name: "linkedin",
  });
  const {
    fields: youtube,
    append: appendYoutube,
    remove: removeYoutube,
  } = useFieldArray({
    control,
    name: "youtube",
  });
  const {
    fields: tiktok,
    append: appendTiktok,
    remove: removeTiktok,
  } = useFieldArray({
    control,
    name: "tiktok",
  });
  const {
    fields: snapchat,
    append: appendSnapchat,
    remove: removeSnapchat,
  } = useFieldArray({
    control,
    name: "snapchat",
  });
  const {
    fields: website,
    append: appendWebsite,
    remove: removeWebsite,
  } = useFieldArray({
    control,
    name: "website",
  });
  return (
    <div className="h-screen">
      <div>
        <div>
          <div className="relative">
            <img src={banner} alt="Cover Photo" className="h-48 md:h-72" />

            <div className="absolute left-0 -bottom-14 md:-bottom-20 px-3 md:px-8 z-10">
              <div className="p-2 bg-gray-500 rounded-full">
                <img
                  src={user}
                  alt="User Photo"
                  className="size-24 md:size-40 rounded-full"
                />
              </div>
            </div>
            <div className="absolute pl-36 md:pl-56 pr-8 py-2 md:py-3 w-full flex items-end justify-between z-0">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">Vismo Dev</h1>
                <h2>Designation</h2>
              </div>
              <div>
                <button onClick={openModal} className="bg-gray-500 px-3 py-2">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 mx-4 flex flex-col gap-4">
        {/* about me and basic info */}
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
        {/* experience and education */}
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
        {/* Social Media Profiles */}
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
                  <Link to="">https://www.instagram...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaInstagram className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.instagram...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaInstagram className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.instagram...</Link>
                </div>
              </div>
            </div>
          </div>
          {/* What's App */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              What&apos;sApp Profiles:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaWhatsapp className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.whatsapp...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaWhatsapp className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.whatsapp...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaWhatsapp className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.whatsapp...</Link>
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Linkedin Profiles:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaLinkedin className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.linkedin...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaLinkedin className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.linkedin...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaLinkedin className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.linkedin...</Link>
                </div>
              </div>
            </div>
          </div>
          {/* YouTube */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Youtube Profiles:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaYoutube className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.youtube...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaYoutube className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.youtube...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaYoutube className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.youtube...</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Tiktok */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Tiktok Profiles:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaTiktok className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.tiktok...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaTiktok className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.tiktok...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaTiktok className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.tiktok...</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Snapchat */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Snapchat Profiles:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaSnapchat className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.snapchat...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaSnapchat className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.snapchat...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaSnapchat className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.snapchat...</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Website */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Personal Websites:
            </h1>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaGlobe className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.example...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaGlobe className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.example...</Link>
                </div>
              </div>
              <div className="flex items-center rounded-full w-full bg-white">
                <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                  <FaGlobe className="text-white" size={25} />
                </div>
                <div className="">
                  <Link to="">https://www.example...</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* user Inquiries */}
        <div className="flex flex-col gap-4">
          <h1 className="underline underline-offset-4 leading-3">
            User Inquiries:
          </h1>
          <div className="w-[99%] md:w-full overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Vismo Dev</td>
                  <td>vismo@gmail.com</td>
                  <td>13/02/2024</td>
                  <td>10.20 AM</td>
                  <td>
                    <span className="flex items-center gap-1">
                      <button className="bg-gray-400 p-1">
                        <FaEye />
                      </button>
                      <button className="bg-gray-400 p-1">
                        <FaRegTrashAlt />
                      </button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vismo Dev</td>
                  <td>vismo@gmail.com</td>
                  <td>13/02/2024</td>
                  <td>10.20 AM</td>
                  <td>
                    <span className="flex items-center gap-1">
                      <button className="bg-gray-400 p-1">
                        <FaEye />
                      </button>
                      <button className="bg-gray-400 p-1">
                        <FaRegTrashAlt />
                      </button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Vismo Dev</td>
                  <td>vismo@gmail.com</td>
                  <td>13/02/2024</td>
                  <td>10.20 AM</td>
                  <td>
                    <span className="flex items-center gap-1">
                      <button className="bg-gray-400 p-1">
                        <FaEye />
                      </button>
                      <button className="bg-gray-400 p-1">
                        <FaRegTrashAlt />
                      </button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal */}
      <dialog open={isModalOpen} className="modal z-50">
        <div className="modal-box w-11/12 max-w-5xl bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {/* Modal content */}
          <div>
            {/* Profile Picture */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">Profile Picture</h1>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="p-2 bg-gray-600 rounded-full">
                  <img
                    src={user}
                    alt="User Photo"
                    className="rounded-full w-40 h-40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="fileInput"
                    className="flex items-center justify-center cursor-pointer bg-gray-300 p-2 md:px-3 md:py-2"
                  >
                    <AiOutlineCamera className="mr-2" />
                    <span>Edit Profile Picture</span>
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilPhotoChange}
                  />
                </div>
              </div>
            </div>
            {/* Cover Photo */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">Cover Photo</h1>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-full md:w-3/4">
                  <img src={banner} alt="User Photo" className="w-full h-56" />
                </div>
                <div>
                  <label
                    htmlFor="filePInput"
                    className="flex items-center justify-center cursor-pointer bg-gray-300 p-2 md:px-3 md:py-2"
                  >
                    <AiOutlineCamera className="mr-2" />
                    <span>Edit Cover Photo</span>
                  </label>
                  <input
                    type="file"
                    id="filePInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleCoverPhotoChange}
                  />
                </div>
              </div>
            </div>
            {/* About Me */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">About Me</h1>
              <div className="flex flex-col items-center justify-center gap-2">
                <form className="w-full md:w-1/2 flex flex-col gap-2 items-center">
                  <div className="form-control p-0 border-0">
                    <textarea
                      name="aboutMe"
                      cols="30"
                      rows="5"
                      className="border-2 border-gray-400"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-gray-300 p-2 md:px-3 md:py-2"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Basic Info */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">Basic Info</h1>
              <div className="flex flex-col items-center justify-center gap-2">
                <form className="w-full md:w-2/3 flex flex-col gap-2 items-center">
                  <div className="form-control p-0 border-0">
                    <label htmlFor="fullName" className="mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="fatherName" className="mb-1">
                      Father&apos;s Name
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      placeholder="Father's Name"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="motherName" className="mb-1">
                      Mother&apos;s Name
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      placeholder="Mother's Name"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="phone" className="mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      // {...register("phone")}
                      placeholder="Contact No."
                      className="hidden"
                    />
                    <PhoneInput
                      country={"bd"}
                      enableSearch={true}
                      disableSearchIcon={true}
                      value={phone1}
                      onChange={handlePhoneChange}
                      inputClass="editProfilePhoneInput w-full"
                      containerClass="editProfilePhoneContainer "
                    />
                  </div>

                  <div className="form-control p-0 border-0">
                    <label htmlFor="alternatePhone" className="mb-1">
                      Alternate Phone Number
                    </label>
                    <input
                      type="text"
                      name="alternatePhone"
                      // {...register("phone")}
                      placeholder="Alternate Contact No."
                      className="hidden"
                    />
                    <PhoneInput
                      country={"bd"}
                      enableSearch={true}
                      disableSearchIcon={true}
                      value={phone2}
                      onChange={handlePhoneChange2}
                      inputClass="editProfilePhoneInput w-full"
                      containerClass="editProfilePhoneContainer "
                    />
                  </div>

                  <div className="form-control p-0 border-0">
                    <label htmlFor="email" className="mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>

                  <div className="form-control p-0 border-0">
                    <label htmlFor="alternateEmail" className="mb-1">
                      Alternate Email
                    </label>
                    <input
                      type="email"
                      name="alternateEmail"
                      placeholder="Alternate Email Address"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>

                  <div className="form-control p-0 border-0">
                    <label htmlFor="dob" className="mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="presentAddress" className="mb-1">
                      Present Address
                    </label>
                    <input
                      type="text"
                      name="presentAddress"
                      placeholder="Present Address"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="permanentAddress" className="mb-1">
                      Permanent Address
                    </label>
                    <input
                      type="text"
                      name="permanentAddress"
                      placeholder="Permanent Address"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="permanentAddress" className="mb-1">
                      Language
                    </label>
                    <select
                      name="preferedLanguage"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    >
                      <option value="">Select One</option>
                      <option value="bangla">Bangla</option>
                      <option value="english">English</option>
                    </select>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-[#ffb700] p-2 md:px-3 md:py-2"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Job Experience */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">Job Experiences</h1>
              <div className="flex flex-col md:flex-row md:items-start justify-center gap-4">
                <div className="flex flex-col gap-4 md:w-1/2">
                  <div className="bg-gray-200 p-4 rounded-md flex flex-col gap-1 relative">
                    <div className="p-2 bg-gray-500 rounded-full flex items-center justify-center absolute -right-2 -top-2">
                      <FaXmark className="text-white" />
                    </div>
                    <h1 className="text-sm">
                      Company: Sunwings Tours and Travels
                    </h1>
                    <h1 className="text-sm">Designation: Web Developer</h1>
                    <h1 className="text-sm">Experience: 2 Years</h1>
                    <h1 className="text-sm">Duration: Feb 2024 - Present</h1>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-md flex flex-col gap-1 relative">
                    <div className="p-2 bg-gray-500 rounded-full flex items-center justify-center absolute -right-2 -top-2">
                      <FaXmark className="text-white" />
                    </div>
                    <h1 className="text-sm">
                      Company: Sunwings Tours and Travels
                    </h1>
                    <h1 className="text-sm">Designation: Web Developer</h1>
                    <h1 className="text-sm">Experience: 2 Years</h1>
                    <h1 className="text-sm">Duration: Feb 2024 - Present</h1>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col gap-3">
                  <h1 className="text-lg leading-3 underline">
                    Add Job Experience
                  </h1>
                  <form className=" flex flex-col gap-2 items-center">
                    <div className="form-control p-0 border-0">
                      <label htmlFor="companyName">Company Name:</label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                      />
                    </div>
                    <div className="form-control p-0 border-0">
                      <label htmlFor="designation">Designation:</label>
                      <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                      />
                    </div>
                    <div className="form-control p-0 border-0">
                      <label htmlFor="experience">Experience:</label>
                      <input
                        type="text"
                        name="experience"
                        placeholder="Experience in Years"
                        className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                      />
                    </div>
                    <div className="form-control p-0 border-0">
                      <label htmlFor="startDate">Start Date:</label>
                      <input
                        type="date"
                        name="startDate"
                        className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                      />
                    </div>
                    <div className="form-control p-0 border-0">
                      <label htmlFor="endDate">End Date:</label>
                      <input
                        type="date"
                        name="endDate"
                        className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-[#ffb700] p-2 md:px-3 md:py-2"
                      >
                        Add Experience
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">Education</h1>
              <div className="flex flex-col md:flex-row md:items-start justify-center gap-4">
                <div className="flex flex-col gap-4 md:w-1/2">
                  <div className="bg-gray-200 p-4 rounded-md flex flex-col gap-1 relative">
                    <div className="p-2 bg-gray-500 rounded-full flex items-center justify-center absolute -right-2 -top-2">
                      <FaXmark className="text-white" />
                    </div>
                    <h1 className="text-sm">
                      Degree: BSc in Computer Science & Engineering
                    </h1>
                    <h1 className="text-sm">
                      Institution: Daffodil International University
                    </h1>
                    <h1 className="text-sm">Duration: 4 Years</h1>
                    <h1 className="text-sm">Passing Year: Apr 2019</h1>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-md flex flex-col gap-1 relative">
                    <div className="p-2 bg-gray-500 rounded-full flex items-center justify-center absolute -right-2 -top-2">
                      <FaXmark className="text-white" />
                    </div>
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
                <div className="md:w-1/2 flex flex-col gap-3">
                  <h1 className="text-lg leading-3 underline">Add Education</h1>
                  <form className="flex flex-col gap-2 items-center">
                    <div className="form-control p-0 border-0">
                      <label htmlFor="degree">Degree:</label>
                      <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                      />
                    </div>
                    <div className="form-control p-0 border-0">
                      <label htmlFor="institution">Institution:</label>
                      <input
                        type="text"
                        name="institution"
                        placeholder="Institution"
                        className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                      />
                    </div>
                    <div className="form-control p-0 border-0">
                      <label htmlFor="duration">Duration:</label>
                      <input
                        type="text"
                        name="duration"
                        placeholder="Duration in Years"
                        className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                      />
                    </div>
                    <div className="form-control p-0 border-0">
                      <label htmlFor="passingYear">Passing Year:</label>
                      <input
                        type="text"
                        name="passingYear"
                        placeholder="Passing Year"
                        className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="bg-[#ffb700] p-2 md:px-3 md:py-2"
                      >
                        Add Education
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full my-10">
              {/* Facebook Profiles */}
              <form className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl">Facebook Profiles</h1>
                  <button
                    type="button"
                    onClick={() => appendFacebook({ link: "" })}
                    className="p-1 bg-[#ff7c15] hover:bg-[#e47d2d] text-white"
                    title="Add more"
                  >
                    <BiSolidPlusCircle className="text-black text-lg inline-block" />{" "}
                    Add more
                  </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 w-full">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <div className="form-control border-0 p-0 w-full">
                      <div className="flex items-center gap-2 mb-1 w-full">
                        <input
                          type="text"
                          name={`facebook[0].link`}
                          placeholder={`Facebook Link 1`}
                          className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                        />

                        <button
                          type="button"
                          onClick={() => removeFacebook(0)}
                          className="border border-[#131D4E] p-2 "
                          title="Remove"
                          disabled={facebook.length === 1}
                          // Disable if there's only one social media field
                        >
                          <FaXmark className="text-[#131D4E] text-lg" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-1 form-control border-0 p-0">
                        {facebook.slice(1).map((field, index) => (
                          <div key={field.id}>
                            <div className="flex flex-col justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  name={`facebook[${index + 1}].link`}
                                  placeholder={`Facebook Link ${index + 2}`}
                                  defaultValue={field.facebook}
                                  className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                                />

                                <button
                                  type="button"
                                  onClick={() => removeFacebook(index + 1)}
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

                    <div>
                      <button
                        type="submit"
                        className="bg-gray-300 md:px-10 md:py-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* Twitter Profiles */}
              <form className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl">Twitter Profiles</h1>
                  <button
                    type="button"
                    onClick={() => appendTwitter({ link: "" })}
                    className="p-1 bg-[#ff7c15] hover:bg-[#e47d2d] text-white"
                    title="Add more"
                  >
                    <BiSolidPlusCircle className="text-black text-lg inline-block" />{" "}
                    Add more
                  </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 w-full">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <div className="form-control border-0 p-0 w-full">
                      <div className="flex items-center gap-2 mb-1 w-full">
                        <input
                          type="text"
                          name={`twitter[0].link`}
                          placeholder={`Twitter Link 1`}
                          className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                        />

                        <button
                          type="button"
                          onClick={() => removeTwitter(0)}
                          className="border border-[#131D4E] p-2 "
                          title="Remove"
                          disabled={twitter.length === 1}
                          // Disable if there's only one social media field
                        >
                          <FaXmark className="text-[#131D4E] text-lg" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-1 form-control border-0 p-0">
                        {twitter.slice(1).map((field, index) => (
                          <div key={field.id}>
                            <div className="flex flex-col justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  name={`twitter[${index + 1}].link`}
                                  placeholder={`Twitter Link ${index + 2}`}
                                  defaultValue={field.twitter}
                                  className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                                />

                                <button
                                  type="button"
                                  onClick={() => removeTwitter(index + 1)}
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

                    <div>
                      <button
                        type="submit"
                        className="bg-gray-300 md:px-10 md:py-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* Instagram Profiles */}
              <form className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl">Instagram Profiles</h1>
                  <button
                    type="button"
                    onClick={() => appendInstagram({ link: "" })}
                    className="p-1 bg-[#ff7c15] hover:bg-[#e47d2d] text-white"
                    title="Add more"
                  >
                    <BiSolidPlusCircle className="text-black text-lg inline-block" />{" "}
                    Add more
                  </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 w-full">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <div className="form-control border-0 p-0 w-full">
                      <div className="flex items-center gap-2 mb-1 w-full">
                        <input
                          type="text"
                          name={`instagram[0].link`}
                          placeholder={`Instagram Link 1`}
                          className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                        />

                        <button
                          type="button"
                          onClick={() => removeInstagram(0)}
                          className="border border-[#131D4E] p-2 "
                          title="Remove"
                          disabled={instagram.length === 1}
                          // Disable if there's only one social media field
                        >
                          <FaXmark className="text-[#131D4E] text-lg" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-1 form-control border-0 p-0">
                        {instagram.slice(1).map((field, index) => (
                          <div key={field.id}>
                            <div className="flex flex-col justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  name={`instagram[${index + 1}].link`}
                                  placeholder={`Instagram Link ${index + 2}`}
                                  defaultValue={field.instagram}
                                  className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                                />

                                <button
                                  type="button"
                                  onClick={() => removeInstagram(index + 1)}
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

                    <div>
                      <button
                        type="submit"
                        className="bg-gray-300 md:px-10 md:py-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* What'sApp Profiles */}
              <form className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl">What's App Profiles</h1>
                  <button
                    type="button"
                    onClick={() => appendWhatsapp({ link: "" })}
                    className="p-1 bg-[#ff7c15] hover:bg-[#e47d2d] text-white"
                    title="Add more"
                  >
                    <BiSolidPlusCircle className="text-black text-lg inline-block" />{" "}
                    Add more
                  </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 w-full">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <div className="form-control border-0 p-0 w-full">
                      <div className="flex items-center gap-2 mb-1 w-full">
                        <input
                          type="text"
                          name={`whatsapp[0].link`}
                          placeholder={`What's App Link 1`}
                          className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                        />

                        <button
                          type="button"
                          onClick={() => removeWhatsapp(0)}
                          className="border border-[#131D4E] p-2 "
                          title="Remove"
                          disabled={whatsapp.length === 1}
                          // Disable if there's only one social media field
                        >
                          <FaXmark className="text-[#131D4E] text-lg" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-1 form-control border-0 p-0">
                        {whatsapp.slice(1).map((field, index) => (
                          <div key={field.id}>
                            <div className="flex flex-col justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  name={`whatsapp[${index + 1}].link`}
                                  placeholder={`What's App Link ${index + 2}`}
                                  defaultValue={field.whatsapp}
                                  className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                                />

                                <button
                                  type="button"
                                  onClick={() => removeWhatsapp(index + 1)}
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

                    <div>
                      <button
                        type="submit"
                        className="bg-gray-300 md:px-10 md:py-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* Linkedin Profiles */}
              <form className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl">Linkedin Profiles</h1>
                  <button
                    type="button"
                    onClick={() => appendLinkedin({ link: "" })}
                    className="p-1 bg-[#ff7c15] hover:bg-[#e47d2d] text-white"
                    title="Add more"
                  >
                    <BiSolidPlusCircle className="text-black text-lg inline-block" />{" "}
                    Add more
                  </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 w-full">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <div className="form-control border-0 p-0 w-full">
                      <div className="flex items-center gap-2 mb-1 w-full">
                        <input
                          type="text"
                          name={`linkedin[0].link`}
                          placeholder={`Linkedin Link 1`}
                          className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                        />

                        <button
                          type="button"
                          onClick={() => removeLinkedin(0)}
                          className="border border-[#131D4E] p-2 "
                          title="Remove"
                          disabled={linkedin.length === 1}
                          // Disable if there's only one social media field
                        >
                          <FaXmark className="text-[#131D4E] text-lg" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-1 form-control border-0 p-0">
                        {linkedin.slice(1).map((field, index) => (
                          <div key={field.id}>
                            <div className="flex flex-col justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  name={`linkedin[${index + 1}].link`}
                                  placeholder={`Linkedin Link ${index + 2}`}
                                  defaultValue={field.linkedin}
                                  className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                                />

                                <button
                                  type="button"
                                  onClick={() => removeLinkedin(index + 1)}
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

                    <div>
                      <button
                        type="submit"
                        className="bg-gray-300 md:px-10 md:py-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* YouTube Profiles */}
              <form className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl">YouTube Profiles</h1>
                  <button
                    type="button"
                    onClick={() => appendYoutube({ link: "" })}
                    className="p-1 bg-[#ff7c15] hover:bg-[#e47d2d] text-white"
                    title="Add more"
                  >
                    <BiSolidPlusCircle className="text-black text-lg inline-block" />{" "}
                    Add more
                  </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 w-full">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <div className="form-control border-0 p-0 w-full">
                      <div className="flex items-center gap-2 mb-1 w-full">
                        <input
                          type="text"
                          name={`youtube[0].link`}
                          placeholder={`Youtube Link 1`}
                          className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                        />

                        <button
                          type="button"
                          onClick={() => removeYoutube(0)}
                          className="border border-[#131D4E] p-2 "
                          title="Remove"
                          disabled={youtube.length === 1}
                          // Disable if there's only one social media field
                        >
                          <FaXmark className="text-[#131D4E] text-lg" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-1 form-control border-0 p-0">
                        {youtube.slice(1).map((field, index) => (
                          <div key={field.id}>
                            <div className="flex flex-col justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  name={`youtube[${index + 1}].link`}
                                  placeholder={`Youtube Link ${index + 2}`}
                                  defaultValue={field.youtube}
                                  className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                                />

                                <button
                                  type="button"
                                  onClick={() => removeYoutube(index + 1)}
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

                    <div>
                      <button
                        type="submit"
                        className="bg-gray-300 md:px-10 md:py-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* Tiktok Profiles */}
              <form className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl">Tiktok Profiles</h1>
                  <button
                    type="button"
                    onClick={() => appendTiktok({ link: "" })}
                    className="p-1 bg-[#ff7c15] hover:bg-[#e47d2d] text-white"
                    title="Add more"
                  >
                    <BiSolidPlusCircle className="text-black text-lg inline-block" />{" "}
                    Add more
                  </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 w-full">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <div className="form-control border-0 p-0 w-full">
                      <div className="flex items-center gap-2 mb-1 w-full">
                        <input
                          type="text"
                          name={`tiktok[0].link`}
                          placeholder={`Tiktok Link 1`}
                          className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                        />

                        <button
                          type="button"
                          onClick={() => removeTiktok(0)}
                          className="border border-[#131D4E] p-2 "
                          title="Remove"
                          disabled={tiktok.length === 1}
                          // Disable if there's only one social media field
                        >
                          <FaXmark className="text-[#131D4E] text-lg" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-1 form-control border-0 p-0">
                        {tiktok.slice(1).map((field, index) => (
                          <div key={field.id}>
                            <div className="flex flex-col justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  name={`tiktok[${index + 1}].link`}
                                  placeholder={`Tiktok Link ${index + 2}`}
                                  defaultValue={field.tiktok}
                                  className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                                />

                                <button
                                  type="button"
                                  onClick={() => removeTiktok(index + 1)}
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

                    <div>
                      <button
                        type="submit"
                        className="bg-gray-300 md:px-10 md:py-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* Snapchat Profiles */}
              <form className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl">Snapchat Profiles</h1>
                  <button
                    type="button"
                    onClick={() => appendSnapchat({ link: "" })}
                    className="p-1 bg-[#ff7c15] hover:bg-[#e47d2d] text-white"
                    title="Add more"
                  >
                    <BiSolidPlusCircle className="text-black text-lg inline-block" />{" "}
                    Add more
                  </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 w-full">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <div className="form-control border-0 p-0 w-full">
                      <div className="flex items-center gap-2 mb-1 w-full">
                        <input
                          type="text"
                          name={`snapchat[0].link`}
                          placeholder={`Snapchat Link 1`}
                          className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                        />

                        <button
                          type="button"
                          onClick={() => removeSnapchat(0)}
                          className="border border-[#131D4E] p-2 "
                          title="Remove"
                          disabled={snapchat.length === 1}
                          // Disable if there's only one social media field
                        >
                          <FaXmark className="text-[#131D4E] text-lg" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-1 form-control border-0 p-0">
                        {snapchat.slice(1).map((field, index) => (
                          <div key={field.id}>
                            <div className="flex flex-col justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  name={`snapchat[${index + 1}].link`}
                                  placeholder={`Snapchat Link ${index + 2}`}
                                  defaultValue={field.snapchat}
                                  className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                                />

                                <button
                                  type="button"
                                  onClick={() => removeSnapchat(index + 1)}
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

                    <div>
                      <button
                        type="submit"
                        className="bg-gray-300 md:px-10 md:py-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* Personal Websites */}
              <form className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl">Personal Websites</h1>
                  <button
                    type="button"
                    onClick={() => appendWebsite({ link: "" })}
                    className="p-1 bg-[#ff7c15] hover:bg-[#e47d2d] text-white"
                    title="Add more"
                  >
                    <BiSolidPlusCircle className="text-black text-lg inline-block" />{" "}
                    Add more
                  </button>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 w-full">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <div className="form-control border-0 p-0 w-full">
                      <div className="flex items-center gap-2 mb-1 w-full">
                        <input
                          type="text"
                          name={`website[0].link`}
                          placeholder={`Website Link 1`}
                          className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                        />

                        <button
                          type="button"
                          onClick={() => removeWebsite(0)}
                          className="border border-[#131D4E] p-2 "
                          title="Remove"
                          disabled={website.length === 1}
                          // Disable if there's only one social media field
                        >
                          <FaXmark className="text-[#131D4E] text-lg" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-1 form-control border-0 p-0">
                        {website.slice(1).map((field, index) => (
                          <div key={field.id}>
                            <div className="flex flex-col justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  name={`website[${index + 1}].link`}
                                  placeholder={`Website Link ${index + 2}`}
                                  defaultValue={field.website}
                                  className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                                />

                                <button
                                  type="button"
                                  onClick={() => removeWebsite(index + 1)}
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

                    <div>
                      <button
                        type="submit"
                        className="bg-gray-300 md:px-10 md:py-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditProfile;
