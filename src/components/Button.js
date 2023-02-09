// - Write a reusable button,
// - a reusable input
// - a reusable label
// Make a molecule: A search bar
// BONUS:
// Can you leave the search logic out of the searchbar

import React from "react";
import "./styles.css";

export default function Button({ variant = "primary", children, ...props }) {
  return (
    <div>
      <button {...props} className={`btn ${variant}`}>
        go {children}
      </button>
    </div>
  );
}
