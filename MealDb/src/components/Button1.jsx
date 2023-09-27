import { Link } from "react-router-dom";



const Button1 = () => {
  
  return (
    <div>
      <Link to={'/meals'}> <button className="btn btn-success">Chicken</button></Link>
    </div>
  );
};

export default Button1;
