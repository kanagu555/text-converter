import { Button } from "@mui/material";
import React from "react";
import "./Button.css";

const CamelCaseBtn = () => {
  return (
    <div>
      <Button style={{ textTransform: "none" }} variant="contained">
        Camel Case
      </Button>
    </div>
  );
};

export default CamelCaseBtn;
