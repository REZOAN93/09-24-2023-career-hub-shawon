import img1 from "../../assets/images/user.png";
const Cover = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" space-y-4">
        <h1 className=" text-7xl font-bold w-9/12">
          One Step Closer To Your <span className="my-text">Dream Job</span>
        </h1>
        <p className="w-9/12 text-gray-400 text-justify">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn btn-submit">Get Started</button>
      </div>
      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Cover;
