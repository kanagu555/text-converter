import React from "react";
import TextField from "@mui/material/TextField";

const InputTextForm = () => {
  return (
    <div>
      <TextField
        style={{ width: 500 }}
        placeholder="Enter your input text"
        multiline
        rows={10}
        autoFocus
      />
    </div>
  );
};

export default InputTextForm;
