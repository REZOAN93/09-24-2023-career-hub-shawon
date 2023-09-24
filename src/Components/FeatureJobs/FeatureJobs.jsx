import { useEffect } from "react";
import { useState } from "react";
import FeatureDetails from "./FeatureDetails";

const FeatureJobs = () => {
  const [job, setJobs] = useState([]);
  // The is not the best way to show all data
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center space-y-3 my-5">
        <h1 className=" text-5xl font-bold">This is Feature Jobs</h1>
        <h1 className=" text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </h1>
      </div>
      {/* <h1>Length: {job.length}</h1> */}
      <div className="grid grid-cols-2 gap-5">
        {job.slice(0, dataLength).map((na) => (
          <FeatureDetails key={na.id} data={na}></FeatureDetails>
        ))}
      </div>
      <div
        className={`text-center my-5 ${dataLength === job.length && "hidden"}`}
      >
        <button
          onClick={() => setDataLength(job.length)}
          className="btn btn-submit"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
