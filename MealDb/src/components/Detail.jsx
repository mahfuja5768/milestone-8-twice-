import { useLoaderData, useNavigate } from "react-router-dom";

const Detail = () => {
  const details = useLoaderData().meals[0];
  //   console.log(details);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="card shadow-xl">
        <figure className="px-10 pt-10">
          <img src={details.strMealThumb} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{details.strMeal}</h2>
          <p className="text-justify">
            Instructions: {details.strInstructions}
          </p>
          <p>Area: {details.strArea}</p>
          <div className="card-actions">
            <button onClick={handleBack} className="btn btn-primary">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
