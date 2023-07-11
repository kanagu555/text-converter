import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AppContext } from "../../App";

const InverseCase = () => {
  const inverseCaseBtnContext = useContext(AppContext);
  const [inputValue, setOutputValue, setInverseCaseMsg] = [
    inverseCaseBtnContext[0],
    inverseCaseBtnContext[3],
    inverseCaseBtnContext[4],
  ];

  const toInverse = () => {
    if (inputValue) {
      const inverseOutput = inputValue.split("").map((char) => {
        const checkInverse =
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        return checkInverse;
      });
      setOutputValue(inverseOutput.join(""));
      setInverseCaseMsg((prevState) => ({
        ...prevState,
        inverseCaseSuccess: true,
        lowerCaseSuccess: false,
        upperCaseSuccess: false,
        camelCaseSuccess: false,
        mixedCaseSuccess: false,
      }));
    }
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
