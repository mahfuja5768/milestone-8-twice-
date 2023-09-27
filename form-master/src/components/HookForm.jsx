import useHookForm from "../hooks/useHookForm";

const HookForm = () => {
  // const [name, handleOnChange] = useHookForm('rojoni')
  const emailState = useHookForm("r@m.com");
  const nameState = useHookForm("");
  const passState = useHookForm("");

  const handleSubmit = (e) => {
    console.log("form data", emailState.value, passState.value, nameState.value);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <input
          {...nameState}
          type="text"
          name="name"
          className="p-4"
          placeholder="name"
        />{" "}
        <br />
        <input
          {...emailState}
          type="email"
          name="email"
          className="p-4"
          placeholder="email"
        />{" "}
        <br />
        <input
          {...passState}
          type="password"
          name="password"
          placeholder="password"
          className="p-4"
        />{" "}
        <br />
        <input type="submit" value="Submit" className="p-4" />
      </form>
    </div>
  );
};

export default HookForm;
