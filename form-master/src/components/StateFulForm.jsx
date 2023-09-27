import { useState } from "react";

const StateFulForm = () => {
  const [email, setEmail] = useState("asd@f.com");
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be 6 characters or longer!");
    } else {
      setError("");
      console.log(email, password);
    }
  };

  const handleEmailChange = (e) => {
    //    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    //    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <input type="text" name="name" className="p-4" placeholder="name" />{" "}
        <br />
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          name="email"
          className="p-4"
          placeholder="email"
        />{" "}
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="password"
          className="p-4"
          required
        />{" "}
        <br />
        <input type="submit" value="Submit" className="p-4" />
      </form>
     {
       error && <p>{error}</p>
     }
    </div>
  );
};

export default StateFulForm;
