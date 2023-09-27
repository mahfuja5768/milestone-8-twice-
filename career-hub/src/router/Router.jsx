import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import JobDetails from "../components/JobDetails";
import FeaturedJob from "../components/FeaturedJob";
import FeaturedJobs from "../components/FeaturedJobs";
import AppliedJobs from "../components/AppliedJobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/job/:id",
        loader: ()=> fetch('../jobs.json'),
        element: <JobDetails></JobDetails>
      },
      {
        path: "/applied",
        loader: ()=> fetch('../jobs.json'),
        element: <AppliedJobs></AppliedJobs>
      },
    ],
  },
]);
