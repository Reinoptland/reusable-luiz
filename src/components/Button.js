// - Write a reusable button,
// - a reusable input
// - a reusable label
// Make a molecule: A search bar
// BONUS:
// Can you leave the search logic out of the searchbar

import React from "react";
import "./styles.css";

export default function Button({ variant = "primary", children, ...props }) {
  console.log(
    "props.variant",
    props.variant,
    "props.children",
    props.children,
    "only props",
    props
  );
  return (
    <div>
      <button {...props} className={`btn ${variant}`}>
        {children}
      </button>
    </div>
  );
}

// export default function Button(props) {
//   console.log("props.variant", props.variant);
//   return (
//     <div>
//       <button className={`btn ${props.variant}`}>{props.children}</button>
//     </div>
//   );
// }
