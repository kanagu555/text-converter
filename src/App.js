import React, { createContext, useState } from "react";
import MainBtn from "./components/ButtonFields/MainBtn";
import MainForm from "./components/FormFields/MainForm";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  return (
    <div className="bg-height">
      <AppContext.Provider
        value={[inputValue, setInputValue, outputValue, setOutputValue]}
      >
        <MainForm />
        <MainBtn />
      </AppContext.Provider>
    </div>
  );
}

export default App;
