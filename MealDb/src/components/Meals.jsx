import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const Meals = () => {
  const meals = useLoaderData().meals;
//   console.log(meals);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12 px-4">
        {
            meals.map(meal=><Meal key={meal.idIngredient} meal={meal}></Meal>)
        }
    </div>
  );
};

export default Meals;
