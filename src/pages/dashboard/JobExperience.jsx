import { FaXmark } from "react-icons/fa6";

const JobExperience = () => {
  return (
    <div className="flex flex-col gap-4 my-10">
      <h1 className="text_db_36 mb-3">Job Experiences</h1>
      <div className="flex flex-col md:flex-row-reverse md:items-start justify-between gap-4 w-full">
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-col gap-4">
            <div className="bg-gray-200 p-4 rounded-md flex flex-col gap-1 relative ">
              <div className="p-2 bg-gray-500 rounded-full flex items-center justify-center absolute -right-2 -top-2">
                <FaXmark className="text-white" />
              </div>
              <h1 className="text-sm">Company: Sunwings Tours and Travels</h1>
              <h1 className="text-sm">Designation: Web Developer</h1>
              <h1 className="text-sm">Experience: 2 Years</h1>
              <h1 className="text-sm">Duration: Feb 2024 - Present</h1>
            </div>

            <div className="bg-gray-200 p-4 rounded-md flex flex-col gap-1 relative">
              <div className="p-2 bg-gray-500 rounded-full flex items-center justify-center absolute -right-2 -top-2">
                <FaXmark className="text-white" />
              </div>
              <h1 className="text-sm">Company: Sunwings Tours and Travels</h1>
              <h1 className="text-sm">Designation: Web Developer</h1>
              <h1 className="text-sm">Experience: 2 Years</h1>
              <h1 className="text-sm">Duration: Feb 2024 - Present</h1>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-lg leading-3 underline">Add Job Experience</h1>
          <form className=" flex flex-col gap-2 items-center">
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="companyName" className="mb-2">
                Company Name:
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="designation" className="mb-2">
                Designation:
              </label>
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="experience" className="mb-2">
                Experience:
              </label>
              <input
                type="text"
                name="experience"
                placeholder="Experience in Years"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="startDate" className="mb-2">
                Start Date:
              </label>
              <input
                type="date"
                name="startDate"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="endDate" className="mb-2">
                End Date:
              </label>
              <input
                type="date"
                name="endDate"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="mt-2">
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
  );
};

export default JobExperience;
