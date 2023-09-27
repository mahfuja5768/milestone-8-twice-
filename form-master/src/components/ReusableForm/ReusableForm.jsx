const ReusableForm = ({ formTitle, handleSubmit, submitBtn , children}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">{formTitle} Form</h2>
      <p>{children}</p>
      <form onSubmit={handleLocalSubmit} className="flex flex-col gap-1">
        <input type="text" name="name" className="p-4" placeholder="name" />{" "}
        <br />
        <input
          type="email"
          name="email"
          className="p-4"
          placeholder="email"
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="p-4"
          required
        />{" "}
        <br />
        <input
          className="btn-primary p-4 rounded-lg"
          type="submit"
          value={submitBtn}
        />
      </form>
    </div>
  );
};

export default ReusableForm;
