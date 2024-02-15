import { useFieldArray, useForm } from "react-hook-form";
import { BiSolidPlusCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Instagram = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const {
    fields: instagram,
    append: appendInstagram,
    remove: removeInstagram,
  } = useFieldArray({
    control,
    name: "instagram",
  });
  return (
    <div className="flex flex-col md:flex-row items-start gap-4">
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
            <div className="w-full">
              <div className="flex items-center gap-2 mb-1 w-full">
                <div className="form-control border-0 p-0 w-full">
                  <input
                    type="text"
                    name={`instagram[0].link`}
                    placeholder={`Instagram Link 1`}
                    className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => removeInstagram(0)}
                  className="border-2 border-solid border-yellow-400 p-2 hover:bg-white transition-all ease-in-out duration-300"
                  title="Remove"
                  disabled={instagram.length === 1}
                  // Disable if there's only one social media field
                >
                  <FaXmark className="text-[#131D4E] text-lg" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-1 ">
                {instagram.slice(1).map((field, index) => (
                  <div key={field.id}>
                    <div className="flex flex-col justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="form-control border-0 p-0">
                          <input
                            type="text"
                            name={`instagram[${index + 1}].link`}
                            placeholder={`Instagram Link ${index + 2}`}
                            defaultValue={field.instagram}
                            className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => removeInstagram(index + 1)}
                          className="border-2 border-solid border-yellow-400 p-2 hover:bg-white transition-all ease-in-out duration-300"
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
              <button type="submit" className="bg-gray-300 md:px-10 md:py-2">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
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
    </div>
  );
};

export default Instagram;
