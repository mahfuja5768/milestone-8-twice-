import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AllDonationCard = ({ donation }) => {
  //   console.log(donation);
  const {
    id,
    card_bg,
    category,
    category_name_bg,
    image,
    text_n_button_bg,
    title,
  } = donation || {};

  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/donationInfo/${id}`);
  };

  return (
    <div>
      <div
        onClick={() => handleDetail(id)}
        style={{ backgroundColor: card_bg }}
        className="card w-full h-[320px] card-compact rounded-lg shadow-xl cursor-pointer select-none"
      >
        <figure>
          <img className="w-full h-[180px]" src={image} alt="Donation Item" />
        </figure>
        <div className="card-body py-4 m-0">
          <h2
            style={{
              backgroundColor: category_name_bg,
              color: text_n_button_bg,
            }}
            className="text-sm font-medium w-20 p-2 text-center rounded"
          >
            {category}
          </h2>
          <h2
            style={{
              color: text_n_button_bg,
            }}
            className="text-xl font-semibold text-[${text_n_button_bg}]"
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

AllDonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default AllDonationCard;
