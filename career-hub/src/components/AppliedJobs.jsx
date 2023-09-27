import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredCart } from "./localstorage";
import DisplayAppliedJob from "./DisplayAppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState();
  const [displayJobs, setDisplayJobs] = useState();

  const handleJobsFIlter = filter =>{
    if(filter === 'all'){
      setDisplayJobs(appliedJobs);
    }
    else if(filter === "remote"){
        const remoteJobs = appliedJobs.filter(job=> job.remote_or_onsite === "Remote");
        setDisplayJobs(remoteJobs)
    }
    else if(filter === "onsite"){
        const onsiteJobs = appliedJobs.filter(job=> job.remote_or_onsite === "Onsite");
        setDisplayJobs(onsiteJobs)
    }
  }

  useEffect(() => {
    const storedJobsIds = getStoredCart();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div className="max-w-[1280px] mx-auto my-32">
      <h2 className="text-2xl">Applied jobs: {appliedJobs?.length}</h2>
      <div className="flex justify-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn  btn-primary m-1">
            Filter By
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={()=> handleJobsFIlter('all')}>
              <a>All</a>
            </li>
            <li onClick={()=> handleJobsFIlter('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={()=> handleJobsFIlter('onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>

      {displayJobs?.map((job) => (
        <DisplayAppliedJob key={job.id} job={job}></DisplayAppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
