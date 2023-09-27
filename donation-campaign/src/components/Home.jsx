import { useEffect, useState } from "react";
import AllDonationCards from "./AllDonationCards";
import Banner from "./Banner";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [allDonation, setAllDonation] = useState([]);
  const [displayByFilter, setDisplayByFilter] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setAllDonation(data));
  }, []);

  const handleFilter = (inputValue) => {
    const inputValueParse = inputValue.toLowerCase();
    //    console.log(inputValueParse)
    if (inputValueParse === "education") {
      const donateForEducation = allDonation.filter(
        (donation) => donation.category === "Education"
      );
      setDisplayByFilter(donateForEducation);
    } else if (inputValueParse === "clothing") {
      const donateForClothing = allDonation.filter(
        (donation) => donation.category === "Clothing"
      );
      setDisplayByFilter(donateForClothing);
    } else if (inputValueParse === "food") {
      const donateForFood = allDonation.filter(
        (donation) => donation.category === "Food"
      );
      setDisplayByFilter(donateForFood);
    } else if (inputValueParse === "health") {
      const donateForHealth = allDonation.filter(
        (donation) => donation.category === "Health"
      );
      setDisplayByFilter(donateForHealth);
    } else if (
      inputValueParse !== "health" ||
      inputValueParse !== "food" ||
      inputValueParse !== "education" ||
      inputValueParse !== "clothing"
    ) {
      return toast.error("Available Donations for health, food, clothing and education!");
    }
  };

  return (
    <div>
      <Banner handleFilter={handleFilter}></Banner>
      <AllDonationCards
        displayByFilter={displayByFilter}
        allDonation={allDonation}
      ></AllDonationCards>
      <Toaster></Toaster>
    </div>
  );
};

export default Home;
