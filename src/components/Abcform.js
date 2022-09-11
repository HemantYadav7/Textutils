import React, { useState } from "react";

export default function Abcform(props) {
  const [text, setText] = useState("");
  const change = (e) => {
    e.target.value = setText(e.target.value);
  };
  const handledownclick = () => {
    let newtxt = text.toUpperCase();

    setText(newtxt);
    props.showAlert("success", " Formated to Upper Case");
  };
  const handledown = () => {
    let down = text.toLowerCase();
    setText(down);
    props.showAlert("success", " Formated to Lower Case");
  };
  const cleartext = () => {
    setText("");

    props.showAlert("danger", " Text Cleared");
  };

  const copyText = () => {
    let value = document.getElementById("value");
    value.select();
    navigator.clipboard.writeText(value.value);
    props.showAlert("success ", " Copied Text");
  };

  return (
    <>
      <div className="form-container">
        <div className="my-3 mx-5">
          <h1 className="main-heading">Enter Your Text To Analize Below</h1>
          <textarea
            className="BB my-9"
            placeholder="type here"
            value={text}
            onChange={change}
            id="value"
            cols="70"
            rows="7"
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary"
            onClick={handledownclick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            onClick={handledown}
            className="mx-2 btn btn-primary"
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            onClick={cleartext}
            className="mx-2 btn btn-primary"
          >
            Clear text
          </button>
          <button
            disabled={text.length === 0}
            onClick={copyText}
            className="mx-2 btn btn-primary"
          >
            copy text
          </button>
        </div>
        <div className="sec container">
          <h1 className="heading">Your Text Summery</h1>
          <p>
            {text.split(" ").filter((e) => e.length !== 0).length} words and{" "}
            {text.length} characters
          </p>
          <h3 className="heading">Time taken to read this </h3>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>
          <h2 className="heading">Read Your Text here</h2>
          <p>{text.length > 0 ? text : "Try to write something !!!"}</p>
        </div>
      </div>
    </>
  );
}
