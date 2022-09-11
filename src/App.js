import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Showalert from "./components/Showalert";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar name="Textutils" />
        <Showalert alert={alert} />

        <Routes>
          <Route path="/" element={<Form showAlert={showAlert} />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
