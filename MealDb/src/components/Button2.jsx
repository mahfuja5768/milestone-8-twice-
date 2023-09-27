import { Link } from "react-router-dom";

const Button2 = () => {
    return (
      <div>
        <Link to={'/meals2'}> <button className="btn btn-warning">Seafood</button></Link>
      </div>
    );
  };
  
  export default Button2;