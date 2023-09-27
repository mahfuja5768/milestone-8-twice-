import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Statistics from "../components/Statistics";
import DonationDetails from "../components/DonationDetails";
import SelectedDonations from "../components/SelectedDonations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donationInfo/:id",
        loader: () => fetch("../donation.json"),
        element: <DonationDetails></DonationDetails>,
      },
      {
        path: "/donation",
        loader: () => fetch("../donation.json"),
        element: <SelectedDonations></SelectedDonations>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);