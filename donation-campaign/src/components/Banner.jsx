import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Banner = ({ handleFilter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.text.value;
    handleFilter(inputValue);
    form.reset();
  };

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/1nSPr5d/donation-banner.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-[#fff] bg-gradient-to-t from-[#fff] p-0"></div>
        <div className="flex flex-col w-full">
          <div>
            <Navbar></Navbar>
          </div>
          <div className="hero-content min-h-[30vh] md:min-h-[30vh] text-center text-neutral-content mx-auto  my-8">
            <div className=" text-black ">
              <h1 className="mb-5 text-4xl leading-8  md:text-5xl li font-bold w-full  md:w-3/4  lg:w-full mx-auto">
                I Grow By Helping People In Need
              </h1>
              <div className="form-control w-full">
                  <form onSubmit={handleSubmit}>
                <div className="input-group w-3/4 md:w-1/2 lg:w-3/4 mx-auto my-5">
                    <input
                      name="text"
                      type="text"
                      placeholder="Search here...."
                      className="input input-bordered w-3/4"
                    />
                    <input
                      type="submit"
                      className="btn bg-[#FF444A] hover:text-black text-white text-xs md:text-base font-semibold w-12 px-10"
                      value="Search"
                    />
                </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleFilter: PropTypes.func,
};

export default Banner;
