import React from "react";
import TextField from "@mui/material/TextField";

const OutputTextForm = () => {
  return (
    <div>
      <TextField
        placeholder="Your output text"
        multiline
        rows={10}
      />
    </div>
  );
};

export default OutputTextForm;
