import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { AppContext } from "./../../App";


const InputTextForm = () => {
  const inputTextFormContext = useContext(AppContext)
  const [inputValue, setInputValue] = inputTextFormContext


  const inputFunc = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <TextField
        style={{ width: 500 }}
        placeholder="Enter your input text"
        multiline
        rows={10}
        autoFocus
        value={inputValue}
        onChange={inputFunc}
      />
    </div>
  );
};

export default InputTextForm;
