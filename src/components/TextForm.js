import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text2");
  const handleUpConvert = () => {
    console.log("upcase case was clicked");
    setText("I am writing in this page");
  };
  const handleOnChange = () => {
    console.log("upcase case was clicked");
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
        <button className="btn btn-primary" onClick={handleUpConvert}>
          Convert to UpperCase
        </button>
      </form>
    </div>
  );
}
TextForm.prototype = { heading: String };
