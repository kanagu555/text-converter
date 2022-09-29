import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./Button.css";
import { AppContext } from "../../App";

const LowerCaseBtn = () => {
  const LowerCaseBtnContext = useContext(AppContext);
  const [inputValue, setOutputValue] = [LowerCaseBtnContext[0],LowerCaseBtnContext[3]];

  const toLower = () => {
    setOutputValue(inputValue.toLowerCase())
  };

  return (
    <div>
      <Button
        style={{ textTransform: "none" }}
        variant="contained"
        onClick={toLower}
      >
        lower case
      </Button>
    </div>
  );
};

export default LowerCaseBtn;
