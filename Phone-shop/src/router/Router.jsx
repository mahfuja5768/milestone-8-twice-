import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import PhoneDetails from "../components/phoneDetails";
import FavPhones from "../components/FavPhones";

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
        path: "/phone/:id",
        loader: ()=> fetch('../phones.json'),
        element: <PhoneDetails></PhoneDetails>
      },
      {
        path: "/favorite",
        loader: ()=> fetch('../phones.json'),
        element: <FavPhones></FavPhones>
      },
      {
        path: "/login",
        loader: ()=> fetch('../jobs.json'),
        element: <Login></Login>
      },
    ],
  },
]);
