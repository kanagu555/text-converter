import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./Button.css";
import { AppContext } from "../../App";

const LowerCaseBtn = () => {
  const lowerCaseBtnContext = useContext(AppContext);
  const [inputValue, setOutputValue, setLowerCaseMsg] = [
    lowerCaseBtnContext[0],
    lowerCaseBtnContext[3],
    lowerCaseBtnContext[4],
  ];

  const toLower = () => {
    if (inputValue) {
      setOutputValue(inputValue.toLowerCase());
      setLowerCaseMsg((prevState) => ({
        ...prevState,
        lowerCaseSuccess: true,
        upperCaseSuccess: false,
        camelCaseSuccess: false,
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
        onClick={toLower}
      >
        lower case
      </Button>
    </div>
  );
};

export default LowerCaseBtn;
