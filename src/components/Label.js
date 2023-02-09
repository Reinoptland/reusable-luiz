import React from "react";

export default function Label({
  variant = "default-label",
  children,
  ...props
}) {
  return (
    <label {...props} className={`basic-label ${variant}`}>
      {children}
    </label>
  );
}
