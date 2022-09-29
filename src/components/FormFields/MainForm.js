import React from "react";
import InputTextForm from "./InputTextForm";
import OutputTextForm from "./OutputTextForm";
import ResetBtn from '../ButtonFields/ResetBtn'
import "./Form.css";
import CopyBtn from "../ButtonFields/CopyBtn";

function App() {
  return (
    <div>
      <h1 className="title-txt">Text Converter</h1>
      <div className="flex-form-container">
        <InputTextForm />
        <ResetBtn />
        <CopyBtn />
        <OutputTextForm />
      </div>
    </div>
  );
}

export default App;
