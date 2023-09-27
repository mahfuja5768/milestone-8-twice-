import { Outlet } from "react-router-dom";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button4 from "./Button4";
import Button3 from "./Button3";

const Buttons = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-5">
        <Button1></Button1>
        <Button2></Button2>
        <Button3></Button3>
        <Button4></Button4>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Buttons;
