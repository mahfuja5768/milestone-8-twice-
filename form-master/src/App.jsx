import "./App.css";
import HookForm from "./components/HookForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import RefForm from "./components/RefForm";
// import StateFulForm from "./components/StateFulForm";

function App() {
  const handleSignUp = (data) => {
    console.log(data);
  };
  const handleProfileUpdate = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        {/* <StateFulForm></StateFulForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
        <ReusableForm
          formTitle={"Sign Up"}
          submitBtn={"Sign up"}
          handleSubmit={handleSignUp}
        >
          <p className="text-3xl font-medium mb-3">Sign up now</p>
        </ReusableForm>
        <ReusableForm
          formTitle={"Profile Update"}
          submitBtn={"Update"}
          handleSubmit={handleProfileUpdate}
        >
          <p className="text-3xl font-medium mb-3">Update your profile now</p>
        </ReusableForm>
      </div>
    </>
  );
}

export default App;
