import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";
import SelectedDonation from "./SelectedDonation";

const SelectedDonations = () => {
  const [selectedDonations, setSelectedDonations] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);

  const handleShowAll = () => {
    setIsShowAll(!isShowAll);
  };

  const allDonation = useLoaderData();
  // console.log(allDonation);
  useEffect(() => {
    const storedDonationIds =
      JSON.parse(localStorage.getItem("donationIds")) || [];
    if (allDonation.length > 0) {
      const selectedDonationIds = [];
      for (const id of storedDonationIds) {
        const selectedDonation = allDonation.find(
          (donation) => donation.id === parseInt(id)
        );
        if (selectedDonation) {
          selectedDonationIds.push(selectedDonation);
        }
      }
      setSelectedDonations(selectedDonationIds);
    }
  }, [allDonation]);

  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <Navbar></Navbar>

      {!selectedDonations.length && (
        <h2 className="text-2xl md:text-5xl text-[#0052FF] font-bold flex justify-center items-center h-[60vh]">
           You still have not donated!
        </h2>
      )}

      <div className="mt-12 mb-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isShowAll
          ? selectedDonations.map((donation) => (
              <SelectedDonation
                key={donation.id}
                donation={donation}
              ></SelectedDonation>
            ))
          : selectedDonations
              .slice(0, 4)
              .map((donation) => (
                <SelectedDonation
                  key={donation.id}
                  donation={donation}
                ></SelectedDonation>
              ))}
      </div>
      {!isShowAll && selectedDonations.length > 4 ? (
        <div className="flex justify-center">
          <button
            onClick={handleShowAll}
            className="btn rounded border-none my-4 bg-green-700 hover:text-black text-white text-sm"
          >
            See All
          </button>
        </div>
      ) : (
        <div className="hidden">
          <button
            onClick={handleShowAll}
            className="btn rounded border-none my-4 bg-green-700 hover:text-black text-white text-sm"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedDonations;
