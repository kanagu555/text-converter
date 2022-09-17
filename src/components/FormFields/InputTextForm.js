import React from "react";
import TextField from "@mui/material/TextField";

const InputTextForm = () => {
  return (
    <div>
      <TextField
        placeholder="Enter your input text"
        multiline
        rows={10}
      />
    </div>
  );
};

export default InputTextForm;
