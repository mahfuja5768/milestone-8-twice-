import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center my-12">
            <h2 className="text-6xl text-red-500 mb-12 font-bold">Oops!!</h2>
            <Link to={'/'} className="text-4xl text-green-500 mb-6 font-bold">Go back to home page</Link>
        </div>
    );
};

export default ErrorPage;