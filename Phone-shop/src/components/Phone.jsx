import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  console.log(phone);
  const { brand_name, phone_name, rating, price, id, image } = phone || {};
  return (
    <div>
      <div className="card shadow-xl px-4">
        <img className="w-44 h-24" src={image} alt="" />
        <div className="card-body px-0 space-y-2">
          <p>{rating}</p>
          <h2 className="card-title text-2xl">{brand_name}</h2>
          <p>{phone_name}</p>
          <p>$ {price}</p>
          <div className="card-actions">
            <Link to={`/phone/${id}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
