import React, {useContext} from "react";
import { Button } from "@mui/material";
import "./Button.css";
import { AppContext } from "../../App";

const CamelCaseBtn = () => {
  const camelCaseBtnContext = useContext(AppContext);
  const [inputValue, setOutputValue] = [camelCaseBtnContext[0],camelCaseBtnContext[3]];

  const toCamelCase = () => {
    const camelOutput = inputValue.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    setOutputValue(camelOutput)
  }

  return (
    <div>
      <Button style={{ textTransform: "none" }} variant="contained" onClick={toCamelCase}>
        Camel Case
      </Button>
    </div>
  );
};

export default CamelCaseBtn;
