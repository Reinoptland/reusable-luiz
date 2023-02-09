import React from "react";

export default function Label({
  variant = "default-label",
  children,
  ...props
}) {
  console.log("props/children", props);

  return (
    <div>
      <label {...props} className={`basic-label ${variant}`} for="something">
        search for {children}
      </label>
    </div>
  );
}
