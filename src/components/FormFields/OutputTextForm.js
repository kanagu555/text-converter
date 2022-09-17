import React from "react";
import TextField from "@mui/material/TextField";

const OutputTextForm = () => {
  return (
    <div>
      <TextField
        label="Enter your input text"
        multiline
        rows={7}
      />
    </div>
  );
};

export default OutputTextForm;
