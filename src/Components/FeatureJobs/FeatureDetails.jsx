import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const FeatureDetails = ({ data }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
  } = data;
  return (
        <div className=" rounded-2xl card-compact bg-base-100 border p-5 space-y-5 flex flex-col">
          <figure className="flex-grow">
            <img className="w-24" src={logo} alt="" />
          </figure>
          <div className=" space-y-2">
            <h2 className="font-bold">{job_title}</h2>
            <h2>{company_name}</h2>
            <div className="flex justify-between w-5/12">
              <button className="btn btn-sm">{remote_or_onsite}</button>
              <button className="btn btn-sm">{job_type}</button>
            </div>
            <div className="flex justify-between w-7/12">
              <p className="flex items-center gap-1"><span><CiLocationOn/></span>{location}</p>
              <p>Salary: {salary}</p>
            </div>
            <div>
                <Link to={`/job/${id}`}><button className="btn btn-sm btn-submit">View Details</button></Link>
            </div>
          </div>
        </div>  
  );
};

export default FeatureDetails;
