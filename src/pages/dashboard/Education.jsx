import { FaXmark } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="flex flex-col gap-4 my-10">
      <h1 className="text_db_36 mb-3">Education</h1>
      <div className="flex flex-col md:flex-row-reverse md:items-start justify-betweeb gap-4 w-full">
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-col gap-4">
            <div className="bg-gray-200 p-4 rounded-md flex flex-col gap-1 relative w-full">
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
        </div>
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-lg underline">Add Education</h1>
          <form className="flex flex-col gap-2 items-center">
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="degree" className="mb-2">
                Degree:
              </label>
              <input
                type="text"
                name="degree"
                placeholder="Degree"
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
                placeholder="Institution"
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
                placeholder="Passing Year"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>

            <div className="mt-2">
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
  );
};

export default Education;
