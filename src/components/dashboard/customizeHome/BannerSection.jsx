import banner from "../../../assets/images/banner-1.webp";

const BannerSection = () => {
  return (
    <div className="mt-10">
      <form>
        <div className="form-control p-6">
          <h1 className="u_text_26">Banner</h1>
          <div className="update_logo">
            <div className="custom_update_item">
              <input
                type="file"
                name="banner"
                className="file-input w-full max-w-xs bg-white"
              />
              <button className="U_btn" type="submit">
                Submit
              </button>
            </div>
            <div className="custom_logo">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BannerSection;
