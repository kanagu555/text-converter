import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AppContext } from "../../App";

const UpperCaseBtn = () => {
  const upperCaseBtnContext = useContext(AppContext);
  const [inputValue, setOutputValue] = [
    upperCaseBtnContext[0],
    upperCaseBtnContext[3],
  ];

  const toUpper = () => {
    setOutputValue(inputValue.toUpperCase());
  };

  return (
    <div>
      <Button
        style={{ textTransform: "none" }}
        variant="contained"
        onClick={toUpper}
      >
        UPPER CASE
      </Button>
    </div>
  );
};

export default UpperCaseBtn;
