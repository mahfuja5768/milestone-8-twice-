import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "./localstorage";
import FavPhone from "./FavPhone";

const FavPhones = () => {
  const phones = useLoaderData();
//   console.log(phones);
  const [favPhones, setFavPhones] = useState();

  useEffect(() => {
    const storedPhonesIds = getStoredCart();
    if (phones.length > 0) {
        const favPhonesArray = [];
        for (const id in storedPhonesIds) {
            const phone = phones.find((phn) => phn.id === id);
            console.log(phone);
        if (phone) {
          favPhonesArray.push(phone);
        }
      }
      setFavPhones(favPhonesArray);

    }
  }, [phones]);
  return (
    <div>
         <div className="hero my-12">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Favorites List</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
      {favPhones?.map((phone) => (
        <FavPhone key={phone.id} phone={phone}></FavPhone>
      ))}
      </div>
    </div>
  );
};

export default FavPhones;
