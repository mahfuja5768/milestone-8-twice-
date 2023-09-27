import { useLoaderData, useParams } from "react-router-dom";
import { saveFavPhn } from "./localstorage";

const PhoneDetails = () => {
  const phones = useLoaderData();
  console.log(phones);
  const { id } = useParams();
  const idNumber = parseInt(id);
  console.log(idNumber);
  const phone = phones.find((phone) => phone.id == idNumber);
  console.log(phone);
  const { brand_name, phone_name, price, image } = phone || {};

  const handleAddToFav = () => {
    saveFavPhn(idNumber);
  };
  return (
    <div>
      <div className="hero my-12">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Details</h1>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-52" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{brand_name}</h2>
          <p>{phone_name}</p>
          <p>$ {price}</p>

          <div className="card-actions ">
            <button onClick={handleAddToFav} className="btn btn-primary">
              Add to fav
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
