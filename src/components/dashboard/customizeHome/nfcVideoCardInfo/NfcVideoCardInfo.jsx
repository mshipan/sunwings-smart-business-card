const NfcVideoCardInfo = () => {
  return (
    <div>
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
                  className="file-input w-full max-w-md bg-white"
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
    </div>
  );
};

export default NfcVideoCardInfo;
