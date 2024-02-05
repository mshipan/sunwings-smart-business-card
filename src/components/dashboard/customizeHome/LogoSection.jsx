import { useState } from "react";
import logo from "../../../assets/images/info_card_logo.png";
import { useForm } from "react-hook-form";

const LogoSection = () => {
  const [loading, setLoading] = useState(false);
  const img_host_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const baseUrl = import.meta.env.VITE_BASE_API_URL;

  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.logo[0]); // Add 'image' parameter
      formData.append("key", img_host_token);
      setLoading(true);

      const response = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();

        const logoUrl = imgResponse?.data?.display_url;

        if (logoUrl) {
          data.logo = logoUrl;

          const postResponse = await fetch(`${baseUrl}/logo`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (postResponse.ok) {
            console.log("Logo uploaded to MongoDB successfully.");
          } else {
            console.error("Failed to upload logo to MongoDB.");
          }
        }
      } else {
        console.error("Error uploading logo to ImgBB:", response.statusText);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error uploading logo to MongoDB:", error);
    }
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control p-6">
          <h1 className="u_text_26">Logo</h1>
          <div className="update_logo">
            <div className="custom_update_item">
              {errors.logo && (
                <span className="text-red-600">Logo is required.</span>
              )}
              <input
                type="file"
                name="logo"
                {...register("logo", { required: true })}
                className="file-input w-full max-w-xs bg-white"
              />
              <button className="U_btn" type="submit" disabled={loading}>
                {loading ? "Uploading..." : "Submit"}
              </button>
            </div>
            <div className="custom_logo">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogoSection;
