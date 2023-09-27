import { useEffect, useState } from "react";
import Phone from "./Phone";

const Phones = () => {
  const [phones, setPhones] = useState();
  useEffect(() => {
    fetch("phones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  return (
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-center text-4xl font-bold my-2">
        Our Phones Collections
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
        {phones?.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Phones;
