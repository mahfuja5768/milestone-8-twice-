const FavPhone = ({ phone }) => {
  console.log(phone);
  const { brand_name, phone_name, price, image } = phone || {};
  return (
    <div>
     
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-52" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{brand_name}</h2>
          <p>{phone_name}</p>
          <p>$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default FavPhone;
