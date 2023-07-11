import { Button } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "./../../App";

function CopyBtn() {
  const copyBtnContext = useContext(AppContext);
  const [outputValue, setCopySuccess] = [copyBtnContext[2], copyBtnContext[4]];

  const copyFunc = () => {
    if (outputValue) {
      navigator.clipboard.writeText(outputValue);
      setCopySuccess((prevState) => ({
        ...prevState,
        lowerCaseSuccess: false,
        upperCaseSuccess: false,
        camelCaseSuccess: false,
        mixedCaseSuccess: false,
        inverseCaseSuccess: false,
        copySuccess: true,
      }));
    }
  };

  return (
    <div className="btn-margin">
      <Button variant="contained" color="success" onClick={copyFunc}>
        Copy
      </Button>
    </div>
  );
}

export default CopyBtn;
