import { FaXmark } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  useCreateEducationMutation,
  useDeleteEducationMutation,
  useGetAllEducationQuery,
} from "../../redux/features/allApis/educationApi";
import Swal from "sweetalert2";

const Education = () => {
  const { uid } = useParams();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { data: allEducation } = useGetAllEducationQuery();
  const [createEducation] = useCreateEducationMutation();

  const onSubmit = async (data) => {
    data.uid = uid;
    try {
      setLoading(true);
      const result = await createEducation(data);
      if (result.data) {
        Swal.fire({
          title: "Education Created Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        setLoading(false);
      }
    } catch (error) {
      Swal.fire({
        title: "Error Creating Education Info!",
        text: `${error}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  const singleUserEducation = allEducation?.filter((edu) => edu.uid === uid);
  const [deleteEducation] = useDeleteEducationMutation();
  const handleDelete = async (uid) => {
    Swal.fire({
      title: `Are you sure to Delete this ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteEducation({ uid: uid });
          if (result.data.deletedCount > 0) {
            Swal.fire("Deleted!", "This package has been deleted.", "success");
          }
        } catch (error) {
          console.error("error deleting package", error);
        }
      }
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text_db_36 mb-3">Education</h1>
      <div className="flex flex-col md:flex-row-reverse md:items-start justify-betweeb gap-4 w-full">
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-col gap-4">
            {singleUserEducation &&
              singleUserEducation.map((userEducation) => (
                <div
                  key={userEducation?.uid}
                  className="bg-gray-200 p-4 rounded-md flex flex-col gap-1 relative w-full"
                >
                  <div
                    onClick={() => handleDelete(uid)}
                    className="p-2 bg-gray-500 rounded-full flex items-center justify-center absolute -right-2 -top-2 cursor-pointer"
                  >
                    <FaXmark className="text-white" />
                  </div>
                  <h1 className="text-sm">Degree: {userEducation?.degree}</h1>
                  <h1 className="text-sm">
                    Institution: {userEducation?.institution}
                  </h1>
                  <h1 className="text-sm">
                    Duration: {userEducation?.duration}
                  </h1>
                  <h1 className="text-sm">
                    Passing Year: {userEducation?.passingYear}
                  </h1>
                </div>
              ))}

            {/* <div className="bg-gray-200 p-4 rounded-md flex flex-col gap-1 relative">
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
            </div> */}
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-lg underline">Add Education</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 items-center"
          >
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="degree" className="mb-2">
                Degree:
              </label>
              <input
                type="text"
                name="degree"
                {...register("degree")}
                placeholder="Your Degree"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="institution" className="mb-2">
                Institution:
              </label>
              <input
                type="text"
                name="institution"
                {...register("institution")}
                placeholder="Your Institution"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="duration" className="mb-2">
                Duration:
              </label>
              <input
                type="text"
                name="duration"
                {...register("duration")}
                placeholder="Duration in Years"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="passingYear" className="mb-2">
                Passing Year:
              </label>
              <input
                type="text"
                name="passingYear"
                {...register("passingYear")}
                placeholder="Passing Year"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="bg-[#ffb700] p-2 md:px-3 md:py-2"
              >
                {loading ? "Uploading..." : "Add Education"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Education;
