import React from "react";
import "./styles.css";

export default function InputField({ variant, children, ...props }) {
  return <input {...props} className={`input-basic ${variant}`} />;
}

{
  /* <label for="name">Name (4 to 8 characters):</label>

<input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10"></input> */
}
