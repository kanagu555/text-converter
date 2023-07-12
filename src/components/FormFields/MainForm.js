import React, { createContext, useState, useContext } from "react";
import InputTextForm from "./InputTextForm";
import OutputTextForm from "./OutputTextForm";
import ResetBtn from "../ButtonFields/ResetBtn";
import "./Form.css";
import CopyBtn from "../ButtonFields/CopyBtn";
import Alert from "@mui/material/Alert";
import { AppContext } from "../../App";

export const MainFormContext = createContext();

function App() {
  const alertMessages = useContext(AppContext);
  const {
    lowerCaseSuccess,
    upperCaseSuccess,
    camelCaseSuccess,
    mixedCaseSuccess,
    inverseCaseSuccess,
    copySuccess,
  } = [alertMessages[5]][0];
  return (
    <div>
      <MainFormContext.Provider>
        <h1 className="title-txt">Text Converter</h1>
        {copySuccess ? (
          <Alert severity="success" className="alert-txt">
            Text message copied successfully.
          </Alert>
        ) : null}
        {lowerCaseSuccess ? (
          <Alert severity="success" className="alert-txt">
            Text successfully converted to lower case.
          </Alert>
        ) : null}
        {upperCaseSuccess ? (
          <Alert severity="success" className="alert-txt">
            Text successfully converted to upper case.
          </Alert>
        ) : null}
        {camelCaseSuccess ? (
          <Alert severity="success" className="alert-txt">
            Text successfully converted to camel case.
          </Alert>
        ) : null}
        {mixedCaseSuccess ? (
          <Alert severity="success" className="alert-txt">
            Text successfully converted to mixed case.
          </Alert>
        ) : null}
        {inverseCaseSuccess ? (
          <Alert severity="success" className="alert-txt">
            Text successfully converted to inverse case.
          </Alert>
        ) : null}
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
