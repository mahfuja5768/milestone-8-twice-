import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";

const DonationDetails = () => {
  const allDonation = useLoaderData();
  const { id } = useParams();
  const selectedDonation = allDonation.find((donation) => donation.id == id);

  const { image, description, text_n_button_bg, title, donation_amount } =
    selectedDonation || {};

  const saveDonationId = (id) => {
    const storedDonationIds =
      JSON.parse(localStorage.getItem("donationIds")) || [];
    const exists = storedDonationIds.find((donationId) => donationId === id);
    if (!exists) {
      storedDonationIds.push(id);
      localStorage.setItem("donationIds", JSON.stringify(storedDonationIds));
      toast.success("Successfully donated!")
    } else {
      return toast.error("You had already donated in this!");
    }
  };

  const handleDonate = () => {
    saveDonationId(id);
  };

  return (
    <div className="max-w-[1280px] mx-auto ">
      <Navbar></Navbar>
      <div className="card card-compact rounded-lg my-16 px-3">
        <figure>
          <img src={image} alt="donation png" className="w-full" />
        </figure>
        <div className="md:-mt-40 -mt-20 h-[80px] md:h-[159px] bg-black bg-opacity-40">
          <button
            onClick={handleDonate}
            style={{
              backgroundColor: text_n_button_bg,
            }}
            className="sm:btn-sm md:btn flex rounded md:text-white border-none text-white px-2 text-lg md:text-xl font-semibold m-4 md:m-8"
          >
            Donate ${donation_amount}
          </button>
        </div>
        <div className="card-body">
          <h2 className="text-2xl md:text-4xl font-bold py-1 md:py-4 text-justify">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default DonationDetails;
