import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AppContext } from "../../App";

const MixedCaseBtn = () => {
  const mixedCaseBtnContext = useContext(AppContext);
  const [inputValue, setOutputValue, setMixedCaseMsg] = [
    mixedCaseBtnContext[0],
    mixedCaseBtnContext[3],
    mixedCaseBtnContext[4],
  ];

  const toMixed = () => {
    if (inputValue) {
      const mixedOutput = inputValue.split("").map((char, index) => {
        const checkMixed = index % 2 === 0 ? char.toUpperCase() : char;
        return checkMixed;
      });
      setOutputValue(mixedOutput.join(""));
      setMixedCaseMsg((prevState) => ({
        ...prevState,
        mixedCaseSuccess: true,
        lowerCaseSuccess: false,
        upperCaseSuccess: false,
        camelCaseSuccess: false,
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
        onClick={toMixed}
      >
        MiXeD CaSe
      </Button>
    </div>
  );
};

export default MixedCaseBtn;
