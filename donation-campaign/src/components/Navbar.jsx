import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const listItems = (
    <>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline decoration-[#FF444A] decoration-4 underline-offset-8 font-bold text-[#FF444A] hover:text-[#FF444A] hover:bg-transparent"
              : "text-black hover:bg-transparent"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline decoration-[#FF444A] decoration-4 underline-offset-8 font-bold text-[#FF444A] hover:text-[#FF444A] hover:bg-transparent"
              : "text-black hover:bg-transparent "
          }
          to={"/donation"}
        >
          Donation
        </NavLink>
      </li>
      <li className="lg:mx-2 mb-4 lg:mb-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline decoration-[#FF444A] decoration-4 underline-offset-8 font-bold text-[#FF444A] hover:text-[#FF444A] hover:bg-transparent"
              : "text-black hover:bg-transparent "
          }
          to={"/statistics"}
        >
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-transparent my-8 max-w-[1280px] mx-auto px-4 items-center relative">
        <div className="navbar-start ">
          <Link to={"/"}>
            <img
              className="w-36 md:w-52"
              src={"https://i.ibb.co/YPRspb9/Logo.png"}
              alt="Logo.png"
            />
          </Link>
        </div>
        <div className=" navbar-end">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu absolute bg-[#79c23f33] right-4 px-4 menu-sm dropdown-content mt-3 z-[1] text-lg rounded-lg  text-center"
            >
              {listItems}
            </ul>
          </div>
        </div>
        <div className="hidden">
          <Link to={"/"} className="">
            <img
              src={"https://i.ibb.co/YPRspb9/Logo.png"}
              className="w-36"
              alt="Logo.png"
            />{" "}
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal  text-lg px-1">{listItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
