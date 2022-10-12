import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AppContext } from "../../App";

const MixedCaseBtn = () => {
  const mixedCaseBtnContext = useContext(AppContext);
  const [inputValue, setOutputValue] = [
    mixedCaseBtnContext[0],
    mixedCaseBtnContext[3],
  ];

  const toMixed = () => {
    const mixedOutput = inputValue.split("").map((char, index) => {
      const checkMixed = index % 2 === 0 ? char.toUpperCase() : char;
      return checkMixed;
    });
    setOutputValue(mixedOutput.join(""));
  };

  return (
    <div>
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
