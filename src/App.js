import React, { createContext, useState } from "react";
import MainBtn from "./components/ButtonFields/MainBtn";
import MainForm from "./components/FormFields/MainForm";
import "./App.css";
import Footer from "./components/Footer/Footer";

export const AppContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [alertMessage, setAlertMessage] = useState({
    lowerCaseSuccess: false,
    upperCaseSuccess: false,
    camelCaseSuccess: false,
  });


  return (
    <div className="bg-height">
      <AppContext.Provider
        value={[inputValue, setInputValue, outputValue, setOutputValue, setAlertMessage, alertMessage]}
      >
        <MainForm />
        <MainBtn />
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
