import { Button } from "@mui/material";
import React from "react";
import './Button.css'

const CamelCaseBtn = () => {
  return (
    <div>
      <Button style={{ textTransform: "none" }} className="btn-props" variant="contained">Camel Case</Button>
    </div>
  );
};

export default CamelCaseBtn;
