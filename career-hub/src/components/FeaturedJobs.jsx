import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState();
  const [isShowAll, setIsShowAll] = useState(true);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-center text-4xl font-bold my-2">Featured Jobs</h2>
      <p className="text-center my-5 mb-12">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-12">
        {isShowAll
          ? jobs
              ?.slice(0, 4)
              .map((job) => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
          : jobs?.map((job) => (
              <FeaturedJob key={job.id} job={job}></FeaturedJob>
            ))}
      </div>
      <div className="flex justify-center my-12">
        <button
          onClick={() => setIsShowAll(!isShowAll)}
          className="btn btn-primary"
        >
          {isShowAll ? "See All Jobs" : "Show less"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
