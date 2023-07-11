import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AppContext } from "../../App";

const UpperCaseBtn = () => {
  const upperCaseBtnContext = useContext(AppContext);
  const [inputValue, setOutputValue, setUpperCaseMsg] = [
    upperCaseBtnContext[0],
    upperCaseBtnContext[3],
    upperCaseBtnContext[4],
  ];

  const toUpper = () => {
    if (inputValue) {
      setOutputValue(inputValue.toUpperCase());
      setUpperCaseMsg((prevState) => ({
        ...prevState,
        upperCaseSuccess: true,
        lowerCaseSuccess: false,
        camelCaseSuccess: false,
        mixedCaseSuccess: false,
        inverseCaseSuccess: false,
      }));
    }
  };

  return (
    <div className="btn-margin">
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
