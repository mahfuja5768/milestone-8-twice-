import { Link } from "react-router-dom";

const Button3 = () => {
    return (
      <div>
        <Link to={'/meals3'}> <button className="btn btn-info">Beef</button></Link>
      </div>
    );
  };
  
  export default Button3;