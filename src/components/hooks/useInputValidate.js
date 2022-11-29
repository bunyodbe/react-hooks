import { useState } from "react";

const useInputValidation = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const inputValidation = (text) => /\d/.test(text);
  const onChange = (e) => setValue(e.target.value);
  const colorText = inputValidation(value) ? "text-danger" : null;

  return { value, onChange, colorText, inputValidation };
};

export default useInputValidation;
