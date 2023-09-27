import AllDonationCard from "./AllDonationCard";
import PropTypes from "prop-types";

const AllDonationCards = ({ displayByFilter, allDonation }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 my-2 mb-10">
      {!displayByFilter.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allDonation.map((donation) => (
            <AllDonationCard
              key={donation.id}
              donation={donation}
            ></AllDonationCard>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayByFilter.map((donation) => (
            <AllDonationCard
              key={donation.id}
              donation={donation}
            ></AllDonationCard>
          ))}
        </div>
      )}
    </div>
  );
};
AllDonationCards.propTypes = {
  displayByFilter: PropTypes.array.isRequired,
  allDonation: PropTypes.array.isRequired,
};

export default AllDonationCards;
