import { useState } from "react";
import banner from "../../assets/images/banner-1.webp";
import user from "../../assets/images/vismo.jpg";
import { AiOutlineCamera } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import { FaXmark } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useUpdateAuserProfilePictureMutation } from "../../redux/features/allApis/usersApi";
import Swal from "sweetalert2";

const EditProfile = () => {
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");

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

  const [updateProfilePicture] = useUpdateAuserProfilePictureMutation();
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

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.profileImage[0]); // Add 'image' parameter
      formData.append("key", img_host_token);
      setLoading(true);

      const response = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();

        const profilePictureUrl = imgResponse?.data?.display_url;

        if (profilePictureUrl) {
          data.profileImage = profilePictureUrl;

          const result = await updateProfilePicture({
            id: id,
            data: data,
          });

          if (result.data.modifiedCount > 0) {
            Swal.fire({
              title: "Profile Picture Updated Successfully!",
              text: "Press OK to continue",
              icon: "success",
              confirmButtonText: "OK",
            });
            reset();
          }
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error uploading Profile Picture to Image Host Server.",
          text: `${response.statusText}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error uploading Profile Picture.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

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
                <button onClick={openModal} className="bg-[#ff7c15] px-3 py-2">
                  Edit Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 mx-4 flex flex-col gap-4">
        {/* about me and basic info */}
        <div className="grid grid-cols-1 gap-4">
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
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
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
      </div>
      {/* Modal */}
      <dialog open={isModalOpen} className="modal z-50">
        <div className="modal-box w-11/12 max-w-3xl bg-white">
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label
                    htmlFor="profileImage"
                    className="flex items-center justify-center cursor-pointer bg-gray-300 p-2 md:px-3 md:py-2"
                  >
                    <AiOutlineCamera className="mr-2" />
                    <span>
                      {loading ? "Uploading..." : "Edit Profile Picture"}
                    </span>
                  </label>
                  <input
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    {...register("profileImage")}
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilPhotoChange}
                  />
                </form>
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
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditProfile;
