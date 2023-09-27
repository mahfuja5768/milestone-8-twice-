import { Link } from "react-router-dom";

const Button4 = () => {
    return (
      <div>
        <Link to={'/meals4'}> <button className="btn btn-error">Dessert</button></Link>
      </div>
    );
  };
  
  export default Button4;