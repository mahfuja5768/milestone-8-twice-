import { createBrowserRouter } from "react-router-dom";
import Buttons from "./Buttons";
import Meals from "./Meals";
import Detail from "./Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Buttons></Buttons>,
    children: [
      {
        path: "/meals",
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'),
        element: <Meals></Meals>,
      },
      {
        path:'/meals/:mealId',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element: <Detail></Detail>
      },
      {
        path: "/meals2",
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood'),
        element: <Meals></Meals>,
      },
      {
        path: "/meals3",
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef'),
        element: <Meals></Meals>,
      },
      {
        path: "/meals4",
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert'),
        element: <Meals></Meals>,
      },
    ],
  },
]);

export default router;
