import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };
  useEffect(()=>{
    nameRef.current.focus();
  }, [])
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <input
          ref={nameRef}
          type="text"
          name="name"
          className="p-4"
          placeholder="name"
          defaultValue={'Java'}
        />{" "}
        <br />
        <input
          ref={emailRef}
          type="email"
          name="email"
          className="p-4"
          placeholder="email"
         
        />{" "}
        <br />
        <input
          ref={passRef}
          type="password"
          name="password"
          placeholder="password"
          className="p-4"
          required
        />{" "}
        <br />
        <input type="submit" value="Submit" className="p-4" />
      </form>
    </div>
  );
};

export default RefForm;
