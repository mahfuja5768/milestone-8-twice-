import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/4N06T5H/er2.webp)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[100vh] grid place-content-center px-4"
    >
      <div className="grid place-content-center justify-center bg-black p-5 opacity-90 rounded-lg max-w-[1280px] mx-auto">
        <h1 className="text-3xl md:text-5xl text-[#f14242] font-semibold mb-6">
          Sorry, <br /> the page you requested was not found.
        </h1>
        <Link className=" btn-link text-2xl text-center md:text-3xl text-[#3bc54d] font-bold mb-6">
          Go back to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
