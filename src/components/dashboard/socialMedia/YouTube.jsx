import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { BiSolidPlusCircle } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  useCreateYouTubeLinkMutation,
  useDeleteYouTubeLinkMutation,
  useGetAllYouTubeLinksQuery,
} from "../../../redux/features/allApis/socialMediaApi/youTubeApi";
import Swal from "sweetalert2";

const YouTube = ({ uid }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, control } = useForm();
  const { data: allYouTube } = useGetAllYouTubeLinksQuery();
  const [createYouTubeLink] = useCreateYouTubeLinkMutation();

  const {
    fields: youtube,
    append: appendYoutube,
    remove: removeYoutube,
  } = useFieldArray({
    control,
    name: "youtube",
  });

  const onSubmit = async (data) => {
    data.uid = uid;
    try {
      setLoading(true);
      const result = await createYouTubeLink(data);

      if (result.data) {
        Swal.fire({
          title: "Link Added Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        setLoading(false);
      } else {
        Swal.fire({
          title: "Link Added Failed!",
          text: "Press OK to continue",
          icon: "error",
          confirmButtonText: "OK",
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
      setLoading(false);
    }
  };

  const singleUserYouTube = allYouTube?.filter((you) => you.uid === uid);

  const [deleteYoutube] = useDeleteYouTubeLinkMutation();

  const handleDelete = async (_id, index) => {
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
          const result = await deleteYoutube({ id: _id, index: index });
          if (result.data.deletedCount > 0) {
            Swal.fire("Deleted!", "This Link has been deleted.", "success");
          }
        } catch (error) {
          console.error("error deleting Link", error);
        }
      }
    });
  };
  return (
    <div className="flex flex-col md:flex-row items-start gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
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
            <div className="w-full">
              <div className="flex items-center gap-2 mb-1 w-full">
                <div className="form-control border-0 p-0 w-full">
                  <input
                    type="text"
                    name={`youtube[0].link`}
                    {...register(`youtube[0].link`)}
                    placeholder={`Youtube Link 1`}
                    className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => removeYoutube(0)}
                  className="border-2 border-solid border-yellow-400 p-2 hover:bg-white transition-all ease-in-out duration-300"
                  title="Remove"
                  disabled={youtube.length === 1}
                  // Disable if there's only one social media field
                >
                  <FaXmark className="text-[#131D4E] text-lg" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-1 ">
                {youtube.slice(1).map((field, index) => (
                  <div key={field.id}>
                    <div className="flex flex-col justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="form-control border-0 p-0">
                          <input
                            type="text"
                            name={`youtube[${index + 1}].link`}
                            {...register(`youtube[${index + 1}].link`)}
                            placeholder={`Youtube Link ${index + 2}`}
                            defaultValue={field.youtube}
                            className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full "
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => removeYoutube(index + 1)}
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
                {loading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
        <h1 className="underline underline-offset-4 leading-3">
          Youtube Profiles:
        </h1>
        <div className="w-full flex flex-col gap-2">
          {singleUserYouTube &&
            singleUserYouTube?.map((yu) =>
              yu?.youtube?.map((y, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-full w-full bg-white pr-2"
                >
                  <div className="flex items-center ">
                    <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                      <FaYoutube className="text-white" size={25} />
                    </div>
                    <div className="">
                      <Link
                        to={
                          y.link.startsWith("http")
                            ? y.link
                            : `http://${y.link}`
                        }
                      >
                        {typeof y.link === "string" ? y.link.slice(0, 35) : ""}
                      </Link>
                    </div>
                  </div>

                  <div
                    onClick={() => handleDelete(yu._id, index)}
                    className="border-2 border-black rounded-full cursor-pointer"
                  >
                    <FaXmark />
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default YouTube;
