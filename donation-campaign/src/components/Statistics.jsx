import { useEffect, useState } from "react";
import Navbar from "./Navbar";

import { Chart } from "react-google-charts";
const Statistics = () => {
  const [donateQuantity, setDonateQuantity] = useState([]);

  useEffect(() => {
    const donationIds = JSON.parse(localStorage.getItem("donationIds")) || 0;
    const data = donationIds.length || 0;
    setDonateQuantity(data);
  }, [donateQuantity]);

  const data = [
    ["Donation", "Donation percentage"],
    ["Donated", (donateQuantity / 12) * 100],
    ["Remaining Donated", 100 - (donateQuantity / 12) * 100],
  ];
  const COLORS = ["#207482", "#cc0000"];

  const options = {
    legend: "none",
    pieSliceText: "value%",
    pieStartAngle: 90,
    colors: COLORS,
    pieSliceTextStyle: {
      fontSize: 15,
      fontWeight: "700",
    },
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar></Navbar>
      <Chart
        className="my-2"
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
      />
       {!donateQuantity && (
        <h2 className="text-2xl md:text-4xl text-[#207482] px-2 mb-5 mx-auto text-center font-bold flex justify-center items-center">
         You still have not donated!
        </h2>
      )}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="flex justify-center items-center gap-3">
          <h3 className="text-lg">Your Donation</h3>
          <div className=" bg-[#207482] w-[100px] h-[12px]"></div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <h3 className="text-lg">Total Donation</h3>
          <div className=" bg-[#cc0000] w-[100px] h-[12px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
