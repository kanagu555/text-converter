import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AppContext } from "../../App";

const InverseCase = () => {
  const inverseCaseBtnContext = useContext(AppContext);
  const [inputValue, setOutputValue] = [
    inverseCaseBtnContext[0],
    inverseCaseBtnContext[3],
  ];

  const toInverse = () => {
    const inverseOutput = inputValue.split("").map((char) => {
      const checkInverse =
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
      return checkInverse;
    });
    setOutputValue(inverseOutput.join(""));
  };

  return (
    <div className="btn-margin">
      <Button
        style={{ textTransform: "none" }}
        variant="contained"
        onClick={toInverse}
      >
        InVeRsE CaSe
      </Button>
    </div>
  );
};

export default InverseCase;
