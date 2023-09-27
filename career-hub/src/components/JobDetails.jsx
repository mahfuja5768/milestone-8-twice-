import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "./localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idNumber = parseInt(id);
  //   console.log(typeof(id))
  const job = jobs.find((job) => job.id === idNumber);
  console.log(job);
  const {
    salary,
    job_title,
    contact_information,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job || {};

  const handleApplyJob=()=>{
     saveJobApplication(idNumber)
  }
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Details</h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid gap-4 md:grid-cols-4 my-32">
          <div className="md:col-span-3">
            <p>
              <span className="font-bold text-xl">Job Description:</span>{" "}
              {job_description}
            </p>
            <p>
              <span className="font-bold text-xl">Job Responsibility:</span>{" "}
              {job_responsibility}
            </p>
            <p>
              <span className="font-bold text-xl">
                Educational Requirements:
              </span>{" "}
              {educational_requirements}
            </p>
            <p>
              <span className="font-bold text-xl">Experiences:</span>{" "}
              {experiences}
            </p>
          </div>
          <div className=" p-4">
            <h2 className="font-bold text-xl">Job Details</h2>
            <p>$Salary: {salary}</p>
            <p> {job_title}</p>
            <h2 className="font-bold text-xl">Contact Information</h2>
            <p>Phone: {contact_information.phone}</p>
            <p>Email: {contact_information.email}</p>
            <p>Phone: {contact_information.address}</p>
            <button onClick={handleApplyJob} className="w-full btn-primary p-3 my-4">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
