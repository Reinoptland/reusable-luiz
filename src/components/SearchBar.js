import React from "react";
import Button from "./Button";
import InputField from "./InputField";
import Label from "./Label";
import "./styles.css";

export default function SearchBar(props) {
  return (
    <div className="sb-main">
      <div className="sb-label">
        {props.label} <div className="sb-input">{props.input}</div>
      </div>
      <div className="sb-button">{props.button}</div>
    </div>
  );
}
