import React from "react";
import TextField from "@mui/material/TextField";

const OutputTextForm = () => {
  return (
    <div>
      <TextField
        style={{ width: 500 }}
        placeholder="Your output text"
        multiline
        rows={10}
      />
    </div>
  );
};

export default OutputTextForm;
