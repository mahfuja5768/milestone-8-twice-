import { useNavigate } from "react-router-dom";


const Meal = ({meal}) => {
    // console.log(meal)
    const navigate = useNavigate();
    const handleDetails = ()=>{
       navigate(`/meals/${meal.idMeal}`)
    }
    return (
        <div>
           <div className="card bg-slate-200 shadow-xl">
        <figure className="p-4">
          <img
            src={meal.strMealThumb}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center my-1">
          <h2 className="card-title">{meal.strMeal}</h2>
          <div className="card-actions mt-3">
            <button onClick={handleDetails} className="btn btn-info">Show details</button>

          </div>
        </div>
      </div> 
        </div>
    );
};

export default Meal;