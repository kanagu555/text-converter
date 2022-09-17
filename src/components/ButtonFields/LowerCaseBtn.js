import { Button } from "@mui/material";
import React from "react";
import "./Button.css";

const LowerCaseBtn = () => {

    const toLower = () => {
        
    }

  return (
    <div>
      <Button style={{ textTransform: "none" }} variant="contained"
      onClick={toLower}
      >
        lower case
      </Button>
    </div>
  );
};

export default LowerCaseBtn;
