import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  // console.log(job);
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
      <div className="card shadow-xl px-4">
        <img className="w-44 h-24" src={logo} alt="" />
        <div className="card-body px-0 space-y-2">
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
          <div className="flex items-center">
            <p>🪧 {location}</p> <p>$ Salary: {salary}</p>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
