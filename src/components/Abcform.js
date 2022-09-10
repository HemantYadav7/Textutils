import React, { useState } from "react";

export default function Abcform(props) {
  const [text, setText] = useState("");
  const change = (e) => {
    // console.log('changed')
    e.target.value = setText(e.target.value);

    // console.log(text)
  };
  const handledownclick = () => {
    // console.log('clicked')
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
    // text.style.color='white'
    props.showAlert("danger", " Text Cleared");
  };
  // setText('this is che=anged by ')

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
          <h1>Enter Your Text To Analize Below</h1>
          <textarea
            className="BB my-9"
            placeholder="type here"
            value={text}
            onChange={change}
            id="value"
            cols="70"
            rows="7"
          ></textarea>
          <button className="btn btn-primary" onClick={handledownclick}>
            Convert to Uppercase
          </button>
          <button onClick={handledown} className="mx-2 btn btn-primary">
            Convert to Lowercase
          </button>
          <button onClick={cleartext} className="mx-2 btn btn-primary">
            Clear text
          </button>
          <button onClick={copyText} className="mx-2 btn btn-primary">
            copy text
          </button>
        </div>
        <div className="sec container">
          <h1 className="heading">Your Text Summery</h1>
          <p>
            {text.split(" ").length - 1} words and {text.length} characters
          </p>
          <h3 className="heading">Time taken to read this </h3>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>
          <h2 className="heading">Read Your Text here</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
