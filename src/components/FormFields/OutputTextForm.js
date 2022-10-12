import React, {useContext} from "react";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../App";

const OutputTextForm = () => {
  const outputTextFormContext = useContext(AppContext)
  const outputValue = outputTextFormContext[2];

  return (
    <div className="form-margin">
      <TextField
        style={{ width: 500 }}
        placeholder="Your output text"
        multiline
        value={outputValue}
        rows={10}
        disabled
      />
    </div>
  );
};

export default OutputTextForm;
