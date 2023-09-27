import { useState } from "react";

const useHookForm = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  //   return [value, onChange];
  return { value, onChange };
};

export default useHookForm;
