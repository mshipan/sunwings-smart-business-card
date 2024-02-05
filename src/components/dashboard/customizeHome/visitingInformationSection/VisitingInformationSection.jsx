import "./VisitingInformationSection.css";

const VisitingInformationSection = () => {
  return (
    <div className="mt-6">
      <form>
        <div className="form-control p-6">
          <h1 className="u_text_26">Visiting Infomation</h1>
          <div className="visiting_contain1 mt-3">
            <input
              type="text"
              name="subTitle"
              placeholder="SubTitle"
              className="input input-bordered input-warning w-full"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered input-warning w-full"
            />
            <textarea
              name="description"
              className="textarea textarea-warning"
              placeholder="Description"
            ></textarea>
            <button className="U_btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VisitingInformationSection;
