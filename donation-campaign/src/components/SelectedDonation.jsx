import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SelectedDonation = ({ donation }) => {
  const {
    id,
    card_bg,
    category,
    category_name_bg,
    image,
    text_n_button_bg,
    title,
    donation_amount,
  } = donation || {};

  return (
    <div>
      <div
        style={{ backgroundColor: card_bg }}
        className="card md:card-side rounded-lg shadow-xl"
      >
        <figure className="md:max-w-[250px]">
          <img className="w-full md:h-[250px] h-[200px]" src={image} alt="" />
        </figure>
        <div className="card-body md:py-0 m-0 text-center md:text-start">
          <h2
            style={{
              backgroundColor: category_name_bg,
              color: text_n_button_bg,
            }}
            className="text-sm w-20 md:p-1 p-2 my-3 text-center rounded mx-auto md:mx-0"
          >
            {category}
          </h2>
          <h2 className="text-2xl font-semibold text-[${text_n_button_bg}]">
            {title}
          </h2>
          <h3
            style={{
              color: text_n_button_bg,
            }}
            className="text-base font-semibold text-[${text_n_button_bg}]"
          >
            ${donation_amount}
          </h3>
          <Link to={`/donationInfo/${id}`}>
            <button
              style={{
                backgroundColor: text_n_button_bg,
              }}
              className="p-2 rounded border-none my-2 text-white text-sm font-semibold"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SelectedDonation.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default SelectedDonation;
