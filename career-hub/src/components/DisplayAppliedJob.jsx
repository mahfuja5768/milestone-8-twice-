import { Link } from "react-router-dom";

const DisplayAppliedJob = ({ job }) => {
  const {
    company_name,
    salary,
    job_title,
    job_type,
    remote_or_onsite,
    logo,
    location,
    id,
  } = job || {};
  return (
    <div> 
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="" src={logo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex items-center gap-4">
            <button className="border border-blue-500 py-1 px-4 text-lg font-bold text-blue-500">
              {job_type}
            </button>{" "}
            <button className="border border-blue-500 py-1 px-4 text-lg font-bold text-blue-500">
              {remote_or_onsite}
            </button>{" "}
          </div>
          <div className="card-actions justify-end">
          <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAppliedJob;
