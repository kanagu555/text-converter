import React, { createContext, useState } from "react";
import InputTextForm from "./InputTextForm";
import OutputTextForm from "./OutputTextForm";
import ResetBtn from "../ButtonFields/ResetBtn";
import "./Form.css";
import CopyBtn from "../ButtonFields/CopyBtn";
import Alert from "@mui/material/Alert";

export const MainFormContext = createContext();

function App() {
  const [copySuccess, setCopySuccess] = useState(false);
  return (
    <div>
      <MainFormContext.Provider value={[setCopySuccess]}>
        <h1 className="title-txt">Text Converter</h1>
          {copySuccess ?
          <Alert severity="success" className="alert-txt">
            Text message copied sucessfully.
          </Alert>
          : null}
        <div className="flex-form-container">
          <InputTextForm />
          <ResetBtn />
          <CopyBtn />
          <OutputTextForm />
        </div>
      </MainFormContext.Provider>
    </div>
  );
}

export default App;
