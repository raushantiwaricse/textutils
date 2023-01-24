import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpConvert = () => {
    console.log("upcase case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("upcase case was clicked");
    setText(event.target.value);
  };
  const handlelowConvert = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleremove = () => {
    let newtext = text.replace(text, " ");
    setText(newtext);
  };
  return (
    <div>
      <form>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            rows="3"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpConvert}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary  mx-1"
          onClick={handlelowConvert}
        >
          Convert to lowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary  mx-1"
          onClick={handleremove}
        >
          Remove text
        </button>
      </form>
      <div className="container">
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} minutes read time</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
TextForm.prototype = { heading: String };
