import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  useCreateStanndardCardImageMutation,
  useGetAllStanndardCardImageQuery,
} from "../../../redux/features/allApis/standardCardImageApi";

const StandardCardSection = () => {
  const [loading, setLoading] = useState(false);
  const img_host_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  // const baseUrl = import.meta.env.VITE_BASE_API_URL;

  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: allCardInfo } = useGetAllStanndardCardImageQuery();
  // Access the first element's id of the array
  const standardCardImage = allCardInfo?.[0].standardCardImage;
  // console.log(id);

  const [createStandardCardImage] = useCreateStanndardCardImageMutation();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.standardCardImage[0]); // Add 'image' parameter
      formData.append("key", img_host_token);
      setLoading(true);

      const response = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();

        const standardCardImageUrl = imgResponse?.data?.display_url;

        if (standardCardImageUrl) {
          data.standardCardImage = standardCardImageUrl;

          const result = await createStandardCardImage(data);

          if (result.data) {
            Swal.fire({
              title: "Standard Card Image Uploaded Successfully!",
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
          title: "Error uploading Standard Card Image to Image Host Server.",
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
        title: "Error uploading Standard Card Image.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control p-6">
          <h1 className="u_text_26">Standard Card Images</h1>
          <div className="update_logo">
            <div className="custom_update_item">
              {errors.standardCardImage && (
                <span className="text-red-600">This Field is required.</span>
              )}
              <input
                type="file"
                name="standardCardImage"
                {...register("standardCardImage", { required: true })}
                className="file-input w-full max-w-md bg-white"
              />
              <button className="U_btn" type="submit" disabled={loading}>
                {loading ? "Uploading..." : "Submit"}
              </button>
            </div>
            <div className="custom_logo">
              <img src={standardCardImage} alt="" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StandardCardSection;
