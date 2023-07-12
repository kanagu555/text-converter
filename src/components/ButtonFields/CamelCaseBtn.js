import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./Button.css";
import { AppContext } from "../../App";

const CamelCaseBtn = () => {
  const camelCaseBtnContext = useContext(AppContext);
  const [inputValue, setOutputValue, setCamelCaseMsg] = [
    camelCaseBtnContext[0],
    camelCaseBtnContext[3],
    camelCaseBtnContext[4],
  ];

  const toCamelCase = () => {
    if (inputValue) {
      const camelOutput = inputValue
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
      setOutputValue(camelOutput);
      setCamelCaseMsg((prevState) => ({
        ...prevState,
        camelCaseSuccess: true,
        lowerCaseSuccess: false,
        upperCaseSuccess: false,
        mixedCaseSuccess: false,
        inverseCaseSuccess: false,
        copySuccess: false,
      }));
    }
  };

  return (
    <div className="btn-margin">
      <Button
        style={{ textTransform: "none" }}
        variant="contained"
        onClick={toCamelCase}
      >
        camelCase
      </Button>
    </div>
  );
};

export default CamelCaseBtn;
